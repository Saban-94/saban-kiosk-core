// public/js/gemini-service.js

// הגדרת מפתחות (השתמשתי במפתחות שסיפקת)
const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug"; 
const SEARCH_API_KEY = "AIzaSyDn2bU0mnmNpj26UeBZYAirLnXf-FtPgCg"; 
const SEARCH_ENGINE_ID = "635bc3eeee0194b16";

/**
 * פונקציה ראשית: מנתח שיווקי וטכני של המוצר
 */
export async function askGeminiAdmin(productName) {
    // שימוש במודל החדש והמהיר
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;
    
    const prompt = `
    You are a marketing manager for construction materials. Product: "${productName}"
    Task: Return JSON in Hebrew with:
    1. name: Full product name
    2. brand: Brand name (Sika, MisterFix, Thermokir, etc.)
    3. shortDesc: Technical description (1 sentence)
    4. marketingDesc: Persuasive marketing text (2 sentences, benefits focused)
    5. status: One of ["recommended", "sale", "new", "standard"] based on popularity/type.
    6. ctaText: Best CTA (e.g. "הוסף להצעת מחיר", "למפרט טכני")
    7. standard: Standard info if exists (e.g. "תקן 118", "ISO") or null.
    8. tech: {
        "coverage": "Coverage per sqm (e.g. 1.5 קג/מר)",
        "drying": "Drying time",
        "thickness": "Thickness"
    }
    9. specs: Array of 3 key features (icon, label, value). Icons: clock, droplets, layers, shield.
    
    Return ONLY valid JSON.
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });

        if (!response.ok) throw new Error("Gemini API Error");

        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;
        
        // ניקוי הקוד שה-AI לפעמים מוסיף
        const jsonString = text.replace(/```json|```/g, '').trim();
        return JSON.parse(jsonString);

    } catch (error) {
        console.error("Gemini Error:", error);
        return null;
    }
}

/**
 * פונקציה לחיפוש תמונות (מחזירה 8 תוצאות לבחירה)
 */
export async function searchImages(query) {
    try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(query)}&searchType=image&num=8&safe=active`;
        const res = await fetch(url);
        const data = await res.json();
        return data.items ? data.items.map(item => item.link) : [];
    } catch (e) {
        console.error("Image Search Error:", e);
        return [];
    }
}

/**
 * פונקציה לחיפוש סרטוני הדרכה ביוטיוב
 */
export async function searchVideos(query) {
    try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(query + " youtube application tutorial")}&num=4`;
        const res = await fetch(url);
        const data = await res.json();
        
        return data.items 
            ? data.items
                .filter(item => item.link.includes('youtube.com/watch'))
                .map(item => ({
                    title: item.title,
                    link: item.link,
                    id: item.link.split('v=')[1]?.split('&')[0],
                    thumbnail: item.pagemap?.cse_image?.[0]?.src || "https://via.placeholder.com/150?text=Video"
                })) 
            : [];
    } catch (e) {
        console.error("Video Search Error:", e);
        return [];
    }
}
