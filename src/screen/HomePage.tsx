import "./index.css";
import Navbar from "../components/Navbar";
import profileImg from "../assets/images/image-test.png";
import { PERSONAL_INFO, STATS, SOCIAL_LINKS, PROJECTS, TECH_STACK } from "../constants";

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
                {PERSONAL_INFO.name}
              </h1>

              <p className="text-green-400 font-semibold mb-6 text-lg">
                I am a {PERSONAL_INFO.title}
              </p>

              <p className="text-gray-400 max-w-md mb-8 leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>

              <a href="#contact" className="bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-full font-semibold text-black">
                Contact
              </a>
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
                  <h3 className="text-3xl font-bold text-white mb-1">{STATS.yearsExperience}</h3>
                  <p className="text-sm text-green-400">Years of Experience</p>
                </div>

                <div className="bg-[#0a0f1a] border-2 border-green-500 rounded-2xl px-8 py-5 text-center min-w-[160px]">
                  <h3 className="text-3xl font-bold text-white mb-1">{STATS.projectsCompleted}</h3>
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
                  {PERSONAL_INFO.about.intro}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {PERSONAL_INFO.about.specialization}
                </p>

                <p className="text-gray-400 leading-relaxed">
                  {PERSONAL_INFO.about.goal}
                </p>

                <div className="grid grid-cols-3 gap-4 pt-8">

                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-green-400">{STATS.yearsExperience}</h4>
                    <p className="text-sm text-gray-400 mt-1">Years Experience</p>
                  </div>

                  <div className="text-center border-l border-r border-gray-700">
                    <h4 className="text-3xl font-bold text-green-400">{STATS.projectsCompleted}</h4>
                    <p className="text-sm text-gray-400 mt-1">Projects Completed</p>
                  </div>

                  <div className="text-center">
                    <h4 className="text-3xl font-bold text-green-400">{STATS.technologies}</h4>
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

                  {TECH_STACK.map((tech, index) => (
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


            {/* Projects Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {PROJECTS.map((project, index) => (
                <div key={index} className={`group relative bg-[#0f172a]/50 backdrop-blur-lg rounded-xl overflow-hidden border border-white/10 hover:border-green-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/10 hover:-translate-y-2 ${index === PROJECTS.length - 1 ? "md:col-span-2 lg:col-start-2 lg:col-end-3" : ""}`}>

                  <div className="relative h-48 overflow-hidden">
                    <div className="absolute inset-0 bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-green-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech, i) => (
                        <span key={i} className="px-2 py-1 bg-green-500/10 text-green-400 rounded text-xs font-medium border border-green-500/10">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center gap-4 mt-auto">
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors">
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                        </svg>
                        Code
                      </a>
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-400 hover:text-green-400 transition-colors">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    </div>

                  </div>
                </div>
              ))}
            </div>


            <div className="text-center mt-12">
              <a href="https://github.com/yousseflab20-ui?tab=repositories" target="_blank" rel="noopener noreferrer" className="bg-green-500 hover:bg-green-600 transition px-8 py-3 rounded-full font-semibold text-black inline-flex items-center gap-2">
                View All Projects
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
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
                        <a href={`mailto:${PERSONAL_INFO.email}`} className="text-white hover:text-green-400 transition font-medium">
                          {PERSONAL_INFO.email}
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
                        <a href={`tel:${PERSONAL_INFO.phone}`} className="text-white hover:text-green-400 transition font-medium">
                          {PERSONAL_INFO.phone}
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
                          {PERSONAL_INFO.location}
                        </p>
                      </div>
                    </div>
                  </div>

                </div>

                <div className="pt-6">
                  <p className="text-gray-400 mb-4">Follow me on</p>
                  <div className="flex gap-4">

                    <a target="_blank" href={SOCIAL_LINKS.github} rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110">
                      <svg className="w-5 h-5 text-gray-400 hover:text-green-400 transition" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                    </a>

                    <a target="_blank" href={SOCIAL_LINKS.linkedin} rel="noopener noreferrer" className="w-12 h-12 bg-gradient-to-br from-[#0f172a] to-[#1e293b] border border-green-500/30 hover:border-green-500 rounded-lg flex items-center justify-center transition-all duration-300 hover:shadow-lg hover:shadow-green-500/20 hover:scale-110">
                      <svg className="w-5 h-5 text-gray-400 hover:text-green-400 transition" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
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
