import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TECH_STACK } from "../constants";

interface TechNetworkProps {
  isActive: boolean;
}

export default function TechNetwork({ isActive }: TechNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

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
    <div ref={containerRef} className="w-full max-w-6xl mx-auto h-[85vh] flex flex-col pointer-events-auto relative">
      
      {/* Ambient lighting for Workshop (Green/Tech) */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none" />

      {/* Header */}
      <div className="mb-4 text-center flex-shrink-0 z-10">
        <p className="font-mono text-xs text-emerald-400 tracking-widest uppercase mb-2">The Workshop</p>
        <h2 className="text-4xl font-black text-white tracking-tight">
          Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-500">Network</span>
        </h2>
      </div>

      <div className="flex-1 relative flex items-center justify-center min-h-0">
        
        {/* Decorative Grid Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

        {/* Central Hub */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0">
          <div className="w-32 h-32 rounded-full border border-emerald-500/20 bg-emerald-950/30 flex items-center justify-center animate-[spin_20s_linear_infinite]">
            <div className="w-24 h-24 rounded-full border border-emerald-500/30 border-dashed animate-[spin_15s_linear_infinite_reverse]" />
          </div>
          <div className="absolute inset-0 flex items-center justify-center font-mono text-sm text-emerald-400 font-bold z-10">
            SYSTEM
          </div>
        </div>

        {/* Nodes Grid Layout */}
        <div className="w-full max-w-4xl grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-8 z-10 p-4 overflow-y-auto room-scrollable max-h-full">
          {TECH_STACK.map((tech) => (
            <div
              key={tech.name}
              onMouseEnter={() => setHoveredNode(tech.name)}
              onMouseLeave={() => setHoveredNode(null)}
              className="relative group cursor-default"
            >
              {/* Connection Line (visual only) */}
              <div className="hidden md:block absolute top-1/2 left-1/2 w-[200px] h-px bg-gradient-to-r from-emerald-500/0 via-emerald-500/20 to-transparent -translate-y-1/2 rotate-45 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className={`glass-panel p-4 rounded-2xl flex flex-col items-center justify-center gap-3 transition-all duration-300 ${
                hoveredNode === tech.name ? "bg-emerald-600/20 border-emerald-500/50 shadow-[0_0_20px_rgba(16,185,129,0.2)] -translate-y-1" : "hover:border-emerald-500/30"
              }`}>
                <div className="w-10 h-10 rounded-full bg-black/40 flex items-center justify-center p-2 group-hover:bg-black/60 transition-colors">
                  <img
                    src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                    alt={tech.name}
                    className="w-full h-full object-contain filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]"
                  />
                </div>
                <div className="text-center">
                  <span className="font-mono text-xs font-bold text-white block mb-0.5">{tech.name}</span>
                  <span className="text-[9px] uppercase tracking-wider text-emerald-400/80">{tech.category}</span>
                </div>
              </div>

              {/* Tooltip description */}
              <div className={`absolute top-full left-1/2 -translate-x-1/2 mt-2 w-32 glass-panel p-2 rounded-lg text-center text-[10px] text-zinc-300 transition-all duration-300 z-50 pointer-events-none ${
                hoveredNode === tech.name ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
              }`}>
                {tech.description}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
