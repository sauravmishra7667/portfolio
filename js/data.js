/* ============================================================
   EDIT EVERYTHING HERE.
   Every page reads from this one object — change the text below
   and the whole site updates. No build step, no framework.
   ============================================================ */

const SITE = {

  /* ---------- where the site lives ----------
     url      →  the live address, no trailing slash. If you move the site,
                 also update the canonical / og:url / og:image tags in each
                 .html <head>, robots.txt and sitemap.xml.
     counter  →  the footer visitor count, kept by Abacus
                 (abacus.jasoncameron.dev, free, no account). It only counts
                 visits on the live address, once per browser session, so
                 local previews never inflate it.                           */
  site: {
    url: 'https://saurav-mishra.vercel.app',
    counter: { namespace: 'saurav-mishra-vercel-app', key: 'visits' },
  },

  /* ---------- who you are ---------- */
  profile: {
    name:     'Saurav Mishra',
    handle:   'sauravmishra7667',
    initials: 'SM',
    avatar:   '',                          // path to a photo, e.g. 'assets/avatar.png'; '' shows initials
    // Add more photos here and clicking the avatar cycles through them.
    avatars:  [],
    role:     'full-stack developer',      // the small line under your name
    tagline:  'mern · genai',
    location: 'Greater Noida, India',
    timezone: 'Asia/Kolkata',              // drives the live clock in the footer
    status:   'open to full-stack roles',
    resume:   'assets/Saurav_Mishra_Resume.pdf',

    // The short bio on the home page. Keep it to 2–3 sentences.
    bio: [
      'Full-stack developer and Computer Science (AIML) undergraduate skilled in the MERN stack — MongoDB, Express, React and Node.js — with a strong grasp of JavaScript, TypeScript, Java and Python.',
      'Experienced in building RESTful APIs, authentication systems and real-time web applications end to end.',
      'Recently completed industry job simulations with <strong>HPE, Skyscanner and BCG X</strong>, covering a GenAI chatbot, REST services and React front-end development.',
    ],

    // Every skill on the résumé, in the same order.
    stack: ['JavaScript', 'TypeScript', 'Java', 'Python',
            'React', 'Node.js', 'Express',
            'MongoDB', 'PostgreSQL', 'Firebase',
            'Prompt Engineering', 'LLM API Integration', 'AI Chatbot Development',
            'VS Code', 'IntelliJ IDEA', 'Antigravity', 'Git', 'GitHub'],
  },

  /* ---------- background music ----------
     Supply the file yourself: drop an .mp3 at the path below.
     Browsers block autoplay with sound, so the track starts when the visitor
     clicks the speaker button — after that the choice is remembered.        */
  audio: {
    src:    'assets/bgm.mp3',
    title:  'Interstellar — main theme',   // tooltip on the toggle
    volume: 0.35,                          // 0–1, faded in over ~1.2s
  },

  /* ---------- links in the footer ---------- */
  socials: [
    { label: 'github',   url: 'https://github.com/sauravmishra7667' },
    { label: 'linkedin', url: 'https://linkedin.com/in/sauravmishra04' },
    { label: 'email',    url: 'mailto:sauravkumar12002@gmail.com',
                         copy: 'sauravkumar12002@gmail.com' },
  ],

  /* ---------- projects ----------
     featured: true  →  also appears on the home page
     short           →  the one-line description used on the home page
     url             →  where the row links; repo → the GitHub icon,
                        live → a globe icon instead (set one, not both)
     year            →  empty because the résumé gives no project dates;
                        fill it in and it shows on the projects page.       */
  projects: [
    {
      name: 'DocMind',
      short: 'RAG assistant that answers questions from your own uploaded PDFs, with source citations.',
      year: '',
      blurb: 'RAG-based document Q&A assistant that answers questions from a user\'s own uploaded PDFs. Documents are split into overlapping chunks, embedded and stored in a vector database; the most relevant chunks are passed to the LLM as grounding context, and answers stream token by token to the React client with source citations back to the original page. Per-user document collections and chat history live in MongoDB behind JWT-authenticated routes.',
      tags: ['react', 'node.js', 'express', 'mongodb', 'langchain', 'pinecone', 'gemini api'],
      url: 'https://github.com/sauravmishra7667/rag-application',
      repo: 'https://github.com/sauravmishra7667/rag-application',
      featured: true,
    },
    {
      name: 'Project Management Tool',
      short: 'Task and team tracker with role-based access and boards that update without a reload.',
      year: '',
      blurb: 'Task and team tracker with project creation, task assignment and progress tracking across team boards. Role-based access lets project owners manage members while members update only their own tasks; due dates, priority levels and status filters keep large boards easy to scan, and board state stays in sync on the client so task updates show without a full page reload. Backend APIs and the database schema manage users, projects and tasks.',
      tags: ['mongodb', 'express', 'react', 'node.js'],
      url: 'https://github.com/sauravmishra7667/project-management-tool',
      repo: 'https://github.com/sauravmishra7667/project-management-tool',
      featured: true,
    },
    {
      name: 'AI Smart Bazaar',
      short: 'AI-powered e-commerce platform with a shopping assistant and personalized recommendations.',
      year: '',
      blurb: 'AI-powered e-commerce platform where sellers list products and buyers browse, search and place orders. An AI shopping assistant answers product questions and suggests items from plain-language queries, recommendations are personalized from browsing history, cart activity and past orders, and a seller dashboard handles inventory, pricing and orders with AI-generated product descriptions. Cart, checkout and order tracking with payment gateway integration; search filters for category, price and ratings; JWT auth with separate buyer and seller roles.',
      tags: ['mongodb', 'express', 'react', 'node.js', 'gemini api'],
      url: 'https://github.com/sauravmishra7667/ai-smart-bazaar',
      repo: 'https://github.com/sauravmishra7667/ai-smart-bazaar',
      featured: true,
    },
  ],

  /* ---------- writing ----------
     Empty for now — the writing section hides itself until you add a post.
     Each entry: { title, date: 'YYYY-MM-DD', blurb, url, featured }         */
  writing: [],

  /* ---------- work history ----------
     Empty — the résumé lists no jobs yet, so the experience sections hide
     themselves. Each entry: { role, org, short, logo, url, period, place,
     blurb, points: [], tags: [] }                                          */
  experience: [],

  /* ---------- certifications ----------
     Same rows as experience: org → the bold name, place → issuer,
     role → certificate, period → date issued, credential → the code.       */
  certifications: [
    {
      role: 'Software Engineering Job Simulation',
      org: 'HPE',
      place: 'Forage',
      period: '23 Sep 2026',
      blurb: 'Built a RESTful web service with data upload and unit tests.',
      credential: 'Code: 6ab2da5627a1fce094fc499f',
    },
    {
      role: 'Front-End Software Engineering Job Simulation',
      org: 'Skyscanner',
      place: 'Forage',
      period: '23 Sep 2026',
      blurb: 'Built a React web app using the Backpack design system.',
      credential: 'Code: 6ab39a106e7859ae7e43b40a',
    },
    {
      role: 'GenAI Job Simulation',
      org: 'BCG X',
      place: 'Forage',
      period: '22 Sep 2026',
      blurb: 'Data extraction, analysis, and an AI-powered financial chatbot.',
      credential: 'Code: 6ab2cec6b557d34fb9c7c294',
    },
    {
      role: 'Trust and Security with Google Cloud',
      org: 'Simplilearn',
      place: '',
      period: '10 Jul 2026',
      blurb: '',
      credential: 'Credential ID: 10450131',
    },
  ],

  /* ---------- education ---------- */
  education: [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering (AIML)',
      school: 'Dr. APJ Abdul Kalam Technical University',
      note:   'CGPA: 7.21 / 10',
      period: '2023 – 2027',
      place:  'Greater Noida, UP',
    },
  ],
};

if (typeof module !== 'undefined') module.exports = SITE;
