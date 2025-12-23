import { db } from './firebase-config.js';
import { collection, getDocs, writeBatch, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// נתונים יציבים עם תמונות שעובדות תמיד
const brandsData = [
    { name: "Sika", logo: "https://placehold.co/200x100/FFC500/000?text=Sika", slogan: "בונים אמון", themeColor: "sika" },
    { name: "Thermokir", logo: "https://placehold.co/200x100/0057B8/fff?text=Thermokir", slogan: "פתרונות מתקדמים", themeColor: "thermokir" },
    { name: "Mister Fix", logo: "https://placehold.co/200x100/E3000F/fff?text=Fix", slogan: "מקצוענות בבניה", themeColor: "misterfix" },
    { name: "Nirlat", logo: "https://placehold.co/200x100/8BC53F/fff?text=Nirlat", slogan: "הצבע של ישראל", themeColor: "nirlat" },
    { name: "Tambour", logo: "https://placehold.co/200x100/E31E24/fff?text=Tambour", slogan: "תראו מה שצבע יכול לעשות", themeColor: "tambour" },
    { name: "BG Bond", logo: "https://placehold.co/200x100/F37021/fff?text=BG", slogan: "טכנולוגיה בבניה", themeColor: "bg" }
];

const productsData = [
    { name: "Sika TopSeal 107", brand: "Sika", category: "sealing", marketingDesc: "איטום צמנטי גמיש (דו רכיבי) - הסטנדרט העולמי לאיטום מקלחות.", image: "https://placehold.co/400x400/ffffff/000000?text=Sika+107", tech: {coverage:"3-4 ק\"ג/מ\"ר", drying:"6 שעות", thickness:"2 מ\"מ"} },
    { name: "Sikaflex 11FC+", brand: "Sika", category: "glues", marketingDesc: "דבק ואיטום פוליאוריטני רב תכליתי.", image: "https://placehold.co/400x400/ffffff/000000?text=Sikaflex", tech: {coverage:"משתנה", drying:"24 שעות", thickness:"-"} },
    { name: "Thermokir 603", brand: "Thermokir", category: "concrete", marketingDesc: "טיח תרמי לבידוד מעולה.", image: "https://placehold.co/400x400/ffffff/0057B8?text=Thermo+603", tech: {coverage:"14 ק\"ג/מ\"ר", drying:"48 שעות", thickness:"30 מ\"מ"} },
    { name: "Mister Fix 109", brand: "Mister Fix", category: "glues", marketingDesc: "דבק אקרילי חזק לקרמיקה.", image: "https://placehold.co/400x400/ffffff/E3000F?text=Fix+109", tech: {coverage:"5 ק\"ג/מ\"ר", drying:"24 שעות", thickness:"5 מ\"מ"} },
    { name: "BG Bond 10", brand: "BG Bond", category: "sealing", marketingDesc: "מסטיק ביטומני לאיטום.", image: "https://placehold.co/400x400/ffffff/F37021?text=BG+10", tech: {coverage:"משתנה", drying:"12 שעות", thickness:"-"} }
];

export async function seedRealData() {
    console.log("Starting Seed...");
    const batch = writeBatch(db);

    // ניקוי
    const bSnap = await getDocs(collection(db, "brands"));
    bSnap.forEach(d => batch.delete(d.ref));
    const pSnap = await getDocs(collection(db, "products"));
    pSnap.forEach(d => batch.delete(d.ref));

    // טעינה
    brandsData.forEach(b => batch.set(doc(collection(db, "brands")), { ...b, createdAt: Date.now() }));
    productsData.forEach(p => batch.set(doc(collection(db, "products")), { ...p, createdAt: Date.now() }));

    await batch.commit();
    console.log("Seed Complete!");
}
