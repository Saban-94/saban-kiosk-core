// public/js/gemini-service.js

// Updated API Key
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug";

export async function askGeminiAdmin(productName) {
    // Switching to 'gemini-pro' which is more stable for general use
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
    
    try {
        console.log("Asking Gemini about:", productName);
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                contents: [{ 
                    parts: [{ 
                        // Instruction for the AI
                        text: `You are a construction expert. Create a valid JSON object for the product "${productName}" (in Hebrew). 
                        Fields required: 
                        1. marketingDesc (persuasive, max 2 sentences)
                        2. category (strictly one of: sealing, glues, concrete, flooring)
                        3. tech (object with: coverage, drying, thickness - keep them short e.g. "2 kg/m2").
                        Return ONLY the raw JSON string, no markdown formatting.` 
                    }] 
                }] 
            })
        });

        if (response.ok) {
            const data = await response.json();
            if (data.candidates && data.candidates.length > 0) {
                let text = data.candidates[0].content.parts[0].text;
                // Cleanup markdown if present
                text = text.replace(/```json|```/g, '').trim();
                return JSON.parse(text);
            }
        } else {
            console.error("Gemini API Error:", response.status);
            alert("API Error: " + response.status);
        }
    } catch (e) {
        console.error("Gemini Critical Error:", e);
        alert("System Error: Check console for details.");
    }
    return null;
}
