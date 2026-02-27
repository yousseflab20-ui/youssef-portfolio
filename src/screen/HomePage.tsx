import "./index.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import profileImg from "../assets/images/image-test.png";
import { PERSONAL_INFO, STATS, SOCIAL_LINKS, PROJECTS, TECH_STACK } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const IconMail = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);
const IconPhone = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);
const IconPin = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const IconArrow = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
  </svg>
);
const IconGithub = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);
const IconExternal = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
const IconSend = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

export default function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const aboutRef = useRef<HTMLElement>(null);
  const projRef = useRef<HTMLElement>(null);
  const contactRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {

      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(".h-badge", { opacity: 0, y: 16, duration: 0.55 }, 0.3)
        .from(".h-title", { opacity: 0, y: 32, duration: 0.65 }, 0.45)
        .from(".h-role", { opacity: 0, y: 20, duration: 0.55 }, 0.6)
        .from(".h-bio", { opacity: 0, y: 16, duration: 0.5 }, 0.72)
        .from(".h-actions", { opacity: 0, y: 16, duration: 0.5 }, 0.85)
        .from(".h-stats", { opacity: 0, y: 20, duration: 0.5 }, 0.95)
        .from(".h-img", { opacity: 0, x: 48, duration: 0.75 }, 0.4);

      const aStart = "top 78%";
      gsap.from(".ab-heading", {
        opacity: 0, y: 28, duration: 0.65, ease: "power3.out",
        scrollTrigger: { trigger: aboutRef.current, start: aStart },
      });
      gsap.from(".ab-text > *", {
        opacity: 0, y: 24, duration: 0.55, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: ".ab-text", start: aStart },
      });
      gsap.from(".ab-stat", {
        opacity: 0, scale: 0.85, duration: 0.45, stagger: 0.1, ease: "back.out(1.4)",
        scrollTrigger: { trigger: ".ab-stats", start: aStart },
      });
      gsap.from(".tech-icon", {
        opacity: 0, y: 20, duration: 0.4, stagger: 0.04, ease: "power2.out",
        scrollTrigger: { trigger: ".tech-grid", start: "top 82%" },
      });

      gsap.from(".pr-heading", {
        opacity: 0, y: 28, duration: 0.65, ease: "power3.out",
        scrollTrigger: { trigger: projRef.current, start: "top 80%" },
      });
      gsap.from(".pr-card", {
        opacity: 0, y: 40, duration: 0.55, stagger: 0.15, ease: "power3.out",
        scrollTrigger: { trigger: ".pr-grid", start: "top 80%" },
      });

      gsap.from(".ct-left", {
        opacity: 0, x: -40, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: contactRef.current, start: "top 78%" },
      });
      gsap.from(".ct-right", {
        opacity: 0, x: 40, duration: 0.7, ease: "power3.out",
        scrollTrigger: { trigger: contactRef.current, start: "top 78%" },
      });

    });
    return () => ctx.revert();
  }, []);

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "var(--bg)",
    border: "1.5px solid var(--border)",
    borderRadius: 8,
    padding: "11px 14px",
    fontSize: "0.875rem",
    color: "var(--text)",
    outline: "none",
    fontFamily: "inherit",
    transition: "border-color 0.2s",
  };

  return (
    <div style={{ background: "var(--bg)", color: "var(--text)" }}>
      <Navbar />

      <section
        ref={heroRef}
        id="home"
        style={{
          paddingTop: 120,
          paddingBottom: 100,
          background: "linear-gradient(160deg, #f5f3ff 0%, #f9fafb 60%)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <div className="container" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 72, alignItems: "center" }}>

          <div>
            <span className="h-badge eyebrow">👋 Hello, I am</span>

            <h1
              className="h-title"
              style={{
                fontSize: "clamp(2.2rem, 4.5vw, 3.5rem)",
                fontWeight: 900,
                lineHeight: 1.15,
                letterSpacing: "-0.02em",
                marginBottom: 16,
                color: "var(--text)",
              }}
            >
              {PERSONAL_INFO.name.split(" ")[0]}{" "}
              <span style={{ color: "var(--accent)" }}>{PERSONAL_INFO.name.split(" ")[1]}</span>
            </h1>

            <p
              className="h-role"
              style={{
                fontSize: "1.1rem",
                fontWeight: 600,
                color: "var(--accent-2)",
                marginBottom: 20,
              }}
            >
              {PERSONAL_INFO.title}
            </p>

            <p
              className="h-bio"
              style={{
                fontSize: "0.95rem",
                color: "var(--text-sub)",
                lineHeight: 1.75,
                maxWidth: 480,
                marginBottom: 32,
              }}
            >
              {PERSONAL_INFO.bio}
            </p>

            <div className="h-actions" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
              <a href="#contact" className="btn">
                Hire Me <IconArrow />
              </a>
              <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
                <IconGithub /> GitHub
              </a>
            </div>

            <div
              className="h-stats"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                marginTop: 48,
                background: "var(--border)",
                borderRadius: 12,
                overflow: "hidden",
                border: "1px solid var(--border)",
              }}
            >
              {[
                { v: STATS.yearsExperience, l: "Years Experience" },
                { v: STATS.projectsCompleted, l: "Projects Done" },
                { v: STATS.technologies, l: "Technologies" },
              ].map((s, i) => (
                <div
                  key={i}
                  style={{
                    background: "var(--surface)",
                    padding: "20px 16px",
                    textAlign: "center",
                  }}
                >
                  <p style={{ fontSize: "1.75rem", fontWeight: 800, color: "var(--accent)", lineHeight: 1 }}>{s.v}</p>
                  <p style={{ fontSize: "0.72rem", color: "var(--text-muted)", marginTop: 6, fontWeight: 500 }}>{s.l}</p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="h-img"
            style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center" }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, #ede9fe 0%, #ddd6fe 100%)",
                borderRadius: 24,
                zIndex: 0,
              }}
            />
            <img
              src={profileImg}
              alt="Youssef Labnine"
              style={{
                position: "relative",
                zIndex: 1,
                width: "100%",
                maxWidth: 420,
                height: 520,
                objectFit: "cover",
                borderRadius: 20,
                boxShadow: "0 20px 50px rgba(79,70,229,0.18)",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: 24,
                left: -16,
                zIndex: 2,
                background: "var(--surface)",
                border: "1px solid var(--border)",
                borderRadius: 10,
                padding: "10px 18px",
                display: "flex",
                alignItems: "center",
                gap: 10,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#22c55e", display: "inline-block", flexShrink: 0, boxShadow: "0 0 0 3px #dcfce7" }} />
              <span style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text)" }}>Available for work</span>
            </div>
          </div>

        </div>
      </section>

      <section
        ref={aboutRef}
        id="about"
        style={{ padding: "100px 0", background: "var(--surface)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">

          <div className="ab-heading" style={{ textAlign: "center", marginBottom: 64 }}>
            <span className="eyebrow">About Me</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Who I Am
            </h2>
            <div className="divider" />
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "start" }}>

            <div className="ab-text" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <p style={{ fontSize: "1rem", lineHeight: 1.8, color: "var(--text-sub)", fontWeight: 500 }}>
                {PERSONAL_INFO.about.intro}
              </p>
              <p style={{ lineHeight: 1.8, color: "var(--text-muted)", fontSize: "0.925rem" }}>
                {PERSONAL_INFO.about.specialization}
              </p>
              <p style={{ lineHeight: 1.8, color: "var(--text-muted)", fontSize: "0.925rem" }}>
                {PERSONAL_INFO.about.goal}
              </p>

              <div
                className="ab-stats"
                style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 12, marginTop: 12 }}
              >
                {[
                  { v: STATS.yearsExperience, l: "Years Exp." },
                  { v: STATS.projectsCompleted, l: "Projects" },
                  { v: STATS.technologies, l: "Technologies" },
                ].map((s, i) => (
                  <div
                    key={i}
                    className="ab-stat"
                    style={{
                      textAlign: "center",
                      padding: "18px 10px",
                      background: "var(--accent-light)",
                      borderRadius: 10,
                    }}
                  >
                    <p style={{ fontSize: "1.5rem", fontWeight: 800, color: "var(--accent)" }}>{s.v}</p>
                    <p style={{ fontSize: "0.7rem", color: "var(--text-muted)", marginTop: 4, fontWeight: 600 }}>{s.l}</p>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 8 }}>
                <a href="#contact" className="btn">Let's Talk <IconArrow /></a>
              </div>
            </div>

            <div>
              <p style={{ fontWeight: 700, fontSize: "0.9rem", color: "var(--text-sub)", marginBottom: 20, textAlign: "center", letterSpacing: "0.03em", textTransform: "uppercase" }}>
                Tech Stack
              </p>
              <div
                className="tech-grid"
                style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}
              >
                {TECH_STACK.map((tech, i) => (
                  <div
                    key={i}
                    className="tech-icon card"
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      gap: 8,
                      padding: "14px 8px",
                      borderRadius: 10,
                      cursor: "default",
                    }}
                  >
                    <img
                      src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${tech.icon}`}
                      alt={tech.name}
                      style={{ width: 36, height: 36, filter: tech.invert ? "invert(0.6)" : "none" }}
                    />
                    <span style={{ fontSize: "0.65rem", fontWeight: 600, color: "var(--text-muted)", textAlign: "center" }}>
                      {tech.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </section>

      <section
        ref={projRef}
        id="projects"
        style={{ padding: "100px 0", background: "var(--bg)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="container">

          <div className="pr-heading" style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow">My Work</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Featured Projects
            </h2>
            <div className="divider" />
            <p style={{ marginTop: 16, color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: 480, margin: "16px auto 0" }}>
              A selection of recent web & mobile projects
            </p>
          </div>

          <div
            className="pr-grid"
            style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}
          >
            {PROJECTS.map((project, i) => (
              <div key={i} className="pr-card card" style={{ borderRadius: 14, overflow: "hidden" }}>
                <div style={{ position: "relative", height: 200, overflow: "hidden" }}>
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.4s ease", display: "block" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                </div>

                <div style={{ padding: "22px 22px 20px" }}>
                  <h3 style={{ fontWeight: 700, fontSize: "1rem", marginBottom: 8, color: "var(--text)" }}>
                    {project.title}
                  </h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 14, display: "-webkit-box", WebkitLineClamp: 3, WebkitBoxOrient: "vertical", overflow: "hidden" }}>
                    {project.description}
                  </p>

                  <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
                    {project.tech.slice(0, 4).map((t, j) => (
                      <span key={j} className="tag">{t}</span>
                    ))}
                    {project.tech.length > 4 && (
                      <span className="tag" style={{ background: "var(--bg)", color: "var(--text-muted)" }}>
                        +{project.tech.length - 4}
                      </span>
                    )}
                  </div>

                  <div
                    style={{
                      display: "flex",
                      gap: 12,
                      paddingTop: 14,
                      borderTop: "1px solid var(--border)",
                    }}
                  >
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                        fontSize: "0.82rem",
                        fontWeight: 600,
                        color: "var(--text-sub)",
                        textDecoration: "none",
                        transition: "color 0.2s",
                      }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "var(--text-sub)")}
                    >
                      <IconGithub /> Code
                    </a>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 6,
                          fontSize: "0.82rem",
                          fontWeight: 600,
                          color: "var(--text-sub)",
                          textDecoration: "none",
                          transition: "color 0.2s",
                        }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text-sub)")}
                      >
                        <IconExternal /> Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: "center", marginTop: 44 }}>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer" className="btn-ghost">
              <IconGithub /> All Projects on GitHub
            </a>
          </div>
        </div>
      </section>

      <section
        ref={contactRef}
        id="contact"
        style={{ padding: "100px 0", background: "var(--surface)" }}
      >
        <div className="container">

          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span className="eyebrow">Contact</span>
            <h2 style={{ fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 800, letterSpacing: "-0.02em" }}>
              Get In Touch
            </h2>
            <div className="divider" />
            <p style={{ marginTop: 16, color: "var(--text-muted)", fontSize: "0.9rem", maxWidth: 440, margin: "16px auto 0" }}>
              Have a project in mind or just want to say hello? Reach out!
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 48, alignItems: "start" }}>

            <div className="ct-left" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              <div>
                <h3 style={{ fontWeight: 700, fontSize: "1.15rem", marginBottom: 10 }}>Let's work together</h3>
                <p style={{ color: "var(--text-muted)", lineHeight: 1.75, fontSize: "0.9rem" }}>
                  I'm always open to new projects, creative ideas, and opportunities.
                  Don't hesitate to reach out!
                </p>
              </div>

              {[
                { icon: <IconMail />, label: "Email", value: PERSONAL_INFO.email, href: `mailto:${PERSONAL_INFO.email}` },
                { icon: <IconPhone />, label: "Phone", value: PERSONAL_INFO.phone, href: `tel:${PERSONAL_INFO.phone}` },
                { icon: <IconPin />, label: "Location", value: PERSONAL_INFO.location, href: null },
              ].map((item, i) => (
                <div
                  key={i}
                  className="card"
                  style={{ padding: "16px 18px", borderRadius: 10, display: "flex", alignItems: "center", gap: 14 }}
                >
                  <div style={{
                    width: 40, height: 40, borderRadius: 8, background: "var(--accent-light)",
                    color: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <p style={{ fontSize: "0.7rem", fontWeight: 700, color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 2 }}>
                      {item.label}
                    </p>
                    {item.href
                      ? <a href={item.href} style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)", textDecoration: "none" }}
                        onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                        onMouseLeave={e => (e.currentTarget.style.color = "var(--text)")}
                      >{item.value}</a>
                      : <p style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text)" }}>{item.value}</p>
                    }
                  </div>
                </div>
              ))}

              <div style={{ display: "flex", gap: 10, paddingTop: 4 }}>
                {[
                  { href: SOCIAL_LINKS.github, label: "GitHub" },
                  { href: SOCIAL_LINKS.linkedin, label: "LinkedIn" },
                ].map((s, i) => (
                  <a
                    key={i}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost"
                    style={{ fontSize: "0.78rem", padding: "8px 18px" }}
                  >
                    {s.label}
                  </a>
                ))}
              </div>
            </div>

            <div
              className="ct-right card"
              style={{ padding: "32px 32px", borderRadius: 16 }}
            >
              <h3 style={{ fontWeight: 700, fontSize: "1.05rem", marginBottom: 24, color: "var(--text)" }}>
                Send a message
              </h3>
              <form style={{ display: "flex", flexDirection: "column", gap: 18 }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}>
                  {[
                    { label: "Name", type: "text", placeholder: "John Doe" },
                    { label: "Email", type: "email", placeholder: "john@example.com" },
                  ].map(f => (
                    <div key={f.label}>
                      <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-sub)", marginBottom: 6 }}>{f.label}</label>
                      <input
                        type={f.type}
                        placeholder={f.placeholder}
                        style={inputStyle}
                        onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                        onBlur={e => (e.target.style.borderColor = "var(--border)")}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-sub)", marginBottom: 6 }}>Subject</label>
                  <input
                    type="text"
                    placeholder="Project Discussion"
                    style={inputStyle}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <div>
                  <label style={{ display: "block", fontSize: "0.78rem", fontWeight: 600, color: "var(--text-sub)", marginBottom: 6 }}>Message</label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project..."
                    style={{ ...inputStyle, resize: "none" }}
                    onFocus={e => (e.target.style.borderColor = "var(--accent)")}
                    onBlur={e => (e.target.style.borderColor = "var(--border)")}
                  />
                </div>

                <button type="submit" className="btn" style={{ justifyContent: "center" }}>
                  Send Message <IconSend />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <footer style={{
        padding: "28px 0",
        borderTop: "1px solid var(--border)",
        background: "var(--bg)",
      }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{
              width: 28, height: 28, borderRadius: 7,
              background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: "0.7rem" }}>YL</span>
            </div>
            <span style={{ fontWeight: 700, fontSize: "0.875rem" }}>Youssef Labnine</span>
          </div>

          <p style={{ fontSize: "0.8rem", color: "var(--text-muted)" }}>
            © {new Date().getFullYear()} · All rights reserved
          </p>

          <div style={{ display: "flex", gap: 20 }}>
            {[
              { label: "GitHub", href: SOCIAL_LINKS.github },
              { label: "LinkedIn", href: SOCIAL_LINKS.linkedin },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                style={{ fontSize: "0.8rem", fontWeight: 600, color: "var(--text-muted)", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-muted)")}
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
