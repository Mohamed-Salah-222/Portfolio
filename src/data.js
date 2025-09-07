import { SiMongodb, SiExpress, SiReact, SiNodedotjs, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export const SKILLS_DATA = [
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
  { name: "Express.js", icon: SiExpress, color: "text-gray-500" }, // Note: Express.js doesn't have a color on its logo
  { name: "React.js", icon: SiReact, color: "text-cyan-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-black dark:text-white" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-cyan-500" },
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
    longDescription: "An all-in-one study management application designed to help students and professionals organize their learning journey. Features include intelligent study scheduling, collaborative note-taking, progress tracking with analytics, and integration with popular calendar apps for seamless workflow management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Agenda.js"],
    github: "https://github.com/Mohamed-Salah-222/StudyBuddy",
    demo: "https://study-buddy-blush.vercel.app/",
    features: ["AI-Powered Chat Assistant", "Smart Study Planning", "Real-time Push Notifications", "Background Job Scheduling", "Discussion Forums"],
    screenshots: ["Study.png"],
    keyAchievements: ["Integrated Google's Gemini AI API to provide contextual, real-time answers to user questions based on their study materials.", "Solved complex background job scheduling by implementing Agenda.js to reliably send timed notifications and reminders.", "Designed a efficient MongoDB schema to handle user data, study sessions, notes, and AI chat history in a scalable way."],
  },
  {
    title: "Recipe Share App",
    longDescription: "A vibrant community-driven platform where food lovers can share their favorite recipes, discover new cuisines, and connect with fellow cooking enthusiasts. The app features advanced search and filtering, recipe collections, step-by-step cooking guides, and social features like comments and ratings.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/Mohamed-Salah-222/Recipe-App",
    demo: "https://recipe-app-blush-three.vercel.app/",
    features: ["Recipe Sharing & Discovery", "Advanced Search & Filters", "User Profiles & Collections", "Photo Upload & Storage", "Community Ratings & Reviews"],
    screenshots: ["recipe pic.png"],
    keyAchievements: ["Built a robust image upload system using Cloudinary to efficiently store and serve user-generated recipe photos.", "Implemented advanced search and filter functionality allowing users to find recipes by ingredients, cuisine, and dietary restrictions.", "Created a responsive React front-end with intuitive user interactions for browsing, creating, and sharing recipes."],
  },
  {
    title: "E-Commerce Platform",
    longDescription: "This comprehensive e-commerce solution features a modern, responsive design with advanced product filtering, secure user authentication using JWT, integrated payment processing with Stripe, and a complete admin dashboard for inventory management. The platform handles everything from user registration to order fulfillment.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    github: "https://github.com/Mohamed-Salah-222/E-Commerce-App",
    demo: "https://e-commerce-app-neon-eight.vercel.app/",
    features: ["User Authentication & Authorization", "Shopping Cart & Checkout", "Payment Integration", "Admin Dashboard", "Product Reviews & Ratings"],
    screenshots: ["E1.png"],
    keyAchievements: ["Solved persistent image hosting issues by integrating Cloudinary for reliable product photo storage and delivery.", "Implemented a secure Stripe payment processing system handling payment intents and webhooks for order confirmation.", "Built a full JWT authentication flow with protected routes for users and a separate admin dashboard for management."],
  },
  {
    title: "Prayer Reminder Extension",
    longDescription: "A feature-rich browser extension that automatically calculates accurate prayer times based on user location and provides timely reminders through both browser notifications and system-level alerts. The extension includes customizable notification settings, multiple calculation methods for different regions, and a beautiful interface showing daily prayer schedules.",
    tech: ["JavaScript", "Chrome APIs", "HTML5", "CSS3", "Geolocation API", "Notification API"],
    github: "https://github.com/Mohamed-Salah-222/Prayer-Extension",
    demo: "#",
    features: ["Accurate Prayer Time Calculations", "System & Browser Notifications", "Location-Based Timing", "Customizable Reminder Settings", "Beautiful Daily Schedule Interface"],
    screenshots: ["Prayer1.png"],
    keyAchievements: [
      "Successfully implemented the Chrome Geolocation API to automatically detect user location for accurate prayer time calculations.",
      "Managed Chrome extension permissions to securely access location data and deliver system-level notifications.",
      "Built a lightweight, efficient extension that runs background processes to trigger prayers alerts without draining system resources.",
    ],
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
