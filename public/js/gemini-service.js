// המפתח שלך
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug";

// רשימת מודלים לניסיון (לפי סדר עדיפות)
// המערכת תנסה אותם אחד אחרי השני עד להצלחה
const MODEL_FALLBACKS = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-002",
    "gemini-1.5-flash-latest",
    "gemini-1.0-pro",
    "gemini-pro"
];

/**
 * פונקציית עזר פנימית שמנסה את כל המודלים
 */
async function fetchFromGeminiWithFallback(payload) {
    let lastError = null;

    for (const model of MODEL_FALLBACKS) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        
        try {
            // console.log(`Trying model: ${model}...`); // לדיבוג
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                // וידוא שיש תשובה תקינה
                if (data.candidates && data.candidates.length > 0) {
                    return data; // הצלחה!
                }
            } else {
                // נרשום את השגיאה ונמשיך למודל הבא
                console.warn(`Model ${model} failed with status ${response.status}`);
                if (response.status === 429) {
                    // אם זה עומס יתר, נחכה רגע קצר לפני המודל הבא
                    await new Promise(r => setTimeout(r, 1000));
                }
            }
        } catch (e) {
            console.warn(`Model ${model} threw an error:`, e);
            lastError = e;
        }
    }
    
    // אם הכל נכשל
    console.error("All Gemini models failed.", lastError);
    return null;
}

/**
 * 1. AI שיווקי
 */
export async function askGeminiAdmin(productName) {
    const prompt = `
    תפקידך: מנהל שיווק. מוצר: "${productName}".
    החזר JSON בלבד (ללא סימני קוד):
    {
        "name": "שם מלא",
        "brand": "מותג",
        "marketingDesc": "תיאור שיווקי קצר בעברית",
        "category": "sealing",
        "status": "standard",
        "tech": { "coverage": "1 קג למר", "drying": "24 שעות", "thickness": "2 מ\"מ" }
    }`;

    const data = await fetchFromGeminiWithFallback({
        contents: [{ parts: [{ text: prompt }] }]
    });

    if (!data) return null;

    try {
        let text = data.candidates[0].content.parts[0].text;
        // ניקוי גס של סימני מרכאות קוד אם ה-AI הוסיף
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(text);
    } catch (e) { return null; }
}

/**
 * 2. חילוץ מפרט טכני
 */
export async function extractTechnicalSpecs(productName) {
    const prompt = `
    מוצר: "${productName}".
    החזר JSON בלבד עם נתונים טכניים (בעברית):
    { "coverage": "כיסוי", "drying": "ייבוש", "thickness": "עובי" }
    אם אין מידע, תן הערכה הגיונית.
    `;

    const data = await fetchFromGeminiWithFallback({
        contents: [{ parts: [{ text: prompt }] }]
    });

    if (!data) return { coverage: "", drying: "", thickness: "" };

    try {
        let text = data.candidates[0].content.parts[0].text;
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        return JSON.parse(text);
    } catch (e) {
        return { coverage: "", drying: "", thickness: "" };
    }
}

/**
 * 3. שכתוב טקסט
 */
export async function improveText(currentText, style) {
    const instruction = style === 'sales' ? 'שיווקי ומשכנע' : 'מקצועי וטכני';
    const prompt = `שכתב את הטקסט: "${currentText}" שיהיה ${instruction} (בעברית). החזר רק את הטקסט.`;

    const data = await fetchFromGeminiWithFallback({
        contents: [{ parts: [{ text: prompt }] }]
    });

    if (!data) return currentText;
    return data.candidates[0].content.parts[0].text.trim();
}

/**
 * 4. צ'אט מומחה
 */
export async function askProductExpert(product, userQuestion, chatHistory = []) {
    const context = `מוצר: ${product.name}. שאלה: ${userQuestion}. ענה קצר ומקצועי בעברית.`;
    
    const data = await fetchFromGeminiWithFallback({
        contents: [{ role: "user", parts: [{ text: context }] }]
    });

    if (!data) return "תקלה בתקשורת, נסה שוב.";
    return data.candidates[0].content.parts[0].text;
}

/**
 * 5. חיפוש תמונות (דמו)
 */
export async function searchImages(query) {
    // החזרת דמו למניעת קריסה
    return [
        { link: "https://placehold.co/600x400?text=Sika+Product", title: "Product 1" },
        { link: "https://placehold.co/600x400?text=Application", title: "App 2" },
        { link: "https://placehold.co/600x400?text=Result", title: "Result 3" }
    ];
}

/**
 * 6. חיפוש וידאו (דמו)
 */
export async function searchVideos(query) {
    return [];
}
