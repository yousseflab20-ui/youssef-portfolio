import { PERSONAL_INFO, TECH_STACK } from "../constants";

export default function AboutSection() {
  return (
    <section id="about" className="relative py-28 overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/8 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-[85%] max-w-7xl mx-auto">

        {/* Section header */}
        <div className="text-center mb-20 fade-up">
          <span className="inline-block px-3 py-1 rounded-full glass text-violet-300 text-xs font-bold tracking-widest uppercase mb-4">
            Get to know me
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-16 h-px bg-gradient-to-r from-transparent via-violet-500 to-transparent mx-auto mt-6" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left — Bio */}
          <div className="about-content space-y-6">
            <div className="glass gradient-border rounded-2xl p-8 space-y-5">
              <p className="text-slate-300 leading-relaxed text-base">
                {PERSONAL_INFO.about.intro}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                {PERSONAL_INFO.about.specialization}
              </p>
              <p className="text-slate-400 leading-relaxed text-sm">
                {PERSONAL_INFO.about.goal}
              </p>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-3 px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-violet-600/30 hover:-translate-y-0.5"
            >
              Let's Work Together
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right — Tech Stack */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
              <span className="w-1.5 h-5 rounded-full bg-violet-500" />
              Technologies I Work With
            </h3>
            <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
              {TECH_STACK.map((tech, idx) => (
                <div
                  key={idx}
                  className="tech-card glass glass-hover rounded-xl p-3 flex flex-col items-center gap-2 group"
                >
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                    alt={tech.name}
                    className="w-7 h-7 group-hover:scale-110 transition-transform duration-300"
                  />
                  <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider text-center leading-tight">
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
