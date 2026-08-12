import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PERSONAL_INFO, SOCIAL_LINKS, TECH_STACK } from "../constants";
import { IconGithub, IconLinkedin, IconMail, IconPin } from "./Icons";

interface AboutSectionProps {
  isActive: boolean;
}

export default function AboutSection({ isActive }: AboutSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      opacity: isActive ? 1 : 0.1,
      y: isActive ? 0 : 50,
      duration: 1.2,
      ease: "power3.out"
    });
  }, [isActive]);

  return (
    <div 
      ref={containerRef} 
      className="w-full max-w-6xl mx-auto h-[85vh] flex flex-col pointer-events-auto"
    >
      {/* Ambient lighting for Living Room (Amber/Warm) */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Header */}
      <div className="mb-10 text-center flex-shrink-0">
        <p className="font-mono text-xs text-amber-400 tracking-widest uppercase mb-2">Living Room</p>
        <h2 className="text-4xl md:text-5xl font-black text-white tracking-tight">
          Personal <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600">Space</span>
        </h2>
      </div>

      {/* Main Content - Scrollable within the room */}
      <div className="flex-1 room-scrollable pr-2 pb-10">
        <div className="grid lg:grid-cols-5 gap-6 h-full">

          {/* Left: Bio Window (Glass Architectural feel) */}
          <div className="lg:col-span-3 glass-panel rounded-3xl p-8 lg:p-12 relative overflow-hidden group">
            {/* Window reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
            
            <h3 className="text-2xl font-bold text-white mb-6">About Me</h3>
            
            <div className="space-y-5 text-zinc-300 leading-relaxed text-sm md:text-base">
              <p>{PERSONAL_INFO.about.intro}</p>
              <p className="text-zinc-400">{PERSONAL_INFO.about.specialization}</p>
              <p className="text-zinc-400">{PERSONAL_INFO.about.goal}</p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/5 flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-mono text-zinc-300">Available for work</span>
              </div>
              <div className="flex items-center gap-3 bg-black/40 px-4 py-2 rounded-xl border border-white/5">
                <IconPin />
                <span className="text-xs font-mono text-zinc-300">{PERSONAL_INFO.location}</span>
              </div>
            </div>
          </div>

          {/* Right: Personal Meta / Bookshelf metaphor */}
          <div className="lg:col-span-2 space-y-6 flex flex-col">
            
            {/* Contact Card */}
            <div className="glass-panel rounded-3xl p-8 flex-1">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Contact</h3>
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-zinc-300 hover:text-amber-400 transition-colors mb-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><IconMail /></div>
                <span className="text-sm truncate">{PERSONAL_INFO.email}</span>
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-amber-400 transition-colors mb-4">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><IconGithub /></div>
                <span className="text-sm">GitHub</span>
              </a>
              <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-zinc-300 hover:text-amber-400 transition-colors">
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center"><IconLinkedin /></div>
                <span className="text-sm">LinkedIn</span>
              </a>
            </div>

            {/* Quick Tech Preview */}
            <div className="glass-panel rounded-3xl p-8">
              <h3 className="text-sm font-mono text-zinc-500 uppercase tracking-widest mb-6">Core Stack</h3>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.slice(0, 8).map(tech => (
                  <span key={tech.name} className="px-3 py-1.5 bg-amber-500/10 border border-amber-500/20 rounded-lg text-[10px] font-bold text-amber-300 uppercase">
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
