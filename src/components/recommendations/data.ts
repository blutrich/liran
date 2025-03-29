interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
}

interface Subcategory {
  id: string;
  name: string;
}

interface Recommendation {
  id: number;
  date: string;
  sender: string;
  message: string;
}

type RecommendationsData = {
  [key: string]: {
    [key: string]: Recommendation[];
  } | Recommendation[];
};

type SubcategoriesData = {
  [key: string]: Subcategory[];
};

// Main categories for recommendations
export const categoriesData: Category[] = [
  { id: 'events', name: 'Event Planning & Venues', icon: '🎪', color: '#FF5722' },
  { id: 'food', name: 'Food & Catering', icon: '🍽️', color: '#FF9800' },
  { id: 'prof-services', name: 'Professional Services', icon: '💼', color: '#2196F3' },
  { id: 'team-building', name: 'Team Building Activities', icon: '🤝', color: '#4CAF50' },
  { id: 'training', name: 'Training & Development', icon: '🎓', color: '#9C27B0' },
  { id: 'hr-tools', name: 'HR Tools & Software', icon: '⚙️', color: '#607D8B' },
  { id: 'recruitment', name: 'Recruitment & Hiring', icon: '👥', color: '#3F51B5' },
  { id: 'wellbeing', name: 'Wellbeing Programs', icon: '🧘', color: '#00BCD4' },
  { id: 'tech', name: 'Technology & IT', icon: '💻', color: '#795548' },
  { id: 'gifts', name: 'Corporate Gifts & Swag', icon: '🎁', color: '#E91E63' },
  { id: 'other', name: 'Other Recommendations', icon: '📋', color: '#9E9E9E' }
];

// Subcategories for recommendations
export const subcategoriesData: SubcategoriesData = {
  'events': [
    { id: 'venues', name: 'Venues & Locations' },
    { id: 'photographers', name: 'Photographers & Videographers' },
    { id: 'entertainment', name: 'Entertainment & Performers' },
    { id: 'decorations', name: 'Event Decorations & Theming' },
    { id: 'holiday', name: 'Holiday Events (Purim, Passover, etc.)' }
  ],
  'food': [
    { id: 'restaurants', name: 'Restaurants' },
    { id: 'catering', name: 'Catering Services' },
    { id: 'specialty-food', name: 'Specialty Food & Treats' },
    { id: 'kosher', name: 'Kosher Options' },
    { id: 'drinks', name: 'Drinks & Cocktails' }
  ],
  'prof-services': [
    { id: 'vendors', name: 'Vendors & Suppliers' },
    { id: 'production', name: 'Production Companies' },
    { id: 'consultants', name: 'Consultants & Experts' },
    { id: 'branding', name: 'Branding & Merch' },
    { id: 'printing', name: 'Printing Services' }
  ],
  'team-building': [
    { id: 'activities', name: 'Team Activities & Games' },
    { id: 'retreats', name: 'Offsite & Retreats' },
    { id: 'workshops', name: 'Team Workshops' },
    { id: 'volunteer', name: 'Volunteer Opportunities' }
  ],
  'training': [
    { id: 'speakers', name: 'Speakers & Presenters' },
    { id: 'courses', name: 'Courses & Programs' },
    { id: 'coaching', name: 'Coaching & Mentoring' },
    { id: 'leadership', name: 'Leadership Development' }
  ],
  'hr-tools': [
    { id: 'software', name: 'HR Software' },
    { id: 'surveys', name: 'Survey & Feedback Tools' },
    { id: 'management', name: 'Management Systems' }
  ],
  'recruitment': [
    { id: 'agencies', name: 'Recruitment Agencies' },
    { id: 'resources', name: 'Recruitment Resources' },
    { id: 'cv', name: 'CV & Resume Services' }
  ],
  'wellbeing': [
    { id: 'health', name: 'Health & Wellness' },
    { id: 'mental-health', name: 'Mental Health Support' },
    { id: 'work-life', name: 'Work-Life Balance' }
  ],
  'tech': [
    { id: 'equipment', name: 'Equipment & Hardware' },
    { id: 'support', name: 'IT Support' },
    { id: 'digital', name: 'Digital Services' }
  ],
  'gifts': [
    { id: 'employee-gifts', name: 'Employee Gifts' },
    { id: 'branded', name: 'Branded Merchandise' },
    { id: 'special-occasions', name: 'Special Occasions & Holidays' }
  ]
};

