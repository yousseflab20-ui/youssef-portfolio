import { PROJECTS, SOCIAL_LINKS } from "../constants";
import { IconGithub, IconExternal } from "./Icons";

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative py-28 overflow-hidden">
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-[85%] max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20 fade-up">
          <span className="inline-block px-3 py-1 rounded-full glass text-violet-300 text-xs font-bold tracking-widest uppercase mb-4">
            My Work
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-6" />
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {PROJECTS.map((project, idx) => (
            <div
              key={idx}
              className="project-card glass glass-hover gradient-border rounded-2xl overflow-hidden flex flex-col group"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-60 group-hover:opacity-80"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/40 to-transparent" />
                {/* Project number */}
                <div className="absolute top-4 right-4 w-10 h-10 glass rounded-xl flex items-center justify-center text-xs font-black text-violet-300">
                  {String(idx + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-7 flex-1 flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-300 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-5 flex-1">
                  {project.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.slice(0, 5).map((t, i) => (
                    <span key={i} className="px-2.5 py-1 glass rounded-md text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-2.5 py-1 glass rounded-md text-[10px] font-bold text-violet-400 uppercase tracking-wider">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-5 pt-5 border-t border-white/5">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-violet-400 transition-colors duration-300"
                  >
                    <IconGithub /> View Code
                  </a>
                  {project.link !== "#" && (
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-bold text-slate-400 hover:text-violet-400 transition-colors duration-300"
                    >
                      <IconExternal /> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View all */}
        <div className="text-center mt-14">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 glass glass-hover text-white font-bold rounded-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <IconGithub /> View All on GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
