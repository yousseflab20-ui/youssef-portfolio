import profileImg from "../assets/images/my-photo.png";
import { PERSONAL_INFO, STATS, SOCIAL_LINKS } from "../constants";
import { IconGithub } from "./Icons";

export default function HeroSection() {
  return (
    <section id="home" className="pt-40 md:pt-48 pb-20 overflow-hidden relative border-b border-zinc-100">
      <div className="w-[80%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

        <div className="hero-text flex-1">
          <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
            Hello, I am
          </span>

          <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-6">
            {PERSONAL_INFO.name}
          </h1>

          <h2 className="text-2xl md:text-3xl text-zinc-600 font-bold mb-8">
            I am a <span className="text-blue-600">{PERSONAL_INFO.title}</span>
          </h2>

          <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-10 max-w-lg">
            {PERSONAL_INFO.bio}
          </p>

          <div className="flex flex-wrap items-center gap-5">
            <a href="#contact" className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
              Contact Me
            </a>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white text-zinc-900 font-bold rounded-full border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-colors flex items-center gap-2">
              <IconGithub /> GitHub
            </a>
          </div>

          <div className="flex items-center gap-10 mt-16 pt-8 border-t border-zinc-100">
            <div>
              <p className="text-3xl font-black text-zinc-900">{STATS.yearsExperience}</p>
              <p className="text-sm font-semibold text-zinc-500 mt-1">Years Experience</p>
            </div>
            <div>
              <p className="text-3xl font-black text-zinc-900">{STATS.projectsCompleted}</p>
              <p className="text-sm font-semibold text-zinc-500 mt-1">Projects Completed</p>
            </div>
          </div>
        </div>

        <div className="hero-image flex-1 flex justify-center md:justify-end relative">
          <div className="relative w-full max-w-[500px]">
            {/* Outer Glow / Decoration */}
            <div className="absolute inset-0 scale-[1.1] rounded-full bg-blue-50 -z-10 shadow-inner"></div>

            {/* Clean Circular Frame */}
            <div className="relative aspect-square rounded-full border-[6px] border-white shadow-xl shadow-zinc-200/50 overflow-hidden bg-zinc-100 flex items-center justify-center">
              <img
                src={profileImg}
                alt={PERSONAL_INFO.name}
                className="w-full h-full object-cover scale-105"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute bottom-4 -left-4 bg-white px-5 py-3 rounded-2xl shadow-xl shadow-zinc-200 border border-zinc-100 flex items-center gap-3 z-20">
              <div className="flex h-3 w-3 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </div>
              <span className="text-sm font-bold text-zinc-800 tracking-wide">Available for work</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
