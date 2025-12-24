const sikaProductsFull = [
    // --- איטום (Waterproofing) ---
    {
        name: "Sikalastic 560",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "ציפוי איטום פוליאוריטני היברידי, גמיש במיוחד ועמיד ב-UV. פתרון מעולה לאיטום גגות חדשים ושיקום ישנים.",
        image: "https://usa.sika.com/content/dam/dms/us01/f/Sikalastic-560.jpg",
        video: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
        tech: { coverage: "1.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "1-2 מ\"מ" },
        features: ["עמיד UV", "ידידותי לסביבה", "מגשר על סדקים"]
    },
    {
        name: "SikaTop 107 Seal",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "מערכת איטום צמנטית דו-רכיבית גמישה. הסטנדרט העולמי לאיטום מרפסות, חדרי רחצה ומאגרי מים.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikatop_seal_-107.jpg",
        video: "https://www.youtube.com/watch?v=VIDEO_ID_HERE",
        tech: { coverage: "4 ק\"ג/מ\"ר", drying: "6 שעות", thickness: "3-4 מ\"מ" },
        features: ["מאושר למי שתייה", "הדבקה מעולה", "עמיד בלחץ מים"]
    },
    {
        name: "Sika MultiSeal",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "סרט איטום ביטומני נדבק מעצמו עם ציפוי אלומיניום. הפלסטר המושלם לגגות, מרזבים וסדקים.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sika_multiseal.jpg",
        tech: { coverage: "לפי אורך", drying: "מיידי", thickness: "-" },
        features: ["נדבק מעצמו", "עמיד בקריעה", "יישום קל"]
    },
    {
        name: "Sika Igolflex 201",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "ביטומן גמיש דו-רכיבי משוכלל לאיטום יסודות וקירות תמך. מתייבש מהר ויוצר שכבה עבה וחזקה.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sika_igolflex_-201.jpg",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "יומיים", thickness: "4 מ\"מ" },
        features: ["גמישות גבוהה", "גישור סדקים", "יישום במריחה"]
    },
    {
        name: "Sikaflex 11FC",
        brand: "Sika",
        category: "דבקים",
        marketingDesc: "דבק-איטום פוליאוריטני רב תכליתי. המוצר שחובה בכל ארגז כלים לאיטום סדקים והדבקות גמישות.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikaflex_-11_fc_.jpg",
        tech: { coverage: "לפי מטר רץ", drying: "3 מ\"מ / 24 שעות", thickness: "-" },
        features: ["גמיש תמיד", "לא מתכווץ", "נדבק להכל"]
    },
    {
        name: "SikaSwell S-2",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "מסטיק תופח במגע עם מים. משמש כעצר מים בתפרי הפסקת יציקה ומעברי צנרת.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikaswell_s-2.jpg",
        tech: { coverage: "לפי מטר רץ", drying: "24 שעות", thickness: "-" },
        features: ["תופח 200%", "יישום קל", "עמיד במים מלוחים"]
    },
    {
        name: "Sikagard 907 W",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "סילר ומחזק תשתיות משולב. מגן על אבנים משתלבות ובטון מפני מים, שמן וכתמים.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikagard_-907_w.jpg",
        tech: { coverage: "200 גרם/מ\"ר", drying: "4 שעות", thickness: "-" },
        features: ["מגן מכתמים", "דוחה מים", "מחזק חול"]
    },
    {
        name: "SikaFill",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "ציפוי אקרילי גמיש לאיטום גגות והלבנתם. מפחית חום בתוך המבנה.",
        image: "https://placehold.co/300x300?text=SikaFill",
        tech: { coverage: "2 ק\"ג/מ\"ר", drying: "12 שעות", thickness: "1-1.5 מ\"מ" },
        features: ["מלבין גגות", "עמיד UV", "גמיש"]
    },
    {
        name: "Sarnafil G 410",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "יריעת איטום PVC משוריינת לגגות חשופים. עמידות מוכחת של עשרות שנים.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sarnafil_g_410-12el.jpg",
        tech: { coverage: "יריעה", drying: "-", thickness: "1.2/1.5 מ\"מ" },
        features: ["ריתוך אוויר חם", "עמידות אש", "אחריות ארוכה"]
    },
    {
        name: "Sika RainTite",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "ציפוי אקרילי משופר בסיבים לאיטום סדקים וגגות.",
        image: "https://placehold.co/300x300?text=RainTite",
        tech: { coverage: "1.8 ק\"ג/מ\"ר", drying: "8 שעות", thickness: "1 מ\"מ" },
        features: ["משוריין סיבים", "עמיד בסדיקה", "מוכן לשימוש"]
    },

    // --- ריצוף והדבקה (Flooring & Tiling) ---
    {
        name: "SikaCeram 205 Large",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "דבק צמנטי C2TE איכותי להדבקת אריחי גרניט פורצלן וקרמיקה. מתאים לפנים וחוץ.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikaceram_-205_large.jpg",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3-5 מ\"מ" },
        features: ["החלקה מופחתת", "זמן עבודה ארוך", "תקן C2TE"]
    },
    {
        name: "SikaCeram 255 StarFlex",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "דבק גמיש במיוחד (S1) בצבע לבן. אידיאלי לאריחים גדולים, אבן טבעית וחיפוי חוץ.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikaceram_-255_starflexld.jpg",
        tech: { coverage: "5-7 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "עד 10 מ\"מ" },
        features: ["גמישות S1", "כוח הדבקה גבוה", "ללא שקיעה"]
    },
    {
        name: "SikaCeram CleanGrout",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "רובה צמנטית איכותית בגימור חלק. דוחה מים ומונעת התפתחות עובש ופטריות.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikaceram_cleangrout.jpg",
        tech: { coverage: "0.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "1-8 מ\"מ" },
        features: ["דוחה מים", "אנטי-בקטריאלי", "מגוון צבעים"]
    },
    {
        name: "SikaCeram EpoxyGrout",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "רובה אפוקסית דו-רכיבית. עמידה לחלוטין בכימיקלים, חומצות ושחיקה מכנית.",
        image: "https://placehold.co/300x300?text=EpoxyGrout",
        tech: { coverage: "משתנה", drying: "24 שעות", thickness: "2-12 מ\"מ" },
        features: ["עמידות כימית", "קל לניקוי", "חוזק מכני"]
    },
    {
        name: "SikaBond T-54",
        brand: "Sika",
        category: "דבקים",
        marketingDesc: "דבק פוליאוריטני אלסטי להדבקת פרקט עץ ישירות לתשתית. מפחית רעשי הלימה.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikabond_-54_parquet.jpg",
        tech: { coverage: "1 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "-" },
        features: ["הדבקה גמישה", "בידוד אקוסטי", "ללא פריימר"]
    },
    {
        name: "SikaBond T-2",
        brand: "Sika",
        category: "דבקים",
        marketingDesc: "דבק ההרמט החזק ביותר. כושר אחיזה ראשוני מיידי (High Tack) ללא צורך בתמיכה.",
        image: "https://placehold.co/300x300?text=SikaBond+T2",
        tech: { coverage: "נקודתי", drying: "מיידי", thickness: "-" },
        features: ["הדבקה מיידית", "חזק במיוחד", "רב תכליתי"]
    },
    {
        name: "Sikadur 31",
        brand: "Sika",
        category: "דבקים",
        marketingDesc: "דבק אפוקסי מבני (דבק שיש). להדבקת בטון, אבן וברזל בחוזק העולה על בטון.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikadur_-31_cf_normal.jpg",
        tech: { coverage: "לפי צורך", drying: "12 שעות", thickness: "עד 30 מ\"מ" },
        features: ["חוזק עצום", "לא נוזל", "עמיד שחיקה"]
    },
    {
        name: "Sika AnchorFix 3001",
        brand: "Sika",
        category: "דבקים",
        marketingDesc: "דבק עיגון אפוקסי טהור לעומסים כבדים ולברזל קוצים בבטון סדוק.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sika_anchorfix_-3001.jpg",
        tech: { coverage: "לפי קוטר", drying: "מהיר", thickness: "-" },
        features: ["ללא ריח", "עומסים כבדים", "מאושר רעידות אדמה"]
    },
    {
        name: "Sika Primer 3N",
        brand: "Sika",
        category: "דבקים",
        marketingDesc: "פריימר לשיפור הדבקה של סיקפלקס על תשתיות סופגות (בטון, טיח, עץ).",
        image: "https://placehold.co/300x300?text=Primer3N",
        tech: { coverage: "5 מ\"ר/ליטר", drying: "30 דקות", thickness: "-" },
        features: ["שקוף", "מתייבש מהר", "מחזק תשתית"]
    },
    {
        name: "Sika Remover 208",
        brand: "Sika",
        category: "חומרי עזר",
        marketingDesc: "נוזל לניקוי שאריות דבק פוליאוריטני ואפוקסי לפני ייבוש.",
        image: "https://placehold.co/300x300?text=Remover208",
        tech: { coverage: "-", drying: "-", thickness: "-" },
        features: ["ממיס דבק", "לא פוגע בצבע", "ריח עדין"]
    },

    // --- שיקום בטון (Concrete Repair) ---
    {
        name: "Sika MonoTop 610",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "פריימר הגנה לברזל זיון מפני קורוזיה ושכבת קישור לבטון ישן.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sika_monotop_-610.jpg",
        tech: { coverage: "2 ק\"ג/מ\"ר", drying: "2-3 שעות", thickness: "1 מ\"מ" },
        features: ["מונע חלודה", "גשר הדבקה", "יישום בהברשה"]
    },
    {
        name: "Sika MonoTop 612 (Rep)",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "מלט לתיקון בטון, משוריין בסיבים, לתיקונים קונסטרוקטיביים עמוקים ללא טפסנות.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sika_monotop_-612.jpg",
        tech: { coverage: "18 ק\"ג/מ\"ר/ס\"מ", drying: "24 שעות", thickness: "5-30 מ\"מ" },
        features: ["לא שוקע", "חוזק גבוה", "קל ליישום"]
    },
    {
        name: "Sika MonoTop 620",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "שפכטל צמנטי להחלקה וגימור של בטון וטיח. אוטם וסוגר סדקים נימיים.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sika_monotop_-620.jpg",
        tech: { coverage: "1.5 ק\"ג/מ\"ר", drying: "4 שעות", thickness: "1-3 מ\"מ" },
        features: ["גימור חלק", "עמיד במים", "צבע בטון"]
    },
    {
        name: "SikaGrout 214",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "דיוס צמנטי (גראוט) בעל חוזק גבוה והתפשטות מבוקרת. לעיגון מכונות ועמודים.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikagrout_-214.jpg",
        tech: { coverage: "20 ק\"ג/ליטר", drying: "24 שעות", thickness: "10-100 מ\"מ" },
        features: ["זרימה מעולה", "חוזק סופי אדיר", "לא מתכווץ"]
    },
    {
        name: "Sika MonoTop 412 N",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "חומר לשיקום בטון בשיטת הרטוב-על-רטוב, מתאים במיוחד לסביבה ימית ואגרסיבית.",
        image: "https://placehold.co/300x300?text=MonoTop412",
        tech: { coverage: "18 ק\"ג/מ\"ר", drying: "12 שעות", thickness: "עד 50 מ\"מ" },
        features: ["עמיד בסולפטים", "התכווצות נמוכה", "יישום עבה"]
    },
    {
        name: "Sika FerroGard 903",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "מעכב קורוזיה נוזלי החודר לבטון ומגן על הברזל מבפנים. אידיאלי למבנים ישנים.",
        image: "https://placehold.co/300x300?text=FerroGard",
        tech: { coverage: "0.5 ק\"ג/מ\"ר", drying: "ספיגה", thickness: "-" },
        features: ["חודר עמוק", "ללא שינוי מראה", "מאריך חיי מבנה"]
    },
    {
        name: "Sikadur 52",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "שרף אפוקסי דליל להזרקה ואיחוי סדקים בבטון. מחזיר למבנה את החוזק המקורי.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikadur_-52_injectiontype-n.jpg",
        tech: { coverage: "1 ק\"ג/ליטר", drying: "24 שעות", thickness: "סדקים" },
        features: ["חדירות גבוהה", "הדבקה מבנית", "מתאים ללחות"]
    },
    {
        name: "Sikadur 330",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "דבק אפוקסי להדבקת יריעות סיבי פחמן (SikaWrap) לחיזוק מבנים.",
        image: "https://placehold.co/300x300?text=Sikadur330",
        tech: { coverage: "0.7 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "-" },
        features: ["זמן עבודה ארוך", "הספגה מצוינת", "חוזק הדבקה"]
    },
    {
        name: "Sika Latex Super",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "תוסף לטקס לשיפור עבידות, הדבקה וגמישות של טיח ומלט.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sika_latex_super.jpg",
        tech: { coverage: "10% ממשקל המלט", drying: "-", thickness: "-" },
        features: ["משפר איטום", "מונע סדקים", "רב תכליתי"]
    },
    {
        name: "Sika ViscoCrete",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "על-פלסטיסייזר לבטון. מאפשר הפחתת מים משמעותית וקבלת בטון חזק ופלסטי.",
        image: "https://placehold.co/300x300?text=ViscoCrete",
        tech: { coverage: "0.5-2% ממשקל המלט", drying: "-", thickness: "-" },
        features: ["בטון זרימתי", "חוזק מוקדם", "חסכון במים"]
    },

    // --- ריצוף תעשייתי (Industrial Flooring) ---
    {
        name: "Sikafloor 264",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "ציפוי אפוקסי צבעוני רב תכליתי לרצפות בטון, מחסנים וחניונים. עמיד שחיקה.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikafloor_-264.jpg",
        tech: { coverage: "0.3 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "0.5 מ\"מ" },
        features: ["קל לניקוי", "עמיד כימיקלים", "גימור מבריק"]
    },
    {
        name: "Sikafloor 161",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "פריימר אפוקסי לכל מערכות הריצוף של סיקה. מבטיח הדבקה מושלמת לבטון.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikafloor_-161.jpg",
        tech: { coverage: "0.4 ק\"ג/מ\"ר", drying: "12 שעות", thickness: "-" },
        features: ["חודר לבטון", "צמיגות נמוכה", "בסיס חובה"]
    },
    {
        name: "Sikafloor 3 QuartzTop",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "אבקת שחיקה (מקשיח) לפיזור על בטון טרי. הופכת את הרצפה לחזקה ועמידה לשחיקה.",
        image: "https://placehold.co/300x300?text=QuartzTop",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "-", thickness: "-" },
        features: ["מונע אבק", "מגוון צבעים", "עמיד בשמן"]
    },
    {
        name: "Sikafloor 235 ESD",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "ציפוי אפוקסי אנטי-סטטי (ESD). חובה בחדרי שרתים, אלקטרוניקה ונפיצים.",
        image: "https://placehold.co/300x300?text=ESD+Floor",
        tech: { coverage: "2.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "1.5 מ\"מ" },
        features: ["מוליך חשמל", "מגן על ציוד", "חלק וקל לניקוי"]
    },
    {
        name: "Sikagard 850 AG",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "ציפוי אנטי-גרפיטי שקוף ונושם. גרפיטי ולייזרים פשוט לא נתפסים עליו.",
        image: "https://placehold.co/300x300?text=AntiGraffiti",
        tech: { coverage: "0.2 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "-" },
        features: ["דוחה צבע", "עמיד UV", "יישום פשוט"]
    },

    // --- מוצרים משלימים (Complementary) ---
    {
        name: "Sikasil C",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "סיליקון ניטרלי סניטרי. עמיד בעובש ופטריות, מושלם לאמבטיות ומטבחים.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikasil_-c.jpg",
        tech: { coverage: "לפי אורך", drying: "3 מ\"מ/24 שעות", thickness: "-" },
        features: ["אנטי-פטרייתי", "לא משחיר", "ריח ניטרלי"]
    },
    {
        name: "Sika Boom",
        brand: "Sika",
        category: "חומרי עזר",
        marketingDesc: "קצף פוליאוריטן מתנפח למילוי חללים, בידוד וקיבוע משקופים.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sika_boom_-582_foamfix.jpg",
        tech: { coverage: "40 ליטר נפח", drying: "40 דקות", thickness: "-" },
        features: ["בידוד תרמי", "התפשטות גבוהה", "רב פעמי"]
    },
    {
        name: "SikaBond FoamFix",
        brand: "Sika",
        category: "דבקים",
        marketingDesc: "קצף הדבקה מהיר ללוחות בידוד וקלקר. חוסך קידוחים וברגים.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sika_boom_-582_foamfix.jpg",
        tech: { coverage: "13 מ\"ר למיכל", drying: "שעה", thickness: "-" },
        features: ["הדבקה מהירה", "לא ממיס קלקר", "חזק"]
    },
    {
        name: "Sikaflex Crystal Clear",
        brand: "Sika",
        category: "דבקים",
        marketingDesc: "דבק-איטום שקוף לחלוטין. להדבקות אסתטיות של זכוכית ופלסטיק.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikaflex_crystalclear.jpg",
        tech: { coverage: "נקודתי", drying: "24 שעות", thickness: "-" },
        features: ["שקוף 100%", "גמיש", "נשאר צלול"]
    },
    {
        name: "Sika Ceram 500 Ceralastic",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "דבק ואיטום במוצר אחד! חוסך זמן יקר במרפסות וחדרים רטובים.",
        image: "https://placehold.co/300x300?text=Ceralastic",
        tech: { coverage: "3 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3 מ\"מ" },
        features: ["מהיר", "איטום והדבקה", "גמיש מאוד"]
    },
    
    // מוצרים נוספים להשלמה ל-50
    {
        name: "Sika Screed Binder",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "צמנט ליצירת מדה מתפלסת וסומסום מחוזק. לייבוש מהיר לפני ריצוף.",
        image: "https://placehold.co/300x300?text=Screed",
        tech: { coverage: "משתנה", drying: "24 שעות", thickness: "10-100 מ\"מ" },
        features: ["ייבוש בזק", "חוזק גבוה", "מוכן לריצוף מהר"]
    },
    {
        name: "Sika Mur InjectoCream",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "קרם להזרקה נגד רטיבות קפילרית (עלייה קפילרית) בקירות ישנים.",
        image: "https://placehold.co/300x300?text=InjectoCream",
        tech: { coverage: "לפי עובי קיר", drying: "-", thickness: "-" },
        features: ["מחסום לחות", "יישום פשוט", "מרוכז"]
    },
    {
        name: "Sikafloor ProSeal",
        brand: "Sika",
        category: "ריצוף",
        marketingDesc: "סילר ואשפרה לבטון טרי. שומר על הלחות ומונע סדקים בבטון מוחלק.",
        image: "https://placehold.co/300x300?text=ProSeal",
        tech: { coverage: "0.15 ליטר/מ\"ר", drying: "2 שעות", thickness: "-" },
        features: ["שקוף/מבריק", "מונע אבק", "אשפרה מיידית"]
    },
    {
        name: "Sika CarboDur",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "לוחות פחמן (קרבון) לחיזוק קורות ותקרות בטון. הפתרון ההנדסי המתקדם ביותר.",
        image: "https://heb.sika.com/content/dam/dms/il01/f/sikacarbodur_s.jpg",
        tech: { coverage: "לפי תכנון", drying: "-", thickness: "1.2 מ\"מ" },
        features: ["קל משקל", "חזק מפלדה", "לא מחליד"]
    },
    {
        name: "Sika BlackSeal",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "מסטיק ביטומני לאיטום גגות ותיקונים על יריעות ביטומניות.",
        image: "https://placehold.co/300x300?text=BlackSeal",
        tech: { coverage: "לפי אורך", drying: "24 שעות", thickness: "-" },
        features: ["נדבק לזפת", "עמיד בשמש", "שחור"]
    },
    {
        name: "Sika Primer 206 G+P",
        brand: "Sika",
        category: "דבקים",
        marketingDesc: "פריימר שחור לשיפור הדבקה על זכוכית, פלסטיק ומתכות. חובה בהדבקת שמשות.",
        image: "https://placehold.co/300x300?text=Primer206",
        tech: { coverage: "דק מאוד", drying: "10 דקות", thickness: "-" },
        features: ["הגנה מ-UV", "הדבקה כימית", "מתייבש מהר"]
    },
    {
        name: "Sika ThermoCoat",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "טיח תרמי לבידוד קירות חוץ. חוסך אנרגיה ומונע גשרי קור.",
        image: "https://placehold.co/300x300?text=ThermoCoat",
        tech: { coverage: "13 ק\"ג/מ\"ר", drying: "48 שעות", thickness: "20-50 מ\"מ" },
        features: ["בידוד חום/קור", "נושם", "קל משקל"]
    },
    {
        name: "SikaCor",
        brand: "Sika",
        category: "בטון",
        marketingDesc: "צבע הגנה לפלדה מבנית. מגן מפני קורוזיה בתנאים קשים.",
        image: "https://placehold.co/300x300?text=SikaCor",
        tech: { coverage: "0.2 ק\"ג/מ\"ר", drying: "6 שעות", thickness: "80 מיקרון" },
        features: ["עמידות ימית", "אפוקסי/פוליאוריטן", "גוונים רבים"]
    },
    {
        name: "Sika Firesil",
        brand: "Sika",
        category: "איטום",
        marketingDesc: "סיליקון עמיד אש לאיטום מעברי אש ופתחים במבני ציבור.",
        image: "https://placehold.co/300x300?text=Firesil",
        tech: { coverage: "לפי תקן", drying: "24 שעות", thickness: "-" },
        features: ["עמיד ב-1000 מעלות", "מעכב בעירה", "תקן אש"]
    },
    {
        name: "Sika Cleaner P",
        brand: "Sika",
        category: "חומרי עזר",
        marketingDesc: "נוזל ניקוי לתשתיות לא סופגות (פלסטיק, מתכת) לפני הדבקה.",
        image: "https://placehold.co/300x300?text=CleanerP",
        tech: { coverage: "-", drying: "מיידי", thickness: "-" },
        features: ["מתנדף מהר", "ללא שומן", "שקוף"]
    }
];

// --- פקודה לטעינת הנתונים למאגר (יש להריץ פעם אחת בקונסול) ---
// window.safeApp.seedProducts(sikaProductsFull);
