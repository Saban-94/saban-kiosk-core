// המפתח שלך
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug";

// מודל יציב
const MODEL_NAME = "gemini-pro";

/**
 * 1. AI שיווקי
 */
export async function askGeminiAdmin(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    // שיניתי את הניסוח כדי להימנע מגרשיים הפוכים ששוברים את הקוד
    const prompt = `
    תפקידך: מנהל שיווק. מוצר: "${productName}".
    החזר אובייקט JSON בלבד (ללא תגיות קוד או מרכאות עוטפות) עם המבנה הבא בעברית:
    {
        "name": "שם מלא",
        "brand": "מותג",
        "marketingDesc": "תיאור שיווקי",
        "category": "sealing",
        "status": "standard",
        "tech": { "coverage": "", "drying": "", "thickness": "" }
    }`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) return null;
        const data = await response.json();
        let text = data.candidates[0].content.parts[0].text;
        
        // ניקוי ידני של סימני קוד אם ה-AI בכל זאת הוסיף אותם
        text = text.replace(/```json/g, '').replace(/```/g, '').trim();
        
        return JSON.parse(text);
    } catch (e) {
        console.error("Gemini Error:", e);
        return null;
    }
}

/**
 * 2. חילוץ מפרט טכני
 */
export async function extractTechnicalSpecs(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `
    מוצר: "${productName}".
    החזר JSON בלבד עם נתונים טכניים בעברית:
    { "coverage": "כיסוי", "drying": "ייבוש", "thickness": "עובי" }
    אם אין מידע, תן הערכה.
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) return { coverage: "", drying: "", thickness: "" };
        
        const data = await response.json();
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
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    const instruction = style === 'sales' ? 'שיווקי ומשכנע' : 'מקצועי וטכני';
    const prompt = `שכתב את הטקסט הבא שיהיה ${instruction} (בעברית): "${currentText}"`;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text.trim();
    } catch (e) { return currentText; }
}

/**
 * 4. צ'אט מומחה
 */
export async function askProductExpert(product, userQuestion, chatHistory = []) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    const context = `מוצר: ${product.name}. שאלה: ${userQuestion}. ענה קצר ומקצועי בעברית.`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ role: "user", parts: [{ text: context }] }] })
        });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (e) { return "תקלה בתקשורת."; }
}

/**
 * 5. חיפוש תמונות (דמו למניעת קריסה)
 */
export async function searchImages(query) {
    // מחזיר תמונות דמו כדי למנוע שגיאות בקונסול
    return [
        { link: "[https://placehold.co/600x400?text=Image+1](https://placehold.co/600x400?text=Image+1)", title: "Demo 1" },
        { link: "[https://placehold.co/600x400?text=Image+2](https://placehold.co/600x400?text=Image+2)", title: "Demo 2" },
        { link: "[https://placehold.co/600x400?text=Image+3](https://placehold.co/600x400?text=Image+3)", title: "Demo 3" }
    ];
}

/**
 * 6. חיפוש וידאו (דמו)
 */
export async function searchVideos(query) {
    return [];
}
