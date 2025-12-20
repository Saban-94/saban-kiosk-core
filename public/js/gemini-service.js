const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug"; // המפתח שלך

export async function askGeminiAdmin(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `
    תפקידך: מנהל שיווק בכיר של חנות חומרי בניין (ח. סבן).
    מוצר: "${productName}"
    
    עליך להחזיר JSON בלבד (ללא טקסט נוסף) עם המבנה הבא בעברית בלבד:
    {
        "name": "שם מוצר מלא ומקצועי",
        "brand": "שם המותג (באנגלית או עברית)",
        "marketingDesc": "פסקה שיווקית משכנעת (עד 30 מילים) שפונה לקבלן או ללקוח הפרטי, מדגישה יתרונות.",
        "status": "אחד מהבאים בלבד באנגלית: standard, recommended, sale, new",
        "tech": {
            "coverage": "כמות למ''ר (למשל: 5 ק''ג למ''ר)",
            "drying": "זמן ייבוש (למשל: 24 שעות)",
            "thickness": "עובי יישום (למשל: 2-5 מ''מ)"
        }
    }
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text.replace(/```json|```/g, '').trim();
        return JSON.parse(text);
    } catch (error) {
        console.error("Gemini Error:", error);
        return null;
    }
}

export async function askProductExpert(product, userQuestion, chatHistory = []) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;

    const context = `
    אתה המומחה הטכני של ח. סבן.
    מוצר נוכחי: ${product.name} (${product.brand})
    תיאור: ${product.marketingDesc}
    נתונים טכניים: כיסוי: ${product.tech?.coverage}, ייבוש: ${product.tech?.drying}, עובי: ${product.tech?.thickness}.
    
    שאלה של לקוח: "${userQuestion}"
    
    הנחיות: ענה בעברית, קצר ולעניין. אם חסר מידע טכני, השתמש בידע כללי אך ציין זאת.
    `;

    const contents = [...chatHistory, { role: "user", parts: [{ text: context }] }];

    try {
        const response = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ contents: contents }) });
        const data = await response.json();
        return data.candidates[0].content.parts[0].text;
    } catch (error) { return "יש בעיה בתקשורת כרגע."; }
}

export async function searchImages() { return []; }
export async function searchVideos() { return []; }
