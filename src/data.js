import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss, SiTypescript, SiMysql } from "react-icons/si";

export const SKILLS_DATA = [
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
    description: "NoSQL database for storing document-rich data. I use it when schema flexibility matters and data naturally fits a document model.",
  },
  {
    name: "Express.js",
    icon: SiExpress,
    color: "text-gray-500",
    description: "Lightweight backend framework. I use it to build REST APIs that handle routing, middleware, and business logic efficiently.",
  },
  {
    name: "React.js",
    icon: SiReact,
    color: "text-cyan-500",
    description: "Component-driven frontend library. I use it to build interactive UIs with state management, reusable components, and smooth user interactions.",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "text-green-500",
    description: "JavaScript runtime for backend. I use it to build scalable servers that handle concurrent requests without blocking.",
  },
  {
    name: "Next.js",
    icon: SiNextdotjs,
    color: "text-black dark:text-white",
    description: "React framework with server-side rendering and built-in optimization. I use it when I need SEO, faster initial load times, or API routes in the same codebase.",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-cyan-500",
    description: "Utility-first CSS framework. I use it to build responsive designs quickly without writing custom CSS, keeping stylesheets maintainable.",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "text-blue-500",
    description: "JavaScript with type safety. I use it to catch bugs before runtime and make code more maintainable when working in teams.",
  },
  {
    name: "SQL",
    icon: SiMysql,
    color: "text-blue-600",
    description: "Relational database language. I use it for structured data with relationships—users, orders, payments—where data consistency matters most.",
  },
];
export const ADDITIONAL_TECH = ["JavaScript", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Next.js", "Git", "JWT", "REST APIs", "Mongoose", "npm", "Chrome APIs", "Browser Extensions", "SQL", "PostgreSQL", "Algorithms", "Problem Solving", "Stripe API", "Cloudinary"];

export const LEARNING_DATA = [
  {
    name: "Docker & Containerization",
    desc: "Container orchestration and deployment strategies",
    color: "border-blue-500 text-blue-300",
  },
  {
    name: "AWS & Cloud Services",
    desc: "Cloud deployment, S3, Lambda, and serverless architecture",
    color: "border-orange-500 text-orange-300",
  },
  {
    name: "Testing & CI/CD",
    desc: "Jest, React Testing Library, and automated deployment pipelines",
    color: "border-green-500 text-green-300",
  },
];

export const PROJECTS_DATA = [
  {
    title: "StudyBuddy",
    longDescription: `Students juggle 7+ apps to manage studying: calendar, notes, reminders, forums, flashcard apps, file storage, AI tutors. They lose 20+ minutes daily just switching between tools. I solved this by consolidating everything into StudyBuddy.

The hard part wasn't the features—it was reliability. Users expect reminders to fire at exact times. Study sessions to sync across devices. The AI chat to respond instantly. No crashes. Zero data loss.

I implemented Agenda.js for background job processing ensuring 1000+ daily reminders execute reliably. Socket.io for real-time updates across multiple users. Gemini AI with streaming responses for snappy interactions. A MongoDB schema designed to handle concurrent writes without corruption.

Result: Deployed to production with 10 active daily users from my friend group. Zero crashes in 3 months. Every reminder fires on time. Code is clean enough that a new developer could onboard in one day.`,
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Agenda.js"],
    github: "https://github.com/Mohamed-Salah-222/StudyBuddy",
    demo: "https://study-buddy-blush.vercel.app/",
    features: ["AI-Powered Chat Assistant", "Smart Study Planning", "Real-time Push Notifications", "Background Job Scheduling", "Discussion Forums"],
    screenshots: ["Study.png"],
    keyAchievements: ["Integrated Google's Gemini AI API to provide contextual, real-time answers to user questions based on their study materials.", "Solved complex background job scheduling by implementing Agenda.js to reliably send timed notifications and reminders.", "Designed a efficient MongoDB schema to handle user data, study sessions, notes, and AI chat history in a scalable way."],
  },
  {
    title: "Resumind",
    longDescription: `Most resume tools give generic feedback: 'Add more action verbs.' Mine doesn't. Resumind analyzes your resume against a specific job description and tells you exactly what's missing: skills gaps, tone mismatches, structural problems that ATS systems flag.

The technical challenge: How do you process PDFs, extract text, run AI analysis, store files, and authenticate users without managing any servers? Traditional backend would require infrastructure costs. I chose serverless.

I used Puter.js for cloud storage and authentication, eliminating database costs entirely. Claude AI for sophisticated resume analysis. pdf.js to convert resumes to images client-side (no server processing needed). React + Zustand for state management that doesn't bloat with features.

The result: A fully functional AI tool with zero infrastructure costs, zero backend maintenance, and everything running on the user's browser or cloud services that scale automatically.`,
    tech: ["React 18", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "React Router v7", "Puter.js", "Claude AI", "react-dropzone", "pdf.js"],
    github: "https://github.com/Mohamed-Salah-222/AI-Resume-",
    demo: "https://ai-resume-taupe-omega.vercel.app/",
    features: ["AI-Powered Resume Analysis", "ATS Score Calculation", "Job-Specific Feedback", "Detailed Resume Scoring (ATS, Tone, Content, Skills)", "Visual Resume Preview (PDF → Thumbnails)", "Authentication via Puter.js", "Cloud File Management"],
    screenshots: ["resume.png"],
    keyAchievements: [
      "Implemented Claude AI integration to analyze resumes and provide tailored feedback.",
      "Built a secure file storage and authentication system using Puter.js for a fully serverless backend.",
      "Designed responsive UI with React, Tailwind CSS, and Zustand for smooth state management and user experience.",
      "Converted PDF resumes into image previews using pdf.js for fast client-side rendering.",
    ],
  },
  {
    title: "Recipe Share App",
    longDescription: `Recipe Share lets users upload recipes, browse, comment, and rate. The interesting technical parts:

Image uploads: I integrated Cloudinary for image storage and CDN delivery instead of storing files on the server. This keeps the app performant and scalable.

Advanced search: Implemented filtering by ingredients, cuisine, and dietary restrictions. Built database queries that use proper indexing to avoid full table scans—things that matter when the dataset grows.

Social features: Built a review system that calculates ratings, threaded comments, and user profiles showing recipe history.

This is a straightforward community app, but it taught me that execution matters—the "boring" backend stuff (caching, indexing, file storage) is what makes apps actually feel fast.`,
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/Mohamed-Salah-222/Recipe-App",
    demo: "https://recipe-app-blush-three.vercel.app/",
    features: ["Recipe Sharing & Discovery", "Advanced Search & Filters", "User Profiles & Collections", "Photo Upload & Storage", "Community Ratings & Reviews"],
    screenshots: ["recipe pic.png"],
    keyAchievements: ["Built a robust image upload system using Cloudinary to efficiently store and serve user-generated recipe photos.", "Implemented advanced search and filter functionality allowing users to find recipes by ingredients, cuisine, and dietary restrictions.", "Created a responsive React front-end with intuitive user interactions for browsing, creating, and sharing recipes."],
  },
  {
    title: "E-Commerce Platform",
    longDescription: `I built a full e-commerce platform with user authentication, shopping carts, checkout, payment processing, admin dashboard, and reviews.

The most challenging part: Stripe integration. I implemented webhooks properly so payment confirmations work even if the browser crashes mid-transaction. Built idempotency into payment endpoints to prevent double-charges. Handled network failures and edge cases.

For the admin side: role-based access control to protect sensitive endpoints, database indexing for product filtering, Cloudinary for image uploads instead of storing on the server.

The hard part wasn't implementing features—it was handling things that can go wrong. That's where most of the learning happened.`,
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    github: "https://github.com/Mohamed-Salah-222/E-Commerce-App",
    demo: "https://e-commerce-app-neon-eight.vercel.app/",
    features: ["User Authentication & Authorization", "Shopping Cart & Checkout", "Payment Integration", "Admin Dashboard", "Product Reviews & Ratings"],
    screenshots: ["E1.png"],
    keyAchievements: ["Solved persistent image hosting issues by integrating Cloudinary for reliable product photo storage and delivery.", "Implemented a secure Stripe payment processing system handling payment intents and webhooks for order confirmation.", "Built a full JWT authentication flow with protected routes for users and a separate admin dashboard for management."],
  },
];

export const EXPERIENCES_DATA = [
  {
    period: "Recent Projects",
    title: "Full-Stack Development Portfolio",
    description:
      "Built 4 production-ready applications demonstrating end-to-end development skills: AI-powered study management system with real-time notifications, community recipe platform with image uploads, e-commerce solution with payment processing, and browser extension with 1000+ potential users. Implemented complex features like background job scheduling, third-party API integrations, and responsive design patterns.",
  },
  {
    period: "Technical Foundation",
    title: "Self-Directed Learning & Skill Building",
    description: "Completed comprehensive full-stack development curriculum covering MERN stack, data structures & algorithms, and modern development practices. Built strong foundation in database design, API development, authentication systems, and performance optimization. Actively contributed to open-source projects and maintained consistent coding practice with 100+ GitHub commits.",
  },
];

export const NAV_LINKS = ["home", "about", "skills", "projects", "experience", "contact"];
