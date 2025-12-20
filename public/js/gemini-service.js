// public/js/gemini-service.js

const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug"; // המפתח שלך
const SEARCH_API_KEY = "AIzaSyDn2bU0mnmNpj26UeBZYAirLnXf-FtPgCg"; 
const SEARCH_ENGINE_ID = "635bc3eeee0194b16";

// 1. פונקציה לניהול (מילוי שדות)
export async function askGeminiAdmin(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `
    You are a marketing manager for construction materials. Product: "${productName}"
    Task: Return JSON in Hebrew with:
    1. name: Full product name
    2. brand: Brand name (Sika, MisterFix, Thermokir, etc.)
    3. shortDesc: Technical description (1 sentence)
    4. marketingDesc: Persuasive marketing text (2 sentences, benefits focused)
    5. status: One of ["recommended", "sale", "new", "standard"]
    6. ctaText: Best CTA (e.g. "הוסף להצעת מחיר")
    7. standard: Standard info if exists
    8. tech: {"coverage": "Coverage per sqm", "drying": "Drying time", "thickness": "Thickness"}
    9. specs: Array of 3 key features.
    
    Return ONLY valid JSON.
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
    } catch (error) {
        console.error("Gemini Error:", error);
        return null;
    }
}

// 2. פונקציה למומחה הקיוסק (RAG - Chat)
export async function askProductExpert(product, userQuestion, chatHistory = []) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;

    // בניית פרופיל מוצר ל-AI
    const productContext = `
    Technical Context for Product: "${product.name}"
    Brand: ${product.brand}
    Description: ${product.marketingDesc || ""}
    Technical Specs:
    - Coverage/Consumption: ${product.tech?.coverage || product.coverage || 'N/A'}
    - Drying/Curing Time: ${product.tech?.drying || product.drying || 'N/A'}
    - Layer Thickness: ${product.tech?.thickness || product.thickness || 'N/A'}
    - Standard: ${product.standard || 'N/A'}
    `;

    const systemInstruction = `
    You are an expert technical consultant for construction materials at a professional store.
    
    CONTEXT:
    ${productContext}

    USER QUESTION: "${userQuestion}"

    INSTRUCTIONS:
    1. Answer in Hebrew.
    2. Be concise, professional, and practical (like a hardware store expert).
    3. Base your answer STRICTLY on the provided Technical Specs above.
    4. If the info is missing in the specs, you may use general knowledge but add: "התשובה מתבססת על ידע כללי בתחום".
    5. Never invent numbers.
    `;

    const contents = [
        ...chatHistory,
        { role: "user", parts: [{ text: systemInstruction }] }
    ];

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: contents })
        });

        const data = await response.json();
        return data.candidates[0].content.parts[0].text;

    } catch (error) {
        console.error("Expert Chat Error:", error);
        return "מצטער, יש לי בעיה בתקשורת כרגע. נסה שוב מאוחר יותר.";
    }
}

// 3. חיפוש תמונות וסרטונים (ללא שינוי)
export async function searchImages(query) { /* ... קוד קיים ... */ return []; }
export async function searchVideos(query) { /* ... קוד קיים ... */ return []; }
