import "./index.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import profileImg from "../assets/images/image-test.png";
import { PERSONAL_INFO, STATS, SOCIAL_LINKS, PROJECTS, TECH_STACK } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const IconGithub = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57z" /></svg>;
const IconLinkedin = () => <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>;
const IconExternal = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>;
const IconMail = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>;
const IconPhone = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
const IconPin = () => <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const heroTl = gsap.timeline();
      heroTl.from(".hero-text > *", {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        delay: 0.3
      });
      heroTl.from(".hero-image", {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
      }, "-=0.8");

      gsap.utils.toArray<HTMLElement>('.fade-up').forEach((elem) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: "top 85%",
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      const staggerSections = [".about-content > *", ".project-card", ".tech-card", ".contact-item"];
      staggerSections.forEach(selector => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((elem, i) => {
          gsap.from(elem, {
            scrollTrigger: {
              trigger: elem,
              start: "top 90%",
            },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: (i % 4) * 0.1,
            ease: "power2.out"
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-[#fcfcfc] min-h-screen font-sans selection:bg-blue-600 selection:text-white">
      <Navbar />

      <section id="home" className="pt-40 md:pt-48 pb-20 overflow-hidden relative border-b border-zinc-100">
        <div className="w-[80%] max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16">

          <div className="hero-text flex-1">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-sm mb-4 block">
              Hello, I am
            </span>

            <h1 className="text-5xl md:text-7xl font-extrabold text-zinc-900 tracking-tight leading-[1.1] mb-6">
              {PERSONAL_INFO.name}
            </h1>

            <h2 className="text-2xl md:text-3xl text-zinc-600 font-bold mb-8">
              I am a <span className="text-blue-600">{PERSONAL_INFO.title}</span>
            </h2>

            <p className="text-lg text-zinc-500 font-medium leading-relaxed mb-10 max-w-lg">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap items-center gap-5">
              <a href="#contact" className="px-8 py-3.5 bg-blue-600 text-white font-bold rounded-full hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/20">
                Contact Me
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-white text-zinc-900 font-bold rounded-full border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50 transition-colors flex items-center gap-2">
                <IconGithub /> GitHub
              </a>
            </div>

            <div className="flex items-center gap-10 mt-16 pt-8 border-t border-zinc-100">
              <div>
                <p className="text-3xl font-black text-zinc-900">{STATS.yearsExperience}</p>
                <p className="text-sm font-semibold text-zinc-500 mt-1">Years Experience</p>
              </div>
              <div>
                <p className="text-3xl font-black text-zinc-900">{STATS.projectsCompleted}</p>
                <p className="text-sm font-semibold text-zinc-500 mt-1">Projects Completed</p>
              </div>
            </div>
          </div>

          <div className="hero-image flex-1 flex justify-center md:justify-end relative">
            <div className="relative w-full max-w-[480px]">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full pt-[100%] rounded-full bg-blue-50 -z-10"></div>

              <img
                src={profileImg}
                alt={PERSONAL_INFO.name}
                className="w-full relative z-10 scale-105 drop-shadow-2xl"
                style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
              />

              <div className="absolute bottom-10 -left-6 bg-white p-4 rounded-2xl shadow-xl shadow-zinc-200 border border-zinc-100 flex items-center gap-3 z-20">
                <div className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </div>
                <span className="text-sm font-bold text-zinc-800">Available for work</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      <section id="about" className="py-24 bg-white border-b border-zinc-100">
        <div className="w-[80%] max-w-7xl mx-auto">

          <div className="text-center mb-16 fade-up">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900">About Me</h2>
            <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">

            <div className="about-content space-y-6">
              <p className="text-lg text-zinc-600 font-medium leading-relaxed">
                {PERSONAL_INFO.about.intro}
              </p>
              <p className="text-zinc-500 font-medium leading-relaxed">
                {PERSONAL_INFO.about.specialization}
              </p>
              <p className="text-zinc-500 font-medium leading-relaxed">
                {PERSONAL_INFO.about.goal}
              </p>
              <div className="pt-6">
                <a href="#contact" className="inline-flex items-center gap-2 px-6 py-3 bg-zinc-900 text-white font-bold rounded-lg hover:bg-black transition-colors">
                  Let's Work Together
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold text-zinc-900 mb-8 text-center md:text-left">Technologies I Work With</h3>
              <div className="grid grid-cols-4 sm:grid-cols-5 gap-4">
                {TECH_STACK.map((tech, idx) => (
                  <div key={idx} className="tech-card flex flex-col items-center gap-3 p-4 bg-zinc-50 rounded-xl border border-zinc-100 hover:border-blue-200 hover:bg-white hover:shadow-md transition-all">
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                      alt={tech.name}
                      className="w-8 h-8"
                    />
                    <span className="text-[10px] sm:text-xs font-bold text-zinc-500 text-center uppercase tracking-wider">
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="projects" className="py-24 bg-[#fcfcfc] border-b border-zinc-100">
        <div className="w-[80%] max-w-7xl mx-auto">

          <div className="text-center mb-16 fade-up">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">My Work</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900">Featured Projects</h2>
            <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {PROJECTS.map((project, idx) => (
              <div key={idx} className="project-card bg-white rounded-2xl border border-zinc-200 overflow-hidden hover:shadow-xl hover:shadow-zinc-200/50 transition-shadow flex flex-col group">

                <div className="relative h-60 overflow-hidden bg-zinc-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                </div>

                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-zinc-500 font-medium leading-relaxed mb-6">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tech.slice(0, 5).map((t, i) => (
                      <span key={i} className="px-3 py-1 bg-zinc-100 text-zinc-600 rounded-md text-xs font-bold">
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 5 && (
                      <span className="px-3 py-1 bg-zinc-50 text-zinc-400 rounded-md text-xs font-bold">
                        +{project.tech.length - 5}
                      </span>
                    )}
                  </div>

                  <div className="mt-auto flex gap-4 pt-6 border-t border-zinc-100">
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 font-bold hover:text-blue-600 transition-colors">
                      <IconGithub /> Code
                    </a>
                    {project.link !== "#" && (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-600 font-bold hover:text-blue-600 transition-colors ml-4">
                        <IconExternal /> Live Demo
                      </a>
                    )}
                  </div>
                </div>

              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-8 py-3.5 bg-zinc-900 hover:bg-black text-white font-bold rounded-full transition-colors">
              <IconGithub /> View All Projects
            </a>
          </div>

        </div>
      </section>

      <section id="contact" className="py-24 bg-white">
        <div className="w-[80%] max-w-7xl mx-auto">

          <div className="text-center mb-16 fade-up">
            <span className="text-blue-600 font-bold tracking-widest uppercase text-xs mb-3 block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900">Contact Me</h2>
            <div className="w-16 h-1.5 bg-blue-600 rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-zinc-900 mb-4">Let's work together</h3>
                <p className="text-zinc-500 font-medium leading-relaxed max-w-md">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { icon: <IconMail />, title: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                  { icon: <IconPhone />, title: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
                  { icon: <IconPin />, title: "Location", value: PERSONAL_INFO.location, href: null },
                ].map((item, idx) => (
                  <div key={idx} className="contact-item flex items-center gap-5 p-4 bg-zinc-50 rounded-2xl border border-zinc-100">
                    <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-zinc-200 flex items-center justify-center text-blue-600">
                      {item.icon}
                    </div>
                    <div>
                      <p className="text-xs font-bold text-zinc-400 uppercase tracking-widest mb-1">{item.title}</p>
                      {item.href ? (
                        <a href={item.href} className="text-zinc-900 font-bold hover:text-blue-600 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-zinc-900 font-bold">{item.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-zinc-50 p-8 md:p-10 rounded-3xl border border-zinc-100">
              <h3 className="text-xl font-bold text-zinc-900 mb-6">Send me a message</h3>
              <form className="space-y-5">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-600">Your Name</label>
                  <input type="text" placeholder="John Doe" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-600">Email Address</label>
                  <input type="email" placeholder="john@example.com" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-zinc-600">Message</label>
                  <textarea rows={4} placeholder="How can I help you?" className="w-full bg-white border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 placeholder:text-zinc-400 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all resize-none"></textarea>
                </div>
                <button type="submit" className="w-full py-4 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-xl transition-colors shadow-lg shadow-blue-600/20">
                  Send Message
                </button>
              </form>
            </div>

          </div>
        </div>
      </section>

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

    </div>
  );
}
