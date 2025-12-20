// public/js/gemini-service.js

// 1. מפתח למוח (Gemini - טקסטים ומפרטים)
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug";

// 2. מפתח לעיניים (Google Search - תמונות)
const SEARCH_API_KEY = "AIzaSyDn2bU0mnmNpj26UeBZYAirLnXf-FtPgCg"; 
const SEARCH_ENGINE_ID = "635bc3eeee0194b16";

/**
 * פונקציה 1: מביאה נתונים טקסטואליים מ-Gemini
 */
export async function askGeminiAdmin(productName) {
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
        const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();
        
        if (!data.candidates || !data.candidates[0]) {
            throw new Error("Gemini did not return a valid response");
        }

        const text = data.candidates[0].content.parts[0].text;
        const jsonString = text.replace(/```json|```/g, '').trim();
        return JSON.parse(jsonString);

    } catch (error) {
        console.error("Gemini Error:", error);
        return null;
    }
}

/**
 * פונקציה 2: מוצאת תמונה של המוצר מגוגל
 */
export async function findProductImage(productName) {
    try {
        // חיפוש תמונות (searchType=image)
        const url = `https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${productName}&searchType=image&num=1`;
        
        const response = await fetch(url);
        const data = await response.json();

        if (data.items && data.items.length > 0) {
            return data.items[0].link; // מחזיר את הלינק לתמונה הראשונה שנמצאה
        } else {
            return null; // לא נמצאה תמונה
        }

    } catch (error) {
        console.error("Image Search Error:", error);
        return null;
    }
}
