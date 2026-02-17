import "./index.css";
import Navbar from "../components/Navbar";
import profileImg from "../assets/images/my-photo-removebg-preview.png";

export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="bg-black text-white scroll-smooth">

        {/* HomePage */}

        <section
          id="home"
          className="h-[80vh] flex items-center justify-center bg-black relative overflow-hidden"
        >
          <div className="w-[70%] grid md:grid-cols-2 gap-16 items-center">

            <div>
              <p className="text-sm text-gray-400 mb-2 tracking-widest uppercase">
                HELLO, I AM
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                YOUSSEF LABNINE
              </h1>

              <p className="text-green-400 font-semibold mb-6 text-lg">
                I AM Web Developer
              </p>

              <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
                From Dhaka, Bangladesh. I'm a Full Stack Web developer who is passionate about
                making error-free websites. I am also good at WordPress. I love to talk with you
                about your unique idea.
              </p>

              <button className="bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-full font-semibold text-black">
                Contact
              </button>
            </div>

            <div className="relative flex justify-center items-center">

              <div className="absolute w-[450px] h-[450px] bg-green-500 rounded-full -z-10"></div>

              <img
                src={profileImg}
                alt="profile"
                className="w-[1000px] h-[650px] object-cover relative z-10"
              />

              <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex gap-6 z-20">

                <div className="bg-[#0a0f1a] border-2 border-green-500 rounded-2xl px-8 py-5 text-center min-w-[160px]">
                  <h3 className="text-3xl font-bold text-white mb-1">6+</h3>
                  <p className="text-sm text-green-400">Years of Experience</p>
                </div>

                <div className="bg-[#0a0f1a] border-2 border-green-500 rounded-2xl px-8 py-5 text-center min-w-[160px]">
                  <h3 className="text-3xl font-bold text-white mb-1">100+</h3>
                  <p className="text-sm text-green-400">Completed Projects</p>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* about me */}

        <section
          id="about"
          className="min-h-screen flex items-center justify-center py-20 md:py-32 bg-gradient-to-b from-black via-[#0b0f19] to-black"
        >
          <div className="w-[90%] md:w-[80%] max-w-7xl">

            <div className="text-center mb-16">
              <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
                Get to know me
              </span>

              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
                About Me
              </h2>

              <div className="w-24 h-1 bg-green-500 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-16 items-center">

              <div className="space-y-6">

                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a{" "}
                  <span className="text-green-400 font-semibold">
                    Full Stack Mobile & Web Developer
                  </span>{" "}
                  focused on building scalable, high-performance applications.
                  I combine clean architecture with modern UI/UX principles
                  to deliver reliable and efficient digital products.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  I specialize in designing robust backend systems and intuitive
                  frontend experiences using modern JavaScript technologies.
                  My goal is not just to write code — but to solve real business problems.
                </p>

                <p className="text-gray-400 leading-relaxed">
                  I am continuously improving my skills, exploring new technologies,
                  and building production-ready solutions that scale.
                </p>

                <div className="grid grid-cols-3 gap-4 pt-8">

                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-green-400">1+</h4>
                    <p className="text-sm text-gray-400 mt-1">Years Experience</p>
                  </div>

                  <div className="text-center border-l border-r border-gray-700">
                    <h4 className="text-3xl font-bold text-green-400">50+</h4>
                    <p className="text-sm text-gray-400 mt-1">Projects Completed</p>
                  </div>

                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-green-400">15+</h4>
                    <p className="text-sm text-gray-400 mt-1">Technologies</p>
                  </div>

                </div>

                <div className="pt-10">
                  <a
                    href="#contact"
                    className="inline-block bg-green-500 hover:bg-green-600 transition-all duration-300 px-8 py-3 rounded-full font-semibold text-black hover:scale-105"
                  >
                    Let’s Work Together
                  </a>
                </div>

              </div>

              <div>

                <h3 className="text-2xl font-semibold text-center mb-10">
                  Technologies I Work With
                </h3>

                <div className="grid grid-cols-3 sm:grid-cols-4 gap-6">

                  {[
                    { name: "React", icon: "react/react-original.svg" },
                    { name: "React Native", icon: "react/react-original.svg" },
                    { name: "TypeScript", icon: "typescript/typescript-original.svg" },
                    { name: "JavaScript", icon: "javascript/javascript-original.svg" },
                    { name: "Node.js", icon: "nodejs/nodejs-original.svg" },
                    { name: "Express", icon: "express/express-original.svg", invert: true },
                    { name: "PostgreSQL", icon: "postgresql/postgresql-original.svg" },
                    { name: "Docker", icon: "docker/docker-original.svg" },
                    { name: "HTML5", icon: "html5/html5-original.svg" },
                    { name: "CSS3", icon: "css3/css3-original.svg" },
                    { name: "Jest", icon: "jest/jest-plain.svg" },
                    { name: "Figma", icon: "figma/figma-original.svg" },
                    { name: "Jira", icon: "jira/jira-original.svg" },
                    { name: "MySQL", icon: "mysql/mysql-original.svg" },
                    { name: "Expo", icon: "expo/expo-original.svg" },
                  ].map((tech, index) => (
                    <div
                      key={index}
                      className="group flex flex-col items-center gap-3"
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 rounded-2xl flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:shadow-green-500/20 hover:scale-110">

                        <img
                          src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                          alt={tech.name}
                          className={`w-12 h-12 ${tech.invert ? "invert" : ""}`}
                        />

                      </div>

                      <span className="text-xs text-gray-400 group-hover:text-green-400 transition">
                        {tech.name}
                      </span>
                    </div>
                  ))}

                </div>

              </div>


            </div>

          </div>
        </section>

        {/* my projects */}

        <section id="projects" className="min-h-screen flex items-center justify-center py-20 md:py-32 bg-gradient-to-b from-black via-[#0b0f19] to-black">
          <div className="w-[70%] max-w-6xl">

            <div className="text-center mb-16">
              <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
                My Work
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
                Featured Projects
              </h2>
              <div className="w-20 h-1 bg-green-500 mx-auto"></div>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills in web and mobile development
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

              <div className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">

                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1555421689-d68471e189f2?w=500"
                    alt="E-commerce Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">
                    E-Commerce Platform
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    A full-stack e-commerce solution with payment integration, admin dashboard, and real-time inventory management.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">PostgreSQL</span>
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">

                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500"
                    alt="Mobile App Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">
                    Fitness Tracker App
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Mobile app for tracking workouts, nutrition, and progress with social features and AI-powered recommendations.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">React Native</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">Expo</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">Firebase</span>
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">

                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500"
                    alt="Dashboard Project"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">
                    Analytics Dashboard
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Real-time analytics platform with interactive charts, data visualization, and comprehensive reporting tools.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">Node.js</span>
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">

                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500"
                    alt="Task Management"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">
                    Task Management System
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Collaborative project management tool with team features, kanban boards, and deadline tracking.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">Express</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">MongoDB</span>
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">

                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500"
                    alt="Social Platform"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">
                    Social Media Platform
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Full-featured social network with real-time messaging, posts, stories, and user interactions.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">React Native</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">Node.js</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">PostgreSQL</span>
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

              <div className="group relative bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-xl overflow-hidden border border-green-500/30 hover:border-green-500 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/20">

                <div className="relative h-48 overflow-hidden bg-gray-800">
                  <img
                    src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=500"
                    alt="Portfolio"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] to-transparent opacity-60"></div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition">
                    Weather Forecast App
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    Beautiful weather application with location-based forecasts, animated backgrounds, and weather alerts.
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">React</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">TypeScript</span>
                    <span className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs">API</span>
                  </div>

                  <div className="flex gap-3">
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      GitHub
                    </a>
                    <a href="#" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>

            </div>

            <div className="text-center mt-12">
              <button className="bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-full font-semibold text-black inline-flex items-center gap-2">
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>

          </div>
        </section>

        {/* contact */}

        <section id="contact" className="min-h-screen flex items-center justify-center py-20 md:py-32 bg-black relative overflow-hidden">

          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-10 right-20 w-96 h-96 bg-green-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 left-20 w-80 h-80 bg-green-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="w-[70%] max-w-6xl relative z-10">

            <div className="text-center mb-16">
              <span className="text-green-400 text-sm font-semibold tracking-widest uppercase">
                Get In Touch
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-4">
                Contact Me
              </h2>
              <div className="w-20 h-1 bg-green-500 mx-auto"></div>
              <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
                Have a project in mind or just want to chat? Feel free to reach out!
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">

              <div className="space-y-8">

                <div>
                  <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
                  <p className="text-gray-400 leading-relaxed">
                    I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                    Whether you need a full-stack developer or just want to say hello, don't hesitate to reach out!
                  </p>
                </div>

                <div className="space-y-4">

                  <div className="cursor-pointer group bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Email</p>
                        <a href="mailto:youssef@example.com" className="text-white hover:text-green-400 transition font-medium">
                          yousseflab20@gmail.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer group bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Phone</p>
                        <a href="tel:+212600000000" className="text-white hover:text-green-400 transition font-medium">
                          +212 718-799401
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer group bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 p-6 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center group-hover:bg-green-500/20 transition">
                        <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">Location</p>
                        <p className="text-white font-medium">
                          Agadir, Morocco
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="pt-6">
                  <p className="text-gray-400 mb-4">Follow me on</p>
                  <div className="flex gap-4">

                    <a href="https://github.com/yousseflab20-ui" className="w-12 h-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110">
                      <svg className="w-5 h-5 text-gray-400 hover:text-green-400 transition" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>

                    <a href="https://www.linkedin.com/in/youssef-labnine-313a47367/" className="w-12 h-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110">
                      <svg className="w-5 h-5 text-gray-400 hover:text-green-400 transition" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>

                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110">
                      <svg className="w-5 h-5 text-gray-400 hover:text-green-400 transition" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                      </svg>
                    </a>

                    <a href="#" className="w-12 h-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110">
                      <svg className="w-5 h-5 text-gray-400 hover:text-green-400 transition" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                      </svg>
                    </a>

                  </div>
                </div>

              </div>

              <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 p-8 rounded-xl">
                <h3 className="text-2xl font-bold mb-6">Send me a message</h3>

                <form className="space-y-6">

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-[#0a0f1a] border border-green-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Your Email
                    </label>
                    <input
                      type="email"
                      placeholder="john@example.com"
                      className="w-full bg-[#0a0f1a] border border-green-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Discussion"
                      className="w-full bg-[#0a0f1a] border border-green-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-400 mb-2">
                      Message
                    </label>
                    <textarea
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-[#0a0f1a] border border-green-500/30 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 transition resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-green-500 hover:bg-green-600 text-black font-semibold py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-green-500/50 hover:scale-105 transform flex items-center justify-center gap-2 cursor-pointer"
                  >
                    Send Message
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>

                </form>
              </div>

            </div>

          </div>
        </section>
      </div>
    </div>
  );
}
