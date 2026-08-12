import { useState } from "react";

const NAV_LINKS: { label: string; room: string }[] = [
  { label: "Overview", room: "overview" },
  { label: "About", room: "living" },
  { label: "Projects", room: "office" },
  { label: "Experience", room: "library" },
  { label: "Tech Stack", room: "workshop" },
];

interface NavbarProps {
  activeRoom: string;
  setActiveRoom: (room: string) => void;
}

export default function Navbar({ activeRoom, setActiveRoom }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = (room: string) => {
    setActiveRoom(room);
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] py-6 px-6 pointer-events-none">
      <div className="max-w-7xl mx-auto flex justify-between items-start pointer-events-auto">

        {/* Logo */}
        <button onClick={() => navigate("overview")} className="flex flex-col group text-left">
          <span className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-1 group-hover:text-violet-400 transition-colors">
            System Online
          </span>
          <span className="font-extrabold text-lg tracking-tight text-white group-hover:text-violet-300 transition-colors flex items-center gap-2">
            Youssef.dev
            {activeRoom !== "entrance" && (
              <span className="text-xs font-mono font-normal text-violet-400 opacity-60">
                / {activeRoom}
              </span>
            )}
          </span>
        </button>

        {/* Desktop Nav */}
        <div className="hidden md:flex flex-col items-end gap-3">
          <div className="glass-panel rounded-2xl p-2 flex items-center gap-1 backdrop-blur-3xl bg-black/40">
            {NAV_LINKS.map((link) => (
              <button
                key={link.room}
                onClick={() => navigate(link.room)}
                className={`px-4 py-2 text-xs font-mono font-semibold rounded-xl transition-all duration-300 ${
                  activeRoom === link.room
                    ? "bg-violet-600/20 text-violet-300 border border-violet-500/30 shadow-[0_0_15px_rgba(139,92,246,0.15)]"
                    : "text-zinc-400 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
              >
                {link.label}
              </button>
            ))}
            <div className="w-px h-6 bg-white/10 mx-2" />
            <button
              onClick={() => navigate("mailbox")}
              className={`px-5 py-2 text-xs font-bold rounded-xl transition-all duration-300 ${
                activeRoom === "mailbox"
                  ? "bg-rose-500 text-white shadow-[0_0_20px_rgba(244,63,94,0.3)]"
                  : "bg-white text-black hover:bg-zinc-200"
              }`}
            >
              Contact
            </button>
          </div>
          <a
            href="/youssef-portfolio/cv-youssef-labnine.pdf"
            download="Cv-Youssef-Labnine.pdf"
            className="text-[10px] font-mono text-zinc-500 hover:text-violet-400 transition-colors flex items-center gap-1"
          >
            ↓ Download CV
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden glass-panel w-12 h-12 rounded-xl flex flex-col items-center justify-center gap-1.5"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className={`w-5 h-px bg-white transition-all ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`w-5 h-px bg-white transition-all ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-5 h-px bg-white transition-all ${menuOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute top-24 left-6 right-6 glass-panel backdrop-blur-3xl bg-black/80 border-white/10 rounded-2xl overflow-hidden transition-all duration-300 pointer-events-auto ${
        menuOpen ? "max-h-[400px] opacity-100 border" : "max-h-0 opacity-0 border-0"
      }`}>
        <div className="p-4 flex flex-col gap-1">
          {NAV_LINKS.map(link => (
            <button
              key={link.room}
              onClick={() => navigate(link.room)}
              className={`text-left px-4 py-3 text-sm font-mono rounded-xl transition-colors ${
                activeRoom === link.room ? "bg-violet-600/20 text-violet-300" : "text-zinc-300 hover:bg-white/5"
              }`}
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => navigate("mailbox")}
            className="mt-2 text-center py-3 bg-white text-black rounded-xl font-bold text-sm"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
