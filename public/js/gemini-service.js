// המפתח שלך
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug";

// שימוש במודל יציב ומעודכן
const MODEL_NAME = "gemini-1.5-flash-latest";

/**
 * 1. AI שיווקי: יצירת תיאור כללי ונתונים בסיסיים
 */
export async function askGeminiAdmin(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `
    תפקידך: מנהל שיווק בכיר של חנות חומרי בניין (ח. סבן).
    מוצר: "${productName}"
    
    עליך להחזיר JSON בלבד (ללא טקסט נוסף) עם המבנה הבא בעברית בלבד:
    {
        "name": "שם מוצר מלא ומקצועי",
        "brand": "שם המותג (למשל Sika, Mister Fix, Tambour)",
        "marketingDesc": "פסקה שיווקית משכנעת (עד 30 מילים) שפונה לקבלן או ללקוח הפרטי, מדגישה יתרונות.",
        "category": "אחד מהבאים: sealing, glues, concrete, flooring, paint",
        "status": "אחד מהבאים באנגלית: standard, recommended, sale, new",
        "tech": {
            "coverage": "כמות למ''ר (למשל: 5 ק''ג למ''ר)",
            "drying": "זמן ייבוש (למשל: 24 שעות)",
            "thickness": "עובי יישום (למשל: 2-5 מ''מ)"
        }
    }
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) {
            console.warn(`Gemini Marketing Error: ${response.status}`);
            return null;
        }

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
        return JSON.parse(text);
    } catch (error) {
        console.error("Gemini Marketing Critical Error:", error);
        return null;
    }
}

/**
 * 2. חילוץ מפרט טכני בלבד (הפונקציה שהייתה חסרה!)
 */
export async function extractTechnicalSpecs(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `
    תפקידך: מהנדס בניין מומחה.
    מוצר: "${productName}"
    
    עליך להחזיר JSON בלבד עם המפתחות הבאים (ערכים בעברית):
    {
        "coverage": "צריכה/כיסוי (למשל: 1.5 ק''ג למ''ר)",
        "drying": "זמן ייבוש/דריכה (למשל: 24 שעות)",
        "thickness": "עובי יישום (למשל: 2-5 מ''מ)"
    }
    אם המידע לא ידוע, תן הערכה מקצועית מבוססת על מוצרים דומים.
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) throw new Error(`Status ${response.status}`);

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
        return JSON.parse(text);

    } catch (error) {
        console.error("Gemini Tech Specs Error:", error);
        return { coverage: "", drying: "", thickness: "" };
    }
}

/**
 * 3. שכתוב ושיפור טקסט (AI Copywriter - הייתה חסרה)
 */
export async function improveText(currentText, style) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    let instruction = "שפר את הניסוח שיהיה מקצועי יותר.";
    if (style === 'sales') instruction = "הפוך את הטקסט לשיווקי, מוכר ומשכנע יותר.";
    if (style === 'short') instruction = "קצר את הטקסט ל-2 משפטים חזקים.";

    const prompt = `
    טקסט מקורי: "${currentText}"
    הוראה: ${instruction}
    החזר רק את הטקסט החדש בעברית, ללא מרכאות או הקדמות.
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) return currentText;

        const data = await response.json();
        return data.candidates[0].content.parts[0].text.trim();
    } catch (error) {
        return currentText;
    }
}

/**
 * 4. צ'אט עם מומחה (Sika-Bot)
 */
export async function askProductExpert(product, userQuestion, chatHistory = []) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;

    const context = `
    אתה המומחה הטכני של "המרכז המקצועי ח. סבן".
    מוצר נוכחי: ${product.name} (${product.brand})
    תיאור: ${product.marketingDesc}
    נתונים טכניים: כיסוי: ${product.tech?.coverage}, ייבוש: ${product.tech?.drying}, עובי: ${product.tech?.thickness}.
    
    שאלה של לקוח: "${userQuestion}"
    
    הנחיות: ענה בעברית, קצר ולעניין (מקסימום 2-3 משפטים). היה אדיב ומקצועי.
    `;

    const contents = chatHistory.map(msg => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }]
    }));
    contents.push({ role: "user", parts: [{ text: context }] });

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: contents })
        });
        
        if (!response.ok) return "מצטער, המערכת עמוסה כרגע. נסה שוב בעוד דקה.";

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) { 
        return "יש בעיה בתקשורת כרגע, נסה שוב מאוחר יותר."; 
    }
}

/**
 * 5. חיפוש תמונות (דמו למניעת קריסה)
 */
export async function searchImages(query) {
    console.log(`Searching images for: ${query}`);
    return [
        { link: "https://placehold.co/600x400?text=Product+Image", title: "תמונה 1" },
        { link: "https://placehold.co/600x400?text=Application", title: "תמונה 2" },
        { link: "https://placehold.co/600x400?text=Sika+Result", title: "תמונה 3" }
    ];
}

/**
 * 6. חיפוש וידאו
 */
export async function searchVideos(query) {
    console.log(`Searching videos for: ${query}`);
    return [];
}
