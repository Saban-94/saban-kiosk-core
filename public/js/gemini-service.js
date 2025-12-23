// public/js/gemini-service.js
const GEMINI_API_KEY = "AIzaSyDn2bU0mnmNpj26UeBZYAirLnXf-FtPgCg"; // המפתח שלך

export async function askGeminiAdmin(productName) {
    // שינוי למודל gemini-pro למניעת שגיאות 404
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
    
    try {
        console.log("Asking Gemini (Pro) about:", productName);
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                contents: [{ 
                    parts: [{ 
                        text: `Act as a construction expert. Create a JSON object for the product "${productName}" (in Hebrew). 
                        Fields: 
                        1. marketingDesc (persuasive, max 2 sentences)
                        2. category (one of: sealing, glues, concrete, flooring)
                        3. tech (object with: coverage, drying, thickness - short text).
                        Return ONLY valid JSON string, no markdown.` 
                    }] 
                }] 
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.candidates && data.candidates.length > 0) {
                let text = data.candidates[0].content.parts[0].text;
                text = text.replace(/```json|```/g, '').trim(); // ניקוי שאריות
                return JSON.parse(text);
            }
        }
    } catch (e) {
        console.error("Gemini Error:", e);
        // לא קופץ alert כדי לא להפריע למילוי הידני, רק לוג
    }
    return null;
}
