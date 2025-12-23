import { db } from './firebase-config.js';
import { collection, getDocs, writeBatch, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

const realProducts = [
    { name: "SikaTop Seal 107", brand: "SIKA", category: "sealing", marketingDesc: "איטום צמנטי גמיש (דו רכיבי) - הסטנדרט העולמי לאיטום מקלחות.", image: "https://gilar.co.il/wp-content/uploads/2023/12/SikaTop-Seal-107-25-Kg.png", status: "recommended", tech: {coverage: "3-4 ק\"ג/מ\"ר", drying: "6 שעות", thickness: "2 מ\"מ"} },
    { name: "Sikaflex 11FC+", brand: "SIKA", category: "glues", marketingDesc: "דבק ואיטום פוליאוריטני רב תכליתי. מדביק הכל להכל, גמיש וחזק.", image: "https://gilar.co.il/wp-content/uploads/2020/12/Sikaflex-11-FC.jpg", status: "sale", tech: {coverage: "משתנה", drying: "24 שעות", thickness: "-"} },
    { name: "Thermokir 603", brand: "THERMOKIR", category: "concrete", marketingDesc: "טיח תרמי לבידוד מעולה וחיסכון באנרגיה. מונע עיבוי.", image: "https://www.thermokir.co.il/wp-content/uploads/2019/06/603.png", status: "standard", tech: {coverage: "14 ק\"ג/מ\"ר", drying: "48 שעות", thickness: "30 מ\"מ"} },
    { name: "Mister Fix 109", brand: "MISTER FIX", category: "glues", marketingDesc: "דבק אקרילי C1TE להדבקת אריחי קרמיקה ופורצלן.", image: "https://karmit-mrfix.com/wp-content/uploads/2020/07/109.png", status: "standard", tech: {coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5 מ\"מ"} },
    { name: "BG Bond 10", brand: "BG BOND", category: "sealing", marketingDesc: "מסטיק ביטומני לאיטום ושיקום סדקים.", image: "https://bgbond.co.il/wp-content/uploads/2020/05/BG-10-new.png", status: "new", tech: {coverage: "משתנה", drying: "12 שעות", thickness: "מריחה"} },
    { name: "Super Paint", brand: "TAMBOUR", category: "flooring", marketingDesc: "צבע אקרילי איכותי ועמיד במיוחד לקירות חוץ ופנים.", image: "https://tambour.co.il/wp-content/uploads/2020/05/Supercryl_Matt_White_Bucket_5L_Front.jpg", status: "standard", tech: {coverage: "1 ליטר/9 מ\"ר", drying: "שעתיים", thickness: "-"} }
];

export async function seedRealData() {
    console.log("Starting Seed Process...");
    const batch = writeBatch(db);
    
    // 1. ניקוי נתונים קיימים
    const snapshot = await getDocs(collection(db, "products"));
    snapshot.forEach((doc) => batch.delete(doc.ref));
    
    // 2. הוספת מוצרים חדשים
    realProducts.forEach((p) => {
        const newRef = doc(collection(db, "products"));
        batch.set(newRef, { ...p, createdAt: Date.now() });
    });
    
    await batch.commit();
    console.log("Seed Completed!");
}
