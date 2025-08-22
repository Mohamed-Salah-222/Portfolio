import React, { useState, useEffect, useRef, useMemo } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe, ChevronDown, Menu, X, Puzzle, Chrome } from "lucide-react";

// --- DATA (Moved outside component for performance) --- //
const SKILLS_DATA = [
  { name: "MongoDB", icon: Database, color: "text-green-400" },
  { name: "Express.js", icon: Server, color: "text-yellow-400" },
  { name: "React.js", icon: Code, color: "text-cyan-400" },
  { name: "Node.js", icon: Globe, color: "text-emerald-400" },
  { name: "Web Extensions", icon: Chrome, color: "text-blue-400" },
  { name: "DSA", icon: Puzzle, color: "text-purple-400" },
];

const ADDITIONAL_TECH = ["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "JWT", "REST APIs", "Mongoose", "npm", "Chrome APIs", "Browser Extensions", "Algorithms", "Problem Solving"];

const LEARNING_DATA = [
  { name: "Advanced DSA", desc: "Complex algorithms & optimization", color: "border-purple-500 text-purple-300" },
  { name: "SQL", desc: "Database design & advanced queries", color: "border-blue-500 text-blue-300" },
  { name: "Python", desc: "Backend development & data science", color: "border-yellow-500 text-yellow-300" },
];

const PROJECTS_DATA = [
  {
    title: "E-Commerce Platform",
    longDescription: "This comprehensive e-commerce solution features a modern, responsive design with advanced product filtering, secure user authentication using JWT, integrated payment processing with Stripe, and a complete admin dashboard for inventory management. The platform handles everything from user registration to order fulfillment.",
    tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
    github: "https://github.com/Mohamed-Salah-222/E-Commerce-App",
    demo: "https://e-commerce-app-neon-eight.vercel.app/",
    features: ["User Authentication & Authorization", "Shopping Cart & Checkout", "Payment Integration", "Admin Dashboard", "Product Reviews & Ratings"],
    screenshots: ["E1.png"],
  },
  {
    title: "Recipe Share App",
    longDescription: "A vibrant community-driven platform where food lovers can share their favorite recipes, discover new cuisines, and connect with fellow cooking enthusiasts. The app features advanced search and filtering, recipe collections, step-by-step cooking guides, and social features like comments and ratings.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
    github: "https://github.com/Mohamed-Salah-222/Recipe-App",
    demo: "https://recipe-app-blush-three.vercel.app/",
    features: ["Recipe Sharing & Discovery", "Advanced Search & Filters", "User Profiles & Collections", "Photo Upload & Storage", "Community Ratings & Reviews"],
    screenshots: ["recipe pic.png"],
  },
  {
    title: "StudyBuddy",
    longDescription: "An all-in-one study management application designed to help students and professionals organize their learning journey. Features include intelligent study scheduling, collaborative note-taking, progress tracking with analytics, and integration with popular calendar apps for seamless workflow management.",
    tech: ["React", "Node.js", "Express", "MongoDB", "Gemini AI", "Agenda.js"],
    github: "https://github.com/Mohamed-Salah-222/StudyBuddy",
    demo: "https://study-buddy-blush.vercel.app/",
    features: ["AI-Powered Chat Assistant", "Smart Study Planning", "Real-time Push Notifications", "Background Job Scheduling", "Discussion Forums"],
    screenshots: ["Study.png"],
  },
  {
    title: "Prayer Reminder Extension",
    longDescription: "A feature-rich browser extension that automatically calculates accurate prayer times based on user location and provides timely reminders through both browser notifications and system-level alerts. The extension includes customizable notification settings, multiple calculation methods for different regions, and a beautiful interface showing daily prayer schedules.",
    tech: ["JavaScript", "Chrome APIs", "HTML5", "CSS3", "Geolocation API", "Notification API"],
    github: "https://github.com/Mohamed-Salah-222/Prayer-Extension",
    demo: "#",
    features: ["Accurate Prayer Time Calculations", "System & Browser Notifications", "Location-Based Timing", "Customizable Reminder Settings", "Beautiful Daily Schedule Interface"],
    screenshots: ["Prayer1.png"],
  },
];

const EXPERIENCES_DATA = [
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

const NAV_LINKS = ["home", "about", "skills", "projects", "experience", "contact"];

// --- CUSTOM HOOKS --- //
const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, options);
    const currentElement = elementRef.current;
    if (currentElement) observer.observe(currentElement);
    return () => {
      if (currentElement) observer.unobserve(currentElement);
    };
  }, [options]);
  return [elementRef, isVisible];
};

