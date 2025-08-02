import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, ExternalLink, Code, Database, Server, Globe, ChevronDown, Menu, X } from "lucide-react";

const Portfolio = () => {
  const [codingSeconds, setCodingSeconds] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // Calculate coding seconds since Jan 1, 2025
  useEffect(() => {
    const startDate = new Date("2025-01-01T00:00:00");

    const updateCounter = () => {
      const now = new Date();
      const seconds = Math.floor((now - startDate) / 1000);
      setCodingSeconds(seconds);
    };

    updateCounter();
    const interval = setInterval(updateCounter, 1000);
    return () => clearInterval(interval);
  }, []);

  // Format number with commas
  const formatNumber = (num) => {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const skills = [
    { name: "MongoDB", icon: Database, color: "text-emerald-400" },
    { name: "Express.js", icon: Server, color: "text-orange-400" },
    { name: "React.js", icon: Code, color: "text-cyan-400" },
    { name: "Node.js", icon: Globe, color: "text-lime-400" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration. Built with the complete MERN stack.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      github: "#",
      demo: "#",
    },
    {
      title: "Recipe Share App",
      description: "A social platform for food enthusiasts to share, discover, and save recipes. Features include user profiles, recipe ratings, and advanced search functionality.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
      github: "#",
      demo: "#",
    },
    {
      title: "StudyBuddy",
      description: "A comprehensive study companion with tools for creating study plans, taking notes, setting reminders, and tracking progress. Perfect for students and professionals.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Calendar API"],
      github: "#",
      demo: "#",
    },
  ];

  const experiences = [
    {
      period: "2024 - Present",
      title: "Self-Taught Developer",
      description: "Building projects and learning MERN stack development through hands-on practice and online resources.",
    },
    {
      period: "2024",
      title: "Personal Projects",
      description: "Developed multiple full-stack applications to strengthen skills in modern web development technologies.",
    },
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
    setActiveSection(sectionId);
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-purple-950 to-indigo-950 text-white overflow-x-hidden">
      {/* Custom CSS for fonts and animations */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap");

        * {
          font-family: "Inter", -apple-system, BlinkMacSystemFont, system-ui, sans-serif;
        }

        .font-display {
          font-family: "Space Grotesk", "Inter", sans-serif;
        }

        .font-mono {
          font-family: "JetBrains Mono", monospace;
        }

        .glow-effect {
          filter: drop-shadow(0 0 20px rgba(59, 130, 246, 0.5));
        }

        .text-glow {
          text-shadow: 0 0 30px rgba(59, 130, 246, 0.6);
        }

        .card-glow {
          box-shadow: 0 0 50px rgba(59, 130, 246, 0.1);
        }

        .pulse-border {
          animation: pulse-border 2s ease-in-out infinite alternate;
        }

        @keyframes pulse-border {
          0% {
            border-color: rgba(59, 130, 246, 0.3);
          }
          100% {
            border-color: rgba(139, 92, 246, 0.6);
          }
        }

        .gradient-border {
          background: linear-gradient(45deg, #3b82f6, #8b5cf6, #06b6d4, #10b981);
          background-size: 400% 400%;
          animation: gradient-flow 3s ease infinite;
        }

        @keyframes gradient-flow {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }

        .slide-up {
          animation: slideUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(30px);
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-purple-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-cyan-600 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-950/80 backdrop-blur-xl z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex justify-between w-full">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`capitalize font-medium tracking-wide hover:text-cyan-400 transition-all duration-300 relative group ${activeSection === item ? "text-cyan-400" : "text-gray-300"}`}>
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden mx-auto p-2 rounded-lg bg-gray-800/50 hover:bg-gray-700/50 transition-all duration-300" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-t border-gray-800/50">
            <div className="px-6 py-4 space-y-4">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left capitalize font-medium hover:text-cyan-400 transition-all duration-300 py-2">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
        <div className="text-center max-w-5xl mx-auto z-10">
          <div className="mb-8 floating">
            <div className="w-36 h-36 mx-auto bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 rounded-full flex items-center justify-center p-1 glow-effect">
              <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden">
                <img src="pic.jpg" alt="Mohamed Salah" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <h1 className="font-display text-7xl md:text-9xl font-black mb-8 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent text-glow slide-up">Mohamed Salah</h1>

          <p className="text-2xl md:text-3xl mb-8 text-gray-300 font-medium tracking-wide slide-up" style={{ animationDelay: "0.2s" }}>
            Full-Stack Web Developer | MERN Stack Specialist
          </p>

          <p className="text-lg md:text-xl mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed font-light slide-up" style={{ animationDelay: "0.4s" }}>
            Passionate junior developer crafting modern web applications with MongoDB, Express.js, React, and Node.js.
            <span className="text-cyan-400 font-medium"> I bring ideas to life</span> through clean code and intuitive user experiences.
          </p>

          {/* Fun Fact Counter */}
          <div className="mb-12 p-8 bg-gray-900/50 rounded-3xl backdrop-blur-sm border pulse-border card-glow slide-up" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-2xl font-bold mb-4 text-cyan-400 font-display">🚀 Coding Journey</h3>
            <p className="text-lg mb-4 text-gray-300 font-medium">I've been coding for</p>
            <div className="font-mono text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent tracking-tight">{formatNumber(codingSeconds)}</div>
            <p className="text-xl mt-4 text-gray-300 font-medium tracking-wide">Seconds</p>
          </div>

          <div className="flex justify-center space-x-6 slide-up" style={{ animationDelay: "0.8s" }}>
            <button onClick={() => scrollToSection("projects")} className="group bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-8 py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg hover:shadow-cyan-500/25">
              <span className="font-medium">View Projects</span>
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">About Me</h2>
          <div className="bg-gray-900/60 rounded-3xl p-10 backdrop-blur-sm border border-gray-700/50 card-glow hover:border-cyan-500/30 transition-all duration-500">
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8 font-light">
              Welcome to my digital space! I'm <span className="text-cyan-400 font-semibold">Mohamed Salah</span>, a passionate junior full-stack developer specializing in the MERN stack. My journey into web development began with curiosity and has evolved into a deep love for creating meaningful digital experiences.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 mb-8 font-light">
              I thrive on transforming ideas into functional, beautiful web applications. Whether it's building responsive frontends with React or crafting robust backends with Node.js and Express, I approach each project with <span className="text-purple-400 font-semibold">enthusiasm and attention to detail</span>.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300 font-light">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or planning my next big idea. I believe in <span className="text-emerald-400 font-semibold">continuous learning</span> and staying updated with the latest trends in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 bg-gray-950/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Skills & Technologies</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="group bg-gray-900/60 p-10 rounded-3xl text-center hover:bg-gray-800/60 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm border border-gray-700/50 card-glow hover:border-cyan-500/30" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className={`w-16 h-16 mx-auto mb-6 ${skill.color} group-hover:scale-110 transition-transform duration-300 glow-effect`} />
                  <h3 className="text-xl font-bold font-display text-gray-100">{skill.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-900/60 rounded-3xl p-10 backdrop-blur-sm border border-gray-700/50 card-glow">
            <h3 className="text-3xl font-bold mb-8 text-center text-cyan-400 font-display">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "JWT", "REST APIs", "Mongoose", "npm"].map((tech) => (
                <span key={tech} className="bg-gradient-to-r from-gray-800/80 to-gray-700/80 hover:from-cyan-600/20 hover:to-blue-600/20 px-6 py-3 rounded-full text-sm font-medium border border-gray-600/50 hover:border-cyan-400/50 transition-all duration-300 cursor-default backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={project.title} className="group bg-gray-900/60 rounded-3xl overflow-hidden hover:bg-gray-800/60 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm border border-gray-700/50 card-glow hover:border-purple-500/30" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="p-8">
                  <h3 className="text-2xl font-bold mb-6 text-cyan-400 font-display group-hover:text-cyan-300 transition-colors duration-300">{project.title}</h3>
                  <p className="text-gray-300 mb-8 leading-relaxed font-light text-base">{project.description}</p>

                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.tech.map((tech) => (
                      <span key={tech} className="bg-gradient-to-r from-gray-800/60 to-gray-700/60 px-4 py-2 rounded-full text-sm font-medium border border-gray-600/50 font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex space-x-4">
                    <a href={project.demo} className="group/btn flex items-center space-x-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 shadow-lg hover:shadow-cyan-500/25">
                      <ExternalLink size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.github} className="group/btn flex items-center space-x-2 border border-gray-600 hover:border-cyan-400 bg-gray-800/50 hover:bg-gray-700/50 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300">
                      <Github size={16} className="group-hover/btn:scale-110 transition-transform duration-200" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 bg-gray-950/30">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-5xl md:text-6xl font-black text-center mb-20 bg-gradient-to-r from-emerald-400 to-purple-400 bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900/60 rounded-3xl p-10 backdrop-blur-sm border border-gray-700/50 hover:bg-gray-800/60 hover:border-emerald-500/30 transition-all duration-500 card-glow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                  <h3 className="text-2xl font-bold text-cyan-400 font-display mb-2 md:mb-0">{exp.title}</h3>
                  <span className="text-gray-400 font-medium font-mono bg-gray-800/50 px-4 py-2 rounded-full border border-gray-600/30">{exp.period}</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-lg font-light">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-5xl md:text-6xl font-black mb-20 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Let's Connect</h2>

          <p className="text-xl md:text-2xl mb-16 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on projects, or just chat about web development.
            <span className="text-cyan-400 font-semibold"> Let's build something amazing together!</span>
          </p>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-6 md:space-y-0 md:space-x-8">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=midosalah25552@gmail.com&su=Hello%20Mohamed!%20Let's%20Connect"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 px-8 py-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-cyan-500/25"
            >
              <Mail size={24} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium">midosalah25552@gmail.com</span>
            </a>

            <div className="flex space-x-6">
              <a href="https://github.com/Mohamed-Salah-222" target="_blank" rel="noopener noreferrer" className="group bg-gray-900/60 p-5 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-cyan-400/50 card-glow">
                <Github size={28} className="group-hover:text-cyan-400 transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-salah-7933a6212/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" className="group bg-gray-900/60 p-5 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-110 border border-gray-700/50 hover:border-purple-400/50 card-glow">
                <Linkedin size={28} className="group-hover:text-purple-400 transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800/50 bg-gray-950/50">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 font-light">
            © 2025 Mohamed Salah. Built with React and lots of
            <span className="text-cyan-400 mx-1">☕</span>
            <span className="font-mono text-sm ml-2 text-gray-500">// Crafted with passion</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
