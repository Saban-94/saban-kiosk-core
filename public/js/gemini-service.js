// public/js/gemini-service.js

// מפתחות ה-API שלך
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug"; 
const SEARCH_API_KEY = "AIzaSyDn2bU0mnmNpj26UeBZYAirLnXf-FtPgCg"; 
const SEARCH_ENGINE_ID = "635bc3eeee0194b16";

export async function askGeminiAdmin(productName) {
    // ✅ עדכון: שימוש במודל gemini-2.0-flash-exp שעבד בבדיקה
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `
    You are a construction expert. I will give you a product name.
    Your task: return JSON data for this product in Hebrew.
    Product: "${productName}"
    
    Return ONLY JSON with this structure:
    {
        "name": "Full Product Name",
        "shortDesc": "Short marketing description (Hebrew)",
        "fullDesc": "Long professional description (Hebrew)",
        "brand": "Sika/MisterFix/etc",
        "specs": [
            {"icon": "clock", "label": "זמן ייבוש", "value": "e.g. 4 hours"},
            {"icon": "droplets", "label": "איטום", "value": "e.g. Positive"},
            {"icon": "layers", "label": "עובי", "value": "e.g. 2mm"}
        ]
    }
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) {
            throw new Error(`Gemini API Error: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0]) {
            throw new Error("Gemini did not return a valid response");
        }

        const text = data.candidates[0].content.parts[0].text;
        // ניקוי הקוד שה-AI לפעמים מוסיף
        const jsonString = text.replace(/```json|```/g, '').trim();
        return JSON.parse(jsonString);

    } catch (error) {
        console.error("Gemini Critical Error:", error);
        alert("שגיאה בתקשורת עם ה-AI. בדוק את הקונסול לפרטים.");
        return null;
    }
}

export async function findProductImage(productName) {
    try {
        // הוספנו פרמטרים לסינון בטוח
        const url = `https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(productName)}&searchType=image&num=1&safe=active`;
        
        const response = await fetch(url);
        
        if (response.status === 403) {
            console.error("Google Search 403: בדוק הרשאות מפתח (Referrer) או שה-API לא מופעל.");
            return null;
        }

        const data = await response.json();

        if (data.items && data.items.length > 0) {
            return data.items[0].link;
        } else {
            console.warn("No images found for:", productName);
            return null;
        }

    } catch (error) {
        console.error("Image Search Error:", error);
        return null;
    }
}
