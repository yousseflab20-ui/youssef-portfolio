import { SOCIAL_LINKS } from "../constants";
import { IconGithub, IconLinkedin } from "./Icons";

export default function Footer() {
  return (
    <footer className="py-8 bg-zinc-900 text-zinc-400 border-t border-zinc-800">
      <div className="w-[80%] max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-white text-zinc-900 rounded-lg flex items-center justify-center font-black text-xs">
            YL
          </div>
          <span className="font-bold text-white tracking-wide">Youssef Labnine</span>
        </div>

        <p className="text-sm font-medium">
          © {new Date().getFullYear()} Youssef Labnine. All rights reserved.
        </p>

        <div className="flex gap-4 border-t md:border-t-0 border-zinc-800 pt-4 md:pt-0">
          <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-white hover:text-zinc-900 transition-colors">
            <IconGithub />
          </a>
          <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors">
            <IconLinkedin />
          </a>
        </div>
      </div>
    </footer>
  );
}
