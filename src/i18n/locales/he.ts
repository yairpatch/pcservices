export default {
  nav: {
    submitTicket: 'פתיחת קריאה',
    trackTicket: 'מעקב קריאה',
    admin: 'לוח בקרה',
  },
  home: {
    hero: {
      title: 'שירותי תיקון מחשבים מקצועיים',
      subtitle: 'תיקונים מהירים ואמינים לכל צרכי הטכנולוגיה שלך.',
      cta: 'פתיחת קריאת שירות',
      track: 'מעקב אחר תיקון',
    },
    features: {
      expert: {
        title: 'טכנאים מומחים',
        description: 'המקצוענים המוסמכים שלנו בעלי שנות ניסיון בתיקון מחשבים.',
      },
      quick: {
        title: 'זמן טיפול מהיר',
        description: 'רוב התיקונים מושלמים תוך 24-48 שעות.',
      },
      warranty: {
        title: 'אחריות שירות',
        description: '90 ימי אחריות על כל התיקונים והחלקים.',
      },
    },
    process: {
      title: 'איך זה עובד',
      step1: {
        title: 'פתיחת קריאה',
        description: 'תאר את בעיות המכשיר בפירוט.',
      },
      step2: {
        title: 'אבחון',
        description: 'המומחים שלנו יעריכו את הבעיה.',
      },
      step3: {
        title: 'תיקון מהיר',
        description: 'קבל את המכשיר שלך בחזרה במצב עבודה.',
      },
    },
  },
  submitTicket: {
    title: 'פתיחת קריאת שירות',
    form: {
      title: 'כותרת הבעיה',
      titlePlaceholder: 'תיאור קצר של הבעיה',
      description: 'תיאור מפורט',
      descriptionPlaceholder: 'אנא ספק כמה שיותר פרטים על הבעיה',
      name: 'שמך',
      namePlaceholder: 'הכנס את שמך המלא',
      email: 'כתובת דואר אלקטרוני',
      emailPlaceholder: 'הכנס את כתובת הדואר האלקטרוני שלך',
      device: 'סוג המכשיר',
      devicePlaceholder: 'בחר את סוג המכשיר',
      priority: 'רמת דחיפות',
      priorityPlaceholder: 'בחר רמת דחיפות',
      submit: 'שלח קריאה',
      submitting: 'שולח...',
    },
    priority: {
      low: 'נמוכה',
      medium: 'בינונית',
      high: 'גבוהה',
    },
    device: {
      laptop: 'מחשב נייד',
      desktop: 'מחשב שולחני',
      tablet: 'טאבלט',
      phone: 'טלפון חכם',
      other: 'מכשיר אחר',
    },
  },
  trackTicket: {
    title: 'מעקב אחר קריאת שירות',
    form: {
      ticketId: 'מספר קריאה',
      ticketIdPlaceholder: 'הכנס את מספר הקריאה (לדוגמה: TIX-123)',
      email: 'דואר אלקטרוני',
      emailPlaceholder: 'הכנס את הדואר האלקטרוני שהשתמשת בו בקריאה',
      search: 'חפש קריאה',
      searching: 'מחפש...',
    },
    description: 'תיאור',
    customer: 'לקוח',
    device: 'מכשיר',
    priority: 'דחיפות',
    created: 'נוצר',
    status: {
      pending: 'ממתין',
      in_progress: 'בטיפול',
      resolved: 'הושלם',
    },
    error: {
      notFound: 'לא נמצאה קריאה עם המספר והדואר האלקטרוני שסופקו',
      generic: 'אירעה שגיאה בחיפוש הקריאה',
    },
  },
};