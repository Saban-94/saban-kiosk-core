// public/js/gemini-service.js

const GEMINI_API_KEY = "AIzaSyDn2bU0mnmNpj26UeBZYAirLnXf-FtPgCg"; // 🔴 הכנס כאן את המפתח שלך

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
        const text = data.candidates[0].content.parts[0].text;
        
        // ניקוי הקוד שה-AI לפעמים מוסיף מסביב ל-JSON
        const jsonString = text.replace(/```json|```/g, '').trim();
        return JSON.parse(jsonString);

    } catch (error) {
        console.error("Gemini Error:", error);
        alert("שגיאה בשליפת נתונים מה-AI. בדוק את מפתח ה-API.");
        return null;
    }
}
