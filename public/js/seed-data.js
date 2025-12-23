import { db } from './firebase-config.js';
import { collection, getDocs, writeBatch, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// נתונים יציבים עם תמונות שעובדות 100%
const brandsData = [
    { name: "Sika", logo: "https://placehold.co/150x60/FFC500/000?text=SIKA", themeColor: "sika" },
    { name: "Thermokir", logo: "https://placehold.co/150x60/0057B8/fff?text=Thermokir", themeColor: "thermokir" },
    { name: "Mister Fix", logo: "https://placehold.co/150x60/E3000F/fff?text=FIX", themeColor: "misterfix" },
    { name: "Nirlat", logo: "https://placehold.co/150x60/8BC53F/fff?text=Nirlat", themeColor: "nirlat" },
    { name: "Tambour", logo: "https://placehold.co/150x60/E31E24/fff?text=Tambour", themeColor: "tambour" },
    { name: "BG Bond", logo: "https://placehold.co/150x60/F37021/fff?text=BG", themeColor: "bg" }
];

const productsData = [
    { name: "Sika TopSeal 107", brand: "Sika", category: "sealing", marketingDesc: "איטום צמנטי גמיש (דו רכיבי).", image: "https://placehold.co/400x400/fff/000?text=Sika+107", tech: {coverage:"3-4", drying:"6h", thickness:"2mm"} },
    { name: "Sikaflex 11FC+", brand: "Sika", category: "glues", marketingDesc: "דבק ואיטום פוליאוריטני.", image: "https://placehold.co/400x400/fff/000?text=Sikaflex", tech: {coverage:"-", drying:"24h", thickness:"-"} },
    { name: "Thermokir 603", brand: "Thermokir", category: "concrete", marketingDesc: "טיח תרמי לבידוד.", image: "https://placehold.co/400x400/fff/0057B8?text=Thermo+603", tech: {coverage:"14", drying:"48h", thickness:"30mm"} },
    { name: "Mister Fix 109", brand: "Mister Fix", category: "glues", marketingDesc: "דבק אקרילי חזק.", image: "https://placehold.co/400x400/fff/E3000F?text=Fix+109", tech: {coverage:"5", drying:"24h", thickness:"5mm"} },
    { name: "BG Bond 10", brand: "BG Bond", category: "sealing", marketingDesc: "מסטיק איטום.", image: "https://placehold.co/400x400/fff/F37021?text=BG+10", tech: {coverage:"-", drying:"12h", thickness:"-"} }
];

export async function seedRealData() {
    console.log("Seeding...");
    const batch = writeBatch(db);

    const bSnap = await getDocs(collection(db, "brands"));
    bSnap.forEach(d => batch.delete(d.ref));
    const pSnap = await getDocs(collection(db, "products"));
    pSnap.forEach(d => batch.delete(d.ref));

    brandsData.forEach(b => batch.set(doc(collection(db, "brands")), { ...b, createdAt: Date.now() }));
    productsData.forEach(p => batch.set(doc(collection(db, "products")), { ...p, createdAt: Date.now() }));

    await batch.commit();
    console.log("Done.");
}
