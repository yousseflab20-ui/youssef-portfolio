import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { PROJECTS } from "../constants";
import { IconGithub, IconExternal } from "./Icons";

interface ProjectsSectionProps {
  isActive: boolean;
}

export default function ProjectsSection({ isActive }: ProjectsSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeProject, setActiveProject] = useState(PROJECTS[0].id);

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      opacity: isActive ? 1 : 0.1,
      y: isActive ? 0 : 50,
      duration: 1.2,
      ease: "power3.out"
    });
  }, [isActive]);

  const currentProject = PROJECTS.find(p => p.id === activeProject)!;

  return (
    <div ref={containerRef} className="w-full max-w-7xl mx-auto h-[85vh] flex flex-col pointer-events-auto">
      
      {/* Ambient lighting for Office (Blue/Professional) */}
      <div className="absolute top-0 right-1/4 w-[600px] h-[400px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      {/* Header */}
      <div className="mb-6 text-center flex-shrink-0">
        <p className="font-mono text-xs text-blue-400 tracking-widest uppercase mb-2">The Office</p>
        <h2 className="text-4xl font-black text-white tracking-tight">
          Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-600">Case Files</span>
        </h2>
      </div>

      {/* Main Desk Layout */}
      <div className="flex-1 flex flex-col lg:flex-row gap-6 min-h-0">
        
        {/* Left: Project Selector (The "Files" on the desk) */}
        <div className="w-full lg:w-1/3 flex flex-col gap-3 overflow-y-auto pr-2 room-scrollable">
          {PROJECTS.map((project) => {
            const isSelected = activeProject === project.id;
            return (
              <button
                key={project.id}
                onClick={() => setActiveProject(project.id)}
                className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 ${
                  isSelected 
                    ? "bg-blue-600/20 border-blue-500/40 shadow-[inset_0_0_20px_rgba(59,130,246,0.1)]" 
                    : "glass-panel border-transparent hover:border-blue-500/20"
                }`}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className="font-mono text-[10px] text-zinc-500">{project.id}</span>
                  <span className={`text-[9px] font-bold uppercase px-2 py-0.5 rounded-full border ${
                    project.status === "Production" ? "text-emerald-400 border-emerald-400/30 bg-emerald-400/10" : "text-blue-400 border-blue-400/30 bg-blue-400/10"
                  }`}>
                    {project.status}
                  </span>
                </div>
                <h3 className={`text-lg font-bold mb-1 ${isSelected ? "text-white" : "text-zinc-300"}`}>
                  {project.title}
                </h3>
                <p className="text-xs text-zinc-500 font-mono">{project.type}</p>
              </button>
            );
          })}
        </div>

        {/* Right: The "Main Screen" Displaying the Case File */}
        <div className="w-full lg:w-2/3 architectural-screen overflow-y-auto room-scrollable relative group">
          {/* Scanline effect */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:100%_4px] pointer-events-none opacity-50" />
          
          <div className="p-8">
            <div className="flex flex-wrap items-center justify-between gap-4 mb-8 border-b border-white/10 pb-6">
              <div>
                <h2 className="text-3xl font-black text-white">{currentProject.title}</h2>
                <p className="text-blue-400 font-mono text-sm mt-2">Role: {currentProject.role}</p>
              </div>
              <div className="flex gap-3">
                <a href={currentProject.github} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-blue-600/20 text-zinc-300 hover:text-blue-300 rounded-lg transition-colors border border-white/5">
                  <IconGithub />
                </a>
                {currentProject.link !== "#" && (
                  <a href={currentProject.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 hover:bg-blue-600/20 text-zinc-300 hover:text-blue-300 rounded-lg transition-colors border border-white/5">
                    <IconExternal />
                  </a>
                )}
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">// Problem</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed bg-black/30 p-4 rounded-xl border border-white/5">{currentProject.problem}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2">// Solution</h4>
                  <p className="text-sm text-zinc-300 leading-relaxed bg-black/30 p-4 rounded-xl border border-white/5">{currentProject.solution}</p>
                </div>
                <div>
                  <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3">// Architecture</h4>
                  <div className="space-y-2">
                    {currentProject.architecture.map((arch, i) => (
                      <div key={i} className="flex items-center gap-3 text-xs font-mono text-blue-200">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                        {arch}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3">// Features</h4>
                  <ul className="space-y-2">
                    {currentProject.features.map((feature, i) => (
                      <li key={i} className="text-sm text-zinc-300 flex items-start gap-2">
                        <span className="text-blue-500 mt-0.5">▹</span> {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-3">// Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((t, i) => (
                      <span key={i} className="px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Image Preview (Optional, replacing the dark background if needed) */}
                <div className="mt-4 relative h-32 rounded-xl overflow-hidden border border-white/10">
                  <img src={currentProject.image} alt="Project Preview" className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:mix-blend-normal transition-all duration-500" />
                  <div className="absolute inset-0 bg-blue-900/20 pointer-events-none" />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
