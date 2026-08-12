import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { PERSONAL_INFO } from "../constants";

interface ContactSectionProps {
  isActive: boolean;
}

export default function ContactSection({ isActive }: ContactSectionProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  useEffect(() => {
    if (!containerRef.current) return;
    gsap.to(containerRef.current, {
      opacity: isActive ? 1 : 0.1,
      y: isActive ? 0 : 50,
      duration: 1.2,
      ease: "power3.out"
    });
  }, [isActive]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => setStatus("sent"), 1500);
  };

  return (
    <div ref={containerRef} className="w-full max-w-2xl mx-auto flex flex-col items-center justify-center pointer-events-auto">
      
      {/* Ambient lighting for Mailbox (Red/Rose) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-rose-600/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Floating Mailbox Terminal */}
      <div className="glass-panel w-full rounded-[32px] p-8 md:p-12 relative overflow-hidden shadow-[0_0_50px_rgba(225,29,72,0.1)]">
        
        {/* Terminal Header */}
        <div className="flex items-center justify-between mb-10 pb-6 border-b border-white/5">
          <div>
            <p className="font-mono text-[10px] text-rose-400 tracking-widest uppercase mb-1">Secure Connection</p>
            <h2 className="text-3xl font-black text-white">Digital Mailbox</h2>
          </div>
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
            <div className="w-3 h-3 rounded-full bg-zinc-800" />
            <div className="w-3 h-3 rounded-full bg-rose-500 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.5)]" />
          </div>
        </div>

        {/* Message Form */}
        {status === "sent" ? (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto bg-rose-500/20 text-rose-400 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Message Transmitted</h3>
            <p className="text-zinc-400 text-sm">I'll get back to you as soon as possible.</p>
            <button 
              onClick={() => setStatus("idle")}
              className="mt-8 px-6 py-2 text-xs font-mono font-bold text-zinc-500 hover:text-white transition-colors"
            >
              Send Another
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Identification</label>
                <input 
                  required 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all"
                />
              </div>
              <div className="space-y-1.5">
                <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Return Address</label>
                <input 
                  required 
                  type="email" 
                  placeholder="Your Email" 
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all"
                />
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">Transmission Payload</label>
              <textarea 
                required 
                rows={4} 
                placeholder="How can we work together?" 
                className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-zinc-600 focus:outline-none focus:border-rose-500/50 focus:ring-1 focus:ring-rose-500/50 transition-all resize-none"
              />
            </div>
            
            <div className="pt-4 flex items-center justify-between">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="text-xs font-mono text-zinc-500 hover:text-rose-400 transition-colors">
                {PERSONAL_INFO.email}
              </a>
              <button 
                type="submit" 
                disabled={status === "sending"}
                className="px-8 py-3 bg-rose-600 hover:bg-rose-500 text-white font-bold rounded-xl text-sm transition-all shadow-lg shadow-rose-600/20 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {status === "sending" ? "Transmitting..." : "Send Request"}
                {status !== "sending" && (
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                )}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
