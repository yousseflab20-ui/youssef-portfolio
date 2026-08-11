import { useEffect, useState } from "react";
import profileImg from "../assets/images/my-photo.png";
import { PERSONAL_INFO, SOCIAL_LINKS, STATS } from "../constants";
import { IconGithub } from "./Icons";

const TERMINAL_LINES = [
  { text: "const developer = {", color: "text-slate-300" },
  { text: `  name: "Youssef Labnine",`, color: "text-violet-300" },
  { text: `  role: "Mobile & Web Developer",`, color: "text-blue-300" },
  { text: `  location: "Agadir, Morocco 🇲🇦",`, color: "text-emerald-300" },
  { text: `  status: "Available for work ✓",`, color: "text-emerald-400" },
  { text: "}", color: "text-slate-300" },
];

function TerminalWindow() {
  const [displayedLines, setDisplayedLines] = useState<{ text: string; color: string; done: boolean }[]>([]);
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (done) return;
    if (currentLineIdx >= TERMINAL_LINES.length) {
      setDone(true);
      return;
    }

    const line = TERMINAL_LINES[currentLineIdx];

    if (currentChar < line.text.length) {
      const timer = setTimeout(() => {
        setDisplayedLines(prev => {
          const next = [...prev];
          if (next[currentLineIdx]) {
            next[currentLineIdx] = { ...line, text: line.text.slice(0, currentChar + 1), done: false };
          } else {
            next.push({ ...line, text: line.text.slice(0, currentChar + 1), done: false });
          }
          return next;
        });
        setCurrentChar(c => c + 1);
      }, 28);
      return () => clearTimeout(timer);
    } else {
      // Line done
      setDisplayedLines(prev => {
        const next = [...prev];
        next[currentLineIdx] = { ...line, done: true };
        return next;
      });
      const timer = setTimeout(() => {
        setCurrentLineIdx(i => i + 1);
        setCurrentChar(0);
      }, 60);
      return () => clearTimeout(timer);
    }
  }, [currentChar, currentLineIdx, done]);

  return (
    <div className="glass gradient-border rounded-2xl overflow-hidden w-full max-w-xl font-mono text-sm shadow-2xl shadow-violet-900/20">
      {/* Terminal header */}
      <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-white/[0.02]">
        <span className="w-3 h-3 rounded-full bg-red-500 opacity-80" />
        <span className="w-3 h-3 rounded-full bg-yellow-500 opacity-80" />
        <span className="w-3 h-3 rounded-full bg-green-500 opacity-80" />
        <span className="ml-4 text-xs text-white/30 tracking-widest">portfolio.ts</span>
      </div>
      {/* Terminal body */}
      <div className="p-5 space-y-1 min-h-[180px]">
        <p className="text-white/20 text-xs mb-3">~ node portfolio.ts</p>
        {displayedLines.map((line, i) => (
          <div key={i} className={`${line.color} leading-relaxed`}>
            {line.text}
            {i === currentLineIdx && !done && (
              <span className="terminal-cursor ml-[1px] text-violet-400">▋</span>
            )}
          </div>
        ))}
        {done && <span className="terminal-cursor text-violet-400">▋</span>}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-blue-600/8 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 w-[85%] max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">

          {/* Left — Text + Terminal */}
          <div className="hero-text flex-1 space-y-8">
            <div>
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-semibold text-violet-300 tracking-widest uppercase mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Available for work
              </span>
              <h1 className="text-5xl md:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] text-white">
                {PERSONAL_INFO.name.split(" ").map((word, i) => (
                  <span key={i} className={i === 1 ? "gradient-text block" : "block"}>
                    {word}
                  </span>
                ))}
              </h1>
              <p className="text-lg text-slate-400 font-medium mt-4 max-w-md leading-relaxed">
                {PERSONAL_INFO.bio}
              </p>
            </div>

            {/* CTA buttons */}
            <div className="flex flex-wrap gap-4">
              <a
                href="#contact"
                className="group relative px-7 py-3.5 bg-violet-600 hover:bg-violet-500 text-white font-bold rounded-xl transition-all duration-300 shadow-lg shadow-violet-600/30 hover:shadow-violet-500/40 hover:-translate-y-0.5"
              >
                Let's Talk
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 glass glass-hover text-slate-300 font-bold rounded-xl flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
              >
                <IconGithub /> GitHub
              </a>
              <a
                href="/youssef-portfolio/cv-youssef-labnine.pdf"
                download="Cv-Youssef-Labnine.pdf"
                className="px-7 py-3.5 glass glass-hover text-slate-300 font-bold rounded-xl flex items-center gap-2 hover:-translate-y-0.5 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v12m0 0l-4-4m4 4l4-4M4 20h16" />
                </svg>
                Download CV
              </a>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-4 border-t border-white/5">
              {[
                { value: STATS.yearsExperience, label: "Years Experience" },
                { value: STATS.projectsCompleted, label: "Projects Done" },
                { value: STATS.technologies, label: "Technologies" },
              ].map((s, i) => (
                <div key={i}>
                  <p className="text-3xl font-black gradient-text">{s.value}</p>
                  <p className="text-xs font-semibold text-slate-500 mt-1 uppercase tracking-wider">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Terminal + Photo */}
          <div className="hero-image flex-1 flex flex-col items-center gap-8">
            {/* Profile photo */}
            <div className="relative float">
              <div className="w-52 h-52 md:w-64 md:h-64 rounded-3xl overflow-hidden gradient-border shadow-2xl shadow-violet-900/30">
                <img src={profileImg} alt={PERSONAL_INFO.name} className="w-full h-full object-cover" />
              </div>
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-violet-600/20 blur-2xl -z-10 scale-110" />
            </div>

            {/* Terminal window */}
            <TerminalWindow />
          </div>

        </div>
      </div>
    </section>
  );
}
