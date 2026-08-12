import { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { KeyboardControls, useProgress } from "@react-three/drei";
import Scene from "../components/Scene";
import AboutSection from "../components/AboutSection";
import ProjectsSection from "../components/ProjectsSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import TechNetwork from "../components/TechNetwork";
import CVSection from "../components/CVSection";
import SocialMediaSection from "../components/SocialMediaSection";
import IntroOverlay from "../components/IntroOverlay";
import LoadingScreen from "../components/LoadingScreen";
import type { InteractableConfig } from "../constants/interactables";

// Keyboard mapping for WASD
const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "left", keys: ["ArrowLeft", "KeyA"] },
  { name: "right", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
];

/** Reads GLB load progress from inside the Canvas context */
function SceneLoader({ onLoaded }: { onLoaded: () => void }) {
  const { progress } = useProgress();
  useEffect(() => {
    if (progress === 100) onLoaded();
  }, [progress, onLoaded]);
  return null;
}

export default function HomePage() {
  const [interactionTarget, setInteractionTarget] = useState<string | null>(null);
  const [hoveredTarget, setHoveredTarget] = useState<InteractableConfig | null>(null);
  const [isCameraReturning, setIsCameraReturning] = useState(false);
  const [introStarted, setIntroStarted] = useState(false);
  const [introFinished, setIntroFinished] = useState(false);
  const [sceneLoaded, setSceneLoaded] = useState(false);

  // Esc / Close UI
  const closeInteraction = () => {
    if (interactionTarget) {
      setInteractionTarget(null);
      setIsCameraReturning(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!introFinished) return;
      if (e.key === "Escape") closeInteraction();
      if (e.key.toLowerCase() === "e" && hoveredTarget && !interactionTarget) {
        setInteractionTarget(hoveredTarget.id);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [hoveredTarget, interactionTarget, introFinished]);

  return (
    <KeyboardControls map={keyboardMap}>
      <div className="fixed inset-0 bg-black">

        {/* Full-page cinematic loading screen */}
        {!sceneLoaded && <LoadingScreen />}

        {/* Intro overlay — visible once scene is loaded and before enter is clicked */}
        {sceneLoaded && !introFinished && (
          <IntroOverlay
            introStarted={introStarted}
            onEnter={() => setIntroStarted(true)}
            onSkip={() => setIntroFinished(true)}
          />
        )}

        {/* The 3D Engine — always mounted so the GLB loads in background */}
        <Canvas camera={{ fov: 60 }} shadows>
          {/* Reads drei's useProgress to notify us when GLB is ready */}
          <SceneLoader onLoaded={() => setSceneLoaded(true)} />

          <Scene
            interactionTarget={interactionTarget}
            setInteractionTarget={setInteractionTarget}
            setHoveredTarget={setHoveredTarget}
            isCameraReturning={isCameraReturning}
            setIsCameraReturning={setIsCameraReturning}
            introStarted={introStarted}
            introFinished={introFinished}
            setIntroFinished={setIntroFinished}
          />
        </Canvas>

        {/* HUD (Crosshair + prompt) — only active after intro */}
        {introFinished && !interactionTarget && (
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
            <div className="w-1.5 h-1.5 bg-white rounded-full mix-blend-difference" />

            {hoveredTarget && (
              <div className="mt-4 flex flex-col items-center animate-in fade-in zoom-in duration-200">
                <div className="bg-black/60 backdrop-blur-md border border-white/10 text-white px-4 py-2 rounded-full flex items-center gap-3 shadow-2xl">
                  <kbd className="px-2 py-0.5 bg-white/20 rounded font-mono text-xs font-bold text-white">E</kbd>
                  <span className="text-sm font-medium tracking-wide">View {hoveredTarget.label}</span>
                </div>
              </div>
            )}

            <div className="absolute bottom-8 text-white/50 font-mono text-sm">
              Use WASD to move. Mouse to look.
            </div>
          </div>
        )}

        {/* Portfolio UI sections */}
        {interactionTarget && (
          <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 md:p-12 animate-in fade-in duration-300 pointer-events-auto">
            <button
              onClick={closeInteraction}
              className="absolute top-8 right-8 text-white/50 hover:text-white flex items-center gap-2 font-mono"
            >
              <kbd className="px-2 py-1 bg-white/10 rounded">ESC</kbd> Close
            </button>

            <div className="w-full max-w-6xl max-h-full overflow-y-auto pointer-events-auto custom-scrollbar relative">
              {interactionTarget === "about"      && <AboutSection isActive={true} />}
              {interactionTarget === "projects"   && <ProjectsSection isActive={true} />}
              {interactionTarget === "stack"      && <TechNetwork isActive={true} />}
              {interactionTarget === "experience" && <ExperienceSection isActive={true} />}
              {interactionTarget === "contact"    && <ContactSection isActive={true} />}
              {interactionTarget === "cv"         && <CVSection isActive={true} />}
              {interactionTarget === "social"     && <SocialMediaSection isActive={true} />}
            </div>
          </div>
        )}
      </div>
    </KeyboardControls>
  );
}
