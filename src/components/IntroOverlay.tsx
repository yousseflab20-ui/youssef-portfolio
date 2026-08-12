import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useProgress } from "@react-three/drei";

interface IntroOverlayProps {
  onEnter: () => void;
  onSkip: () => void;
  introStarted: boolean;
}

export default function IntroOverlay({ onEnter, onSkip, introStarted }: IntroOverlayProps) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const titleRef  = useRef<HTMLDivElement>(null);
  const btnRef    = useRef<HTMLButtonElement>(null);
  const skipRef   = useRef<HTMLButtonElement>(null);

  const { progress, loaded, total } = useProgress();
  const isLoaded = progress >= 100 || (loaded > 0 && loaded === total);

  // ── Mount animation ──────────────────────────────────────────────────────
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
      );
      gsap.fromTo(
        btnRef.current,
        { opacity: 0, scale: 0.9 },
        { opacity: 1, scale: 1, duration: 0.8, ease: "back.out(1.5)", delay: 1.2 }
      );
      gsap.fromTo(
        skipRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.6, ease: "power2.out", delay: 1.8 }
      );
    });
    return () => ctx.revert();
  }, []);

  // ── Fade out when Enter is clicked ──────────────────────────────────────
  useEffect(() => {
    if (introStarted && overlayRef.current) {
      gsap.to(overlayRef.current, {
        opacity: 0,
        duration: 1.0,
        ease: "power2.inOut",
        pointerEvents: "none",
      });
    }
  }, [introStarted]);

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.3) 100%)",
        backdropFilter: "blur(6px)",
        WebkitBackdropFilter: "blur(6px)",
      }}
    >
      {/* Title block */}
      <div ref={titleRef} style={{ opacity: 0 }} className="flex flex-col items-center mb-14 text-center px-4">
        <h1
          className="font-black text-white tracking-tight mb-3"
          style={{ fontSize: "clamp(2.5rem, 8vw, 5rem)", lineHeight: 1.05 }}
        >
          Youssef<span style={{ color: "#7c3aed" }}>.dev</span>
        </h1>
        <p
          className="text-gray-400 tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(0.75rem, 2vw, 1rem)" }}
        >
          Developer House
        </p>
      </div>

      <button
        ref={btnRef}
        onClick={onEnter}
        disabled={introStarted || !isLoaded}
        style={{ opacity: 0 }}
        className="group relative overflow-hidden rounded-full transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span
          className="relative z-10 flex flex-col items-center gap-1 px-8 py-3"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "#fff",
          }}
        >
          <span className="flex items-center gap-3" style={{ fontSize: "0.8rem", letterSpacing: "0.18em" }}>
            {isLoaded ? "ENTER THE HOUSE" : "DOWNLOADING..."}
            {isLoaded && (
              <span
                className="px-2 py-0.5 rounded-md text-xs transition-colors"
                style={{ background: "rgba(255,255,255,0.12)", fontFamily: "sans-serif" }}
              >
                ↵
              </span>
            )}
          </span>
          {!isLoaded && (
            <span className="text-violet-400 font-bold" style={{ fontSize: "0.7rem", letterSpacing: "0.1em" }}>
              {loaded > 0 ? `${Math.round(progress)}%` : "CONNECTING..."}
            </span>
          )}
        </span>

        {/* Animated border */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full border transition-colors duration-500 group-hover:border-violet-500/60"
          style={{ border: "1px solid rgba(255,255,255,0.12)" }}
        />

        {/* Hover fill */}
        <span
          aria-hidden
          className="absolute inset-0 -translate-x-full group-hover:translate-x-0 transition-transform duration-500 rounded-full"
          style={{ background: "linear-gradient(90deg, rgba(124,58,237,0.18), rgba(192,38,211,0.18))" }}
        />

        {/* Hover glow */}
        <span
          aria-hidden
          className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
          style={{ boxShadow: "0 0 32px rgba(124,58,237,0.35)" }}
        />
      </button>

      {/* Skip */}
      <button
        ref={skipRef}
        onClick={onSkip}
        style={{ opacity: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: "0.75rem", letterSpacing: "0.15em" }}
        className="absolute bottom-10 right-10 text-gray-600 hover:text-white transition-colors duration-300 tracking-widest"
      >
        [ SKIP ]
      </button>

      {/* Subtle bottom tagline */}
      <p
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-center pointer-events-none"
        style={{ color: "rgba(255,255,255,0.1)", fontSize: "0.7rem", letterSpacing: "0.2em", fontFamily: "'JetBrains Mono', monospace" }}
      >
        DON'T BROWSE MY PORTFOLIO. WALK INTO IT.
      </p>
    </div>
  );
}
