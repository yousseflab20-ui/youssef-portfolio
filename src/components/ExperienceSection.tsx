import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { EXPERIENCE, EDUCATION } from "../constants";

interface ExperienceSectionProps {
  isActive: boolean;
}

export default function ExperienceSection({ isActive }: ExperienceSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"experience" | "education">("experience");

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      opacity: isActive ? 1 : 0.1,
      y: isActive ? 0 : 50,
      duration: 1.2,
      ease: "power3.out"
    });
  }, [isActive]);

  const items = activeTab === "experience" ? EXPERIENCE : EDUCATION;

  return (
    <div ref={containerRef} className="w-full max-w-5xl mx-auto h-[85vh] flex flex-col pointer-events-auto">
      
      {/* Ambient lighting for Library (Magenta/Archive) */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-fuchsia-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="mb-10 text-center flex-shrink-0">
        <p className="font-mono text-xs text-fuchsia-400 tracking-widest uppercase mb-2">The Library</p>
        <h2 className="text-4xl font-black text-white tracking-tight">
          Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-600">Archives</span>
        </h2>
      </div>

      <div className="flex-1 flex flex-col min-h-0">
        
        {/* Bookshelf Tabs */}
        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setActiveTab("experience")}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold font-mono uppercase tracking-widest transition-all ${
              activeTab === "experience" 
                ? "bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/30" 
                : "text-zinc-500 hover:text-zinc-300 border border-transparent"
            }`}
          >
            Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`px-6 py-2.5 rounded-xl text-sm font-bold font-mono uppercase tracking-widest transition-all ${
              activeTab === "education" 
                ? "bg-fuchsia-600/20 text-fuchsia-300 border border-fuchsia-500/30" 
                : "text-zinc-500 hover:text-zinc-300 border border-transparent"
            }`}
          >
            Education
          </button>
        </div>

        {/* The Archive Grid (Documents) */}
        <div className="flex-1 room-scrollable px-2">
          <div className="grid md:grid-cols-2 gap-6 pb-12">
            {items.map((item: any) => (
              <div 
                key={item.id} 
                className="glass-panel p-8 rounded-2xl relative group overflow-hidden border-t-2 border-t-white/5 hover:border-t-fuchsia-500/50 transition-all duration-500"
              >
                {/* Glowing binder ring effect */}
                <div className="absolute top-8 -left-2 w-4 h-8 bg-zinc-800 rounded-r-md border border-white/10" />
                <div className="absolute top-20 -left-2 w-4 h-8 bg-zinc-800 rounded-r-md border border-white/10" />

                <div className="pl-6">
                  <div className="flex justify-between items-start mb-4">
                    <span className="font-mono text-[10px] text-fuchsia-400 bg-fuchsia-950/30 px-2 py-1 rounded border border-fuchsia-500/20">
                      ID: {item.hash}
                    </span>
                    <span className="text-xs font-bold text-zinc-400">{item.period}</span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-1">
                    {item.company || item.title}
                  </h3>
                  <p className="text-sm text-fuchsia-300 font-mono mb-4">
                    {item.role || item.institution}
                  </p>

                  {(item.description || item.subtitle) && (
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      {item.description || item.subtitle}
                    </p>
                  )}

                  {item.tech && (
                    <div className="flex flex-wrap gap-2 mt-auto">
                      {item.tech.map((t: string) => (
                        <span key={t} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[9px] font-bold text-zinc-500 uppercase">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
