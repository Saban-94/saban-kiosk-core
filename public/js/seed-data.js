import { db } from './firebase-config.js';
import { collection, getDocs, writeBatch, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// מותגים (עם צבעים אמיתיים)
const brandsData = [
    { name: "Sika", logo: "https://placehold.co/200x100/FFC500/000?text=Sika", slogan: "בונים אמון", colors: {primary: "#FFC500", accent: "#000000", bg: "#fffceb"} },
    { name: "Thermokir", logo: "https://placehold.co/200x100/0057B8/fff?text=Thermokir", slogan: "פתרונות מתקדמים", colors: {primary: "#0057B8", accent: "#F58220", bg: "#f0f9ff"} },
    { name: "Mister Fix", logo: "https://placehold.co/200x100/E3000F/fff?text=Fix", slogan: "מקצוענות בבניה", colors: {primary: "#E3000F", accent: "#333333", bg: "#fff1f2"} },
    { name: "Nirlat", logo: "https://placehold.co/200x100/8BC53F/fff?text=Nirlat", slogan: "הצבע של ישראל", colors: {primary: "#8BC53F", accent: "#009640", bg: "#f0fff4"} },
    { name: "Tambour", logo: "https://placehold.co/200x100/E31E24/fff?text=Tambour", slogan: "תראו מה שצבע יכול לעשות", colors: {primary: "#E31E24", accent: "#E31E24", bg: "#fff5f5"} },
    { name: "BG Bond", logo: "https://placehold.co/200x100/F37021/fff?text=BG", slogan: "טכנולוגיה בבניה", colors: {primary: "#F37021", accent: "#000000", bg: "#fff7f0"} }
];

// מוצרים (מלאי התחלתי)
const productsData = [
    { name: "Sika TopSeal 107", brand: "Sika", category: "sealing", marketingDesc: "איטום צמנטי גמיש (דו רכיבי) - הסטנדרט העולמי לאיטום מקלחות.", image: "https://placehold.co/400?text=Sika+107", tech: {coverage:"3-4 ק\"ג/מ\"ר", drying:"6 שעות", thickness:"2 מ\"מ"} },
    { name: "Sikaflex 11FC+", brand: "Sika", category: "glues", marketingDesc: "דבק ואיטום פוליאוריטני רב תכליתי. מדביק הכל להכל, גמיש וחזק.", image: "https://placehold.co/400?text=Sikaflex", tech: {coverage:"משתנה", drying:"24 שעות", thickness:"-"} },
    { name: "Thermokir 603", brand: "Thermokir", category: "concrete", marketingDesc: "טיח תרמי לבידוד מעולה וחיסכון באנרגיה. מונע עיבוי.", image: "https://placehold.co/400?text=Thermo+603", tech: {coverage:"14 ק\"ג/מ\"ר", drying:"48 שעות", thickness:"30 מ\"מ"} },
    { name: "Mister Fix 109", brand: "Mister Fix", category: "glues", marketingDesc: "דבק אקרילי חזק לקרמיקה.", image: "https://placehold.co/400?text=Fix+109", tech: {coverage:"5 ק\"ג/מ\"ר", drying:"24 שעות", thickness:"5 מ\"מ"} },
    { name: "Super Paint", brand: "Tambour", category: "flooring", marketingDesc: "צבע אקרילי איכותי.", image: "https://placehold.co/400?text=Tambour", tech: {coverage:"1 ליטר/9 מ\"ר", drying:"שעתיים", thickness:"-"} }
];

// הדרכות
const tutorialsData = [
    { title: "יישום איטום מקלחת", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" },
    { title: "תיקון בטון עם סיקה", url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ" }
];

// חוקי צ'אט (המוח)
const chatRulesData = [
    { trigger: "מחיר", response: "לגבי מחירים וזמינות מלאי, אנא פנה לנציג בדלפק." },
    { trigger: "תודה", response: "בכיף אחי! אני כאן אם צריך עוד משהו." },
    { trigger: "שלום", response: "אהלן! איך אני יכול לעזור לך בפרויקט היום?" }
];

export async function seedRealData() {
    console.log("ממלא מלאי...");
    const batch = writeBatch(db);

    // מחיקת ישן
    const collections = ["brands", "products", "tutorials", "chat_rules"];
    for (const colName of collections) {
        const snap = await getDocs(collection(db, colName));
        snap.forEach(d => batch.delete(d.ref));
    }

    // טעינת חדש
    brandsData.forEach(b => batch.set(doc(collection(db, "brands")), { ...b, createdAt: Date.now() }));
    productsData.forEach(p => batch.set(doc(collection(db, "products")), { ...p, createdAt: Date.now() }));
    tutorialsData.forEach(t => batch.set(doc(collection(db, "tutorials")), { ...t, createdAt: Date.now() }));
    chatRulesData.forEach(r => batch.set(doc(collection(db, "chat_rules")), { ...r, createdAt: Date.now() }));

    await batch.commit();
    console.log("המלאי מלא!");
}