const useCodingTimer = () => {
  const [codingSeconds, setCodingSeconds] = useState(0);
  useEffect(() => {
    const startDate = new Date("2025-01-01T00:00:00");
    const interval = setInterval(() => {
      const now = new Date();
      setCodingSeconds(Math.floor((now - startDate) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);
  return codingSeconds;
};

// --- HELPER & UI COMPONENTS --- //
const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

const AnimatedSection = ({ children, className = "", id, sectionRef }) => {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  return (
    <section
      ref={(node) => {
        ref.current = node;
        if (sectionRef) sectionRef.current = node;
      }}
      id={id}
      className={`py-16 sm:py-24 px-4 sm:px-6 transition-all duration-[1200ms] ease-out transform ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-16"} ${className}`}
    >
      {children}
    </section>
  );
};

// --- MAIN PORTFOLIO COMPONENT --- //
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const codingSeconds = useCodingTimer();

  const sectionRefs = useMemo(
    () =>
      NAV_LINKS.reduce((acc, value) => {
        acc[value] = React.createRef();
        return acc;
      }, {}),
    []
  );

  useEffect(() => {
    // Preload the image
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = "pic.jpg";

    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isLoading) return;
    const observerOptions = { rootMargin: "-50% 0px -50% 0px", threshold: 0 };
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActiveSection(entry.target.id);
      });
    }, observerOptions);
    Object.values(sectionRefs).forEach((ref) => {
      if (ref.current) observer.observe(ref.current);
    });
    return () => observer.disconnect();
  }, [isLoading, sectionRefs]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  // Enhanced loading screen
  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black flex items-center justify-center z-50">
        <div className="text-center">
          <div className="relative mb-12">
            <div className="font-display text-5xl md:text-8xl font-black text-transparent bg-gradient-to-r from-white via-gray-300 to-white bg-clip-text animate-pulse">Mohamed Salah</div>
            <div className="absolute inset-0 font-display text-5xl md:text-8xl font-black text-white opacity-20 blur-sm animate-pulse">Mohamed Salah</div>
          </div>
          <div className="relative w-80 h-3 bg-gray-800/50 rounded-full mx-auto overflow-hidden backdrop-blur-sm border border-gray-700">
            <div
              className="h-full bg-gradient-to-r from-white via-gray-300 to-white rounded-full shadow-lg"
              style={{
                animation: "loading-bar 2s cubic-bezier(0.4, 0, 0.2, 1) forwards",
                filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.5))",
              }}
            ></div>
          </div>
        </div>
        <style jsx>{`
          @keyframes loading-bar {
            0% {
              width: 0%;
            }
            100% {
              width: 100%;
            }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap");
        html {
          scroll-behavior: smooth;
        }
        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }
        .font-display {
          font-family: "Space Grotesk", "Inter", sans-serif;
        }
        .font-mono {
          font-family: "JetBrains Mono", monospace;
        }
        /* Scrollbar hide for carousel */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }

        /* Enhanced Effects */
        .glow-effect {
          filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.2));
        }

        @keyframes fadeInUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }

        /* Enhanced Effects */
        .glow-effect {
          filter: drop-shadow(0 0 25px rgba(255, 255, 255, 0.2));
        }
        .text-glow {
          text-shadow: 0 0 40px rgba(255, 255, 255, 0.3);
        }
        .card-glow {
          box-shadow: 0 8px 32px rgba(255, 255, 255, 0.08);
        }
        .enhanced-glow {
          box-shadow: 0 0 20px rgba(255, 255, 255, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.1);
        }
        .bg-grid {
          background-image: radial-gradient(circle at 25px 25px, rgba(255, 255, 255, 0.05) 2px, transparent 2px), radial-gradient(circle at 75px 75px, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 100px 100px, 50px 50px;
          animation: grid-move 60s linear infinite;
        }
        .magnetic-hover {
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .magnetic-hover:hover {
          transform: translateY(-12px) scale(1.05);
          filter: drop-shadow(0 20px 40px rgba(255, 255, 255, 0.1));
        }
        .smooth-hover {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .smooth-hover:hover {
          transform: translateY(-4px);
        }

        /* Enhanced Animations */
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          33% {
            transform: translateY(-15px) rotate(1deg);
          }
          66% {
            transform: translateY(-5px) rotate(-1deg);
          }
        }
        @keyframes grid-move {
          0% {
            background-position: 0 0, 0 0;
          }
          100% {
            background-position: 100px 100px, 50px 50px;
          }
        }
        @keyframes shimmer {
          0% {
            background-position: -200% 0;
          }
          100% {
            background-position: 200% 0;
          }
        }
        .floating {
          animation: float 8s ease-in-out infinite;
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }

        /* Enhanced Page Load Animations */
        @keyframes slideDown {
          from {
            transform: translateY(-100%);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes fadeInUp {
          from {
            transform: translateY(60px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes scaleIn {
          from {
            transform: scale(0.8);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        @keyframes slideInLeft {
          from {
            transform: translateX(-60px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        @keyframes slideInRight {
          from {
            transform: translateX(60px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .animate-entry {
          opacity: 0;
          animation-fill-mode: forwards;
          animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }
        .animate-slide-down {
          animation-name: slideDown;
          animation-duration: 1s;
        }
        .animate-fade-up {
          animation-name: fadeInUp;
          animation-duration: 1.2s;
        }
        .animate-scale-in {
          animation-name: scaleIn;
          animation-duration: 1s;
        }
        .animate-slide-left {
          animation-name: slideInLeft;
          animation-duration: 1s;
        }
        .animate-slide-right {
          animation-name: slideInRight;
          animation-duration: 1s;
        }

        /* Skills animation */
        @keyframes skillFloat {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(2deg);
          }
        }
        .skill-float {
          animation: skillFloat 4s ease-in-out infinite;
        }

        /* Stagger animations */
        .stagger-1 {
          animation-delay: 0.1s;
        }
        .stagger-2 {
          animation-delay: 0.2s;
        }
        .stagger-3 {
          animation-delay: 0.3s;
        }
        .stagger-4 {
          animation-delay: 0.4s;
        }
        .stagger-5 {
          animation-delay: 0.5s;
        }
        .stagger-6 {
          animation-delay: 0.6s;
        }
      `}</style>

      {/* Enhanced background effects */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-gray-800/30 to-gray-600/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-gradient-to-l from-gray-700/30 to-gray-500/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-gradient-to-t from-gray-600/30 to-gray-800/30 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      {/* Enhanced navbar */}
      <header className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-gray-800/50 animate-entry animate-slide-down enhanced-glow">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 py-2 sm:py-4 flex justify-between items-center">
          <div className="font-display font-black text-2xl text-white hover:text-gray-300 transition-colors duration-300 cursor-pointer">MS</div>
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((item) => (
              <button key={item} onClick={() => scrollToSection(item)} className={`capitalize font-semibold tracking-wide transition-all duration-300 relative group hover:scale-105 ${activeSection === item ? "text-white" : "text-gray-400 hover:text-white"}`}>
                {item}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-white transition-all duration-300 rounded-full ${activeSection === item ? "w-full" : "w-0 group-hover:w-full"}`}></span>
              </button>
            ))}
          </div>
          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-xl bg-gray-900/60 hover:bg-gray-800/60 transition-all duration-300 border border-gray-800 hover:border-gray-700 backdrop-blur-sm smooth-hover" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
        {isMenuOpen && (
          <>
            {/* Backdrop overlay */}
            <div className="fixed top-16 left-0 right-0 bottom-0 bg-black/60 backdrop-blur-sm z-40 md:hidden" onClick={() => setIsMenuOpen(false)} />

            {/* Compact vertical menu */}
            <div className="fixed top-19 right-2 z-50 md:hidden">
              <div className="bg-gray-900/95 backdrop-blur-xl border border-gray-700/50 rounded-2xl py-3 px-2 shadow-2xl min-w-[140px]">
                {NAV_LINKS.map((item, index) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item)}
                    className={`block w-full text-center capitalize font-semibold py-3 px-4 rounded-xl transition-all duration-300 text-sm mb-1 last:mb-0 ${activeSection === item ? "bg-white text-black" : "text-gray-300 hover:text-white hover:bg-gray-800/50"}`}
                    style={{
                      animationDelay: `${index * 0.05}s`,
                      animation: "fadeInUp 0.3s ease-out forwards",
                      opacity: 0,
                    }}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}
      </header>

      <main>
        {/* Enhanced hero section */}
        <section id="home" ref={sectionRefs.home} className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative bg-grid">
          <div className="text-center max-w-6xl mx-auto z-10">
            <div className="mb-12  animate-entry animate-scale-in stagger-1">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-full p-1 glow-effect magnetic-hover">
                <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden border-2 border-gray-700 relative">
                  {/* Spinner placeholder that fades out */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center transition-opacity duration-500" style={{ opacity: imageLoaded ? 0 : 1 }}>
                    <div className="w-8 h-8 border-2 border-gray-400 border-t-transparent rounded-full animate-spin"></div>
                  </div>

                  {/* Image that smoothly fades in */}
                  <img src="pic.jpg" alt="Mohamed Salah" className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000" style={{ opacity: imageLoaded ? 1 : 0 }} />
                </div>
              </div>
            </div>

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent text-glow animate-entry animate-fade-up stagger-2 leading-tight sm:leading-none whitespace-normal sm:whitespace-nowrap">Mohamed Salah</h1>

            <div className="animate-entry animate-fade-up stagger-3 mb-8">
              <p className="text-xl sm:text-2xl md:text-4xl mb-4 text-gray-200 font-bold tracking-wide">Full-Stack Web Developer</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium">MERN Stack Specialist</p>
            </div>

            <p className="text-lg sm:text-xl md:text-2xl mb-16 text-gray-300 max-w-4xl mx-auto leading-relaxed animate-entry animate-fade-up stagger-4 px-4">
              Passionate junior developer crafting modern web applications with MongoDB, Express.js, React, and Node.js. I also create browser extensions and apply algorithmic thinking to solve complex problems.
              <span className="text-white font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"> I bring ideas to life</span> through clean code and intuitive user experiences.
            </p>

            <div className="mb-16 p-6 sm:p-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl backdrop-blur-lg border border-gray-700/50 card-glow magnetic-hover animate-entry animate-scale-in stagger-5 enhanced-glow">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-white font-display">🚀 Coding Journey</h3>
              <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-gray-300">I've been coding for</p>
              <div className="font-mono text-4xl sm:text-6xl lg:text-9xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent tracking-tight break-all">{formatNumber(codingSeconds)}</div>
              <p className="text-xl sm:text-2xl mt-4 sm:mt-6 text-gray-300 tracking-wide font-semibold">Seconds</p>
            </div>

            <div className="animate-entry animate-fade-up stagger-6">
              <button onClick={() => scrollToSection("projects")} className="group bg-white text-black hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 flex items-center space-x-4 shadow-2xl mx-auto magnetic-hover text-lg">
                <span>View My Work</span>
                <ChevronDown size={24} className="group-hover:translate-y-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced about section */}
        <AnimatedSection id="about" sectionRef={sectionRefs.about}>
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-4">About Me</h2>
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-3xl p-10 sm:p-12 backdrop-blur-lg border border-gray-700/50 card-glow hover:border-gray-600/50 transition-all duration-700 magnetic-hover enhanced-glow">
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-8 sm:mb-10">
                Welcome to my digital space! I'm <span className="text-white font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Mohamed Salah</span>, a passionate junior full-stack developer specializing in the MERN stack. My journey into web development began with curiosity and has evolved into a deep love for creating meaningful digital experiences.
              </p>
              <p className="text-lg sm:text-xl md:text-2xl leading-relaxed text-gray-300 mb-8 sm:mb-10">
                I thrive on transforming ideas into functional, beautiful web applications. Whether it's building responsive frontends with React, crafting robust backends with Node.js and Express, or developing browser extensions that enhance user productivity, I approach each project with{" "}
                <span className="text-white font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">enthusiasm and attention to detail</span>.
              </p>
              <p className="text-xl md:text-2xl leading-relaxed text-gray-300">
                My foundation in <span className="text-white font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">Data Structures and Algorithms</span> helps me write efficient, optimized code and solve complex problems systematically. When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or planning my next big idea. I
                believe in <span className="text-white font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">continuous learning</span> and staying updated with the latest trends in web development.
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced skills section */}
        <AnimatedSection id="skills" sectionRef={sectionRefs.skills} className="bg-gray-950/60">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-4">Skills & Technologies</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {SKILLS_DATA.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 sm:p-10 rounded-3xl text-center hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-300 transform hover:scale-105 backdrop-blur-lg border border-gray-700/50 card-glow hover:border-gray-600/50 enhanced-glow"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  <skill.icon className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 ${skill.color} group-hover:scale-125 transition-all duration-300 glow-effect`} />
                  <h3 className="text-xl sm:text-2xl font-black font-display text-gray-100 group-hover:text-white transition-colors duration-300">{skill.name}</h3>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-lg border border-gray-700/50 card-glow magnetic-hover enhanced-glow">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 sm:mb-10 text-center text-white font-display">Additional Technologies</h3>
                <div className="flex flex-wrap justify-center gap-4">
                  {ADDITIONAL_TECH.map((tech, index) => (
                    <span key={tech} className="bg-gray-800/70 hover:bg-gray-700/70 px-3 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 cursor-default backdrop-blur-sm smooth-hover text-sm sm:text-base lg:text-lg" style={{ animationDelay: `${index * 50}ms` }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-lg border border-gray-700/50 card-glow magnetic-hover enhanced-glow">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-6 sm:mb-10 text-center text-white font-display">What I'm Learning</h3>
                <div className="space-y-6">
                  {LEARNING_DATA.map((item, index) => (
                    <div key={item.name} className={`bg-gray-800/70 border-2 ${item.color} px-4 sm:px-6 py-3 sm:py-4 rounded-2xl transition-all duration-500 hover:bg-gray-700/70 magnetic-hover smooth-hover`} style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="font-bold text-white font-display text-lg sm:text-xl">{item.name}</div>
                      <div className="text-gray-400 mt-2 text-base sm:text-lg">{item.desc}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced projects section */}
        <AnimatedSection id="projects" sectionRef={sectionRefs.projects}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-5xl sm:text-7xl font-black text-center mb-24 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Featured Projects</h2>
            <div className="space-y-40">
              {PROJECTS_DATA.map((project, index) => (
                <div key={project.title} className={`flex flex-col items-center gap-8 sm:gap-16 ${project.title === "Prayer Reminder Extension" ? "lg:flex-row lg:justify-between" : index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}>
                  {/* Project Images */}
                  <div className={`${project.title === "Prayer Reminder Extension" ? "w-full sm:w-80" : "w-full lg:w-1/2"}`}>
                    <div className="relative group">
                      <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 shadow-2xl transform group-hover:scale-105 transition-all duration-700 magnetic-hover enhanced-glow ${project.title === "Prayer Reminder Extension" ? "w-80 mx-auto" : ""}`}>
                        <div className={`${project.title === "Prayer Reminder Extension" ? "aspect-[3/4]" : "aspect-video"} bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden`}>
                          <img src={project.screenshots[0]} alt={`${project.title} Screenshot 1`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                      </div>

                      {project.screenshots[1] && (
                        <div className="absolute -bottom-6 -right-6 w-1/2 overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 shadow-2xl transform group-hover:scale-110 transition-all duration-700 delay-200 enhanced-glow">
                          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                            <img src={project.screenshots[1]} alt={`${project.title} Screenshot 2`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className={`space-y-6 sm:space-y-8 ${project.title === "Prayer Reminder Extension" ? "w-full lg:flex-1" : "w-full lg:w-1/2"}`}>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black font-display text-white leading-tight">{project.title}</h3>

                    <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed mb-6 sm:mb-8">{project.longDescription}</p>

                    <div className="space-y-6 sm:space-y-8">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-4 sm:mb-6 font-display">Key Features</h4>
                      <ul className="space-y-2 sm:space-y-3">
                        {project.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3 sm:space-x-4 text-gray-300">
                            <span className="text-white mt-1.5 sm:mt-2 text-xs sm:text-sm">▸</span>
                            <span className="font-light text-base sm:text-lg md:text-xl">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech, techIndex) => (
                        <span key={tech} className="bg-gray-800/70 text-gray-200 px-4 py-2 rounded-xl font-medium border border-gray-600 backdrop-blur-sm smooth-hover" style={{ animationDelay: `${techIndex * 50}ms` }}>
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 pt-4 sm:pt-6">
                      {project.demo !== "#" && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-3 sm:space-x-4 bg-white text-black hover:bg-gray-100 px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl text-lg sm:text-xl magnetic-hover">
                          <ExternalLink size={20} className="sm:w-6 sm:h-6 group-hover:rotate-45 transition-transform duration-300" />
                          <span>Live Demo</span>
                        </a>
                      )}
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-3 sm:space-x-4 border-2 border-gray-600 hover:border-white hover:bg-white hover:text-black px-6 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold transition-all duration-500 text-lg sm:text-xl smooth-hover">
                        <Github size={20} className="sm:w-6 sm:h-6 group-hover:rotate-12 transition-transform duration-300" />
                        <span>View Code</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced experience section */}
        <AnimatedSection id="experience" sectionRef={sectionRefs.experience} className="bg-gray-950/60">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-4">Experience</h2>
            <div className="space-y-10">
              {EXPERIENCES_DATA.map((exp, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-lg border border-gray-700/50 hover:from-gray-800/80 hover:to-gray-700/80 hover:border-gray-600/50 transition-all duration-700 card-glow magnetic-hover enhanced-glow" style={{ animationDelay: `${index * 200}ms` }}>
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                    <h3 className="text-2xl sm:text-3xl font-black text-white font-display mb-3 sm:mb-0">{exp.title}</h3>
                    <span className="text-gray-300 font-bold font-mono bg-gray-800/60 px-4 sm:px-6 py-2 rounded-full border border-gray-600 text-sm sm:text-lg backdrop-blur-sm">{exp.period}</span>
                  </div>
                  <p className="text-gray-300 leading-relaxed text-lg sm:text-xl">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced contact section */}
        <AnimatedSection id="contact" sectionRef={sectionRefs.contact}>
          <div className="max-w-6xl mx-auto text-center">
            <h2 className="font-display text-5xl sm:text-7xl font-black mb-16 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent">Let's Connect</h2>
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-12 sm:mb-20 text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
              I'm always excited to discuss new opportunities, collaborate on projects, or just chat about web development.
              <span className="text-white font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block mt-4">Let's build something amazing together!</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
              <a href="mailto:midosalah25552@gmail.com" className="group flex items-center space-x-3 sm:space-x-5 bg-white text-black hover:bg-gray-100 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl w-full sm:w-auto justify-center magnetic-hover text-lg sm:text-xl">
                <Mail size={24} className="sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" />
                <span className="break-all sm:break-normal">midosalah25552@gmail.com</span>
              </a>

              <div className="flex space-x-6 sm:space-x-8">
                <a
                  href="https://github.com/Mohamed-Salah-222"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 sm:p-6 rounded-2xl hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-500 transform hover:scale-110 border border-gray-700/50 hover:border-gray-600/50 card-glow magnetic-hover backdrop-blur-lg enhanced-glow"
                >
                  <Github size={28} className="sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-salah-7933a6212/?trk=opento_sprofile_details"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 sm:p-6 rounded-2xl hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-500 transform hover:scale-110 border border-gray-700/50 hover:border-gray-600/50 card-glow magnetic-hover backdrop-blur-lg enhanced-glow"
                >
                  <Linkedin size={28} className="sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />
                </a>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </main>

      {/* Enhanced footer */}
      <footer className="py-12 px-4 border-t border-gray-800/50 bg-gradient-to-r from-black via-gray-950 to-black backdrop-blur-sm">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-lg">
            © 2025 Mohamed Salah. Built with React and
            <span className="mx-2 text-red-500 animate-pulse">❤️</span>
            <span className="font-mono text-sm ml-2 text-gray-500 block sm:inline mt-2 sm:mt-0">// Crafted with passion and precision</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
