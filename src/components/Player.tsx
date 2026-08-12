import { useEffect, useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { PointerLockControls, useKeyboardControls } from "@react-three/drei";
import * as THREE from "three";
import { RigidBody, CapsuleCollider } from "@react-three/rapier";

const SPEED = 5;
const direction = new THREE.Vector3();
const frontVector = new THREE.Vector3();
const sideVector = new THREE.Vector3();

// Inside spawn: must match IntroCameraController's insidePos
const SPAWN_POS: [number, number, number] = [0, 2, 0];

interface PlayerProps {
  interactionTarget: string | null;
  isCameraReturning: boolean;
  introFinished: boolean;
}

export default function Player({ interactionTarget, isCameraReturning, introFinished }: PlayerProps) {
  const rigidBody = useRef<any>(null);
  const { camera } = useThree();
  const [, get] = useKeyboardControls();
  const controlsRef = useRef<any>(null);

  // Locked when intro is running, interacting with UI, or camera is returning
  const shouldDisableMovement = !introFinished || interactionTarget !== null || isCameraReturning;

  // Lock pointer when clicking — only after intro is done
  useEffect(() => {
    const handleMouseClick = () => {
      if (!shouldDisableMovement && controlsRef.current) {
        controlsRef.current.lock();
      }
    };
    document.addEventListener("click", handleMouseClick);
    return () => document.removeEventListener("click", handleMouseClick);
  }, [shouldDisableMovement]);

  // Unlock PointerLock when UI opens or intro running
  useEffect(() => {
    if (shouldDisableMovement) {
      if (controlsRef.current) {
        controlsRef.current.unlock();
      }
      // Force fallback
      if (document.pointerLockElement) {
        document.exitPointerLock();
      }
    }
  }, [shouldDisableMovement]);

  // Auto-relock after camera return finishes
  useEffect(() => {
    if (!shouldDisableMovement && controlsRef.current && !controlsRef.current.isLocked) {
      setTimeout(() => {
        controlsRef.current?.lock();
      }, 100);
    }
  }, [shouldDisableMovement]);

  useFrame(() => {
    if (!rigidBody.current) return;

    if (!shouldDisableMovement && controlsRef.current?.isLocked) {
      const { forward, backward, left, right } = get();

      frontVector.set(0, 0, Number(backward) - Number(forward));
      sideVector.set(Number(left) - Number(right), 0, 0);

      direction
        .subVectors(frontVector, sideVector)
        .normalize()
        .multiplyScalar(SPEED)
        .applyEuler(camera.rotation);

      const vel = rigidBody.current.linvel();
      rigidBody.current.setLinvel({ x: direction.x, y: vel.y, z: direction.z }, true);
    } else {
      // Stop all horizontal movement
      const vel = rigidBody.current.linvel();
      rigidBody.current.setLinvel({ x: 0, y: vel.y, z: 0 }, true);
    }

    // Sync camera to capsule — only when player is active (not during intro)
    if (!shouldDisableMovement) {
      const t = rigidBody.current.translation();
      camera.position.set(t.x, t.y + 1.2, t.z);
    }
  });

  return (
    <>
      <PointerLockControls ref={controlsRef} />
      <RigidBody
        ref={rigidBody}
        colliders={false}
        mass={1}
        type="dynamic"
        position={SPAWN_POS}
        enabledRotations={[false, false, false]}
      >
        <CapsuleCollider args={[0.75, 0.5]} />
      </RigidBody>
    </>
  );
}
