import { useEffect, useRef } from "react";
import { gsap } from "gsap";
interface HeroSectionProps {
  isActive: boolean;
  navigateTo: (room: string) => void;
}

export default function HeroSection({ isActive, navigateTo }: HeroSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;
    
    // Animate content depending on if we are in this room
    gsap.to(containerRef.current, {
      opacity: isActive ? 1 : 0.2,
      scale: isActive ? 1 : 0.9,
      duration: 1.2,
      ease: "power2.out"
    });
  }, [isActive]);

  return (
    <div ref={containerRef} className="relative w-full max-w-4xl mx-auto flex flex-col items-center justify-center pointer-events-none">
      
      {/* ─── Architectural Doorway Frame ─── */}
      <div className="door-frame w-full max-w-2xl aspect-[16/10] sm:aspect-video flex flex-col items-center justify-center p-8 relative interactive pointer-events-auto">
        
        {/* Glow behind the text */}
        <div className="ambient-light w-64 h-64 bg-violet-600/40" />

        <p className="font-mono text-xs md:text-sm text-violet-400 tracking-[0.3em] uppercase mb-4 opacity-80">
          Digital Environment
        </p>

        <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter text-center leading-none mb-6">
          Youssef.<span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-indigo-600">dev</span>
        </h1>

        <p className="text-zinc-400 text-sm md:text-base font-medium max-w-md text-center leading-relaxed">
          Full Stack Developer focused on high-performance web and mobile applications.
        </p>

        {/* Enter action */}
        <div className="mt-12 group cursor-pointer" onClick={() => navigateTo("living")}>
          <div className="flex items-center gap-4 text-white font-mono text-sm tracking-widest uppercase relative overflow-hidden px-8 py-4">
            
            {/* Button Background/Border */}
            <div className="absolute inset-0 border border-violet-500/30 bg-violet-600/10 group-hover:bg-violet-600/20 transition-colors" />
            <div className="absolute bottom-0 left-0 h-px w-0 bg-violet-400 group-hover:w-full transition-all duration-500" />
            <div className="absolute top-0 right-0 h-px w-0 bg-violet-400 group-hover:w-full transition-all duration-500" />

            <span className="relative z-10 group-hover:text-violet-300 transition-colors">Enter The House</span>
            
            {/* Arrow */}
            <svg 
              className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" 
              fill="none" viewBox="0 0 24 24" stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </div>
        </div>

      </div>

      {/* Decorative floor reflection */}
      <div className="w-[120%] h-32 mt-4 bg-gradient-to-t from-transparent via-violet-900/10 to-transparent blur-xl" style={{ transform: "perspective(500px) rotateX(60deg)" }} />
    </div>
  );
}
