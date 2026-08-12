import { useEffect, useState } from "react";
import { useProgress } from "@react-three/drei";

export default function LoadingScreen() {
  const [dots, setDots] = useState("");
  const { progress, active, loaded, total } = useProgress();

  // Animated dots
  useEffect(() => {
    const id = setInterval(() => {
      setDots(d => (d.length >= 3 ? "" : d + "."));
    }, 450);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="fixed inset-0 z-[200] bg-black flex flex-col items-center justify-center gap-8">
      {/* Logo */}
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Youssef<span className="text-violet-500">.dev</span>
        </h1>
        <p className="text-gray-500 font-mono text-sm tracking-widest uppercase mt-4">
          Loading Environment{dots}
        </p>
        <p className="text-violet-400 font-mono text-xs tracking-widest mt-1">
          {loaded > 0 ? `${Math.round(progress)}%` : "Connecting..."}
        </p>
      </div>

      {/* Progress bar */}
      <div className="w-64 md:w-80 h-[2px] bg-white/10 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-violet-600 to-fuchsia-500 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Subtle hint */}
      <p className="text-gray-700 font-mono text-xs absolute bottom-12 tracking-widest">
        Don't browse my portfolio. Walk into it.
      </p>
    </div>
  );
}
