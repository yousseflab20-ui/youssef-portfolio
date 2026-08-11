import { PERSONAL_INFO, TECH_STACK } from "../constants";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 bg-white border-b border-zinc-100">
      <div className="w-[80%] max-w-7xl mx-auto">

        <div className="text-center mb-16 fade-up">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Get to know me</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900">About Me</h2>
          <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">

          <div className="about-content space-y-6">
            <p className="text-lg text-zinc-600 font-medium leading-relaxed">
              {PERSONAL_INFO.about.intro}
            </p>
            <p className="text-zinc-500 font-medium leading-relaxed">
              {PERSONAL_INFO.about.specialization}
            </p>
            <p className="text-zinc-500 font-medium leading-relaxed">
              {PERSONAL_INFO.about.goal}
            </p>
            <div className="pt-6">
              <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white font-bold rounded-lg hover:bg-black transition-colors">
                Let's Work Together
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold text-zinc-900 mb-8 text-center md:text-left">Technologies I Work With</h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
              {TECH_STACK.map((tech, idx) => (
                <div key={idx} className="tech-card flex flex-col items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                    alt={tech.name}
                    className="w-8 h-8"
                  />
                  <span className="text-[10px] sm:text-xs font-bold text-zinc-500 text-center uppercase tracking-wider">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
