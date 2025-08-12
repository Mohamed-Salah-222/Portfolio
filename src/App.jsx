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
    { name: "MongoDB", icon: Database, color: "text-green-400" },
    { name: "Express.js", icon: Server, color: "text-yellow-400" },
    { name: "React.js", icon: Code, color: "text-cyan-400" },
    { name: "Node.js", icon: Globe, color: "text-emerald-400" },
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online shopping platform with user authentication, product catalog, shopping cart, and payment integration. Built with the complete MERN stack.",
      longDescription: "This comprehensive e-commerce solution features a modern, responsive design with advanced product filtering, secure user authentication using JWT, integrated payment processing with Stripe, and a complete admin dashboard for inventory management. The platform handles everything from user registration to order fulfillment.",
      tech: ["React", "Node.js", "Express", "MongoDB", "JWT", "Stripe"],
      github: "https://github.com/Mohamed-Salah-222/E-Commerce-App",
      demo: "https://e-commerce-app-neon-eight.vercel.app/",
      features: ["User Authentication & Authorization", "Shopping Cart & Checkout", "Payment Integration", "Admin Dashboard", "Product Reviews & Ratings"],
      screenshots: ["https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop", "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"],
    },
    {
      title: "Recipe Share App",
      description: "A social platform for food enthusiasts to share, discover, and save recipes. Features include user profiles, recipe ratings, and advanced search functionality.",
      longDescription: "A vibrant community-driven platform where food lovers can share their favorite recipes, discover new cuisines, and connect with fellow cooking enthusiasts. The app features advanced search and filtering, recipe collections, step-by-step cooking guides, and social features like comments and ratings.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Cloudinary"],
      github: "https://github.com/Mohamed-Salah-222/Recipe-App",
      demo: "https://recipe-app-blush-three.vercel.app/",
      features: ["Recipe Sharing & Discovery", "Advanced Search & Filters", "User Profiles & Collections", "Photo Upload & Storage", "Community Ratings & Reviews"],
      screenshots: ["recipe pic.png", "recipe pic 2.png"],
    },
    {
      title: "StudyBuddy",
      description: "A comprehensive study companion with tools for creating study plans, taking notes, setting reminders, and tracking progress. Perfect for students and professionals.",
      longDescription: "An all-in-one study management application designed to help students and professionals organize their learning journey. Features include intelligent study scheduling, collaborative note-taking, progress tracking with analytics, and integration with popular calendar apps for seamless workflow management.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Calendar API"],
      github: "https://github.com/Mohamed-Salah-222/StudyBuddy",
      demo: "https://study-buddy-blush.vercel.app/",
      features: ["Smart Study Planning", "Collaborative Note-Taking", "Progress Analytics", "Calendar Integration", "Study Group Management"],
      screenshots: ["Study.png", "Study 2.png"],
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
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
          filter: drop-shadow(0 0 20px rgba(255, 255, 255, 0.15));
        }

        .text-glow {
          text-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
        }

        .card-glow {
          box-shadow: 0 0 40px rgba(255, 255, 255, 0.05);
        }

        .pulse-border {
          animation: pulse-border 2s ease-in-out infinite alternate;
        }

        @keyframes pulse-border {
          0% {
            border-color: rgba(75, 85, 99, 0.5);
          }
          100% {
            border-color: rgba(255, 255, 255, 0.2);
          }
        }

        .gradient-border {
          background: linear-gradient(45deg, #374151, #6b7280, #9ca3af, #d1d5db);
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

        .bg-grid {
          background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gray-800 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-gray-700 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-gray-600 rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-pulse delay-2000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-xl z-50 border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex justify-between items-center">
            {/* Logo/Name */}
            <div className="font-display font-bold text-xl text-white">MS</div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className={`capitalize font-medium tracking-wide hover:text-white transition-all duration-300 relative group ${activeSection === item ? "text-white" : "text-gray-400"}`}>
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button className="md:hidden p-2 rounded-lg bg-gray-900/50 hover:bg-gray-800/50 transition-all duration-300 border border-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-black/95 backdrop-blur-xl border-t border-gray-800/50">
            <div className="px-4 sm:px-6 py-4 space-y-4">
              {["home", "about", "skills", "projects", "experience", "contact"].map((item) => (
                <button key={item} onClick={() => scrollToSection(item)} className="block w-full text-left capitalize font-medium hover:text-white transition-all duration-300 py-2 text-gray-300">
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 pt-20 relative bg-grid">
        <div className="text-center max-w-5xl mx-auto z-10">
          <div className="mb-8 floating">
            <div className="w-32 h-32 sm:w-36 sm:h-36 mx-auto bg-gradient-to-r from-gray-600 to-gray-400 rounded-full flex items-center justify-center p-1 glow-effect">
              <div className="w-full h-full bg-gray-900 rounded-full overflow-hidden border-2 border-gray-700">
                <img src="pic.jpg" alt="Mohamed Salah" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>

          <h1 className="font-display text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-black mb-6 sm:mb-8 bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent text-glow slide-up">Mohamed Salah</h1>

          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-6 sm:mb-8 text-gray-300 font-medium tracking-wide slide-up" style={{ animationDelay: "0.2s" }}>
            Full-Stack Web Developer | MERN Stack Specialist
          </p>

          <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 text-gray-400 max-w-3xl mx-auto leading-relaxed font-light slide-up px-4" style={{ animationDelay: "0.4s" }}>
            Passionate junior developer crafting modern web applications with MongoDB, Express.js, React, and Node.js.
            <span className="text-white font-medium"> I bring ideas to life</span> through clean code and intuitive user experiences.
          </p>

          {/* Fun Fact Counter */}
          <div className="mb-8 sm:mb-12 p-6 sm:p-8 bg-gray-900/80 rounded-2xl sm:rounded-3xl backdrop-blur-sm border border-gray-800 pulse-border card-glow slide-up mx-4" style={{ animationDelay: "0.6s" }}>
            <h3 className="text-xl sm:text-2xl font-bold mb-4 text-white font-display">🚀 Coding Journey</h3>
            <p className="text-base sm:text-lg mb-4 text-gray-300 font-medium">I've been coding for</p>
            <div className="font-mono text-4xl sm:text-6xl md:text-8xl font-bold bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent tracking-tight">{formatNumber(codingSeconds)}</div>
            <p className="text-lg sm:text-xl mt-4 text-gray-300 font-medium tracking-wide">Seconds</p>
          </div>

          <div className="flex justify-center slide-up" style={{ animationDelay: "0.8s" }}>
            <button onClick={() => scrollToSection("projects")} className="group bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 flex items-center space-x-3 shadow-lg">
              <span className="font-medium">View Projects</span>
              <ChevronDown size={20} className="group-hover:translate-y-1 transition-transform duration-300" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-24 px-4 sm:px-6 relative">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">About Me</h2>
          <div className="bg-gray-900/60 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-sm border border-gray-800 card-glow hover:border-gray-700 transition-all duration-500">
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-6 sm:mb-8 font-light">
              Welcome to my digital space! I'm <span className="text-white font-semibold">Mohamed Salah</span>, a passionate junior full-stack developer specializing in the MERN stack. My journey into web development began with curiosity and has evolved into a deep love for creating meaningful digital experiences.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 mb-6 sm:mb-8 font-light">
              I thrive on transforming ideas into functional, beautiful web applications. Whether it's building responsive frontends with React or crafting robust backends with Node.js and Express, I approach each project with <span className="text-gray-200 font-semibold">enthusiasm and attention to detail</span>.
            </p>
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-300 font-light">
              When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or planning my next big idea. I believe in <span className="text-white font-semibold">continuous learning</span> and staying updated with the latest trends in web development.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-950/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Skills & Technologies</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8 mb-12 sm:mb-16">
            {skills.map((skill, index) => {
              const IconComponent = skill.icon;
              return (
                <div key={skill.name} className="group bg-gray-900/60 p-6 sm:p-10 rounded-2xl sm:rounded-3xl text-center hover:bg-gray-800/60 transition-all duration-500 transform hover:scale-105 backdrop-blur-sm border border-gray-800 card-glow hover:border-gray-700" style={{ animationDelay: `${index * 0.1}s` }}>
                  <IconComponent className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 ${skill.color} group-hover:scale-110 transition-transform duration-300 glow-effect`} />
                  <h3 className="text-lg sm:text-xl font-bold font-display text-gray-100">{skill.name}</h3>
                </div>
              );
            })}
          </div>

          <div className="bg-gray-900/60 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-sm border border-gray-800 card-glow">
            <h3 className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8 text-center text-white font-display">Additional Technologies</h3>
            <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
              {["JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Git", "JWT", "REST APIs", "Mongoose", "npm"].map((tech) => (
                <span key={tech} className="bg-gray-800/60 hover:bg-gray-700/60 px-4 sm:px-6 py-2 sm:py-3 rounded-full text-sm font-medium border border-gray-700 hover:border-gray-600 transition-all duration-300 cursor-default backdrop-blur-sm">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Featured Projects</h2>

          <div className="space-y-24 sm:space-y-32">
            {projects.map((project, index) => (
              <div key={project.title} className={`flex flex-col ${index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"} items-center gap-8 lg:gap-16`} style={{ animationDelay: `${index * 0.2}s` }}>
                {/* Screenshots Section */}
                <div className="w-full lg:w-1/2 relative">
                  <div className="relative group">
                    {/* Main Screenshot */}
                    <div className="relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-800 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                        <img src={project.screenshots[0]} alt={`${project.title} Screenshot 1`} className="w-full h-full object-cover" />
                        {/* Overlay for demo effect */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                    </div>

                    {/* Secondary Screenshot */}
                    <div className="absolute -bottom-4 -right-4 w-1/2 overflow-hidden rounded-xl bg-gray-900 border border-gray-800 shadow-xl transform group-hover:scale-110 transition-all duration-500 delay-100">
                      <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900">
                        <img src={project.screenshots[1]} alt={`${project.title} Screenshot 2`} className="w-full h-full object-cover" />
                      </div>
                    </div>

                    {/* Floating Elements */}
                    <div className="absolute -top-4 -left-4 w-8 h-8 bg-white rounded-full opacity-80 group-hover:scale-125 transition-transform duration-300"></div>
                    <div className="absolute top-1/2 -right-2 w-4 h-4 bg-gray-400 rounded-full opacity-60 group-hover:scale-150 transition-transform duration-300 delay-200"></div>
                  </div>
                </div>

                {/* Project Details Section */}
                <div className="w-full lg:w-1/2 space-y-6">
                  {/* Project Title */}
                  <div>
                    <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black font-display text-white mb-4 leading-tight">{project.title}</h3>
                    <p className="text-lg sm:text-xl text-gray-400 leading-relaxed font-light">{project.longDescription}</p>
                  </div>

                  {/* Key Features */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 font-display">Key Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3 text-gray-300">
                          <span className="text-white mt-1.5 text-xs">▸</span>
                          <span className="font-light">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h4 className="text-xl font-bold text-white mb-4 font-display">Built With</h4>
                    <div className="flex flex-wrap gap-3">
                      {project.tech.map((tech) => (
                        <span key={tech} className="bg-gray-900 border border-gray-700 px-4 py-2 rounded-lg text-sm font-medium font-mono text-gray-300 hover:border-gray-600 transition-colors duration-300">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <a href={project.demo} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-3 bg-white text-black hover:bg-gray-200 px-8 py-4 rounded-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg text-lg">
                      <ExternalLink size={20} className="group-hover:scale-110 transition-transform duration-200" />
                      <span>Live Demo</span>
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="group flex items-center justify-center space-x-3 border-2 border-gray-700 hover:border-white bg-transparent hover:bg-white hover:text-black px-8 py-4 rounded-xl font-bold transition-all duration-300 text-lg">
                      <Github size={20} className="group-hover:scale-110 transition-transform duration-200" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-24 px-4 sm:px-6 bg-gray-950/50">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-center mb-12 sm:mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Experience</h2>
          <div className="space-y-6 sm:space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-gray-900/60 rounded-2xl sm:rounded-3xl p-6 sm:p-10 backdrop-blur-sm border border-gray-800 hover:bg-gray-800/60 hover:border-gray-700 transition-all duration-500 card-glow">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display mb-2 sm:mb-0">{exp.title}</h3>
                  <span className="text-gray-400 font-medium font-mono bg-gray-800/50 px-3 sm:px-4 py-1 sm:py-2 rounded-full border border-gray-700 text-sm">{exp.period}</span>
                </div>
                <p className="text-gray-300 leading-relaxed text-base sm:text-lg font-light">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-24 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-12 sm:mb-20 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Let's Connect</h2>

          <p className="text-lg sm:text-xl md:text-2xl mb-12 sm:mb-16 text-gray-300 max-w-3xl mx-auto font-light leading-relaxed">
            I'm always excited to discuss new opportunities, collaborate on projects, or just chat about web development.
            <span className="text-white font-semibold"> Let's build something amazing together!</span>
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center space-y-6 sm:space-y-0 sm:space-x-8">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=midosalah25552@gmail.com&su=Hello%20Mohamed!%20Let's%20Connect"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 sm:space-x-4 bg-white text-black hover:bg-gray-200 px-6 sm:px-8 py-4 sm:py-5 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg w-full sm:w-auto justify-center"
            >
              <Mail size={20} sm:size={24} className="group-hover:scale-110 transition-transform duration-200" />
              <span className="font-medium text-sm sm:text-base">midosalah25552@gmail.com</span>
            </a>

            <div className="flex space-x-6">
              <a href="https://github.com/Mohamed-Salah-222" target="_blank" rel="noopener noreferrer" className="group bg-gray-900/60 p-4 sm:p-5 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-110 border border-gray-800 hover:border-gray-700 card-glow">
                <Github size={24} sm:size={28} className="group-hover:text-white transition-colors duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/mohamed-salah-7933a6212/?trk=opento_sprofile_details" target="_blank" rel="noopener noreferrer" className="group bg-gray-900/60 p-4 sm:p-5 rounded-2xl hover:bg-gray-800/60 transition-all duration-300 transform hover:scale-110 border border-gray-800 hover:border-gray-700 card-glow">
                <Linkedin size={24} sm:size={28} className="group-hover:text-white transition-colors duration-300" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-6 sm:py-8 px-4 sm:px-6 border-t border-gray-800 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 font-light text-sm sm:text-base">
            © 2025 Mohamed Salah. Built with React and lots of
            <span className="text-white mx-1">☕</span>
            <span className="font-mono text-xs sm:text-sm ml-2 text-gray-500">// Crafted with passion</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;
