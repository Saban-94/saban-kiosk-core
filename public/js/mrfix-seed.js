const mrfixProducts = [
    // --- איטום (Sealing) ---
    {
        name: "איטומט 501",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "איטום צמנטי דו-רכיבי גמיש לאיטום חיובי (מרפסות, גגות, מקלחות). צבע אפור.",
        image: "https://placehold.co/300x300?text=Itomat+501",
        tech: { coverage: "2.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "2-3 מ\"מ" },
        features: ["גמיש", "איטום חיובי", "דו-רכיבי"]
    },
    {
        name: "איטומט 500",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "איטום צמנטי לאיטום שלילי (מרתפים, בריכות). עמיד בלחץ מים נגדי.",
        image: "https://placehold.co/300x300?text=Itomat+500",
        tech: { coverage: "3 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3 מ\"מ" },
        features: ["איטום שלילי", "לבריכות", "קשיח"]
    },
    {
        name: "איטומט פלוס 502",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "איטום צמנטי סופר-גמיש (מגשר סדקים). אידיאלי למרפסות ומשטחים זזים.",
        image: "https://placehold.co/300x300?text=Itomat+502",
        tech: { coverage: "2.5 ק\"ג/מ\"ר", drying: "12 שעות", thickness: "2 מ\"מ" },
        features: ["סופר גמיש", "גישור סדקים", "לבן/אפור"]
    },
    {
        name: "מלט בזק 620",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "מלט הידראולי מהיר התקשרות לעצירת נזילות מים פעילות (פריצות מים).",
        image: "https://placehold.co/300x300?text=Quick+620",
        tech: { coverage: "נקודתי", drying: "1-2 דקות", thickness: "-" },
        features: ["ייבוש מיידי", "עוצר מים", "מתנפח"]
    },
    {
        name: "סרט איטום",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "רצועת איטום אלסטית לחיזוק פינות (רולקות) ותפרים.",
        image: "https://placehold.co/300x300?text=Sealing+Tape",
        tech: { coverage: "לפי מטר", drying: "-", thickness: "-" },
        features: ["גמיש", "עמיד", "משלים מערכת"]
    },

    // --- דבקים (Adhesives) ---
    {
        name: "דבק קרמיקה 132",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק צמנטי C2TE איכותי לקרמיקה ופורצלן. מתאים לפנים וחוץ.",
        image: "https://placehold.co/300x300?text=Fix+132",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5-10 מ\"מ" },
        features: ["חוזק הדבקה", "זמן עבודה ארוך", "רב תכליתי"]
    },
    {
        name: "דבק סופר גמיש 100",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק גמיש במיוחד (S1) לאריחים גדולים, אבן וחיפוי חוץ.",
        image: "https://placehold.co/300x300?text=Fix+100",
        tech: { coverage: "5-7 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "עד 10 מ\"מ" },
        features: ["גמיש S1", "לאריחים גדולים", "לבן"]
    },
    {
        name: "דבק קרמיקה 110",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק לבן להדבקת פסיפס ואריחים בבריכות שחייה.",
        image: "https://placehold.co/300x300?text=Fix+110",
        tech: { coverage: "4 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3-5 מ\"מ" },
        features: ["לבן צחור", "עמיד בכלור", "לבריכות"]
    },
    {
        name: "דבק 116",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק חזק במיוחד לחיפוי אבן כבדה ושיש בשיטת ההדבקה.",
        image: "https://placehold.co/300x300?text=Fix+116",
        tech: { coverage: "6-8 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10-20 מ\"מ" },
        features: ["לא שוקע", "חזק מאוד", "לאבן כבדה"]
    },
    {
        name: "דבק בלוקים 140",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק צמנטי להדבקת בלוקי איטונג, פומיס וגבס.",
        image: "https://placehold.co/300x300?text=Block+140",
        tech: { coverage: "3 ק\"ג/מ\"ר", drying: "4 שעות", thickness: "3 מ\"מ" },
        features: ["הדבקה דקה", "מונע גשרי קור", "קל ליישום"]
    },
    {
        name: "דבק 109",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק צמנטי בסיסי לקרמיקה (C1). לריצוף פנים בלבד.",
        image: "https://placehold.co/300x300?text=Fix+109",
        tech: { coverage: "4 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5 מ\"מ" },
        features: ["חסכוני", "לפנים", "בסיסי"]
    },
    {
        name: "דבק 114",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק לקרמיקה עם תוסף פולימרי משופר.",
        image: "https://placehold.co/300x300?text=Fix+114",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5-8 מ\"מ" },
        features: ["משופר", "נוח", "חזק"]
    },

    // --- טיח ושפכטל (Plaster) ---
    {
        name: "גלקסי 20 (טיח הרבצה)",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח צמנטי כשכבת יסוד (הרבצה) לאיטום הקיר לפני טיח מיישר.",
        image: "https://placehold.co/300x300?text=Galaxy+20",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5 מ\"מ" },
        features: ["אוטם", "חזק", "תשתית חובה"]
    },
    {
        name: "גלקסי 10 (טיח מיישר)",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח לבן ליישור קירות פנים וחוץ. גימור איכותי ונוח לעבודה.",
        image: "https://placehold.co/300x300?text=Galaxy+10",
        tech: { coverage: "14 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10-20 מ\"מ" },
        features: ["לבן", "מחליק", "נושם"]
    },
    {
        name: "שפכטל חוץ/פנים 634",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "שפכטל החלקה בגימור זכוכית. ניתן ליישום בשכבה עבה (8 מ\"מ) ללא סדיקה.",
        image: "https://placehold.co/300x300?text=Putty+634",
        tech: { coverage: "1.2 ק\"ג/מ\"ר/מ\"מ", drying: "4 שעות", thickness: "עד 8 מ\"מ" },
        features: ["גימור חלק", "עבה", "עמיד חוץ"]
    },
    {
        name: "שפכטל חוץ 633",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "שפכטל צמנטי עדין להחלקה סופית (פיניש) עד 3 מ\"מ.",
        image: "https://placehold.co/300x300?text=Putty+633",
        tech: { coverage: "1 ק\"ג/מ\"ר", drying: "3 שעות", thickness: "1-3 מ\"מ" },
        features: ["עדין", "לבן", "חסכוני"]
    },
    {
        name: "תרמופיקס 760",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח תרמי מבודד לממ\"דים ולמעטפת הבניין. חוסך אנרגיה.",
        image: "https://placehold.co/300x300?text=Thermo+760",
        tech: { coverage: "3.4 ק\"ג/מ\"ר", drying: "48 שעות", thickness: "20-40 מ\"מ" },
        features: ["מבודד", "קל משקל", "מאושר ממ\"ד"]
    },
    {
        name: "טיח גבס 780",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח גבס ליישור קירות פנים. יוצר קיר לבן וחלק ללא צורך בשפכטל.",
        image: "https://placehold.co/300x300?text=Gypsum+780",
        tech: { coverage: "9 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10 מ\"מ" },
        features: ["פנים בלבד", "לבן", "חלק"]
    },
    {
        name: "מג'יק בונד",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "שפכטל אמריקאי מוכן לשימוש להחלקת קירות גבס וטיח פנים.",
        image: "https://placehold.co/300x300?text=Magic+Bond",
        tech: { coverage: "1 ק\"ג/מ\"ר", drying: "שעתיים", thickness: "דק" },
        features: ["מוכן לשימוש", "קל לשיוף", "לבן"]
    },

    // --- שיקום בטון (Concrete Repair) ---
    {
        name: "שיקום בטון 650",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "מלט לתיקונים קונסטרוקטיביים גסים (עד 80 מ\"מ). לא מתכווץ.",
        image: "https://placehold.co/300x300?text=Repair+650",
        tech: { coverage: "18 ק\"ג/מ\"ר/ס\"מ", drying: "24 שעות", thickness: "10-80 מ\"מ" },
        features: ["חזק מאוד", "עבה", "סיבים"]
    },
    {
        name: "שיקום בטון 651",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "מלט לתיקונים עדינים והחלקה (עד 35 מ\"מ). גימור בטון חלק.",
        image: "https://placehold.co/300x300?text=Repair+651",
        tech: { coverage: "18 ק\"ג/מ\"ר/ס\"מ", drying: "24 שעות", thickness: "5-35 מ\"מ" },
        features: ["גימור חלק", "דק", "חזק"]
    },
    {
        name: "גראוט 610",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "דיוס צמנטי זרימתי (Grout) לעיגון מכונות ומילוי חללים.",
        image: "https://placehold.co/300x300?text=Grout+610",
        tech: { coverage: "2000 ק\"ג/ק\"וב", drying: "24 שעות", thickness: "-" },
        features: ["זורם", "לא מתכווץ", "עיגון"]
    },
    {
        name: "מדה מתפלסת 600",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "מדה מתפלסת ליישור רצפות בטון לפני הדבקת פרקט או שטיח.",
        image: "https://placehold.co/300x300?text=SL+600",
        tech: { coverage: "1.6 ק\"ג/מ\"ר/מ\"מ", drying: "24 שעות", thickness: "3-10 מ\"מ" },
        features: ["מתפלס לבד", "חלק", "תשתית לריצוף"]
    },

    // --- שונות (Misc) ---
    {
        name: "סופר טיט 181",
        brand: "Carmit Mr. Fix",
        category: "ריצוף",
        marketingDesc: "טיט מוכן לריצוף על שומשום או חול. רק להוסיף מים.",
        image: "https://placehold.co/300x300?text=Super+Tit+181",
        tech: { coverage: "לפי עובי", drying: "24 שעות", thickness: "2-3 ס\"מ" },
        features: ["מוכן", "איכותי", "חוסך עבודה"]
    },
    {
        name: "כוחלה 119",
        brand: "Carmit Mr. Fix",
        category: "ריצוף",
        marketingDesc: "רובה אקרילית צבעונית למילוי פוגות.",
        image: "https://placehold.co/300x300?text=Kochla+119",
        tech: { coverage: "0.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3-10 מ\"מ" },
        features: ["דוחה מים", "גוונים", "לא נסדק"]
    },
    {
        name: "בונד 203A",
        brand: "Carmit Mr. Fix",
        category: "חומרי עזר",
        marketingDesc: "תוסף לטקס לשיפור הדבקה ואיטום בתערובות צמנטיות.",
        image: "https://placehold.co/300x300?text=Bond+203A",
        tech: { coverage: "10-20%", drying: "-", thickness: "-" },
        features: ["מחזק", "אוטם", "גמיש"]
    },
    {
        name: "אפוקסי לעיגון HM500",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק אפוקסי להזרקה לעיגון קוצים וברזל בבטון.",
        image: "https://placehold.co/300x300?text=Epoxy+HM500",
        tech: { coverage: "נקודתי", drying: "מהיר", thickness: "-" },
        features: ["חזק מאוד", "דו רכיבי", "עיגון"]
    },
    
    // השלמה ל-50 מוצרים עם מוצרים משלימים
    { name: "טיט 182", brand: "Carmit Mr. Fix", category: "בנייה", marketingDesc: "טיט לקירות", image: "https://placehold.co/300x300?text=Tit182", tech: {}, features: [] },
    { name: "טיח חוץ 710", brand: "Carmit Mr. Fix", category: "טיח", marketingDesc: "טיח חוץ", image: "https://placehold.co/300x300?text=Plaster710", tech: {}, features: [] },
    { name: "דבק אקרילי 120", brand: "Carmit Mr. Fix", category: "דבקים", marketingDesc: "דבק אקרילי", image: "https://placehold.co/300x300?text=Glue120", tech: {}, features: [] },
    { name: "שליכט צבעוני", brand: "Carmit Mr. Fix", category: "צבע", marketingDesc: "שליכט דקורטיבי", image: "https://placehold.co/300x300?text=Schlicht", tech: {}, features: [] },
    { name: "צבע יסוד 400", brand: "Carmit Mr. Fix", category: "צבע", marketingDesc: "יסוד לצבע", image: "https://placehold.co/300x300?text=Primer400", tech: {}, features: [] },
    { name: "מלט לבן", brand: "Carmit Mr. Fix", category: "בטון", marketingDesc: "מלט לבן נקי", image: "https://placehold.co/300x300?text=WhiteCement", tech: {}, features: [] },
    { name: "טיח ממ\"ד 770", brand: "Carmit Mr. Fix", category: "טיח", marketingDesc: "טיח ממד", image: "https://placehold.co/300x300?text=Plaster770", tech: {}, features: [] },
    { name: "דבק 115", brand: "Carmit Mr. Fix", category: "דבקים", marketingDesc: "דבק קרמיקה", image: "https://placehold.co/300x300?text=Fix115", tech: {}, features: [] },
    { name: "דבק 118", brand: "Carmit Mr. Fix", category: "דבקים", marketingDesc: "דבק חזק", image: "https://placehold.co/300x300?text=Fix118", tech: {}, features: [] },
    { name: "תרמופיקס 750", brand: "Carmit Mr. Fix", category: "טיח", marketingDesc: "טיח תרמי", image: "https://placehold.co/300x300?text=Thermo750", tech: {}, features: [] },
    { name: "טיח חוץ 730", brand: "Carmit Mr. Fix", category: "טיח", marketingDesc: "טיח חוץ", image: "https://placehold.co/300x300?text=Plaster730", tech: {}, features: [] },
    { name: "דבק שיש 150", brand: "Carmit Mr. Fix", category: "דבקים", marketingDesc: "דבק שיש", image: "https://placehold.co/300x300?text=Marble150", tech: {}, features: [] },
    { name: "רובה 120", brand: "Carmit Mr. Fix", category: "ריצוף", marketingDesc: "רובה", image: "https://placehold.co/300x300?text=Grout120", tech: {}, features: [] },
    { name: "טיח גבס 781", brand: "Carmit Mr. Fix", category: "טיח", marketingDesc: "טיח גבס", image: "https://placehold.co/300x300?text=Gypsum781", tech: {}, features: [] },
    { name: "איטום 505", brand: "Carmit Mr. Fix", category: "איטום", marketingDesc: "איטום", image: "https://placehold.co/300x300?text=Seal505", tech: {}, features: [] },
    { name: "פריימר 200", brand: "Carmit Mr. Fix", category: "חומרי עזר", marketingDesc: "פריימר", image: "https://placehold.co/300x300?text=Primer200", tech: {}, features: [] },
    { name: "דבק 135", brand: "Carmit Mr. Fix", category: "דבקים", marketingDesc: "דבק", image: "https://placehold.co/300x300?text=Fix135", tech: {}, features: [] },
    { name: "מדה 610", brand: "Carmit Mr. Fix", category: "בטון", marketingDesc: "מדה", image: "https://placehold.co/300x300?text=SL610", tech: {}, features: [] },
    { name: "בטון 300", brand: "Carmit Mr. Fix", category: "בטון", marketingDesc: "בטון", image: "https://placehold.co/300x300?text=Concrete300", tech: {}, features: [] },
    { name: "טיח 700", brand: "Carmit Mr. Fix", category: "טיח", marketingDesc: "טיח", image: "https://placehold.co/300x300?text=Plaster700", tech: {}, features: [] },
    { name: "דבק 105", brand: "Carmit Mr. Fix", category: "דבקים", marketingDesc: "דבק", image: "https://placehold.co/300x300?text=Fix105", tech: {}, features: [] },
    { name: "סילר 900", brand: "Carmit Mr. Fix", category: "איטום", marketingDesc: "סילר", image: "https://placehold.co/300x300?text=Sealer900", tech: {}, features: [] },
    { name: "טיח 740", brand: "Carmit Mr. Fix", category: "טיח", marketingDesc: "טיח", image: "https://placehold.co/300x300?text=Plaster740", tech: {}, features: [] }
];

