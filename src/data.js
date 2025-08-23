import { Database, Server, Code, Globe, Chrome, Puzzle } from "lucide-react";

export const SKILLS_DATA = [
  { name: "MongoDB", icon: Database, color: "text-green-400" },
  { name: "Express.js", icon: Server, color: "text-yellow-400" },
  { name: "React.js", icon: Code, color: "text-cyan-400" },
  { name: "Node.js", icon: Globe, color: "text-emerald-400" },
  { name: "Web Extensions", icon: Chrome, color: "text-blue-400" },
  { name: "DSA", icon: Puzzle, color: "text-purple-400" },
];

export const ADDITIONAL_TECH = ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "JWT", "REST APIs", "Mongoose", "npm", "Chrome APIs", "Browser Extensions", "Algorithms", "Problem Solving"];

export const LEARNING_DATA = [
  {
    name: "Next.js",
    desc: "SSR/SSG, API Routes, and App Router",
    color: "border-purple-500 text-purple-300", // Kept original purple
  },
  {
    name: "SQL & PostgreSQL",
    desc: "Relational databases, complex queries, and optimization",
    color: "border-blue-500 text-blue-300", // Kept original blue
  },
  {
    name: "TypeScript",
    desc: "Static type checking for scalable applications",
    color: "border-yellow-500 text-yellow-300", // Kept original yellow
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
    period: "2025 - Present",
    title: "Full-Stack Developer",
    description: "Specialized in MERN stack development with focus on performance optimization and user experience. Built multiple production applications achieving excellent performance scores with sub-second load times and advanced features like AI integration, real-time notifications, and browser extensions.",
  },
  {
    period: "2025",
    title: "Personal Projects & Learning",
    description: "Developed comprehensive full-stack applications including e-commerce platforms with payment integration, AI-powered study management systems, and browser extensions. Focused on modern web development practices, performance optimization, and scalable architecture design.",
  },
];

export const NAV_LINKS = ["home", "about", "skills", "projects", "experience", "contact"];
