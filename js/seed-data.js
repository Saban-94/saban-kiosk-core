import { db } from './firebase-config.js';
import { collection, addDoc, getDocs, writeBatch } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// המאגר הראשוני שלנו - מוצרים לדוגמה
const products = [
    {
        name: "SikaTop Seal 107",
        brand: "sika",
        category: "איטום",
        description: "איטום צמנטי דו-רכיבי גמיש, מאושר למי שתייה.",
        image_url: "https://via.placeholder.com/300x300?text=Sika+107",
        price: 150,
        tags: ["איטום", "מרתף", "בריכה", "בטון"]
    },
    {
        name: "Sikaflex 11FC",
        brand: "sika",
        category: "דבקים",
        description: "דבק איטום פוליאוריטני רב תכליתי.",
        image_url: "https://via.placeholder.com/300x300?text=Sikaflex",
        price: 45,
        tags: ["דבק", "סדקים", "איטום"]
    },
    {
        name: "סופר גמיש 105",
        brand: "mr_fix",
        category: "דבקים",
        description: "דבק קרמיקה גמיש במיוחד C2TE.",
        image_url: "https://via.placeholder.com/300x300?text=Super+Flexible",
        price: 60,
        tags: ["ריצוף", "קרמיקה", "דבק"]
    },
    {
        name: "בגרימונד",
        brand: "mr_fix",
        category: "טיח",
        description: "טיח גבס ליישום פנימי להחלקת קירות.",
        image_url: "https://via.placeholder.com/300x300?text=Bagrimond",
        price: 35,
        tags: ["טיח", "גבס", "החלקה"]
    },
    {
        name: "שפכטל אמריקאי",
        brand: "tambour",
        category: "צבע",
        description: "ממרח להחלקת קירות לפני צביעה.",
        image_url: "https://via.placeholder.com/300x300?text=Shepachtel",
        price: 80,
        tags: ["צבע", "הכנה", "קיר"]
    }
];

// פונקציה למחיקת כל המוצרים הקיימים והעלאה מחדש
export async function seedDatabase() {
    const statusDiv = document.getElementById('status');
    statusDiv.innerHTML = "🔄 מתחיל תהליך מילוי נתונים...<br>";

    try {
        const batch = writeBatch(db);
        const productsRef = collection(db, "products");

        // 1. ניקוי המאגר הקיים
        const snapshot = await getDocs(productsRef);
        snapshot.forEach((doc) => {
            batch.delete(doc.ref);
        });
        
        await batch.commit();
        statusDiv.innerHTML += "🗑️ נתונים ישנים נמחקו.<br>";

        // 2. העלאת מוצרים חדשים (אחד אחד כדי לראות התקדמות)
        for (const product of products) {
            await addDoc(productsRef, product);
            statusDiv.innerHTML += `📦 נוסף מוצר: ${product.name} (${product.brand})<br>`;
        }

        statusDiv.innerHTML += "<br>🎉 <b>תהליך הסתיים בהצלחה! המדפים מלאים.</b>";

    } catch (error) {
        console.error("Error seeding database:", error);
        statusDiv.innerHTML += `❌ שגיאה: ${error.message}`;
    }
}