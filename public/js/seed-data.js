import { db } from './firebase-config.js';
import { collection, getDocs, writeBatch, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// נתוני מותגים יציבים
const brandsData = [
    { name: "Sika", logo: "https://placehold.co/200x100/FFC500/000?text=Sika", slogan: "בונים אמון", themeColor: "sika" },
    { name: "Thermokir", logo: "https://placehold.co/200x100/0057B8/fff?text=Thermokir", slogan: "פתרונות מתקדמים", themeColor: "thermokir" },
    { name: "Mister Fix", logo: "https://placehold.co/200x100/E3000F/fff?text=Fix", slogan: "מקצוענות בבניה", themeColor: "misterfix" },
    { name: "Nirlat", logo: "https://placehold.co/200x100/8BC53F/fff?text=Nirlat", slogan: "הצבע של ישראל", themeColor: "nirlat" },
    { name: "Tambour", logo: "https://placehold.co/200x100/E31E24/fff?text=Tambour", slogan: "תראו מה שצבע יכול לעשות", themeColor: "tambour" },
    { name: "BG Bond", logo: "https://placehold.co/200x100/F37021/fff?text=BG", slogan: "טכנולוגיה בבניה", themeColor: "bg" }
];

const productsData = [
    { name: "Sika TopSeal 107", brand: "Sika", category: "sealing", marketingDesc: "איטום צמנטי גמיש", image: "https://placehold.co/400?text=107", tech: {coverage:"3kg", drying:"6h", thickness:"2mm"} },
    { name: "Thermokir 603", brand: "Thermokir", category: "concrete", marketingDesc: "טיח תרמי", image: "https://placehold.co/400?text=603", tech: {coverage:"14kg", drying:"48h", thickness:"30mm"} }
];

export async function seedRealData() {
    console.log("Seeding...");
    const batch = writeBatch(db);

    // ניקוי וטעינת מותגים
    const bSnap = await getDocs(collection(db, "brands"));
    bSnap.forEach(d => batch.delete(d.ref));
    brandsData.forEach(b => batch.set(doc(collection(db, "brands")), { ...b, createdAt: Date.now() }));

    // ניקוי וטעינת מוצרים
    const pSnap = await getDocs(collection(db, "products"));
    pSnap.forEach(d => batch.delete(d.ref));
    productsData.forEach(p => batch.set(doc(collection(db, "products")), { ...p, createdAt: Date.now() }));

    await batch.commit();
    console.log("Done!");
}
