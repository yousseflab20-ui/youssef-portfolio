import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { SOCIAL_LINKS } from "../constants";

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
      { y: -72, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.75, ease: "power3.out", delay: 0.1 }
    );
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navStyle: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 100,
    background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.80)",
    backdropFilter: "blur(14px)",
    borderBottom: `1px solid ${scrolled ? "var(--border)" : "transparent"}`,
    boxShadow: scrolled ? "0 1px 12px rgba(0,0,0,0.06)" : "none",
    transition: "all 0.3s ease",
  };

  const linkStyle: React.CSSProperties = {
    fontSize: "0.875rem",
    fontWeight: 600,
    color: "var(--text-sub)",
    textDecoration: "none",
    transition: "color 0.2s",
    position: "relative",
  };

  return (
    <nav ref={navRef} style={navStyle}>
      <div
        style={{
          width: "80%",
          maxWidth: 1100,
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "16px 0",
        }}
      >
        <a href="#home" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "var(--accent)", display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <span style={{ color: "#fff", fontWeight: 900, fontSize: "0.75rem", fontFamily: "Inter, sans-serif" }}>YL</span>
          </div>
          <span style={{ fontWeight: 800, fontSize: "0.975rem", color: "var(--text)", letterSpacing: "-0.01em" }}>
            Youssef Labnine
          </span>
        </a>

        <ul style={{ display: "flex", alignItems: "center", gap: 32, listStyle: "none", margin: 0, padding: 0 }}
          className="hidden md:flex">
          {NAV_LINKS.map(link => (
            <li key={link.href}>
              <a
                href={link.href}
                style={linkStyle}
                onMouseEnter={e => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={e => (e.currentTarget.style.color = "var(--text-sub)")}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a href={SOCIAL_LINKS.github} target="_blank" rel="noopener noreferrer"
              style={{
                ...linkStyle,
                display: "flex", alignItems: "center", gap: 6,
                border: "1.5px solid var(--border)", borderRadius: 8,
                padding: "6px 14px",
              }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-sub)"; }}
            >
              <svg width="15" height="15" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
              </svg>
              GitHub
            </a>
          </li>
          <li>
            <a href="#contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "var(--accent)", color: "#fff",
                fontSize: "0.85rem", fontWeight: 700,
                padding: "9px 22px", borderRadius: 99,
                textDecoration: "none",
                transition: "background 0.2s, transform 0.2s",
              }}
              onMouseEnter={e => { e.currentTarget.style.background = "var(--accent-2)"; e.currentTarget.style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { e.currentTarget.style.background = "var(--accent)"; e.currentTarget.style.transform = "translateY(0)"; }}
            >
              Contact me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden"
          style={{
            display: "flex", flexDirection: "column", gap: 5,
            padding: 8, background: "none", border: "none", cursor: "pointer",
          }}
        >
          {[0, 1, 2].map(i => (
            <span key={i} style={{
              width: 22, height: 2, background: "var(--text)",
              borderRadius: 2, display: "block",
              transition: "all 0.3s",
              transform: menuOpen
                ? i === 0 ? "rotate(45deg) translate(5px, 5px)"
                  : i === 1 ? "opacity:0"
                    : "rotate(-45deg) translate(5px, -5px)"
                : "none",
              opacity: (menuOpen && i === 1) ? 0 : 1,
            }} />
          ))}
        </button>
      </div>

      {menuOpen && (
        <div style={{
          background: "var(--surface)",
          borderTop: "1px solid var(--border)",
          padding: "16px 10%",
          display: "flex", flexDirection: "column", gap: 14,
        }}>
          {NAV_LINKS.map(link => (
            <a key={link.href} href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{ fontSize: "0.9rem", fontWeight: 600, color: "var(--text-sub)", textDecoration: "none", padding: "6px 0" }}
            >
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)}
            style={{
              display: "inline-block", background: "var(--accent)", color: "#fff",
              fontWeight: 700, padding: "10px 24px", borderRadius: 99,
              textDecoration: "none", textAlign: "center", fontSize: "0.875rem",
            }}
          >
            Contact me
          </a>
        </div>
      )}
    </nav>
  );
}
