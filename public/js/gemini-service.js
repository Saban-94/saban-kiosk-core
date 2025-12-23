// המפתח שלך
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug";

// Fallback data if API fails
const MOCK_AI_RESPONSE = {
    name: "מוצר (זוהה ע''י AI)",
    brand: "SIKA",
    marketingDesc: "תיאור שיווקי גנרי שנוצר כי ה-API לא זמין כרגע. מוצר זה מצוין ליישום מקצועי.",
    category: "sealing",
    tech: { coverage: "צריכה לפי מפרט", drying: "24 שעות", thickness: "2-5 מ\"מ" }
};

export async function askGeminiAdmin(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent?key=${GEMINI_API_KEY}`;
    
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: `Generate JSON for construction product "${productName}": {name, brand, marketingDesc (Hebrew), category (sealing/glues), tech:{coverage, drying, thickness}}` }] }] })
        });

        if (response.ok) {
            const data = await response.json();
            const text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
            return JSON.parse(text);
        }
    } catch (e) {
        console.warn("Gemini API Failed, using Mock.", e);
    }
    
    // Return Mock if failed
    return { ...MOCK_AI_RESPONSE, name: productName + " (Offline)" };
}

export async function extractTechnicalSpecs(name) {
    return MOCK_AI_RESPONSE.tech; // Simplified for stability
}

export async function askProductExpert(product, question) {
    return "אני כרגע במצב אופליין, אבל אני ממליץ לבדוק את המפרט הטכני של המוצר. (ה-API לא זמין)";
}
