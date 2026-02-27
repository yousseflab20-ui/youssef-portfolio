import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";


const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {

    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power4.out", delay: 0.2 }
    );

    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/80 backdrop-blur-md shadow-sm border-b border-zinc-200/50 py-4" : "bg-transparent py-6"
        }`}
    >
      <div className="w-[80%] max-w-7xl mx-auto flex justify-between items-center">


        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-blue-600 text-white rounded-xl flex justify-center items-center font-bold text-sm shadow-md group-hover:bg-blue-700 transition-colors">
            YL
          </div>
          <span className="font-extrabold text-xl tracking-tight text-zinc-900 group-hover:text-blue-600 transition-colors">
            Youssef Labnine.
          </span>
        </a>


        <ul className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="text-sm font-semibold text-zinc-600 hover:text-blue-600 transition-colors">
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href="#contact" className="px-6 py-2.5 bg-zinc-900 text-white text-sm font-semibold rounded-full hover:bg-blue-600 transition-all shadow-sm shadow-zinc-900/10 hover:shadow-blue-600/20">
              Let's Talk
            </a>
          </li>
        </ul>


        <button className="md:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(!menuOpen)}>
          <span className={`w-6 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-6 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-0.5 bg-zinc-900 transition-all ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>


      <div className={`md:hidden absolute top-full left-0 right-0 bg-white border-b border-zinc-200 shadow-xl transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-96 py-6" : "max-h-0 py-0"}`}>
        <div className="w-[80%] mx-auto flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="text-lg font-semibold text-zinc-800 hover:text-blue-600 border-b border-zinc-100 pb-2">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="mt-2 text-center py-3 bg-zinc-900 text-white rounded-xl font-semibold">
            Let's Talk
          </a>
        </div>
      </div>
    </nav>
  );
}
