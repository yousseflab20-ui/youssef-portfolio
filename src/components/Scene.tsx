import { Suspense } from "react";
import { useGLTF, Sky } from "@react-three/drei";
import { Physics, RigidBody, CuboidCollider } from "@react-three/rapier";
import Player from "./Player";
import InteractableObject from "./InteractableObject";
import CameraController from "./CameraController";
import IntroCameraController from "./IntroCameraController";
import { INTERACTABLES } from "../constants/interactables";
import type { InteractableConfig } from "../constants/interactables";

const modelUrl = import.meta.env.BASE_URL + "models/modern-apartment.glb";

// Configure Draco decoder (required for Draco-compressed GLB files)
useGLTF.setDecoderPath("https://www.gstatic.com/draco/versioned/decoders/1.5.6/");

// Preload the model
useGLTF.preload(modelUrl);

interface SceneProps {
  interactionTarget: string | null;
  setInteractionTarget: (id: string | null) => void;
  setHoveredTarget: (config: InteractableConfig | null) => void;
  isCameraReturning: boolean;
  setIsCameraReturning: (val: boolean) => void;
  introStarted: boolean;
  introFinished: boolean;
  setIntroFinished: (finished: boolean) => void;
}

function ModernApartment() {
  const { scene } = useGLTF(modelUrl);
  return <primitive object={scene} />;
}

export default function Scene({ 
  interactionTarget, 
  setHoveredTarget,
  isCameraReturning,
  setIsCameraReturning,
  introStarted,
  introFinished,
  setIntroFinished,
}: SceneProps) {
  return (
    <Suspense fallback={null}>
      <Sky sunPosition={[100, 20, 100]} turbidity={0.1} rayleigh={0.5} />
      <ambientLight intensity={0.5} />
      <directionalLight castShadow position={[10, 10, 10]} intensity={1} />

      {/* Cinematic intro camera – active before the player takes over */}
      <IntroCameraController
        introStarted={introStarted}
        introFinished={introFinished}
        setIntroFinished={setIntroFinished}
      />

      {/* Portfolio interaction camera – active after intro */}
      {introFinished && (
        <CameraController 
          interactionTarget={interactionTarget} 
          isCameraReturning={isCameraReturning}
          setIsCameraReturning={setIsCameraReturning}
        />
      )}

      <Physics gravity={[0, -30, 0]}>
        {/* Invisible floor */}
        <RigidBody type="fixed">
          <CuboidCollider args={[100, 0.1, 100]} position={[0, -0.1, 0]} />
        </RigidBody>

        {/* The World */}
        <ModernApartment />

        {/* Player – locked during intro */}
        <Player 
          interactionTarget={interactionTarget} 
          isCameraReturning={isCameraReturning}
          introFinished={introFinished}
        />

        {/* Interactive spots – only raycasting after intro */}
        {introFinished && Object.values(INTERACTABLES).map((config) => (
          <InteractableObject 
            key={config.id}
            config={config}
            setHoveredTarget={setHoveredTarget}
            activeTargetId={interactionTarget}
          />
        ))}
      </Physics>
    </Suspense>
  );
}
