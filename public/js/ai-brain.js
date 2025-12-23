// ai-brain.js
import { db } from './firebase-config.js';
import { collection, onSnapshot, addDoc, getDocs, query, where, Timestamp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

class ConstructionBrain {
    constructor() {
        this.keywords = [];
        this.qaLibrary = [];
        this.products = [];
        this.isReady = false;
        this.init();
    }

    // אתחול וטעינת נתונים בזמן אמת לזיכרון (Caching)
    init() {
        // האזנה למילות מפתח
        onSnapshot(collection(db, "keywords"), (snapshot) => {
            this.keywords = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        });

        // האזנה לספריית שאלות ותשובות
        onSnapshot(collection(db, "qa_library"), (snapshot) => {
            this.qaLibrary = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        });

        // האזנה לקטלוג מוצרים
        onSnapshot(collection(db, "products"), (snapshot) => {
            this.products = snapshot.docs.map(doc => ({ sku: doc.id, ...doc.data() }));
            this.isReady = true;
            console.log("🧠 Sika Brain: Knowledge Base Loaded.");
        });
    }

    /**
     * הפונקציה הראשית לתשאול המוח
     * @param {string} userQuery - שאלת המשתמש
     * @returns {Promise<Object>} - תשובה, מוצרים וציון ביטחון
     */
    async ask(userQuery) {
        if (!this.isReady) return { answer: "המערכת בטעינה...", products: [], confidence: 0 };

        const normalizedQuery = this._normalizeText(userQuery);
        const detectedKeywords = this._extractKeywords(normalizedQuery);
        
        // שלב 1: חיפוש התאמה לתבנית שאלה (QA Match)
        const bestQAMatch = this._findBestQAMatch(normalizedQuery);
        
        let response = {
            answer: "",
            products: [],
            confidence: 0,
            matched_keywords: detectedKeywords.map(k => k.phrase)
        };

        // שלב 2: קבלת החלטה
        if (bestQAMatch && bestQAMatch.score > 0.3) {
            // נמצאה תשובה מוכנה
            response.answer = bestQAMatch.qa.answer_template;
            response.confidence = bestQAMatch.score;
            
            // שליפת מוצרים קשורים
            if (bestQAMatch.qa.related_products && bestQAMatch.qa.related_products.length > 0) {
                response.products = this.products.filter(p => 
                    bestQAMatch.qa.related_products.includes(p.sku)
                );
            }
        } else if (detectedKeywords.length > 0) {
            // לא נמצאה שאלה מדויקת, אך זוהו מילות מפתח - נחפש מוצרים לפי קטגוריה
            const mainCategory = detectedKeywords.sort((a,b) => b.weight - a.weight)[0].category;
            response.answer = `לא מצאתי תשובה מדויקת, אך בהתבסס על הנושא "${mainCategory}", הנה מוצרים רלוונטיים:`;
            response.products = this.products.filter(p => p.category === mainCategory);
            response.confidence = 0.5;
        } else {
            // לא זוהה כלום
            response.answer = "לא הצלחתי להבין את השאלה. נסה לנסח מחדש או לחפש שם מוצר.";
            response.confidence = 0.1;
        }

        // שלב 3: תיעוד השיחה
        this._logConversation(userQuery, response);

        return response;
    }

    // --- פונקציות עזר (Internals) ---

    _normalizeText(text) {
        return text.toLowerCase().replace(/[?,.!]/g, "").trim();
    }

    _extractKeywords(text) {
        let found = [];
        this.keywords.forEach(k => {
            // בדיקת הביטוי עצמו או מילים נרדפות
            if (text.includes(k.phrase) || (k.synonyms && k.synonyms.some(s => text.includes(s)))) {
                found.push(k);
            }
        });
        return found;
    }

    _findBestQAMatch(text) {
        let bestMatch = null;
        let highestScore = 0;

        this.qaLibrary.forEach(qa => {
            let currentScore = 0;
            if (qa.question_patterns) {
                qa.question_patterns.forEach(pattern => {
                    // חישוב פשוט: דמיון מילים (Jaccard Index מופשט)
                    const patternWords = pattern.split(" ");
                    const textWords = text.split(" ");
                    const intersection = patternWords.filter(element => textWords.includes(element));
                    const score = intersection.length / patternWords.length; // אחוז התאמה

                    // בונוס על עדיפות (Priority)
                    const weightedScore = score + (qa.priority ? qa.priority * 0.1 : 0);

                    if (weightedScore > currentScore) currentScore = weightedScore;
                });
            }

            if (currentScore > highestScore) {
                highestScore = currentScore;
                bestMatch = { qa: qa, score: Math.min(highestScore, 1) }; // Max 1.0
            }
        });

        return bestMatch;
    }

    async _logConversation(query, response) {
        try {
            await addDoc(collection(db, "conversations_logs"), {
                user_query: query,
                matched_keywords: response.matched_keywords,
                response_preview: response.answer,
                confidence: response.confidence,
                timestamp: Timestamp.now()
            });
        } catch (e) {
            console.error("Error logging chat:", e);
        }
    }
}

// יצירת מופע יחיד (Singleton) וייצוא API פשוט
const brainInstance = new ConstructionBrain();

export const askBrain = (question) => {
    return brainInstance.ask(question);
};
