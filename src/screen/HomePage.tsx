import "./index.css";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import CustomCursor from "../components/CustomCursor";
import ThreeBackground from "../components/ThreeBackground";

gsap.registerPlugin(ScrollTrigger);

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.from(".hero-text > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.12,
        ease: "power3.out",
        delay: 0.4
      });
      gsap.from(".hero-image", {
        x: 40,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.5
      });

      // Fade up on scroll
      gsap.utils.toArray<HTMLElement>(".fade-up").forEach((el) => {
        gsap.from(el, {
          scrollTrigger: { trigger: el, start: "top 85%" },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out"
        });
      });

      // Stagger sections
      [".about-content > *", ".project-card", ".tech-card", ".contact-item"].forEach(selector => {
        gsap.utils.toArray<HTMLElement>(selector).forEach((el, i) => {
          gsap.from(el, {
            scrollTrigger: { trigger: el, start: "top 90%" },
            y: 30,
            opacity: 0,
            duration: 0.6,
            delay: (i % 4) * 0.08,
            ease: "power2.out"
          });
        });
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <CustomCursor />
      <ThreeBackground />
      <div
        ref={containerRef}
        className="relative z-10 min-h-screen noise"
      >
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}
