import { useEffect } from "react";
import gsap from "gsap";
import { PERSONAL_INFO } from "../constants";

export default function CVSection({ isActive }: { isActive: boolean }) {
  useEffect(() => {
    if (isActive) {
      gsap.fromTo(
        ".cv-content",
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.6, ease: "power3.out" }
      );
    }
  }, [isActive]);

  if (!isActive) return null;

  return (
    <div className="cv-content bg-black/40 border border-white/10 rounded-3xl p-8 backdrop-blur-xl shadow-2xl flex flex-col items-center max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold text-white mb-2">{PERSONAL_INFO.name}</h2>
      <h3 className="text-xl font-medium text-blue-400 mb-6">{PERSONAL_INFO.title}</h3>
      <p className="text-gray-300 mb-8 text-center leading-relaxed">
        {PERSONAL_INFO.about.intro}
      </p>
      
      <div className="w-full bg-white/5 rounded-xl p-6 mb-8 border border-white/5">
        <h3 className="text-lg font-semibold text-white mb-3">Key Focus Areas</h3>
        <ul className="list-disc list-inside text-gray-300 space-y-2 text-sm">
          <li>Scalable web applications & High-performance mobile apps</li>
          <li>Clean architecture and modern UI/UX principles</li>
          <li>Production-ready solutions using React Native, Next.js & Node.js</li>
        </ul>
      </div>

      <a 
        href={`${import.meta.env.BASE_URL}cv-youssef-labnine.pdf`}
        download="CV-Youssef-Labnine.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)] flex items-center gap-2"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
        Download CV PDF
      </a>
    </div>
  );
}
