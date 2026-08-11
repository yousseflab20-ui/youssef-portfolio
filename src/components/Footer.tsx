import { SOCIAL_LINKS } from "../constants";
import { IconGithub, IconLinkedin } from "./Icons";

export default function Footer() {
  return (
    <footer className="relative py-10 border-t border-white/5">
      <div className="w-[85%] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-9 h-9 rounded-xl bg-violet-600 flex items-center justify-center font-black text-white text-xs shadow-lg shadow-violet-600/20">
            YL
          </div>
          <span className="font-extrabold text-white tracking-tight group-hover:text-violet-300 transition-colors">
            Youssef<span className="text-violet-400">.</span>
          </span>
        </a>

        <p className="text-sm text-slate-500 font-medium">
          © {new Date().getFullYear()} Youssef Labnine. Crafted with ✦
        </p>

        {/* Social links */}
        <div className="flex gap-3">
          <a
            href={SOCIAL_LINKS.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 glass glass-hover rounded-xl flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300"
          >
            <IconGithub />
          </a>
          <a
            href={SOCIAL_LINKS.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 glass glass-hover rounded-xl flex items-center justify-center text-slate-400 hover:text-blue-400 transition-all duration-300"
          >
            <IconLinkedin />
          </a>
        </div>

      </div>
    </footer>
  );
}
