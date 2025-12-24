const GEMINI_API_KEY = "AIzaSyDn2bU0mnmNpj26UeBZYAirLnXf-FtPgCg"; 

// 1. עזרה למנהל (Admin) - מילוי פרטי מוצר
export async function askGeminiAdmin(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                contents: [{ parts: [{ text: `Generate JSON for construction product "${productName}" (Hebrew): {name, brand, marketingDesc, category (sealing/glues/concrete/flooring), tech:{coverage, drying, thickness}}` }] }] 
            })
        });

        if (response.ok) {
            const data = await response.json();
            const text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
            return JSON.parse(text);
        }
    } catch (e) {
        console.error("Gemini Admin Error:", e);
    }
    return null;
}

// 2. מומחה בקיוסק (Kiosk) - צ'אט עם הלקוח
export async function askProductExpert(productContext, question) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    const context = `
    אתה המומחה הטכני של "ח. סבן". מוצר: ${productContext?.name || "כללי"}.
    שאלה: ${question}
    ענה בעברית קצרה, מקצועית ואדיבה (עד 20 מילים). אל תמציא נתונים אם אין לך.
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: context }] }] })
        });

        if (response.ok) {
            const data = await response.json();
            return data.candidates[0].content.parts[0].text;
        }
    } catch (e) {
        console.error("Gemini Chat Error:", e);
    }
    return "אני מתקשה להתחבר לשרת כרגע, אנא בדוק את המפרט הטכני על גבי המוצר.";
}
