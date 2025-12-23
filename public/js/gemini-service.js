// public/js/gemini-service.js

// המפתח המעודכן שלך
const GEMINI_API_KEY = "AIzaSyDn2bU0mnmNpj26UeBZYAirLnXf-FtPgCg";

// נתוני דמה למקרה של תקלה (Fallback)
const MOCK_AI_RESPONSE = {
    name: "מוצר (זוהה ע''י AI)",
    brand: "SIKA",
    marketingDesc: "תיאור שיווקי גנרי שנוצר כי ה-API לא זמין כרגע. מוצר זה מצוין ליישום מקצועי.",
    category: "sealing",
    tech: { coverage: "צריכה לפי מפרט", drying: "24 שעות", thickness: "2-5 מ\"מ" }
};

export async function askGeminiAdmin(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${GEMINI_API_KEY}`;
    
    try {
        console.log("Asking Gemini about:", productName);
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                contents: [{ 
                    parts: [{ 
                        text: `You are a construction expert. Create a JSON object for product "${productName}" (in Hebrew) with these fields: marketingDesc (persuasive, 2 sentences), category (one of: sealing, glues, concrete, flooring), tech: { coverage (e.g. "1 kg/m2"), drying (e.g. "2 hours"), thickness (e.g. "2 mm") }. Return ONLY raw JSON, no markdown.` 
                    }] 
                }] 
            })
        });

        if (response.ok) {
            const data = await response.json();
            let text = data.candidates[0].content.parts[0].text;
            // ניקוי תווים מיותרים אם יש
            text = text.replace(/```json|```/g, '').trim();
            const json = JSON.parse(text);
            return json;
        } else {
            console.error("Gemini API Error:", response.status, response.statusText);
        }
    } catch (e) {
        console.warn("Gemini API Failed, using Mock.", e);
        alert("שגיאה בתקשורת עם ה-AI. בדוק את הקונסול.");
    }
    
    return { ...MOCK_AI_RESPONSE, name: productName + " (Offline)" };
}