// window.safeApp.seedProducts(mrfixProducts);
const mrfixProducts = [
    // --- איטום (Sealing - Itomat) ---
    {
        name: "איטומט 501",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "איטום צמנטי דו-רכיבי גמיש לאיטום חיובי (מרפסות, גגות, מקלחות). צבע אפור/לבן.",
        image: "https://placehold.co/300x300?text=Itomat+501",
        video: "https://www.youtube.com/watch?v=VIDEO_ID",
        tech: { coverage: "2.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "2-3 מ\"מ" },
        features: ["גמיש", "איטום חיובי", "דו-רכיבי"]
    },
    {
        name: "איטומט 500",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "איטום צמנטי קשיח לאיטום שלילי (מרתפים, בריכות, מאגרי מים). עמיד בלחץ מים נגדי.",
        image: "https://placehold.co/300x300?text=Itomat+500",
        tech: { coverage: "3 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3 מ\"מ" },
        features: ["איטום שלילי", "מאושר מי שתייה", "קשיח"]
    },
    {
        name: "איטומט פלוס 502",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "איטום צמנטי סופר-גמיש (מגשר סדקים). אידיאלי למרפסות, גגות ומשטחים בעלי תזוזה.",
        image: "https://placehold.co/300x300?text=Itomat+502",
        tech: { coverage: "2.5 ק\"ג/מ\"ר", drying: "12 שעות", thickness: "2 מ\"מ" },
        features: ["סופר גמיש", "גישור סדקים", "לבן/אפור"]
    },
    {
        name: "מלט בזק 620",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "מלט הידראולי מהיר התקשרות לעצירת נזילות מים פעילות (פריצות מים) מיידית.",
        image: "https://placehold.co/300x300?text=Quick+620",
        tech: { coverage: "נקודתי", drying: "1-2 דקות", thickness: "-" },
        features: ["ייבוש מיידי", "עוצר מים", "מתנפח"]
    },
    {
        name: "איטומט 505",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "איטום צמנטי חד-רכיבי גמיש. רק להוסיף מים. מתאים לאיטום תחת ריצוף.",
        image: "https://placehold.co/300x300?text=Itomat+505",
        tech: { coverage: "3 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "2-3 מ\"מ" },
        features: ["חד רכיבי", "נוח לשימוש", "חסכוני"]
    },
    {
        name: "סרט איטום",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "רצועת איטום אלסטית לחיזוק פינות (רולקות) ותפרים במערכות איטום.",
        image: "https://placehold.co/300x300?text=Sealing+Tape",
        tech: { coverage: "לפי מטר", drying: "-", thickness: "-" },
        features: ["גמיש", "עמיד", "משלים מערכת"]
    },
    {
        name: "מסטיק איטום ביטומני",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "מסטיק ביטומני קר לאיטום סדקים ותיקונים בגגות זפת ויריעות.",
        image: "https://placehold.co/300x300?text=Bitumen+Mastic",
        tech: { coverage: "לפי אורך", drying: "24 שעות", thickness: "-" },
        features: ["נדבק לזפת", "עמיד בשמש", "שחור"]
    },
    {
        name: "פריימר ביטומני",
        brand: "Carmit Mr. Fix",
        category: "איטום",
        marketingDesc: "שכבת יסוד ביטומנית (פריימר) על בסיס מים לפני יישום יריעות או משחות.",
        image: "https://placehold.co/300x300?text=Bitumen+Primer",
        tech: { coverage: "300 גרם/מ\"ר", drying: "2-4 שעות", thickness: "-" },
        features: ["חודר בטון", "מתייבש מהר", "בסיס מים"]
    },

    // --- דבקים (Adhesives - Fix Series) ---
    {
        name: "דבק קרמיקה 132",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק צמנטי C2TE איכותי לקרמיקה ופורצלן. מתאים לפנים וחוץ, חדרי רחצה ומרפסות.",
        image: "https://placehold.co/300x300?text=Fix+132",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5-10 מ\"מ" },
        features: ["חוזק הדבקה", "זמן עבודה ארוך", "רב תכליתי"]
    },
    {
        name: "דבק סופר גמיש 100",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק גמיש במיוחד (S1) לאריחים גדולים, אבן טבעית וחיפוי חוץ בגובה.",
        image: "https://placehold.co/300x300?text=Fix+100",
        tech: { coverage: "5-7 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "עד 10 מ\"מ" },
        features: ["גמיש S1", "לאריחים גדולים", "לבן"]
    },
    {
        name: "דבק קרמיקה 110",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק לבן צמנטי C2TE להדבקת פסיפס, זכוכית ואריחים בבריכות שחייה.",
        image: "https://placehold.co/300x300?text=Fix+110",
        tech: { coverage: "4 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3-5 מ\"מ" },
        features: ["לבן צחור", "עמיד בכלור", "לבריכות"]
    },
    {
        name: "דבק 116",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק חזק במיוחד לחיפוי אבן כבדה ושיש בשיטת ההדבקה (ללא רשת).",
        image: "https://placehold.co/300x300?text=Fix+116",
        tech: { coverage: "6-8 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10-20 מ\"מ" },
        features: ["לא שוקע", "חזק מאוד", "לאבן כבדה"]
    },
    {
        name: "דבק בלוקים 140",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק צמנטי להדבקת בלוקי איטונג, פומיס וגבס בשכבה דקה.",
        image: "https://placehold.co/300x300?text=Block+140",
        tech: { coverage: "3 ק\"ג/מ\"ר", drying: "4 שעות", thickness: "3 מ\"מ" },
        features: ["הדבקה דקה", "מונע גשרי קור", "קל ליישום"]
    },
    {
        name: "דבק 109",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק צמנטי בסיסי לקרמיקה (C1). לריצוף פנים בלבד על בטון או טיח.",
        image: "https://placehold.co/300x300?text=Fix+109",
        tech: { coverage: "4 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5 מ\"מ" },
        features: ["חסכוני", "לפנים", "בסיסי"]
    },
    {
        name: "דבק 114",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק לקרמיקה עם תוסף פולימרי משופר. מתאים לריצוף פנים ומרפסות מקורות.",
        image: "https://placehold.co/300x300?text=Fix+114",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5-8 מ\"מ" },
        features: ["משופר", "נוח", "חזק"]
    },
    {
        name: "דבק 135",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק פורצלן C2TE. בחירה מצוינת לריצוף דירות סטנדרטי.",
        image: "https://placehold.co/300x300?text=Fix+135",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5 מ\"מ" },
        features: ["נוח למריחה", "אחיזה טובה", "פופולרי"]
    },
    {
        name: "דבק 118",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק חזק במיוחד לאריחים בעלי ספיגות נמוכה.",
        image: "https://placehold.co/300x300?text=Fix+118",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5-10 מ\"מ" },
        features: ["חזק", "עמיד", "לפורצלן"]
    },
    {
        name: "דבק אקרילי 120",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק משחתי מוכן לשימוש (דבק שפכטל) להדבקת אריחים על גבס או ריצוף קיים.",
        image: "https://placehold.co/300x300?text=Acrylic+120",
        tech: { coverage: "3 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "דק" },
        features: ["מוכן לשימוש", "גמיש", "להדבקה על גבס"]
    },
    {
        name: "דבק שיש 150",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק ייעודי לשיש ואבן. מונע הכתמה ומבטיח הידבקות לאורך שנים.",
        image: "https://placehold.co/300x300?text=Marble+150",
        tech: { coverage: "6 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10 מ\"מ" },
        features: ["מונע כתמים", "לבן", "חזק"]
    },
    {
        name: "דבק 105",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק בסיסי לריצוף קרמיקה על חול מיוצב.",
        image: "https://placehold.co/300x300?text=Fix+105",
        tech: { coverage: "4 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5 מ\"מ" },
        features: ["פשוט", "זול", "לפנים"]
    },

    // --- טיח ושפכטל (Plaster & Putty) ---
    {
        name: "גלקסי 20 (הרבצה)",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח צמנטי כשכבת יסוד (הרבצה) לאיטום הקיר לפני טיח מיישר. חובה בחדרים רטובים.",
        image: "https://placehold.co/300x300?text=Galaxy+20",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5 מ\"מ" },
        features: ["אוטם", "חזק", "תשתית חובה"]
    },
    {
        name: "גלקסי 10 (מיישר)",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח לבן ליישור קירות פנים וחוץ. גימור איכותי ונוח לעבודה.",
        image: "https://placehold.co/300x300?text=Galaxy+10",
        tech: { coverage: "14 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10-20 מ\"מ" },
        features: ["לבן", "מחליק", "נושם"]
    },
    {
        name: "שפכטל חוץ/פנים 634",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "שפכטל החלקה בגימור זכוכית. ניתן ליישום בשכבה עבה (8 מ\"מ) ללא סדיקה.",
        image: "https://placehold.co/300x300?text=Putty+634",
        tech: { coverage: "1.2 ק\"ג/מ\"ר/מ\"מ", drying: "4 שעות", thickness: "עד 8 מ\"מ" },
        features: ["גימור חלק", "עבה", "עמיד חוץ"]
    },
    {
        name: "שפכטל חוץ 633",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "שפכטל צמנטי עדין להחלקה סופית (פיניש) עד 3 מ\"מ. לבן צחור.",
        image: "https://placehold.co/300x300?text=Putty+633",
        tech: { coverage: "1 ק\"ג/מ\"ר", drying: "3 שעות", thickness: "1-3 מ\"מ" },
        features: ["עדין", "לבן", "חסכוני"]
    },
    {
        name: "תרמופיקס 760",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח תרמי מבודד לממ\"דים ולמעטפת הבניין. חוסך אנרגיה ומונע עיבוי.",
        image: "https://placehold.co/300x300?text=Thermo+760",
        tech: { coverage: "3.4 ק\"ג/מ\"ר", drying: "48 שעות", thickness: "20-40 מ\"מ" },
        features: ["מבודד", "קל משקל", "מאושר ממ\"ד"]
    },
    {
        name: "טיח גבס 780",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח גבס ליישור קירות פנים. יוצר קיר לבן וחלק ללא צורך בשפכטל.",
        image: "https://placehold.co/300x300?text=Gypsum+780",
        tech: { coverage: "9 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10 מ\"מ" },
        features: ["פנים בלבד", "לבן", "חלק"]
    },
    {
        name: "מג'יק בונד",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "שפכטל אמריקאי מוכן לשימוש להחלקת קירות גבס וטיח פנים לפני צבע.",
        image: "https://placehold.co/300x300?text=Magic+Bond",
        tech: { coverage: "1 ק\"ג/מ\"ר", drying: "שעתיים", thickness: "דק" },
        features: ["מוכן לשימוש", "קל לשיוף", "לבן"]
    },
    {
        name: "טיח חוץ 710",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח צמנטי חזק ליישור קירות חוץ וממ\"דים.",
        image: "https://placehold.co/300x300?text=Plaster+710",
        tech: { coverage: "16 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "15 מ\"מ" },
        features: ["חזק", "עמיד", "תקני"]
    },
    {
        name: "טיח ממ\"ד 770",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח ייעודי למרחבים מוגנים (ממ\"ד), עומד בתקן פיקוד העורף.",
        image: "https://placehold.co/300x300?text=Mamad+770",
        tech: { coverage: "15 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10-15 מ\"מ" },
        features: ["תקן פקע\"ר", "הדבקה לבטון", "בטיחותי"]
    },
    {
        name: "טיח גבס 781",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח גבס ליישום ידני לתיקונים ויישור קירות פנים.",
        image: "https://placehold.co/300x300?text=Gypsum+781",
        tech: { coverage: "8 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10 מ\"מ" },
        features: ["ידני", "נוח", "לבן"]
    },
    {
        name: "טיח 740",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח צמנטי הרבצה לקירות בלוקים.",
        image: "https://placehold.co/300x300?text=Plaster+740",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5 מ\"מ" },
        features: ["אוטם", "בסיס", "אפור"]
    },
    {
        name: "טיח חוץ 730",
        brand: "Carmit Mr. Fix",
        category: "טיח",
        marketingDesc: "טיח בגר לשכבת גמר על בטון יצוק.",
        image: "https://placehold.co/300x300?text=Plaster+730",
        tech: { coverage: "2 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "2-5 מ\"מ" },
        features: ["מחליק בטון", "חזק", "אפור/לבן"]
    },

    // --- שיקום בטון (Concrete Repair) ---
    {
        name: "שיקום בטון 650",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "מלט לתיקונים קונסטרוקטיביים גסים (עד 80 מ\"מ). לא מתכווץ.",
        image: "https://placehold.co/300x300?text=Repair+650",
        tech: { coverage: "18 ק\"ג/מ\"ר/ס\"מ", drying: "24 שעות", thickness: "10-80 מ\"מ" },
        features: ["חזק מאוד", "עבה", "סיבים"]
    },
    {
        name: "שיקום בטון 651",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "מלט לתיקונים עדינים והחלקה (עד 35 מ\"מ). גימור בטון חלק.",
        image: "https://placehold.co/300x300?text=Repair+651",
        tech: { coverage: "18 ק\"ג/מ\"ר/ס\"מ", drying: "24 שעות", thickness: "5-35 מ\"מ" },
        features: ["גימור חלק", "דק", "חזק"]
    },
    {
        name: "גראוט 610",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "דיוס צמנטי זרימתי (Grout) לעיגון מכונות ומילוי חללים.",
        image: "https://placehold.co/300x300?text=Grout+610",
        tech: { coverage: "2000 ק\"ג/ק\"וב", drying: "24 שעות", thickness: "-" },
        features: ["זורם", "לא מתכווץ", "עיגון"]
    },
    {
        name: "מדה מתפלסת 600",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "מדה מתפלסת ליישור רצפות בטון לפני הדבקת פרקט או שטיח.",
        image: "https://placehold.co/300x300?text=SL+600",
        tech: { coverage: "1.6 ק\"ג/מ\"ר/מ\"מ", drying: "24 שעות", thickness: "3-10 מ\"מ" },
        features: ["מתפלס לבד", "חלק", "תשתית לריצוף"]
    },
    {
        name: "מדה 610",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "מדה מתפלסת תעשייתית לעומסים בינוניים.",
        image: "https://placehold.co/300x300?text=SL+610",
        tech: { coverage: "1.7 ק\"ג/מ\"ר/מ\"מ", drying: "24 שעות", thickness: "5-15 מ\"מ" },
        features: ["חזק", "למחסנים", "מתפלס"]
    },
    {
        name: "בטון 300",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "תערובת בטון יבש מוכנה בשק ליציקות קטנות ותיקונים.",
        image: "https://placehold.co/300x300?text=Concrete+300",
        tech: { coverage: "22 ק\"ג/ס\"מ/מ\"ר", drying: "24 שעות", thickness: "-" },
        features: ["רק להוסיף מים", "ב-30", "נקי"]
    },

    // --- שונות (Misc) ---
    {
        name: "סופר טיט 181",
        brand: "Carmit Mr. Fix",
        category: "ריצוף",
        marketingDesc: "טיט מוכן לריצוף על שומשום או חול. תערובת איכותית שחוסכת עבודה.",
        image: "https://placehold.co/300x300?text=Super+Tit+181",
        tech: { coverage: "לפי עובי", drying: "24 שעות", thickness: "2-3 ס\"מ" },
        features: ["מוכן", "איכותי", "חוסך עבודה"]
    },
    {
        name: "טיט 182",
        brand: "Carmit Mr. Fix",
        category: "בנייה",
        marketingDesc: "טיט להרכבת משקופים וביטונים כלליים.",
        image: "https://placehold.co/300x300?text=Tit+182",
        tech: { coverage: "-", drying: "24 שעות", thickness: "-" },
        features: ["נדבק", "חזק", "למשקופים"]
    },
    {
        name: "כוחלה 119",
        brand: "Carmit Mr. Fix",
        category: "ריצוף",
        marketingDesc: "רובה אקרילית צבעונית למילוי פוגות (מישקים).",
        image: "https://placehold.co/300x300?text=Kochla+119",
        tech: { coverage: "0.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3-10 מ\"מ" },
        features: ["דוחה מים", "גוונים", "לא נסדק"]
    },
    {
        name: "רובה 120",
        brand: "Carmit Mr. Fix",
        category: "ריצוף",
        marketingDesc: "רובה אקרילית לפוגות רחבות במיוחד באבן וחוץ.",
        image: "https://placehold.co/300x300?text=Grout+120",
        tech: { coverage: "1 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5-20 מ\"מ" },
        features: ["לפוגה רחבה", "לאבן", "חזק"]
    },
    {
        name: "בונד 203A",
        brand: "Carmit Mr. Fix",
        category: "חומרי עזר",
        marketingDesc: "תוסף לטקס לשיפור הדבקה ואיטום בתערובות צמנטיות (מוסף).",
        image: "https://placehold.co/300x300?text=Bond+203A",
        tech: { coverage: "10-20%", drying: "-", thickness: "-" },
        features: ["מחזק", "אוטם", "גמיש"]
    },
    {
        name: "אפוקסי לעיגון HM500",
        brand: "Carmit Mr. Fix",
        category: "דבקים",
        marketingDesc: "דבק אפוקסי להזרקה לעיגון קוצים וברזל בבטון. לעומסים כבדים.",
        image: "https://placehold.co/300x300?text=Epoxy+HM500",
        tech: { coverage: "נקודתי", drying: "מהיר", thickness: "-" },
        features: ["חזק מאוד", "דו רכיבי", "עיגון"]
    },
    {
        name: "שליכט צבעוני",
        brand: "Carmit Mr. Fix",
        category: "צבע",
        marketingDesc: "ציפוי דקורטיבי עמיד לקירות חוץ. טקסטורה מרהיבה.",
        image: "https://placehold.co/300x300?text=Schlicht",
        tech: { coverage: "2.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "-" },
        features: ["גמיש", "עמיד UV", "רחיץ"]
    },
    {
        name: "צבע יסוד 400",
        brand: "Carmit Mr. Fix",
        category: "צבע",
        marketingDesc: "צבע יסוד מקשר לפני שליכט צבעוני.",
        image: "https://placehold.co/300x300?text=Primer+400",
        tech: { coverage: "0.2 ק\"ג/מ\"ר", drying: "שעתיים", thickness: "-" },
        features: ["מחוספס", "בגוון השליכט", "מקשר"]
    },
    {
        name: "פריימר 200",
        brand: "Carmit Mr. Fix",
        category: "חומרי עזר",
        marketingDesc: "פריימר לחיזוק תשתיות לפני טיח או צבע.",
        image: "https://placehold.co/300x300?text=Primer+200",
        tech: { coverage: "0.15 ק\"ג/מ\"ר", drying: "שעה", thickness: "-" },
        features: ["שקוף", "מחזק", "חודר"]
    },
    {
        name: "מלט לבן",
        brand: "Carmit Mr. Fix",
        category: "בטון",
        marketingDesc: "מלט פורטלנד לבן לעבודות בנייה ושיפוצים אסתטיים.",
        image: "https://placehold.co/300x300?text=White+Cement",
        tech: { coverage: "-", drying: "רגיל", thickness: "-" },
        features: ["לבן", "נקי", "איכותי"]
    }
];

// window.safeApp.seedProducts(mrfixProducts);
