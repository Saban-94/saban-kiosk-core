const thermokirProducts = [
    // --- איטום (Waterproofing - SE) ---
    {
        name: "איטום 993 (SE 993 XR)",
        brand: "Thermokir",
        category: "איטום",
        marketingDesc: "משחת איטום פוליאוריטנית היברידית חד-רכיבית. עמידה במים עומדים וקרינת UV. הפתרון המושלם לגגות ומרפסות חשופות.",
        image: "https://placehold.co/300x300?text=SE+993",
        tech: { coverage: "1.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "1-2 מ\"מ" },
        features: ["עמיד UV", "מים עומדים", "ללא סולבנטים"]
    },
    {
        name: "אלסטוסיל 980 (SE 980)",
        brand: "Thermokir",
        category: "איטום",
        marketingDesc: "איטום צמנטי דו-רכיבי גמיש במיוחד. מאושר לאיטום מאגרי מי שתייה, בריכות, מרפסות וחדרים רטובים.",
        image: "https://placehold.co/300x300?text=SE+980",
        tech: { coverage: "2.5 ק\"ג/מ\"ר", drying: "6-8 שעות", thickness: "2-3 מ\"מ" },
        features: ["מאושר מי שתייה", "גמיש מאוד", "עמיד בלחץ"]
    },
    {
        name: "איטום 992 (SE 992 XR)",
        brand: "Thermokir",
        category: "איטום",
        marketingDesc: "חומר איטום ביטומני-פוליאוריטני משחתי. אידיאלי לאיטום רצפות חדרים רטובים, מרתפים וקורות מסד.",
        image: "https://placehold.co/300x300?text=SE+992",
        tech: { coverage: "2 ק\"ג/מ\"ר", drying: "4-6 שעות", thickness: "2 מ\"מ" },
        features: ["ייבוש מהיר", "גמישות גבוהה", "הידבקות מעולה"]
    },
    {
        name: "איטום 963 (SE 963)",
        brand: "Thermokir",
        category: "איטום",
        marketingDesc: "מסטיק סיליקון ניטרלי לאיטום תפרים וחיבורים. אינו מכתים אבן ושיש, עמיד ב-UV ובתנאי חוץ.",
        image: "https://placehold.co/300x300?text=SE+963",
        tech: { coverage: "לפי אורך", drying: "24 שעות", thickness: "-" },
        features: ["לא מכתים", "עמיד UV", "גמיש תמיד"]
    },
    {
        name: "תרמוסיל 975 (SE 975)",
        brand: "Thermokir",
        category: "איטום",
        marketingDesc: "ציפוי צמנטי לאיטום גב האבן בשיטת ברנוביץ' או הדבקה רטובה. מונע מעבר רטיבות והכתמה של האבן.",
        image: "https://placehold.co/300x300?text=SE+975",
        tech: { coverage: "2 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "1-2 מ\"מ" },
        features: ["אוטם אבן", "מקשר חזק", "מונע כתמים"]
    },
    {
        name: "סרט איטום 944 (SE 944)",
        brand: "Thermokir",
        category: "איטום",
        marketingDesc: "סרט איטום אלסטי לחיזוק והגמשת האיטום בחיבורי רצפה-קיר (רולקות) ותפרים.",
        image: "https://placehold.co/300x300?text=SE+944",
        tech: { coverage: "לפי מטר רץ", drying: "-", thickness: "-" },
        features: ["גמיש", "עמיד בכימיקלים", "משלים מערכת"]
    },
    {
        name: "צווארון איטום 943 (SE 943)",
        brand: "Thermokir",
        category: "איטום",
        marketingDesc: "אלמנט איטום גמיש לאיטום סביב צנרת חודרת בקירות ורצפות. מבטיח אטימה הרמטית.",
        image: "https://placehold.co/300x300?text=SE+943",
        tech: { coverage: "יחידה", drying: "-", thickness: "-" },
        features: ["מוכן לשימוש", "קל להתקנה", "אטימה בטוחה"]
    },
    
    // --- טיח וגמר (Plaster - PL/TH) ---
    {
        name: "טיח תרמי 200 (TH 200)",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "טיח תרמי מבודד לחיסכון באנרגיה. מונע גשרי קור ועיבוי, יוצר סביבת מגורים נעימה.",
        image: "https://placehold.co/300x300?text=TH+200",
        tech: { coverage: "10 ק\"ג/מ\"ר", drying: "48 שעות", thickness: "20-50 מ\"מ" },
        features: ["בידוד תרמי", "חוסך חשמל", "בנייה ירוקה"]
    },
    {
        name: "טיח תרמי אקוסטי 400 (TH 400)",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "טיח המשלב בידוד תרמי ובידוד אקוסטי. מפחית רעשים בצורה משמעותית בין חדרים וקומות.",
        image: "https://placehold.co/300x300?text=TH+400",
        tech: { coverage: "8 ק\"ג/מ\"ר", drying: "48 שעות", thickness: "30 מ\"מ" },
        features: ["בידוד רעש", "בידוד חום", "קל משקל"]
    },
    {
        name: "הרבצה 100 (PL 100)",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "שכבת יסוד צמנטית (הרבצה) לאיטום ויישור ראשוני של קירות בלוקים ובטון לפני טיח.",
        image: "https://placehold.co/300x300?text=PL+100",
        tech: { coverage: "5-6 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "4-6 מ\"מ" },
        features: ["אוטם קיר", "בסיס חזק", "עמיד בלחות"]
    },
    {
        name: "טיח מיישר 102 (PL 102)",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "טיח צמנטי ליישור קירות פנים וחוץ. נוח ליישום ומתאים לכל סוגי הבלוקים.",
        image: "https://placehold.co/300x300?text=PL+102",
        tech: { coverage: "14 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10-20 מ\"מ" },
        features: ["עבידות גבוהה", "לא נסדק", "תקן 1920"]
    },
    {
        name: "טיח לממ\"ד 102S (PL 102S)",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "טיח מיישר משופר המיועד במיוחד לקירות בטון וממ\"דים. בעל תו תקן פיקוד העורף.",
        image: "https://placehold.co/300x300?text=PL+102S",
        tech: { coverage: "15 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10-15 מ\"מ" },
        features: ["מאושר ממ\"ד", "הדבקה לבטון", "חזק במיוחד"]
    },
    {
        name: "שפכטל 182 (PL 182)",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "שפכטל צמנטי לבן להחלקה חיצונית ופנימית. עמיד בלחות ומים, גימור חלק במיוחד.",
        image: "https://placehold.co/300x300?text=PL+182",
        tech: { coverage: "1.2 ק\"ג/מ\"ר", drying: "4 שעות", thickness: "1-2 מ\"מ" },
        features: ["לבן צחור", "עמיד במים", "גימור קטיפתי"]
    },
    {
        name: "טיח סלע 170 (PL 170)",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "טיח דבק משוריין להדבקת לוחות בידוד (קלקר) וביצוע שכבת הרבצה משוריינת על גביהם.",
        image: "https://placehold.co/300x300?text=PL+170",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "4-5 מ\"מ" },
        features: ["משוריין סיבים", "נדבק לקלקר", "גמיש"]
    },
    {
        name: "טיח גבס 130 (PL 130)",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "טיח גבס ליישור והחלקה של קירות פנים ותקרות. מעניק בידוד וגימור חלק.",
        image: "https://placehold.co/300x300?text=PL+130",
        tech: { coverage: "9 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10 מ\"מ" },
        features: ["גימור לבן", "נוח ליישום", "מתייבש מהר"]
    },

    // --- דבקים וריצוף (Adhesives - FL) ---
    {
        name: "ריצופית סופר 810 (FL 810)",
        brand: "Thermokir",
        category: "דבקים",
        marketingDesc: "דבק צמנטי C2TE להדבקת אריחי קרמיקה ופורצלן. מתאים לשימוש פנים וחוץ.",
        image: "https://placehold.co/300x300?text=FL+810",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3-5 מ\"מ" },
        features: ["חוזק הדבקה", "זמן עבודה ארוך", "שימוש כללי"]
    },
    {
        name: "ריצופית טופ 820 (FL 820)",
        brand: "Thermokir",
        category: "דבקים",
        marketingDesc: "דבק גמיש במיוחד (S1) לאריחים גדולים, חיפוי אבן ושיש. סופג תזוזות ומאמצים.",
        image: "https://placehold.co/300x300?text=FL+820",
        tech: { coverage: "5-7 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "עד 10 מ\"מ" },
        features: ["גמישות S1", "לאבן ושיש", "ללא שקיעה"]
    },
    {
        name: "דבק מהיר 830 (FL 830)",
        brand: "Thermokir",
        category: "דבקים",
        marketingDesc: "דבק צמנטי מהיר ייבוש. מאפשר דריכה ורובה לאחר שעות ספורות. לתיקונים ולוחות זמנים צפופים.",
        image: "https://placehold.co/300x300?text=FL+830",
        tech: { coverage: "5 ק\"ג/מ\"ר", drying: "3-4 שעות", thickness: "3-5 מ\"מ" },
        features: ["ייבוש בזק", "חוזק מהיר", "חוסך זמן"]
    },
    {
        name: "פלסטומר 603",
        brand: "Thermokir",
        category: "דבקים",
        marketingDesc: "דבק צמנטי C2T ותיק להדבקת קרמיקה, פסיפס ובריקים. מוצר אמין ומוכח.",
        image: "https://placehold.co/300x300?text=603",
        tech: { coverage: "4-5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3-5 מ\"מ" },
        features: ["אמין", "נדבק חזק", "נוח למריחה"]
    },
    {
        name: "מדה מתפלסת 710 (FL 710)",
        brand: "Thermokir",
        category: "ריצוף",
        marketingDesc: "תערובת מתפלסת ליישור רצפות בטון לפני הדבקת פרקט, PVC או שטיחים.",
        image: "https://placehold.co/300x300?text=FL+710",
        tech: { coverage: "1.6 ק\"ג/מ\"ר/מ\"מ", drying: "24 שעות", thickness: "1-10 מ\"מ" },
        features: ["זרימה מעולה", "פני שטח חלקים", "חוזק גבוה"]
    },
    {
        name: "כוחלה 900",
        brand: "Thermokir",
        category: "ריצוף",
        marketingDesc: "רובה אקרילית למילוי מישקים ברוחב 2-10 מ\"מ. דוחה מים, מונעת סדקים ומגיעה במגוון גוונים.",
        image: "https://placehold.co/300x300?text=Koc900",
        tech: { coverage: "0.5 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "2-10 מ\"מ" },
        features: ["דוחה מים", "עמיד בשחיקה", "צבעים עמידים"]
    },
    
    // --- שיקום בטון (Concrete Repair - CR) ---
    {
        name: "שיקום 080 (CR 080)",
        brand: "Thermokir",
        category: "בטון",
        marketingDesc: "חומר הגנה לברזל זיון (פריימר). מונע חלודה ומקשר בין הברזל לבטון השיקום.",
        image: "https://placehold.co/300x300?text=CR+080",
        tech: { coverage: "0.2 ק\"ג/מ\"ר", drying: "שעה", thickness: "1 מ\"מ" },
        features: ["מונע קורוזיה", "מקשר חזק", "יישום קל"]
    },
    {
        name: "שיקום 082 (CR 082)",
        brand: "Thermokir",
        category: "בטון",
        marketingDesc: "מלט לתיקון בטון קונסטרוקטיבי ללא התכווצות. לשיקום עמודים, קורות ורצפות.",
        image: "https://placehold.co/300x300?text=CR+082",
        tech: { coverage: "18 ק\"ג/מ\"ר/ס\"מ", drying: "24 שעות", thickness: "10-40 מ\"מ" },
        features: ["חוזק לחיצה גבוה", "לא מתכווץ", "סיבים משוריינים"]
    },
    {
        name: "שיקום 088 (CR 088)",
        brand: "Thermokir",
        category: "בטון",
        marketingDesc: "שפכטל צמנטי להחלקה ופיניש של בטון (סגרגציות). נותן מראה בטון אחיד וחלק.",
        image: "https://placehold.co/300x300?text=CR+088",
        tech: { coverage: "1.5 ק\"ג/מ\"ר", drying: "3 שעות", thickness: "1-3 מ\"מ" },
        features: ["גימור בטון", "שיוף קל", "אוטם נקבוביות"]
    },
    {
        name: "גראוט צמנטי 085",
        brand: "Thermokir",
        category: "בטון",
        marketingDesc: "דיוס צמנטי זרימתי לעיגון מכונות, עמודים ומילוי חללים בדיוק רב.",
        image: "https://placehold.co/300x300?text=Grout085",
        tech: { coverage: "2000 ק\"ג/ק\"וב", drying: "24 שעות", thickness: "20-100 מ\"מ" },
        features: ["זרימה עצמית", "התפשטות מבוקרת", "חוזק אדיר"]
    },

    // --- פריימרים והכנה (Primers) ---
    {
        name: "פריימר 002 (PR 002)",
        brand: "Thermokir",
        category: "חומרי עזר",
        marketingDesc: "פריימר אקרילי לחיזוק תשתיות סופגות ושיפור ההדבקה לפני יישום דבקים או טיח.",
        image: "https://placehold.co/300x300?text=PR+002",
        tech: { coverage: "150 גרם/מ\"ר", drying: "שעה", thickness: "-" },
        features: ["מחזק תשתית", "קושר אבק", "מרוכז"]
    },
    {
        name: "פריימר 003 (PR 003)",
        brand: "Thermokir",
        category: "חומרי עזר",
        marketingDesc: "פריימר ייעודי לתשתיות חלשות ומתפוררות. חודר לעומק ומייצב את התשתית.",
        image: "https://placehold.co/300x300?text=PR+003",
        tech: { coverage: "200 גרם/מ\"ר", drying: "2-3 שעות", thickness: "-" },
        features: ["חדירה עמוקה", "ייצוב טיח ישן", "שקוף"]
    },
    {
        name: "פריימר 005 (PR 005)",
        brand: "Thermokir",
        category: "חומרי עזר",
        marketingDesc: "פריימר עם אגרגט (חול) לשיפור אחיזה על בטון חלק לפני הדבקה או טיח.",
        image: "https://placehold.co/300x300?text=PR+005",
        tech: { coverage: "250 גרם/מ\"ר", drying: "2 שעות", thickness: "-" },
        features: ["חספוס בטון", "הדבקה מכאנית", "מוכן לשימוש"]
    },

    // --- מוצרים נוספים (Additional) ---
    {
        name: "פלסטומר 600",
        brand: "Thermokir",
        category: "דבקים",
        marketingDesc: "דבק צמנטי בסיסי להדבקת אריחי קרמיקה סופגים על קירות ורצפות פנים.",
        image: "https://placehold.co/300x300?text=600",
        tech: { coverage: "4 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "3-5 מ\"מ" },
        features: ["חסכוני", "נוח לעבודה", "פנים בלבד"]
    },
    {
        name: "שליכט צבעוני 300",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "ציפוי אקרילי דקורטיבי (שליכט) לקירות חוץ ופנים. עמיד בגשם, שמש וסדיקה.",
        image: "https://placehold.co/300x300?text=Schlicht300",
        tech: { coverage: "2-3 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "לפי טקסטורה" },
        features: ["מגוון טקסטורות", "גמיש", "רחיץ"]
    },
    {
        name: "צבע אקרילי 400",
        brand: "Thermokir",
        category: "צבע",
        marketingDesc: "צבע אקרילי איכותי לקירות חוץ ופנים. כושר כיסוי גבוה ועמידות לאורך זמן.",
        image: "https://placehold.co/300x300?text=Paint400",
        tech: { coverage: "120 גרם/מ\"ר", drying: "שעתיים", thickness: "-" },
        features: ["רחיץ", "נושם", "גוון לבן בוהק"]
    },
    {
        name: "מדה מתפלסת לחוץ 720",
        brand: "Thermokir",
        category: "ריצוף",
        marketingDesc: "מדה מתפלסת עמידה ב-UV ורטיבות, ליישור משטחי בטון חיצוניים ומרפסות.",
        image: "https://placehold.co/300x300?text=FL+720",
        tech: { coverage: "1.7 ק\"ג/מ\"ר/מ\"מ", drying: "24 שעות", thickness: "3-15 מ\"מ" },
        features: ["עמיד חוץ", "חוזק שחיקה", "שיפועים"]
    },
    {
        name: "דבק בלוקים 140",
        brand: "Thermokir",
        category: "בנייה",
        marketingDesc: "דבק צמנטי להדבקת בלוקי גבס, איטונג ופומיס. הדבקה דקה וחזקה.",
        image: "https://placehold.co/300x300?text=Block140",
        tech: { coverage: "3 ק\"ג/מ\"ר", drying: "4 שעות", thickness: "2-3 מ\"מ" },
        features: ["זמן עבידות", "הדבקה מדויקת", "ללא גשר קור"]
    },
    {
        name: "טיח גבס ירוק 131",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "טיח גבס עמיד לחות לחדרים רטובים (אמבטיות ומטבחים).",
        image: "https://placehold.co/300x300?text=PL+131",
        tech: { coverage: "10 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "10 מ\"מ" },
        features: ["עמיד לחות", "מונע עובש", "גימור חלק"]
    },
    {
        name: "סילר 955",
        brand: "Thermokir",
        category: "איטום",
        marketingDesc: "סילר שקוף להגנה על אבן, בטון ורובה. אינו משנה את גוון התשתית.",
        image: "https://placehold.co/300x300?text=Sealer955",
        tech: { coverage: "0.2 ליטר/מ\"ר", drying: "3 שעות", thickness: "-" },
        features: ["מראה טבעי", "דוחה מים", "נושם"]
    },
    {
        name: "טיח בגר 190",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "טיח דק ליישור והחלקה של קירות בטון יצוק. משמש כתחליף לטיח ושפכטל.",
        image: "https://placehold.co/300x300?text=PL+190",
        tech: { coverage: "1.5 ק\"ג/מ\"ר/מ\"מ", drying: "24 שעות", thickness: "1-5 מ\"מ" },
        features: ["החלקה ויישור", "חזק מאוד", "חוסך טיח"]
    },
    {
        name: "מוסף אקרילי (אדמיקס)",
        brand: "Thermokir",
        category: "חומרי עזר",
        marketingDesc: "תוסף נוזלי לשיפור תערובות מלט, טיח ובטון. משפר גמישות והדבקה.",
        image: "https://placehold.co/300x300?text=Admix",
        tech: { coverage: "10-20% מהמלט", drying: "-", thickness: "-" },
        features: ["משפר איטום", "מונע סדקים", "רב תכליתי"]
    },
    {
        name: "בטון מוכן 500",
        brand: "Thermokir",
        category: "בטון",
        marketingDesc: "תערובת בטון מוכנה בשק ליציקות קטנות, תיקונים וביטונים.",
        image: "https://placehold.co/300x300?text=Beton500",
        tech: { coverage: "20 ק\"ג/ס\"מ/מ\"ר", drying: "24 שעות", thickness: "סנטימטרים" },
        features: ["רק להוסיף מים", "חוזק ב-30", "נקי"]
    },
    {
        name: "שומשום 510",
        brand: "Thermokir",
        category: "ריצוף",
        marketingDesc: "תערובת ליצירת מדה מתפלסת גסה (שומשום) ולמילוי והגבהת ריצוף.",
        image: "https://placehold.co/300x300?text=Sumsum510",
        tech: { coverage: "16 ק\"ג/מ\"ר/ס\"מ", drying: "24 שעות", thickness: "2-8 ס\"מ" },
        features: ["קל משקל", "מבודד", "תשתית לריצוף"]
    },
    {
        name: "דבק שיש 850",
        brand: "Thermokir",
        category: "דבקים",
        marketingDesc: "דבק חזק במיוחד להדבקת שיש, אבן טבעית ולוחות כבדים.",
        image: "https://placehold.co/300x300?text=Marble850",
        tech: { coverage: "6 ק\"ג/מ\"ר", drying: "24 שעות", thickness: "5-15 מ\"מ" },
        features: ["מונע הכתמה", "אחיזה חזקה", "עמיד"]
    },
    {
        name: "הרבצה צבעונית 101",
        brand: "Thermokir",
        category: "טיח",
        marketingDesc: "שכבת הרבצה שהיא גם גמר דקורטיבי במראה כפרי גס.",
        image: "https://placehold.co/300x300?text=PL+101",
        tech: { coverage: "8 ק\"ג/מ\"ר", drying: "48 שעות", thickness: "6-8 מ\"מ" },
        features: ["איטום וגמר", "מראה עתיק", "חוסך שלבים"]
    },
    {
        name: "צבע יסוד קושר 410",
        brand: "Thermokir",
        category: "צבע",
        marketingDesc: "צבע יסוד מקשר לפני יישום שליכט צבעוני. מבטיח הדבקה וגוון אחיד.",
        image: "https://placehold.co/300x300?text=Primer410",
        tech: { coverage: "0.2 ק\"ג/מ\"ר", drying: "3 שעות", thickness: "-" },
        features: ["מחוספס", "בגוון השליכט", "נושם"]
    },
    {
        name: "רובה אפוקסית 910",
        brand: "Thermokir",
        category: "ריצוף",
        marketingDesc: "רובה אפוקסית תעשייתית. עמידה לחומצות, שומנים וניקוי בלחץ.",
        image: "https://placehold.co/300x300?text=Epoxy910",
        tech: { coverage: "משתנה", drying: "12 שעות", thickness: "2-15 מ\"מ" },
        features: ["אנטי-בקטריאלי", "למטבחים", "חזק מאוד"]
    }
];

// פקודה לטעינה (להריץ בקונסול):
// window.safeApp.seedProducts(thermokirProducts);
