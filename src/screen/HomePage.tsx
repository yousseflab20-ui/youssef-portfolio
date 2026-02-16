import "./index.css";
import Navbar from "../components/Navbar";
export default function HomePage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      <div className="bg-black text-white scroll-smooth">

        <section id="home" className="min-h-screen flex items-start justify-center pt-60">
          <div className="w-[70%] grid md:grid-cols-2 gap-10 items-center">

            <div>
              <p className="text-sm text-gray-400 mb-2 tracking-widest">
                HELLO, I AM
              </p>

              <h1 className="text-5xl md:text-6xl font-bold mb-4 leading-tight">
                YOUSSEF LABNINE
              </h1>

              <p className="text-green-400 font-semibold mb-3">
                I AM Full Stack Mobile & Web Developer
              </p>

              <p className="text-gray-400 max-w-md mb-6">
                I'm a Full Stack Mobile & Web Developer specialized in building
                scalable web applications and high-performance mobile apps.
                I transform ideas into modern, efficient, and user-focused digital solutions.
              </p>

              <button className="bg-green-500 hover:bg-green-600 transition px-6 py-3 rounded-full font-semibold text-black">
                Contact
              </button>
            </div>

            <div className="relative flex justify-center">
              <div className="absolute w-80 h-80 bg-green-500 rounded-full -z-10 blur-2xl opacity-70"></div>

              <img
                src="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1"
                alt="profile"
                className="w-72 md:w-80 object-cover rounded-xl"
              />

              <div className="absolute -bottom-16 flex gap-6">
                <div className="bg-[#0f172a] border border-green-500 rounded-xl px-6 py-4 text-center">
                  <h3 className="text-xl font-bold">1+</h3>
                  <p className="text-sm text-gray-400">Years of Experience</p>
                </div>

                <div className="bg-[#0f172a] border border-green-500 rounded-xl px-6 py-4 text-center">
                  <h3 className="text-xl font-bold">100+</h3>
                  <p className="text-sm text-gray-400">Completed Projects</p>
                </div>
              </div>
            </div>

          </div>
        </section>
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

            <div className="grid md:grid-cols-2 gap-16 items-start">

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


      </div>
    </div>
  );
}
