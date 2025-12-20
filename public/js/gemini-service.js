// public/js/gemini-service.js

const GEMINI_API_KEY = "AIzaSyBL76DNiLPe5fgvNpryrr6_7YNnrFkdMug"; 
const SEARCH_API_KEY = "AIzaSyDn2bU0mnmNpj26UeBZYAirLnXf-FtPgCg"; 
const SEARCH_ENGINE_ID = "635bc3eeee0194b16";

export async function askGeminiAdmin(productName) {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent?key=${GEMINI_API_KEY}`;
    
    // שינוי בפרומפט: בקשה מפורשת לנתונים טכניים ספציפיים
    const prompt = `
    You are a construction expert. Product: "${productName}"
    Task: Return JSON in Hebrew with:
    1. name: Full product name
    2. brand: Brand name
    3. shortDesc: Marketing summary
    4. tech: {
        "coverage": "Consumption per sqm (e.g. 1.5 קג/מר)",
        "drying": "Drying time (e.g. 4 שעות)",
        "thickness": "Layer thickness (e.g. 2-5 ממ)"
    }
    
    Return ONLY valid JSON.
    `;

    try {
        const response = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
        });
        const data = await response.json();
        const text = data.candidates[0].content.parts[0].text;
        return JSON.parse(text.replace(/```json|```/g, '').trim());
    } catch (error) {
        console.error("Gemini Error:", error);
        return null;
    }
}

export async function searchImages(query) {
    try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(query)}&searchType=image&num=4&safe=active`;
        const res = await fetch(url);
        const data = await res.json();
        return data.items ? data.items.map(item => item.link) : [];
    } catch (e) { return []; }
}

export async function searchVideos(query) {
    try {
        const url = `https://www.googleapis.com/customsearch/v1?key=${SEARCH_API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(query + " youtube tutorial")}&num=4`;
        const res = await fetch(url);
        const data = await res.json();
        return data.items 
            ? data.items.filter(item => item.link.includes('youtube.com/watch')).map(item => ({
                    title: item.title,
                    link: item.link,
                    id: item.link.split('v=')[1]?.split('&')[0],
                    thumbnail: item.pagemap?.cse_image?.[0]?.src || ""
                })) 
            : [];
    } catch (e) { return []; }
}
