export interface Category {
  id: string;
  name: string;
}

export interface Subcategory {
  id: string;
  name: string;
}

export interface Recommendation {
  id: number;
  date: string;
  sender: string;
  message: string;
  category?: string;
  subcategory?: string;
}

export type RecommendationsData = {
  [key: string]: {
    [key: string]: Recommendation[];
  };
};

export type SubcategoriesData = {
  [key: string]: Subcategory[];
};

export const categoriesData: Category[] = [
  { id: 'events', name: 'אירועים' },
  { id: 'restaurants', name: 'מסעדות' },
  { id: 'activities', name: 'פעילויות' },
  { id: 'other', name: 'אחר' }
];

export const subcategoriesData: SubcategoriesData = {
  events: [
    { id: 'venues', name: 'מקומות' },
    { id: 'catering', name: 'קייטרינג' },
    { id: 'entertainment', name: 'בידור' }
  ],
  restaurants: [
    { id: 'casual', name: 'מסעדות רגילות' },
    { id: 'fine-dining', name: 'מסעדות יוקרה' },
    { id: 'cafes', name: 'קפה' }
  ],
  activities: [
    { id: 'outdoor', name: 'פעילויות חוץ' },
    { id: 'indoor', name: 'פעילויות פנים' },
    { id: 'sports', name: 'ספורט' }
  ]
};

export const recommendationsData: RecommendationsData = {
  events: {
    venues: [
      {
        id: 1,
        date: '2024-03-15',
        sender: 'דנה כהן',
        message: 'מקום נהדר לאירועים - גן אירועים ירוק עם נוף מדהים'
      }
    ],
    catering: [
      {
        id: 2,
        date: '2024-03-14',
        sender: 'יוסי לוי',
        message: 'קייטרינג מעולה עם תפריט מגוון ומחירים הוגנים'
      }
    ],
    entertainment: [
      {
        id: 3,
        date: '2024-03-13',
        sender: 'מירי שרון',
        message: 'להקת הבידור הייתה מצוינת, כולם נהנו מאוד'
      }
    ]
  },
  restaurants: {
    'casual': [
      {
        id: 4,
        date: '2024-03-12',
        sender: 'אבי דהן',
        message: 'מסעדה נחמדה עם אוכל טעים ומחירים סבירים'
      }
    ],
    'fine-dining': [
      {
        id: 5,
        date: '2024-03-11',
        sender: 'רונית גולן',
        message: 'חוויה קולינרית ייחודית, מומלץ בחום'
      }
    ],
    'cafes': [
      {
        id: 6,
        date: '2024-03-10',
        sender: 'דוד ישראלי',
        message: 'קפה מעולה עם עוגות טעימות'
      }
    ]
  },
  activities: {
    outdoor: [
      {
        id: 7,
        date: '2024-03-09',
        sender: 'שירה אברהם',
        message: 'טיול נהדר בטבע, מדריך מקצועי'
      }
    ],
    indoor: [
      {
        id: 8,
        date: '2024-03-08',
        sender: 'אלון ברק',
        message: 'חדר בריחה מאתגר ומהנה'
      }
    ],
    sports: [
      {
        id: 9,
        date: '2024-03-07',
        sender: 'נועה דרור',
        message: 'שיעור יוגה מעולה, מדריכה מקצועית'
      }
    ]
  },
  other: {
    general: [
      {
        id: 10,
        date: '2024-03-06',
        sender: 'עידן כהן',
        message: 'שירות מעולה, ממליץ בחום'
      }
    ]
  }
};