import React, { useState, useEffect, useRef, useMemo } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe, ChevronDown, Menu, X, Puzzle, Chrome } from "lucide-react";
import { SKILLS_DATA, ADDITIONAL_TECH, LEARNING_DATA, PROJECTS_DATA, EXPERIENCES_DATA, NAV_LINKS } from "./data.js";

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

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isLoading, setIsLoading] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [expandedProjects, setExpandedProjects] = useState({});
  const codingSeconds = useCodingTimer();

  const sectionRefs = useMemo(
    () =>
      NAV_LINKS.reduce((acc, value) => {
        acc[value] = React.createRef();
        return acc;
      }, {}),
    []
  );

  const toggleProject = (projectTitle) => {
    setExpandedProjects((prev) => ({
      ...prev,
      [projectTitle]: !prev[projectTitle],
    }));
  };

  useEffect(() => {
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
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative">
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
          <button aria-label="Toggle menu" className="md:hidden p-2 rounded-xl bg-gray-900/60 hover:bg-gray-800/60 transition-all duration-300 border border-gray-800 hover:border-gray-700 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1" onClick={() => setIsMenuOpen(!isMenuOpen)}>
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
            <div className="mb-12  animate-entry animate-scale-in [animation-delay:0.1s]">
              <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto bg-gradient-to-r from-gray-600 via-gray-400 to-gray-600 rounded-full p-1 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)] magnetic-hover">
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

            <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent [text-shadow:0_0_40px_rgba(255,255,255,0.3)] animate-entry animate-fade-up [animation-delay:0.2s] leading-tight sm:leading-none whitespace-normal sm:whitespace-nowrap">Mohamed Salah</h1>

            <div className="animate-entry animate-fade-up [animation-delay:0.3s] mb-8">
              <p className="text-xl sm:text-2xl md:text-4xl mb-4 text-gray-200 font-bold tracking-wide">Full-Stack Web Developer</p>
              <p className="text-base sm:text-lg md:text-xl text-gray-400 font-medium">Specializing in MERN Stack • Next.js • SQL</p>
            </div>

            <div className="space-y-6 mb-16 animate-entry animate-fade-up [animation-delay:0.4s] px-4">
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 leading-relaxed max-w-5xl mx-auto">I solve real problems with code. From AI-integrated study platforms handling 1000+ daily reminders to e-commerce systems processing payments reliably. I build features that actually work at scale</p>
            </div>

            <div className="mb-16 p-6 sm:p-10 bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] magnetic-hover animate-entry animate-scale-in [animation-delay:0.5s] enhanced-glow">
              <h3 className="text-2xl sm:text-3xl font-black mb-4 sm:mb-6 text-white font-display">🚀 Coding Journey</h3>
              <p className="text-lg sm:text-xl mb-4 sm:mb-6 text-gray-300">I've been coding for</p>
              <div className="font-mono text-4xl sm:text-6xl lg:text-9xl font-black bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent tracking-tight break-all">{formatNumber(codingSeconds)}</div>
              <p className="text-xl sm:text-2xl mt-4 sm:mt-6 text-gray-300 tracking-wide font-semibold">Seconds</p>
            </div>

            <div className="animate-entry animate-fade-up [animation-delay:0.6s]">
              <button onClick={() => scrollToSection("projects")} className="group bg-white text-black hover:bg-gray-100 px-10 py-5 rounded-2xl font-bold transition-all duration-500 transform hover:scale-110 flex items-center space-x-4 shadow-2xl mx-auto magnetic-hover text-lg">
                <span>View My Work</span>
                <ChevronDown size={24} className="group-hover:translate-y-2 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </section>

        {/* Enhanced about section */}
        <AnimatedSection id="about" sectionRef={sectionRefs.about}>
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-4">About Me</h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
              {/* Personal Story Card */}
              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-3xl p-8 sm:p-10 backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] hover:border-gray-600/50 transition-all duration-700 magnetic-hover enhanced-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-black text-xl">👨‍💻</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display">My Journey</h3>
                </div>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-6">
                  Started coding in January 2025 with one goal: build things people actually use. Not portfolio pieces. Not tutorial clones. Real applications solving real problems. That's why my projects have actual users (my friends, real test cases). Why I obsess over reliability. Why I care about code that teammates can understand.
                </p>
              </div>

              {/* Technical Approach Card */}
              <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-3xl p-8 sm:p-10 backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] hover:border-gray-600/50 transition-all duration-700 magnetic-hover enhanced-glow">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-black text-xl">⚡</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-white font-display">How I Build</h3>
                </div>
                <p className="text-lg sm:text-xl leading-relaxed text-gray-300 mb-6">
                  Clean code isn't just prettier—it's faster to fix bugs in, easier for teams to collaborate on, and cheaper to maintain. When I built StudyBuddy, I separated concerns from day one. When background jobs needed to run reliably, I didn't hack a solution—I implemented Agenda.js properly. This thinking is baked into everything I write.
                </p>
              </div>
            </div>

            {/* Current Focus - Full Width Card */}
            <div className="bg-gradient-to-br from-gray-900/70 to-gray-800/70 rounded-3xl p-8 sm:p-12 backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] hover:border-gray-600/50 transition-all duration-700 magnetic-hover enhanced-glow">
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-white to-gray-300 rounded-full flex items-center justify-center mr-4">
                    <span className="text-black font-black text-2xl">🚀</span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-black text-white font-display">What's Next</h3>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-3 font-display">Recently Learned</h4>
                  <div className="space-y-2">
                    <span className="block bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-600 text-gray-300">Next.js & TypeScript</span>
                    <span className="block bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-600 text-gray-300">SQL & Database Design</span>
                    <span className="block bg-gray-800/60 px-4 py-2 rounded-lg border border-gray-600 text-gray-300">Advanced React Patterns</span>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-3 font-display">Recent Achievements</h4>
                  <div className="space-y-2 text-gray-300 inline-block text-left">
                    <p className="text-sm flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">✅</span> Built production systems handling concurrent users without crashes
                    </p>
                    <p className="text-sm flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">✅</span> Integrated external APIs (Gemini AI, Stripe, Cloudinary) reliably
                    </p>
                    <p className="text-sm flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">✅</span> Implemented background job systems for time-critical operations
                    </p>
                    <p className="text-sm flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">✅</span> Designed MongoDB schemas that scale without data corruption
                    </p>
                    <p className="text-sm flex items-start">
                      <span className="text-green-400 mr-2 mt-0.5">✅</span> Deployed full-stack applications and kept them running
                    </p>
                  </div>
                </div>

                <div className="text-center">
                  <h4 className="text-xl font-bold text-white mb-3 font-display">Looking For</h4>
                  <div className="space-y-2 text-gray-300 inline-block text-left">
                    <p className="text-sm flex items-start">
                      <span className="mr-2 mt-0.5">🎯</span> A team that ships real features, not endless refactoring
                    </p>
                    <p className="text-sm flex items-start">
                      <span className="mr-2 mt-0.5">🤝</span> Mentorship from senior developers on architectural patterns
                    </p>
                    <p className="text-sm flex items-start">
                      <span className="mr-2 mt-0.5">📈</span> Projects where my code directly impacts users
                    </p>
                    <p className="text-sm flex items-start">
                      <span className="mr-2 mt-0.5">💡</span> Room to own features end-to-end
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xl md:text-2xl leading-relaxed text-gray-300 text-center">
                Ready to contribute to a team that values innovation, clean code, and continuous learning.
                <span className="text-white font-semibold block mt-2">Let's build something amazing together.</span>
              </p>
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced skills section */}
        {/* Enhanced skills section */}
        <AnimatedSection id="skills" sectionRef={sectionRefs.skills} className="bg-gray-950/60">
          <div className="max-w-7xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-4">Skills & Technologies</h2>

            {/* Main Skills Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 sm:mb-20">
              {SKILLS_DATA.map((skill, index) => (
                <div
                  key={skill.name}
                  className="group relative bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-6 sm:p-10 rounded-3xl text-center hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-300 transform hover:scale-105 backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] hover:border-gray-600/50 enhanced-glow cursor-pointer"
                  style={{
                    transitionDelay: `${index * 100}ms`,
                    animationDelay: `${index * 0.2}s`,
                  }}
                >
                  {/* Skill Icon and Name */}
                  <skill.icon className={`w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-6 sm:mb-8 ${skill.color} group-hover:scale-125 transition-all duration-300 drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]`} />
                  <h3 className="text-xl sm:text-2xl font-black font-display text-gray-100 group-hover:text-white transition-colors duration-300 mb-4">{skill.name}</h3>

                  {/* Hover Description */}
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl p-6 sm:p-8 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 backdrop-blur-lg border border-gray-600/50">
                    <p className="text-gray-200 text-sm sm:text-base leading-relaxed font-light text-center">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reorganized Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {/* Core Tech Stack - Organized by Category */}
              <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-8 sm:p-10 backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] magnetic-hover enhanced-glow">
                <h3 className="text-2xl sm:text-3xl font-black mb-8 text-center text-white font-display">Core Tech Stack</h3>

                <div className="space-y-8">
                  {/* Frontend */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-200 mb-4 flex items-center">
                      <Globe className="w-5 h-5 mr-2 text-blue-400" />
                      Frontend
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">React</span>
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Next.js</span>
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">TypeScript</span>
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Tailwind CSS</span>
                    </div>
                  </div>

                  {/* Backend */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-200 mb-4 flex items-center">
                      <Server className="w-5 h-5 mr-2 text-green-400" />
                      Backend
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Node.js</span>
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Express.js</span>
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">REST APIs</span>
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">JWT Auth</span>
                    </div>
                  </div>

                  {/* Database */}
                  <div>
                    <h4 className="text-lg font-bold text-gray-200 mb-4 flex items-center">
                      <Database className="w-5 h-5 mr-2 text-purple-400" />
                      Database
                    </h4>
                    <div className="grid grid-cols-2 gap-3">
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">MongoDB</span>
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">SQL</span>
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Mongoose</span>
                      <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Prisma</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Expanding Into */}
              <div className="space-y-8">
                {/* Development Tools */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-8 sm:p-10 backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] magnetic-hover enhanced-glow">
                  <h3 className="text-2xl sm:text-3xl font-black mb-8 text-center text-white font-display">Development Tools</h3>
                  <div className="grid grid-cols-3 gap-3">
                    <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Git & GitHub</span>
                    <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">VS Code</span>
                    <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Cursor</span>
                    <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Postman</span>
                    <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Vercel</span>
                    <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Render</span>
                    <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Clerk Auth</span>
                    <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">Assembly AI</span>
                    <span className="bg-gray-800/70 hover:bg-gray-700/70 px-4 py-3 rounded-xl font-semibold border border-gray-600 hover:border-gray-500 transition-all duration-300 text-center text-sm hover:-translate-y-1">ShadCN UI</span>
                  </div>
                </div>

                {/* Expanding Into */}
                <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-8 backdrop-blur-lg border border-gray-700/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] magnetic-hover enhanced-glow">
                  <h3 className="text-2xl font-black mb-6 text-center text-white font-display">Expanding Into</h3>
                  <div className="space-y-4">
                    <div className="bg-gray-800/70 border-2 border-blue-500/50 px-4 py-3 rounded-2xl transition-all duration-500 hover:bg-gray-700/70 hover:border-blue-400/70 hover:-translate-y-1">
                      <div className="font-bold text-white font-display text-lg">Docker & DevOps</div>
                      <div className="text-gray-400 mt-1 text-sm">Containerization and deployment pipelines</div>
                    </div>
                    <div className="bg-gray-800/70 border-2 border-green-500/50 px-4 py-3 rounded-2xl transition-all duration-500 hover:bg-gray-700/70 hover:border-green-400/70 hover:-translate-y-1">
                      <div className="font-bold text-white font-display text-lg">AWS & Cloud Services</div>
                      <div className="text-gray-400 mt-1 text-sm">Scalable cloud infrastructure</div>
                    </div>
                    <div className="bg-gray-800/70 border-2 border-purple-500/50 px-4 py-3 rounded-2xl transition-all duration-500 hover:bg-gray-700/70 hover:border-purple-400/70 hover:-translate-y-1">
                      <div className="font-bold text-white font-display text-lg">GraphQL & Advanced APIs</div>
                      <div className="text-gray-400 mt-1 text-sm">Modern data fetching solutions</div>
                    </div>
                  </div>
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
              {PROJECTS_DATA.map((project, index) => {
                const isExpanded = expandedProjects[project.title] || false;

                return (
                  <div key={project.title} className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
                    {/* Left Column - Visual & Interactive Elements */}
                    <div className="w-full lg:w-2/5 space-y-8">
                      {/* Project Image */}
                      <div className="relative group">
                        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700/50 shadow-2xl transform group-hover:scale-105 transition-all duration-700 magnetic-hover shadow-[0_0_20px_rgba(255,255,255,0.1),inset_0_1px_0_rgba(255,255,255,0.1)]">
                          <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                            <img src={project.screenshots[0]} alt={`${project.title} Screenshot`} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          </div>
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        </div>
                      </div>

                      {/* Key Features */}
                      <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-2xl p-6 border border-gray-700/40 backdrop-blur-sm">
                        <h4 className="text-xl font-bold text-white mb-4 font-display">✨ Key Features</h4>
                        <ul className="space-y-3">
                          {project.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start space-x-3 text-gray-300">
                              <span className="text-white mt-1.5 text-sm">▸</span>
                              <span className="font-light text-base leading-relaxed">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Tech Stack - Back on left side */}
                      <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-2xl p-6 border border-gray-700/40 backdrop-blur-sm">
                        <h4 className="text-xl font-bold text-white mb-4 font-display">🛠️ Tech Stack</h4>
                        <div className="flex flex-wrap gap-3">
                          {project.tech.map((tech, techIndex) => (
                            <span key={tech} className="bg-gray-800/70 text-gray-200 px-4 py-2 rounded-xl font-medium border border-gray-600 backdrop-blur-sm transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1" style={{ animationDelay: `${techIndex * 50}ms` }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Key Achievements - Expandable Section */}
                      <div className="bg-gradient-to-br from-gray-900/60 to-gray-800/60 rounded-2xl p-6 border border-gray-700/40 backdrop-blur-sm">
                        <button onClick={() => toggleProject(project.title)} className="w-full flex items-center justify-between text-left group">
                          <h4 className="text-lg font-bold text-white font-display group-hover:text-gray-100 transition-colors duration-300">🏆 Key Technical Achievements</h4>
                          <div className={`transform transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                            <ChevronDown size={20} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
                          </div>
                        </button>

                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}`}>
                          <ul className="space-y-3">
                            {project.keyAchievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-start space-x-3 text-gray-300">
                                <span className="text-yellow-400 mt-1 text-sm font-bold">✦</span>
                                <span className="font-light text-sm leading-relaxed">{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Right Column - Project Description & Action Buttons */}
                    <div className="w-full lg:w-3/5">
                      <div className="sticky top-24">
                        {/* Project Title */}
                        <h3 className="text-4xl lg:text-5xl xl:text-6xl font-black font-display text-white leading-tight mb-8">{project.title}</h3>

                        {/* Long Description */}
                        <div className="prose prose-invert max-w-none mb-8">
                          <div className="text-lg lg:text-xl text-gray-300 leading-relaxed space-y-6">
                            {project.longDescription.split("\n\n").map((paragraph, index) => (
                              <p key={index} className="leading-8 text-gray-300">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>

                        {/* Action Buttons - Moved to right side under description */}
                        <div className="flex flex-col sm:flex-row gap-4">
                          {project.demo !== "#" && (
                            <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-3 bg-white text-black hover:bg-gray-100 px-6 py-4 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl text-base magnetic-hover">
                              <ExternalLink size={20} className="group-hover:rotate-45 transition-transform duration-300" />
                              <span>Live Demo</span>
                            </a>
                          )}
                          <a href={project.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-3 border-2 border-gray-600 hover:border-white hover:bg-white hover:text-black px-6 py-4 rounded-2xl font-bold transition-all duration-500 text-base transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] hover:-translate-y-1">
                            <Github size={20} className="group-hover:rotate-12 transition-transform duration-300" />
                            <span>View Code</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </AnimatedSection>

        {/* Enhanced experience section */}
        <AnimatedSection id="experience" sectionRef={sectionRefs.experience} className="bg-gray-950/60">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-center mb-12 sm:mb-16 lg:mb-20 bg-gradient-to-r from-white via-gray-200 to-white bg-clip-text text-transparent px-4">Experience</h2>
            <div className="space-y-10">
              {EXPERIENCES_DATA.map((exp, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 rounded-3xl p-6 sm:p-10 backdrop-blur-lg border border-gray-700/50 hover:from-gray-800/80 hover:to-gray-700/80 hover:border-gray-600/50 transition-all duration-700 shadow-[0_8px_32px_rgba(255,255,255,0.08)] magnetic-hover enhanced-glow" style={{ animationDelay: `${index * 200}ms` }}>
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
              <span className="text-white font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent block mt-4">Open to: Full-time roles, internships, or contract work starting immediately.</span>
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-6 sm:gap-10">
              <a href="mailto:mohamedsalahswe@gmail.com" className="group flex items-center space-x-3 sm:space-x-5 bg-white text-black hover:bg-gray-100 px-6 sm:px-12 py-4 sm:py-6 rounded-2xl font-bold transition-all duration-500 transform hover:scale-105 shadow-2xl w-full sm:w-auto justify-center magnetic-hover text-lg sm:text-xl">
                <Mail size={24} className="sm:w-7 sm:h-7 group-hover:rotate-12 transition-transform duration-300" />
                <span className="break-all sm:break-normal">mohamedsalahswe@gmail.com</span>
              </a>

              <div className="flex space-x-6 sm:space-x-8">
                <a
                  href="https://github.com/Mohamed-Salah-222"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 sm:p-6 rounded-2xl hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-500 transform hover:scale-110 border border-gray-700/50 hover:border-gray-600/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] magnetic-hover backdrop-blur-lg enhanced-glow"
                >
                  <Github size={28} className="sm:w-8 sm:h-8 group-hover:rotate-12 transition-transform duration-300" />
                </a>
                <a
                  href="https://www.linkedin.com/in/mohamed-salah-7933a6212/?trk=opento_sprofile_details"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group bg-gradient-to-br from-gray-900/80 to-gray-800/80 p-4 sm:p-6 rounded-2xl hover:from-gray-800/80 hover:to-gray-700/80 transition-all duration-500 transform hover:scale-110 border border-gray-700/50 hover:border-gray-600/50 shadow-[0_8px_32px_rgba(255,255,255,0.08)] magnetic-hover backdrop-blur-lg enhanced-glow"
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
