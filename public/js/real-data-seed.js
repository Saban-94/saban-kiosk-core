import { db } from './firebase-config.js';
import { collection, getDocs, writeBatch, doc } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-firestore.js";

// המאגר האמיתי - הנבחרת של גילאר
const realProducts = [
    {
        name: "SikaTop Seal 107",
        brand: "SIKA",
        category: "sealing",
        marketingDesc: "ציפוי איטום צמנטי דו-רכיבי גמיש, משוריין בסיבים. מתאים לאיטום פנימי וחיצוני של בטון, מרתפים, בריכות ומרפסות.",
        image: "https://gilar.co.il/wp-content/uploads/2023/12/SikaTop-Seal-107-25-Kg.png",
        status: "best-seller",
        tech: { coverage: "3-4 ק\"ג/מ\"ר (שתי שכבות)", drying: "6 שעות בין שכבות", thickness: "2-3 מ\"מ" }
    },
    {
        name: "Sikaflex 11FC+",
        brand: "SIKA",
        category: "glues",
        marketingDesc: "דבק-איטום פוליאוריטני רב תכליתי ומהיר ייבוש 'i-Cure'. מדביק הכל, אוטם הכל. חובה בכל ארגז כלים.",
        image: "https://gilar.co.il/wp-content/uploads/2020/12/Sikaflex-11-FC.jpg",
        status: "sale",
        tech: { coverage: "תלוי ברוחב המישק", drying: "3.5 מ\"מ / 24 שעות", thickness: "-" }
    },
    {
        name: "Sika Ceram 255 StarFlex",
        brand: "SIKA",
        category: "glues",
        marketingDesc: "דבק קרמיקה גמיש במיוחד (S1), לאבק מופחת (LD). אידיאלי לאריחים גדולים ולחיפוי אבן טבעית.",
        image: "https://gilar.co.il/wp-content/uploads/2021/04/SikaCeram-255-StarFlex-LD-IL-white-20kg.jpg",
        status: "new",
        tech: { coverage: "5-7 ק\"ג/מ\"ר", drying: "24 שעות לדריכה", thickness: "עד 10 מ\"מ" }
    },
    {
        name: "תרמוקיר 603",
        brand: "THERMOKIR",
        category: "concrete",
        marketingDesc: "טיח תרמי לבידוד מעולה של מעטפת המבנה. מונע גשרי קור ועיבוי, חוסך באנרגיה לחימום וקירור.",
        image: "https://www.thermokir.co.il/wp-content/uploads/2019/06/603.png",
        status: "standard",
        tech: { coverage: "35-40 ק\"ג/מ\"ר", drying: "48 שעות", thickness: "30-50 מ\"מ" }
    },
    {
        name: "סופר גמיש 100",
        brand: "MISTER FIX",
        category: "glues",
        marketingDesc: "דבק אקרילי C2TE להדבקת אריחי פורצלן, קרמיקה ופסיפס. מתאים לקירות ורצפות פנים וחוץ.",
        image: "https://karmit-mrfix.com/wp-content/uploads/2020/07/100.png",
        status: "standard",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3-10 מ\"מ" }
    },
    {
        name: "SikaGrout 314",
        brand: "SIKA",
        category: "concrete",
        marketingDesc: "דיס צמנטי (גראוט) מתפשט, נטול הצטמקות. לעיגון מכונות, עמודים ומילוי חללים בבטון.",
        image: "https://gilar.co.il/wp-content/uploads/2020/12/SikaGrout-314-IL.jpg",
        status: "pro",
        tech: { coverage: "2 ק\"ג לליטר נפח", drying: "התחזקות מהירה", thickness: "10-120 מ\"מ" }
    },
    {
        name: "Sika MonoTop 610",
        brand: "SIKA",
        category: "concrete",
        marketingDesc: "חומר הגנה לברזל זיון וגשר הידבקות (פריימר) לתיקוני בטון. חלק ממערכת שיקום הבטון של סיקה.",
        image: "https://gilar.co.il/wp-content/uploads/2020/12/Sika-MonoTop-610.jpg",
        status: "pro",
        tech: { coverage: "1.5-2 ק\"ג/מ\"ר", drying: "שעתיים", thickness: "1-2 מ\"מ" }
    },
    {
        name: "מיסטר פיקס 633",
        brand: "MISTER FIX",
        category: "concrete",
        marketingDesc: "שפכטל חוץ/פנים להחלקה אולטימטיבית בגימור בטון. עמיד במים ומתאים כרקע לצבע.",
        image: "https://karmit-mrfix.com/wp-content/uploads/2020/07/633.png",
        status: "standard",
        tech: { coverage: "1.2 ק\"ג/מ\"ר למ\"מ", drying: "24 שעות", thickness: "1-5 מ\"מ" }
    }
];

export async function seedRealData() {
    if(!confirm("⚠️ פעולה זו תמחק את כל המוצרים הקיימים ותטען את קטלוג האמת. האם להמשיך?")) return;
    
    console.log("🚀 מתחיל טעינת נתונים...");
    const batch = writeBatch(db);
    
    // 1. מחיקת כל המוצרים הקיימים (ניקוי שולחן)
    const snapshot = await getDocs(collection(db, "products"));
    snapshot.forEach((doc) => batch.delete(doc.ref));
    
    // 2. הוספת המוצרים החדשים
    realProducts.forEach((p) => {
        const newDocRef = doc(collection(db, "products")); // יצירת ID חדש
        batch.set(newDocRef, { 
            ...p, 
            createdAt: new Date().toISOString(),
            videoUrl: "" // שדה ריק לוידאו לשימוש עתידי
        });
    });
    
    await batch.commit();
    alert("✅ הקטלוג נטען בהצלחה! הרשימה התעדכנה.");
    location.reload(); // רענון הדף כדי לראות את השינוי
}
