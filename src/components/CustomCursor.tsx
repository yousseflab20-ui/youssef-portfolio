import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only on desktop
    if (window.matchMedia("(pointer: coarse)").matches) return;

    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const onMouseEnterLink = () => {
      dotRef.current?.classList.add("scale-0");
      ringRef.current?.classList.add("!w-12", "!h-12", "!border-[var(--accent)]", "!opacity-80");
    };
    const onMouseLeaveLink = () => {
      dotRef.current?.classList.remove("scale-0");
      ringRef.current?.classList.remove("!w-12", "!h-12", "!border-[var(--accent)]", "!opacity-80");
    };

    const links = document.querySelectorAll("a, button");
    links.forEach(el => {
      el.addEventListener("mouseenter", onMouseEnterLink);
      el.addEventListener("mouseleave", onMouseLeaveLink);
    });

    window.addEventListener("mousemove", onMouseMove);

    let rafId: number;
    const animate = () => {
      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX - 4}px, ${mouseY - 4}px)`;
      }
      // Ring follows almost instantly (very lightweight lag)
      ringX += (mouseX - ringX) * 0.7; // Increased from 0.35 to 0.7
      ringY += (mouseY - ringY) * 0.7;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX - 16}px, ${ringY - 16}px)`;
      }
      rafId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      links.forEach(el => {
        el.removeEventListener("mouseenter", onMouseEnterLink);
        el.removeEventListener("mouseleave", onMouseLeaveLink);
      });
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 w-2 h-2 rounded-full bg-[var(--accent)] z-[99999] pointer-events-none"
        style={{ willChange: "transform" }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/30 z-[99998] pointer-events-none transition-[width,height,border-color,opacity] duration-200"
        style={{ willChange: "transform" }}
      />
    </>
  );
}
