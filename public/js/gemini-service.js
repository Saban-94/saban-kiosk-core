const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug";
const MODEL_FALLBACKS = ["gemini-1.5-flash", "gemini-pro", "gemini-1.0-pro"];

async function fetchSafe(payload, fallbackData) {
    for (const model of MODEL_FALLBACKS) {
        const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`;
        try {
            const res = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
            if (res.ok) {
                const data = await res.json();
                if (data.candidates?.length) return data.candidates[0].content.parts[0].text;
            }
        } catch (e) {}
    }
    return fallbackData;
}

export async function askProductExpert(prod, q) {
    return await fetchSafe(
        { contents: [{ parts: [{ text: `You are an expert. Product: ${prod.name}. Question: ${q}. Answer in Hebrew short.` }] }] },
        "אני בודק את זה במפרט הטכני... (אנא נסה שוב מאוחר יותר)"
    );
}
