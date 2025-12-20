// public/js/gemini-service.js

const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug"; // המפתח שלך

export async function askProductExpert(product, userQuestion, chatHistory = []) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;

    // 1. בניית ההקשר (הפרופיל של המוצר)
    const productContext = `
    Product Name: ${product.name}
    Brand: ${product.brand}
    Description: ${product.marketingDesc || product.shortDesc}
    Technical Data:
    - Coverage: ${product.tech?.coverage || product.coverage || 'N/A'}
    - Drying Time: ${product.tech?.drying || product.drying || 'N/A'}
    - Thickness: ${product.tech?.thickness || product.thickness || 'N/A'}
    - Standard: ${product.standard || 'N/A'}
    `;

    // 2. בניית ההנחיה למוח (System Prompt)
    const systemInstruction = `
    You are an expert technical consultant for construction materials (Sika/Thermokir).
    Current Product Context:
    ${productContext}

    Your Goal: Answer the user's question accurately based strictly on the provided product data.
    RULES:
    1. Answer in Hebrew.
    2. Be professional, concise, and helpful (like a friendly expert at the store).
    3. If the answer is in the technical data provided above, use it explicitly.
    4. If the answer is NOT in the data, use your general knowledge but add a disclaimer: "התשובה מבוססת על ידע כללי ולא על דף המוצר הספציפי".
    5. If the question is about pricing or stock, say: "אנא פנה לנציג במקום לבדיקת מלאי ומחיר".
    `;

    // 3. בניית היסטוריית השיחה (כדי שיזכור הקשר)
    const contents = [
        { role: "user", parts: [{ text: systemInstruction }] }, // הגדרת התפקיד
        ...chatHistory, // שיחות קודמות
        { role: "user", parts: [{ text: userQuestion }] } // השאלה הנוכחית
    ];

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: contents })
        });

        const data = await response.json();
        const answer = data.candidates[0].content.parts[0].text;
        return answer;

    } catch (error) {
        console.error("Expert Error:", error);
        return "מצטער, יש תקלה בתקשורת עם המוח. נסה שוב.";
    }
}
