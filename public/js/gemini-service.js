// המפתח שלך
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug";

// רשימת מודלים לגיבוי (למניעת קריסות 404)
const MODEL_FALLBACKS = [
    "gemini-1.5-flash",
    "gemini-1.5-flash-latest",
    "gemini-pro",
    "gemini-1.0-pro"
];

/**
 * פונקציה פנימית לביצוע קריאות API בטוחות
 */
async function fetchSafe(payload, fallbackResponse) {
    for (const model of MODEL_FALLBACKS) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        try {
            const response = await fetch(url, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload)
            });

            if (response.ok) {
                const data = await response.json();
                if (data.candidates && data.candidates.length > 0) {
                    return data.candidates[0].content.parts[0].text;
                }
            }
        } catch (e) {
            console.warn(`Model ${model} failed, trying next...`);
        }
    }
    console.error("All AI models failed.");
    return fallbackResponse; // מחזיר תשובת גיבוי אם הכל נכשל
}

/**
 * 1. AI שיווקי (עבור Admin)
 */
export async function askGeminiAdmin(productName) {
    const prompt = `
    תפקידך: מנהל שיווק מומחה.
    מוצר: "${productName}"
    
    החזר JSON בלבד (ללא טקסט נוסף, ללא סימני קוד) עם המבנה הבא בעברית:
    {
        "name": "שם מלא ומקצועי",
        "brand": "שם המותג (Sika, Tambour etc)",
        "marketingDesc": "תיאור שיווקי משכנע וקצר (עד 20 מילים)",
        "category": "sealing/glues/concrete/flooring"
    }`;

    const responseText = await fetchSafe(
        { contents: [{ parts: [{ text: prompt }] }] },
        null // אם נכשל, נחזיר null
    );

    if (!responseText) return null;

    try {
        const cleanText = responseText.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanText);
    } catch (e) {
        console.error("Failed to parse AI response", e);
        return null;
    }
}

/**
 * 2. חילוץ מפרט טכני (עבור Admin)
 */
export async function extractTechnicalSpecs(productName) {
    const prompt = `
    מוצר: "${productName}"
    החזר JSON בלבד עם נתונים טכניים (בעברית):
    {
        "coverage": "כיסוי (למשל: 1.5 ק\"ג למ\"ר)",
        "drying": "זמן ייבוש",
        "thickness": "עובי יישום"
    }`;

    const responseText = await fetchSafe(
        { contents: [{ parts: [{ text: prompt }] }] },
        JSON.stringify({ coverage: "-", drying: "-", thickness: "-" })
    );

    try {
        const cleanText = responseText.replace(/```json|```/g, '').trim();
        return JSON.parse(cleanText);
    } catch (e) {
        return { coverage: "-", drying: "-", thickness: "-" };
    }
}

/**
 * 3. צ'אט מומחה (עבור Kiosk)
 */
export async function askProductExpert(productContext, userQuestion) {
    const context = `
    אתה המומחה הטכני של "ח. סבן".
    הלקוח מתעניין במוצר: ${productContext.name || "כללי"}.
    שאלה: "${userQuestion}"
    
    ענה בעברית, קצר ולעניין (מקסימום 2 משפטים). היה אדיב ומקצועי.
    `;

    return await fetchSafe(
        { contents: [{ role: "user", parts: [{ text: context }] }] },
        "אני בודק את הנושא במפרט הטכני, אנא המתן רגע או פנה לנציג."
    );
}
