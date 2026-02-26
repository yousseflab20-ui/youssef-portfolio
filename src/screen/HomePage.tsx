import "./index.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import profileImg from "../assets/images/image-test.png";
import { PERSONAL_INFO, STATS, SOCIAL_LINKS, PROJECTS, TECH_STACK } from "../constants";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  // Refs for sections
  const heroRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const heroImgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const aboutRef = useRef<HTMLElement>(null);
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const aboutStatsRef = useRef<HTMLDivElement>(null);
  const techRef = useRef<HTMLDivElement>(null);

  const projectsRef = useRef<HTMLElement>(null);
  const projectsHeadRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);

  const contactRef = useRef<HTMLElement>(null);
  const contactLeftRef = useRef<HTMLDivElement>(null);
  const contactRightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      // ─── HERO ──────────────────────────────────────────────────────────
      const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });
      heroTl
        .fromTo(".hero-badge", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 0.4)
        .fromTo(".hero-name", { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.7 }, 0.6)
        .fromTo(".hero-title", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.6 }, 0.8)
        .fromTo(".hero-bio", { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6 }, 1.0)
        .fromTo(".hero-cta", { opacity: 0, y: 20, scale: 0.95 }, { opacity: 1, y: 0, scale: 1, duration: 0.5 }, 1.2)
        .fromTo(heroImgRef.current, { opacity: 0, scale: 0.85, x: 60 }, { opacity: 1, scale: 1, x: 0, duration: 0.9 }, 0.5)
        .fromTo(".hero-stat", { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 0.5, stagger: 0.15 }, 1.2);

      // ─── ABOUT ─────────────────────────────────────────────────────────
      gsap.fromTo(aboutTextRef.current,
        { opacity: 0, x: -60 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 75%" }
        }
      );
      gsap.fromTo(".about-heading",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: aboutRef.current, start: "top 80%" }
        }
      );
      gsap.fromTo(".about-stat",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1, scale: 1, duration: 0.5, stagger: 0.15, ease: "back.out(1.5)",
          scrollTrigger: { trigger: aboutStatsRef.current, start: "top 85%" }
        }
      );
      gsap.fromTo(".tech-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.5, stagger: 0.05, ease: "power2.out",
          scrollTrigger: { trigger: techRef.current, start: "top 80%" }
        }
      );

      // ─── PROJECTS ──────────────────────────────────────────────────────
      gsap.fromTo(projectsHeadRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1, y: 0, duration: 0.7, ease: "power3.out",
          scrollTrigger: { trigger: projectsRef.current, start: "top 80%" }
        }
      );
      gsap.fromTo(".project-card",
        { opacity: 0, y: 50 },
        {
          opacity: 1, y: 0, duration: 0.6, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: projectsGridRef.current, start: "top 80%" }
        }
      );

      // ─── CONTACT ───────────────────────────────────────────────────────
      gsap.fromTo(contactLeftRef.current,
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: contactRef.current, start: "top 75%" }
        }
      );
      gsap.fromTo(contactRightRef.current,
        { opacity: 0, x: 50 },
        {
          opacity: 1, x: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: contactRef.current, start: "top 75%" }
        }
      );

    });

    return () => ctx.revert();
  }, []);

  return (
    <div style={{ background: "var(--bg)", color: "var(--text-primary)" }}>
      <Navbar />

      {/* ═══════════════════════ HERO ═══════════════════════ */}
      <section
        ref={heroRef}
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        style={{ background: "linear-gradient(135deg, #f8fafc 0%, #eef2ff 50%, #f8fafc 100%)" }}
      >
        {/* Decorative blobs */}
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #818cf8, transparent)" }} />
        <div className="absolute bottom-20 left-10 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none"
          style={{ background: "radial-gradient(circle, #a78bfa, transparent)" }} />

        <div className="w-[85%] max-w-6xl grid md:grid-cols-2 gap-16 items-center z-10">

          {/* Left: Text */}
          <div ref={heroTextRef}>
            <p className="hero-badge accent-badge mb-6">
              👋 Hello, I am
            </p>

            <h1
              className="hero-name font-black mb-4 leading-tight"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", color: "var(--text-primary)" }}
            >
              {PERSONAL_INFO.name.split(" ")[0]}{" "}
              <span className="gradient-text">{PERSONAL_INFO.name.split(" ")[1]}</span>
            </h1>

            <p className="hero-title font-semibold mb-5 text-xl" style={{ color: "var(--accent)" }}>
              {PERSONAL_INFO.title}
            </p>

            <p className="hero-bio text-base leading-relaxed mb-8 max-w-lg" style={{ color: "var(--text-secondary)" }}>
              {PERSONAL_INFO.bio}
            </p>

            <div className="hero-cta flex items-center gap-4 flex-wrap">
              <a href="#contact" className="btn-primary">
                Let's Work Together
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
              <a
                href={SOCIAL_LINKS.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-semibold text-sm transition-colors"
                style={{ color: "var(--text-secondary)" }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                View GitHub
              </a>
            </div>

            {/* Stats under text */}
            <div ref={statsRef} className="flex gap-6 mt-12 flex-wrap">
              <div className="hero-stat stat-card">
                <h3 className="text-3xl font-black gradient-text">{STATS.yearsExperience}</h3>
                <p className="text-xs font-medium mt-1" style={{ color: "var(--text-muted)" }}>Years Experience</p>
              </div>
              <div className="hero-stat stat-card">
                <h3 className="text-3xl font-black gradient-text">{STATS.projectsCompleted}</h3>
                <p className="text-xs font-medium mt-1" style={{ color: "var(--text-muted)" }}>Projects Done</p>
              </div>
              <div className="hero-stat stat-card">
                <h3 className="text-3xl font-black gradient-text">{STATS.technologies}</h3>
                <p className="text-xs font-medium mt-1" style={{ color: "var(--text-muted)" }}>Technologies</p>
              </div>
            </div>
          </div>

          {/* Right: Image */}
          <div ref={heroImgRef} className="relative flex justify-center items-center">
            {/* Decorative ring */}
            <div
              className="absolute w-[380px] h-[380px] rounded-full border-2 opacity-30"
              style={{ borderColor: "var(--accent)" }}
            />
            <div
              className="absolute w-[340px] h-[340px] rounded-full"
              style={{ background: "linear-gradient(135deg, #eef2ff, #c7d2fe)", opacity: 0.6 }}
            />
            <img
              src={profileImg}
              alt="Youssef Labnine"
              className="relative z-10 w-[420px] h-[550px] object-cover rounded-3xl"
              style={{ boxShadow: "0 20px 60px rgba(99,102,241,0.25)" }}
            />
            {/* Floating badge */}
            <div
              className="absolute bottom-6 -left-4 z-20 glass-card px-5 py-3 flex items-center gap-3"
              style={{ borderRadius: "14px" }}
            >
              <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
              <span className="text-sm font-semibold" style={{ color: "var(--text-primary)" }}>
                Available for work
              </span>
            </div>
          </div>

        </div>
      </section>

      {/* ═══════════════════════ ABOUT ═══════════════════════ */}
      <section
        ref={aboutRef}
        id="about"
        className="py-28"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="w-[85%] max-w-6xl mx-auto">

          {/* Heading */}
          <div className="about-heading text-center mb-20">
            <span className="accent-badge mb-4 inline-block">Get to know me</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4" style={{ color: "var(--text-primary)" }}>
              About <span className="gradient-text">Me</span>
            </h2>
            <div className="section-line mt-4" />
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-start">

            {/* Left: Text */}
            <div ref={aboutTextRef} className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                {PERSONAL_INFO.about.intro}
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {PERSONAL_INFO.about.specialization}
              </p>
              <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                {PERSONAL_INFO.about.goal}
              </p>

              {/* Stats */}
              <div ref={aboutStatsRef} className="grid grid-cols-3 gap-4 pt-6">
                {[
                  { value: STATS.yearsExperience, label: "Years Experience" },
                  { value: STATS.projectsCompleted, label: "Projects Done" },
                  { value: STATS.technologies, label: "Technologies" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="about-stat text-center py-5 px-3 rounded-2xl border"
                    style={{ background: "var(--accent-light)", borderColor: "var(--border-accent)" }}
                  >
                    <h4 className="text-2xl font-black gradient-text">{s.value}</h4>
                    <p className="text-xs mt-1 font-medium" style={{ color: "var(--text-muted)" }}>{s.label}</p>
                  </div>
                ))}
              </div>

              <div className="pt-4">
                <a href="#contact" className="btn-primary">
                  Let's Work Together
                </a>
              </div>
            </div>

            {/* Right: Tech Stack */}
            <div ref={techRef}>
              <h3 className="text-2xl font-bold text-center mb-8" style={{ color: "var(--text-primary)" }}>
                Technologies I Work With
              </h3>
              <div className="grid grid-cols-3 sm:grid-cols-4 gap-5">
                {TECH_STACK.map((tech, index) => (
                  <div
                    key={index}
                    className="tech-card glass-card flex flex-col items-center gap-3 p-4 rounded-2xl cursor-default"
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                      alt={tech.name}
                      className={`w-10 h-10 ${tech.invert ? "invert opacity-70" : ""}`}
                    />
                    <span className="text-xs font-semibold text-center" style={{ color: "var(--text-secondary)" }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════ PROJECTS ═══════════════════════ */}
      <section
        ref={projectsRef}
        id="projects"
        className="py-28"
        style={{ background: "var(--bg)" }}
      >
        <div className="w-[85%] max-w-6xl mx-auto">

          <div ref={projectsHeadRef} className="text-center mb-16">
            <span className="accent-badge mb-4 inline-block">My Work</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4" style={{ color: "var(--text-primary)" }}>
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <div className="section-line mt-4" />
            <p className="mt-6 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
              A selection of my recent projects in web and mobile development
            </p>
          </div>

          <div ref={projectsGridRef} className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <div
                key={index}
                className="project-card glass-card overflow-hidden rounded-2xl group"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <div className="absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    style={{ background: "linear-gradient(180deg, transparent 30%, rgba(99,102,241,0.15) 100%)" }} />
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  {/* Category pill */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="accent-badge text-xs" style={{ fontSize: "0.65rem" }}>
                      {project.tech[0]}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <h3
                    className="text-lg font-bold mb-2 group-hover:text-indigo-600 transition-colors"
                    style={{ color: "var(--text-primary)" }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-sm leading-relaxed mb-4 line-clamp-3" style={{ color: "var(--text-muted)" }}>
                    {project.description}
                  </p>

                  {/* Tech tags */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tech.slice(0, 4).map((t, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 rounded-lg text-xs font-semibold"
                        style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                      >
                        {t}
                      </span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="px-2 py-1 rounded-lg text-xs font-semibold"
                        style={{ background: "var(--surface-hover)", color: "var(--text-muted)" }}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-2 border-t" style={{ borderColor: "var(--border)" }}>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-indigo-600"
                      style={{ color: "var(--text-secondary)" }}
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                      </svg>
                      Source Code
                    </a>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm font-medium transition-colors hover:text-indigo-600"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              View All Projects on GitHub
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CONTACT ═══════════════════════ */}
      <section
        ref={contactRef}
        id="contact"
        className="py-28"
        style={{ background: "var(--bg-secondary)" }}
      >
        <div className="w-[85%] max-w-6xl mx-auto">

          <div className="text-center mb-16">
            <span className="accent-badge mb-4 inline-block">Get In Touch</span>
            <h2 className="text-4xl md:text-5xl font-black mt-3 mb-4" style={{ color: "var(--text-primary)" }}>
              Contact <span className="gradient-text">Me</span>
            </h2>
            <div className="section-line mt-4" />
            <p className="mt-6 max-w-xl mx-auto" style={{ color: "var(--text-muted)" }}>
              Have a project in mind or just want to chat? Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left: Info */}
            <div ref={contactLeftRef} className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold mb-3" style={{ color: "var(--text-primary)" }}>
                  Let's work together
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--text-muted)" }}>
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
              </div>

              {/* Contact cards */}
              {[
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                  label: "Email",
                  value: PERSONAL_INFO.email,
                  href: `mailto:${PERSONAL_INFO.email}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  ),
                  label: "Phone",
                  value: PERSONAL_INFO.phone,
                  href: `tel:${PERSONAL_INFO.phone}`,
                },
                {
                  icon: (
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                  label: "Location",
                  value: PERSONAL_INFO.location,
                  href: null,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="glass-card p-5 rounded-2xl flex items-center gap-4"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "var(--accent-light)", color: "var(--accent)" }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide mb-1" style={{ color: "var(--text-muted)" }}>
                      {item.label}
                    </p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold hover:text-indigo-600 transition-colors" style={{ color: "var(--text-primary)" }}>
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold" style={{ color: "var(--text-primary)" }}>{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social */}
              <div className="pt-2">
                <p className="text-sm font-semibold mb-3" style={{ color: "var(--text-muted)" }}>Follow me on</p>
                <div className="flex gap-3">
                  <a
                    target="_blank"
                    href={SOCIAL_LINKS.github}
                    rel="noopener noreferrer"
                    className="glass-card w-12 h-12 rounded-xl flex items-center justify-center hover:border-indigo-300 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                  <a
                    target="_blank"
                    href={SOCIAL_LINKS.linkedin}
                    rel="noopener noreferrer"
                    className="glass-card w-12 h-12 rounded-xl flex items-center justify-center hover:border-indigo-300 transition-all"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" style={{ color: "var(--accent)" }}>
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div ref={contactRightRef}>
              <div
                className="glass-card p-8 rounded-2xl"
                style={{ background: "var(--surface)" }}
              >
                <h3 className="text-xl font-bold mb-6" style={{ color: "var(--text-primary)" }}>
                  Send me a message ✉️
                </h3>
                <form className="space-y-5">
                  {[
                    { label: "Your Name", type: "text", placeholder: "John Doe" },
                    { label: "Your Email", type: "email", placeholder: "john@example.com" },
                    { label: "Subject", type: "text", placeholder: "Project Discussion" },
                  ].map((field) => (
                    <div key={field.label}>
                      <label
                        className="block text-sm font-semibold mb-2"
                        style={{ color: "var(--text-secondary)" }}
                      >
                        {field.label}
                      </label>
                      <input
                        type={field.type}
                        placeholder={field.placeholder}
                        className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all"
                        style={{
                          background: "var(--bg)",
                          border: "1.5px solid var(--border)",
                          color: "var(--text-primary)",
                        }}
                        onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                  ))}

                  <div>
                    <label className="block text-sm font-semibold mb-2" style={{ color: "var(--text-secondary)" }}>
                      Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell me about your project..."
                      className="w-full rounded-xl px-4 py-3 text-sm outline-none transition-all resize-none"
                      style={{
                        background: "var(--bg)",
                        border: "1.5px solid var(--border)",
                        color: "var(--text-primary)",
                      }}
                      onFocus={(e) => (e.target.style.borderColor = "var(--accent)")}
                      onBlur={(e) => (e.target.style.borderColor = "var(--border)")}
                    />
                  </div>

                  <button type="submit" className="btn-primary w-full justify-center">
                    Send Message
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ═══════════════════════ FOOTER ═══════════════════════ */}
      <footer
        className="py-10 border-t"
        style={{ background: "var(--bg)", borderColor: "var(--border)" }}
      >
        <div className="w-[85%] max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg flex items-center justify-center" style={{ background: "linear-gradient(135deg, #6366f1, #818cf8)" }}>
              <span className="text-white font-black text-xs">YL</span>
            </div>
            <span className="font-bold text-sm" style={{ color: "var(--text-primary)" }}>
              Youssef Labnine
            </span>
          </div>

          <p className="text-sm" style={{ color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} Youssef Labnine. All rights reserved.
          </p>

          <div className="flex gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              GitHub
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-indigo-600 transition-colors"
              style={{ color: "var(--text-muted)" }}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
