export interface Category {
  id: string;
  name: string;
  icon: string;
  color: string;
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
  } | Recommendation[];
};

export const categoriesData: Category[] = [
  { id: 'events', name: 'אירועים', icon: '🎉', color: '#FF6B6B' },
  { id: 'resources', name: 'משאבים ושירותים', icon: '📚', color: '#4ECDC4' },
  { id: 'benefits', name: 'רווחה והטבות', icon: '🎁', color: '#45B7D1' },
  { id: 'salary', name: 'שכר ותגמול', icon: '💰', color: '#96CEB4' },
  { id: 'jobs', name: 'הזדמנויות תעסוקה', icon: '💼', color: '#FFEEAD' },
  { id: 'other', name: 'אחר', icon: '📌', color: '#D4A5A5' },
];

export const subcategoriesData: { [key: string]: Subcategory[] } = {
  events: [
    { id: 'venues', name: 'מקומות' },
    { id: 'activities', name: 'פעילויות' },
    { id: 'workshops', name: 'סדנאות' },
  ],
  resources: [
    { id: 'tools', name: 'כלים' },
    { id: 'services', name: 'שירותים' },
    { id: 'platforms', name: 'פלטפורמות' },
  ],
  benefits: [
    { id: 'wellness', name: 'רווחה' },
    { id: 'perks', name: 'הטבות' },
    { id: 'programs', name: 'תוכניות' },
  ],
  salary: [
    { id: 'compensation', name: 'תגמול' },
    { id: 'bonuses', name: 'בונוסים' },
    { id: 'raises', name: 'העלאות' },
  ],
  jobs: [
    { id: 'positions', name: 'משרות' },
    { id: 'recruiters', name: 'מגייסים' },
    { id: 'companies', name: 'חברות' },
  ],
};

export const recommendationsData: RecommendationsData = {
  events: {
    venues: [
      {
        id: 1,
        date: '2024-04-15',
        sender: 'לירן וולף',
        message: 'ממליץ על מקום נהדר לאירועי צוות - "הגן הקסום" בתל אביב. יש להם חלל גדול, אוכל טוב, ואפשרות לפעילויות גיבוש.',
      },
      // Add more recommendations as needed
    ],
    activities: [
      {
        id: 2,
        date: '2024-04-16',
        sender: 'תומר ממן',
        message: 'היה לנו אירוע גיבוש מעולה עם חברת "משחקים ביחד". הם מספקים משחקי חברה ופעילויות גיבוש מהנות.',
      },
      // Add more recommendations as needed
    ],
    workshops: [
      {
        id: 3,
        date: '2024-04-17',
        sender: 'אופיר',
        message: 'השתתפתי בסדנת מדיטציה מעולה עם מיכל כהן. מומלץ בחום לאירועי רווחה לעובדים.',
      },
      // Add more recommendations as needed
    ],
  },
  resources: {
    tools: [
      {
        id: 4,
        date: '2024-04-18',
        sender: 'Dana',
        message: 'ממליצה על כלי ניהול משימות מעולה - Monday.com. עוזר מאוד בניהול פרויקטים ועמידה בלוחות זמנים.',
      },
      // Add more recommendations as needed
    ],
    services: [
      {
        id: 5,
        date: '2024-04-19',
        sender: 'Yv',
        message: 'תמשנו בשירותי הדרכה של "מפתחים יחד" - מקצועיים מאוד ומחירים הוגנים.',
      },
      // Add more recommendations as needed
    ],
    platforms: [
      {
        id: 6,
        date: '2024-04-20',
        sender: 'שירה בורנשטיין',
        message: 'ממליצה על פלטפורמת למידה - Udemy. יש שם קורסים מעולים במחירים טובים.',
      },
      // Add more recommendations as needed
    ],
  },
  benefits: {
    wellness: [
      {
        id: 7,
        date: '2024-04-21',
        sender: 'לירן וולף',
        message: 'חברתנו משתמשת בשירותי רווחה של "בריאות פלוס". הם מספקים תוכנית רווחה מקיפה לעובדים.',
      },
      // Add more recommendations as needed
    ],
    perks: [
      {
        id: 8,
        date: '2024-04-22',
        sender: 'תומר ממן',
        message: 'ממליץ על תוכנית הטבות של "כל הטוב". יש להם מבחר גדול של הטבות במחירים טובים.',
      },
      // Add more recommendations as needed
    ],
    programs: [
      {
        id: 9,
        date: '2024-04-23',
        sender: 'אופיר',
        message: 'השתתפתי בתוכנית רווחה של "מפתחים יחד". מאוד מרוצה מהתוצאות.',
      },
      // Add more recommendations as needed
    ],
  },
  salary: {
    compensation: [
      {
        id: 10,
        date: '2024-04-24',
        sender: 'Dana',
        message: 'ממליצה על יועץ שכר מעולה - דוד כהן. עזר לנו מאוד בהגדרת מבנה שכר הוגן.',
      },
      // Add more recommendations as needed
    ],
    bonuses: [
      {
        id: 11,
        date: '2024-04-25',
        sender: 'Yv',
        message: 'תמשנו במערכת בונוסים של "תגמול פלוס". מערכת נוחה ויעילה.',
      },
      // Add more recommendations as needed
    ],
    raises: [
      {
        id: 12,
        date: '2024-04-26',
        sender: 'שירה בורנשטיין',
        message: 'ממליצה על מדריך העלאות שכר של "HR פלוס". עזר לנו מאוד בתהליך.',
      },
      // Add more recommendations as needed
    ],
  },
  jobs: {
    positions: [
      {
        id: 13,
        date: '2024-04-27',
        sender: 'לירן וולף',
        message: 'מחפשת מפתח/ת Full Stack מנוסה/ים. תנאים מעולים והזדמנות לצמיחה.',
      },
      // Add more recommendations as needed
    ],
    recruiters: [
      {
        id: 14,
        date: '2024-04-28',
        sender: 'תומר ממן',
        message: 'ממליץ על חברת גיוס מעולה - "מגייסים יחד". עזרו לנו למצוא את המועמדים הטובים ביותר.',
      },
      // Add more recommendations as needed
    ],
    companies: [
      {
        id: 15,
        date: '2024-04-29',
        sender: 'אופיר',
        message: 'חברת "טכנולוגיה פלוס" מחפשת אנשי HR. סביבת עבודה מעולה ותנאים טובים.',
      },
      // Add more recommendations as needed
    ],
  },
  other: [
    {
      id: 16,
      date: '2024-04-30',
      sender: 'Dana',
      message: 'ממליצה על ספר מעולה בנושא ניהול משאבי אנוש - "HR מנצח" מאת ד"ר רונית כהן.',
    },
    // Add more recommendations as needed
  ],
};