// Sample recommendations data - structured by category and subcategory
export const recommendationsData: RecommendationsData = {
  'events': {
    'venues': [
      { id: 1, date: '24/11/2024', sender: '~ Michal Sidi', message: 'היי 🙂 המלצות לגג הכי שווה בתל אביב לאירוע?? רצוי עם נוף מהמם, לערב חברה - 40 איש 💞 תודה 😇ֿ' },
      { id: 2, date: '25/11/2024', sender: 'Liran Wolf לירן וולף', message: 'המלצה למקום לאירוע ל-400 איש' },
      { id: 3, date: '25/11/2024', sender: '~ אופיר', message: 'המלצה למקום מגניבבב בתל אביב לעשות בו אופסייט ?' },
      { id: 4, date: '26/01/2025', sender: '~ Keren', message: 'עשינו אירוע סופשנה מקסים במתחם האירועים של חופית, צומת M הדרך על יד חוף ינאי ומכמורת והיה לנו מושלם! ממליצה.' },
      { id: 5, date: '26/01/2025', sender: '~ Bar Hershkovich🌻', message: 'אשמח להמלצה ל*מקום כשר* לקיום אירוע פסח לכ-60 בתל אביב בבקשה ❤️ (חדרפרטי היינו כבר-בלי קשר ממליצה למי שלא סגר שם🙂 )' }
    ],
    'photographers': [
      { id: 6, date: '14/08/2024', sender: '~ Gal Israel', message: 'ממליצה שתבדקי עם כפיר זיו. צלם בחסד.' },
      { id: 7, date: '08/12/2024', sender: '~ Yasmin', message: 'יש לי המלצה על צלם אלוף, עושה איתו הרבה אירועים. גם מקצועי גם בנאדם מקסים ומחיר שפוי.' },
      { id: 8, date: '15/12/2024', sender: '~ mayaShulman', message: 'מחפשת צלם סטילס לאירוע חברה קטן (תמונות אווירה מהאירוע שיעלו לאתר)- אשמח לעזרתכן! רק עם המלצה🥰' },
      { id: 9, date: '11/02/2025', sender: '~ אלינה', message: 'אני ממש לפרגן לצלם פשוט מדהים שהיה באירוע שעשיתי לאחרונה ואין לי מילים כמה אני מרוצה מהמחיר, האיכות והיחס.' },
      { id: 10, date: '06/02/2025', sender: '~ Liron Ziv', message: 'צריכה המלצה לצלם מגנטים לאירוע פורים' }
    ],
    'entertainment': [
      { id: 11, date: '19/08/2024', sender: 'Liran Wolf לירן וולף', message: 'למשהי יש המלצה לדיגי טוב למוזיקה לטינית' },
      { id: 12, date: '05/02/2025', sender: '~ Chen Rabi', message: 'מחפשת המלצה לצייר קריקטורות ודברים בסגנון שאפשר להביא לאירוע פורים' },
      { id: 13, date: '06/02/2025', sender: '~ Mor 🌻', message: 'היי, למישהי יש המלצה לאישה שעושה מופע מצחיק/ סדנה קומית?' },
      { id: 14, date: '03/03/2025', sender: '~ Goni Talias', message: 'המלצות לקוסם בשביל הופעה לילדי העובדים? 🤞🏻🤞🏻💐 גילאי 4-10 ככה' },
      { id: 15, date: '19/03/2025', sender: '~ Noa Shacham', message: 'מישהי הביאה לאירוע *קוראת בקלפים או מגדת עתידות* ויש לה המלצה?' }
    ],
    'holiday': [
      { id: 16, date: '19/08/2024', sender: '~ Or Berger', message: 'המלצה למקום חמוד להרמת כוסית ראש השנה בתל אביב?' },
      { id: 17, date: '31/12/2024', sender: '~ Oz', message: 'יש למישהי כאן המלצה לחברת הפקה טובה לאירוע פורים שאנחנו רוצים לעשות?' },
      { id: 18, date: '23/01/2025', sender: '~ לירב', message: 'היי לכולם, אשמח לקבל רעיונות והמלצות מה אתם מתכננים בפורים במשרד, בעבר הבאתי מאפרת למשרד שהיתה מאפרת את העובדים אך השנה בא לי לשנות' },
      { id: 19, date: '05/03/2025', sender: '~ Aya Piorko', message: 'המלצות לספק שיכול לעזור להקים HH בסגנון הוואי? רוצה בולים שווים, פחות שייקים' },
      { id: 20, date: '16/02/2025', sender: '~ Shira Tsimchi', message: 'למישהי יש המלצה על סדנא/פעילות לפורים? אפשר גם משהו שמגיע למשרד' }
    ]
  },
  'food': {
    'restaurants': [
      { id: 21, date: '15/10/2024', sender: '~ מרי', message: 'הי, אשמח להמלצה למסעדה / בית קפה כשר באזור פ"ת לארוחת בוקר לבסביבות 15 עובדים, עדיפות עם חדר פרטי או מקום שניתן לסגור בו אזור מסויים שיהיה רק עבורם 🙏 ‎<This message was edited>' },
      { id: 22, date: '14/11/2024', sender: '~ מרי', message: 'הי, יש למישהי אולי המלצה על מסעדת בשרים כשרה באזור פ"ת לסגירת מפגש ארוחת ערב לעובדים?' },
      { id: 23, date: '12/01/2025', sender: '~ Noa', message: 'בוקר טוב, אשמח להמלצה למסעדה כשרה באיזור הרצליה (נוף ים) ל25 אנשים. תודה 🙏' },
      { id: 24, date: '27/01/2025', sender: '~ 🍀Yasmin Omer🎗️', message: 'מחפשת המלצה למסעדה כשרה באזור המרכז לפרידה משני עובדים, בשרית עם אווירה כיפית ברמה של בית תאילנדי, גם אוירה וגם טעים 🙏תודה' },
      { id: 25, date: '16/02/2025', sender: '~ Ella 🦋', message: 'מחפשת המלצה למסעדה טובה באזור תל אביב והסביבה לטובת ארוחת ערב למנהלים אצלי, צריכה שיהיה ברמה!' }
    ],
    'catering': [
      { id: 26, date: '19/11/2024', sender: '~ Amit', message: 'היי, אשמח להמלצה לקייטרינג חלבי מומלץ באיזור המרכז, בדגש על כשרות בד"ץ העדה החרדית. תודה ! ‎<This message was edited>' },
      { id: 27, date: '15/01/2025', sender: '~ Noa', message: 'מישהי הזמינה מקייטרינג גליס ויש לה המלצה/דיס המלצה?' },
      { id: 28, date: '19/03/2025', sender: '~ Noa', message: 'היי, למישהי יש המלצה/דיס המלצה על הקייטרינג של רנטליין?' },
      { id: 29, date: '25/03/2025', sender: 'Sharon שרון מיכלזון Michelzon', message: 'אשמח לקבל מכם המלצה על קטרינג לארוחת בוקר מפנקת ל200 עובדים במשרדי החברה.' },
      { id: 30, date: '23/03/2025', sender: "~ Ma'ayan Harel-Knafel", message: 'יש לכן המלצה לקייטרינג חלבי עשיר ומגוון? 🙏🏻' }
    ],
    'specialty-food': [
      { id: 31, date: '13/03/2025', sender: '~ Rotem Haim', message: 'המלצה מאיפה להזמין אוזני המן ללא גלוטן + טבעוני ליום שני?' },
      { id: 32, date: '14/03/2025', sender: '~ Limor Sherman', message: 'מישהי מכירה מקום טוב להזמנת עוגות מיוחדות לאירועים?' },
      { id: 33, date: '15/03/2025', sender: '~ Maya Cohen', message: 'המלצות לספק שעושה סושי במקום? רוצים להפתיע את העובדים' }
    ]
  },
  'prof-services': {
    'vendors': [
      { id: 34, date: '12/09/2024', sender: '~ Yaelyon', message: 'למישהי יש המלצה לבית דפוס לכמות קטנה של דברים, באזור תל אביב?' },
      { id: 35, date: '30/01/2025', sender: '~ Hagar Klein Peleg', message: 'למישהי יש המלצה על נהג הסעות?' },
      { id: 36, date: '03/03/2025', sender: '~ שרון חדד שלפר', message: 'היי, אשמח להמלצה על חברת הסעות בצפון לצורך שינוע חיילים' }
    ],
    'production': [
      { id: 37, date: '31/12/2024', sender: '~ Oz', message: 'יש למישהי כאן המלצה לחברת הפקה טובה לאירוע פורים שאנחנו רוצים לעשות?' },
      { id: 38, date: '15/01/2025', sender: '~ Tal', message: 'מחפשת חברת הפקה שיכולה לעזור לנו עם אירוע חברה גדול, כ-500 איש' }
    ]
  },
  'team-building': {
    'activities': [
      { id: 39, date: '16/02/2025', sender: '~ Shira Tsimchi', message: 'למישהי יש המלצה על סדנא/פעילות לפורים? אפשר גם משהו שמגיע למשרד' },
      { id: 40, date: '18/02/2025', sender: '~ Dana', message: 'מחפשת רעיונות לפעילות גיבוש למחלקה של 25 אנשים, משהו מגניב ושונה' }
    ],
    'workshops': [
      { id: 41, date: '06/02/2025', sender: '~ Mor 🌻', message: 'היי, למישהי יש המלצה לאישה שעושה מופע מצחיק/ סדנה קומית?' },
      { id: 42, date: '19/02/2025', sender: '~ Yael', message: 'מישהי עשתה סדנת שוקולד לצוות? אשמח להמלצות' }
    ]
  },
  'wellbeing': {
    'mental-health': [
      { id: 43, date: '18/03/2025', sender: '~ Limor Sherman', message: 'האם אתן עושות עמדת זכרון ביום השואה? אשמח לרעיונות / המלצות לספק' },
      { id: 44, date: '20/03/2025', sender: '~ Noa', message: 'מחפשת מרצה טוב/ה בנושא חוסן מנטלי, למפגש צוות' }
    ]
  },
  'other': [
    { id: 45, date: '19/03/2025', sender: '~ Noa Shacham', message: 'מישהי הביאה לאירוע *קוראת בקלפים או מגדת עתידות* ויש לה המלצה?' },
    { id: 46, date: '05/03/2025', sender: '~ Aya Piorko', message: 'המלצות לספק שיכול לעזור להקים HH בסגנון הוואי? רוצה בולים שווים, פחות שייקים' }
  ]
};