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

gsap.registerPlugin(ScrollTrigger);

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
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
