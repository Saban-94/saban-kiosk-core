// המפתח שלך
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug";

// שינוי למודל היציב ביותר למניעת שגיאות 404
const MODEL_NAME = "gemini-pro";

/**
 * 1. AI שיווקי
 */
export async function askGeminiAdmin(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `
    תפקידך: מנהל שיווק של חנות חומרי בניין. מוצר: "${productName}".
    החזר JSON בלבד (ללא ```json):
    {
        "name": "שם מלא",
        "brand": "מותג",
        "marketingDesc": "תיאור שיווקי קצר בעברית",
        "category": "sealing/glues/concrete/flooring/paint",
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
        const text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
        return JSON.parse(text);
    } catch (e) { return null; }
}

/**
 * 2. חילוץ מפרט טכני
 */
export async function extractTechnicalSpecs(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL_NAME}:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `
    מוצר: "${productName}". חלץ מפרט טכני ל-JSON בלבד (בעברית):
    { "coverage": "כיסוי", "drying": "ייבוש", "thickness": "עובי" }
    אם אין מידע, הערך על סמך מוצרים דומים.
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) throw new Error("API Error");
        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
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
    const prompt = `שפר את הטקסט הבא שיהיה ${style === 'sales' ? 'שיווקי ומכירתי' : 'מקצועי ורשמי'} (בעברית): "${currentText}"`;

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
    
    const context = `אתה המומחה של ח. סבן. מוצר: ${product.name}. שאלה: ${userQuestion}. ענה קצר ומקצועי בעברית.`;
    
    // בניית ההיסטוריה בצורה פשוטה למניעת שגיאות
    const contents = [{ role: "user", parts: [{ text: context }] }];

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: contents })
        });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (e) { return "תקלה בתקשורת."; }
}

export async function searchImages(query) {
    // דמו - למנוע קריסה
    return [{link: "[https://placehold.co/600x400?text=Sika](https://placehold.co/600x400?text=Sika)", title: "Demo"}];
}

export async function searchVideos(query) { return []; }
