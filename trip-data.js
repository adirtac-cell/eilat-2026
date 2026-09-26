// Shared trip content for index.html, schedule.html and activities.html.
// Dates use local time; TRIP_DAYS is ordered chronologically.
var TRIP_DAYS = [
  {
    id: 'wed', date: '2026-09-30', label: 'רביעי · 30/9', note: 'יום הגעה',
    events: [
      { time: '15:00', title: '🏡 כניסה לווילה', items: ['התארגנות', 'זמן חופשי'] },
      { time: 'ערב', title: '🍕 הזמנה מבחוץ', items: ['אסיאתי', 'המבורגרים', 'פיצות'] }
    ]
  },
  {
    id: 'thu', date: '2026-10-01', label: 'חמישי · 1/10',
    events: [
      { time: 'בוקר', title: '🍳 ארוחת בוקר ישראלית', items: ['שקשוקות', 'גבינות', 'טונה', 'תירס', 'לחמים', 'סלטים', 'חביתות / ביצים קשות'] },
      { time: 'צהריים', title: '🍴 צהריים', items: [], note: 'בהמשך' },
      { time: 'ערב', title: '🔥 על האש', items: ['פרגיות', 'קבב', 'כנפיים', 'נקניקיות לילדים', 'סטייקים / אנטריקוט', 'המבורגר', 'תפוחי אדמה', 'תירס', 'פיתות', "צ'יפס", 'סלט ירקות, כרוב, מטבוחה, חצילים', 'טחינה, חומוס, עמבה, חמוצים', 'אבטיח / מלון, גלידה ומשהו מתוק לילדים', 'מים, שתייה קלה, בירה, יין'] }
    ]
  },
  {
    id: 'fri', date: '2026-10-02', label: 'שישי · 2/10',
    events: [
      { time: 'בוקר', title: '🍳 בוקר (אותו קונספט כמו חמישי)', items: ['שקשוקות', 'גבינות', 'טונה', 'תירס', 'לחמים', 'סלטים', 'חביתות / ביצים קשות'] },
      { time: 'צהריים', title: '🍴 צהריים', items: [], note: 'בהמשך' },
      { time: 'ערב', title: '🍽️ ארוחת שישי גדולה', items: ['דגים מרוקאים', 'משה בתיבה', 'סלטים', 'פשטידת פטריות', 'בשר בתנור', 'עוף בתנור', 'פסטה בולונז', 'אורז', 'תפוחי אדמה בתנור'] }
    ]
  },
  {
    id: 'sat', date: '2026-10-03', label: 'שבת · 3/10', note: 'יום יציאה',
    events: [
      { time: 'בוקר', title: '🥐 בוקר שבת', items: ['קובנות', 'ביצים קשות', 'עגבניות', 'בורקס בתנור', 'גבינות', 'ירקות'] },
      { time: '16:00', title: '🚪 יציאה מהווילה', items: [] }
    ]
  }
];

// Each activity: { date: 'YYYY-MM-DD', time, title, description }. Empty until planned.
var TRIP_ACTIVITIES = [];

function tripDateKey(d) {
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function findTripDay(dateKey) {
  return TRIP_DAYS.find(function (d) { return d.date === dateKey; }) || null;
}
function activitiesForDate(dateKey) {
  return TRIP_ACTIVITIES.filter(function (a) { return a.date === dateKey; });
}
