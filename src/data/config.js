// ===== Edit your details here — whole site updates automatically =====
const PUBLIC = process.env.PUBLIC_URL || '';

export const profile = {
  name: 'Priyansh Saini',
  initials: 'PS',
  role: 'Python & Backend Engineer',
  headline: 'I build asynchronous Python services, telemetry engines and API pipelines that stay fast and keep running.',
  location: 'Meerut, Uttar Pradesh, India',
  email: 'sainipriyansh989@gmail.com',
  phone: '+91 86305 25247',
  whatsapp: 'https://wa.me/918630525247',
  github: 'https://github.com/Sudotron',
  linkedin: 'https://www.linkedin.com/in/priyansh-saini-061a63250',
  cv: `${PUBLIC}/files/Priyansh_Saini_Resume.pdf`,
};

export const services = [
  { icon: 'fa-bolt', title: 'Async Micro-services', text: 'Non-blocking Python services built on Asyncio, httpx and aiohttp, so slow network calls never hold up the rest of the app.' },
  { icon: 'fa-satellite-dish', title: 'Event-driven Telemetry', text: 'Background polling and event subscriptions that process live data and dispatch alerts automatically.' },
  { icon: 'fa-plug', title: 'REST API Integration', text: 'Third-party APIs wired in with retry logic, rate-limit safeguards and metadata caching.' },
  { icon: 'fa-database', title: 'Database Layers', text: 'SQLite schemas and non-blocking aiosqlite queries for user mappings, state snapshots and event deduplication.' },
  { icon: 'fa-robot', title: 'Automation & Bots', text: 'Telegram bots and scheduled jobs with APScheduler that run daily tasks without human intervention.' },
  { icon: 'fa-chart-line', title: 'Data Extraction & Reports', text: 'Web data parsing with BeautifulSoup4 and generated graphic snapshots with Pillow for clear reporting.' },
];

export const skillGroups = [
  { title: 'Programming Languages', items: ['Python', 'C++', 'JavaScript (ES6+)', 'HTML5', 'CSS3', 'SQL'] },
  { title: 'Core CS Concepts', items: ['Data Structures & Algorithms', 'Object-Oriented Programming', 'Database Management (DBMS)'] },
  { title: 'Frameworks & Libraries', items: ['Asyncio', 'python-telegram-bot', 'httpx', 'aiohttp', 'SQLite / aiosqlite', 'APScheduler', 'Pillow', 'BeautifulSoup4'] },
  { title: 'Developer Tools', items: ['Git', 'GitHub', 'VS Code', 'Postman'] },
];

export const projects = [
  {
    title: 'Clan Analytics & Management Service',
    image: `${PUBLIC}/img/clan-analytics.svg`,
    year: 'Aug 2026 – Oct 2026',
    text: 'Asynchronous analytics backend that manages real-time clan performance telemetry and Clan War League (CWL) data. Non-blocking aiosqlite queries store user-to-game mappings, war rosters and historical stats, with custom algorithms for loot forecasting, war reports and clan activity audits.',
    tech: ['Python', 'Asyncio', 'aiosqlite', 'Pillow', 'BeautifulSoup4'],
    github: 'https://github.com/Sudotron/Clash-OTTO-Bot',
    featured: true,
  },
  {
    title: 'Real-Time Event Tracking & Analytics Engine',
    image: `${PUBLIC}/img/event-tracking.svg`,
    year: 'Feb 2026 – Mar 2026',
    text: 'Event-driven tracking engine processing live game state telemetry for 100+ active users. Background polling with Asyncio and httpx dispatches alerts in under a second with no request blocking, backed by retry handling, error logging and rate-limiting safeguards.',
    tech: ['Python', 'Asyncio', 'httpx', 'SQLite'],
    github: 'https://github.com/Sudotron/Player-Tracking-',
  },
  {
    title: 'Personalized Content Recommendation Engine',
    image: `${PUBLIC}/img/recommendation-engine.svg`,
    year: 'May 2025',
    text: 'Recommendation pipeline built on third-party REST APIs (OMDb, Jikan/MyAnimeList) with metadata caching. Tracks user preferences, filters by genre to avoid repeats, and sends scheduled daily suggestions with APScheduler.',
    tech: ['Python', 'REST APIs', 'APScheduler', 'python-telegram-bot'],
    github: 'https://github.com/Sudotron/content-subscription-bot',
  },
];

export const education = [
  { title: 'B.Tech, Computer Science & Engineering', org: 'Bharat Institute of Technology, Meerut', date: 'Expected December 2028', score: 'Focus: DSA, OOP, DBMS' },
  { title: 'Senior Secondary (Class XII) – CBSE', org: 'Dewan Public School International, Meerut', date: '', score: '71.4%' },
  { title: 'Secondary School (Class X) – CBSE', org: 'Dewan Public School International, Meerut', date: '', score: '75.8%' },
];
