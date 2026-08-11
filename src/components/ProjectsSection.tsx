import { PROJECTS, SOCIAL_LINKS } from "../constants";
import { IconGithub, IconExternal } from "./Icons";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-24 bg-[#fcfcfc] border-b border-zinc-100">
      <div className="w-[80%] max-w-7xl mx-auto">

        <div className="text-center mb-16 fade-up">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">My Work</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900">Featured Projects</h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {PROJECTS.map((project, idx) => (
            <div key={idx} className="project-card bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-shadow flex flex-col group">

              <div className="relative h-60 overflow-hidden bg-zinc-100">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>

              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 font-medium leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.slice(0, 5).map((t, i) => (
                    <span key={i} className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-md text-xs font-bold">
                      {t}
                    </span>
                  ))}
                  {project.tech.length > 5 && (
                    <span className="px-3 py-1 bg-zinc-50 text-zinc-400 rounded-md text-xs font-bold">
                      +{project.tech.length - 5}
                    </span>
                  )}
                </div>

                <div className="mt-auto flex gap-4 pt-6 border-t border-zinc-100">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 font-bold hover:text-blue-600 transition-colors">
                    <IconGithub /> Code
                  </a>
                  {project.link !== "#" && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 font-bold hover:text-blue-600 transition-colors ml-4">
                      <IconExternal /> Live Demo
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-zinc-900 hover:bg-black text-white font-bold rounded-full transition-colors">
            <IconGithub /> View All Projects
          </a>
        </div>

      </div>
    </section>
  );
}
