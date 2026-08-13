import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";
import { INTERACTABLES } from "../constants/interactables";

interface CameraControllerProps {
  interactionTarget: string | null;
  isCameraReturning: boolean;
  setIsCameraReturning: (val: boolean) => void;
}

export default function CameraController({
  interactionTarget,
  isCameraReturning,
  setIsCameraReturning,
}: CameraControllerProps) {
  const { camera, scene } = useThree();
  const savedPos = useRef(new THREE.Vector3());
  const savedQuat = useRef(new THREE.Quaternion());

  useEffect(() => {
    // ── OPEN: move camera toward the interacted object ─────────────────────
    if (interactionTarget) {
      // Save player camera state before moving
      savedPos.current.copy(camera.position);
      savedQuat.current.copy(camera.quaternion);

      const config = INTERACTABLES[interactionTarget];
      if (!config) return;

      // Resolve the target world position from the real GLB node
      const focusPoint = new THREE.Vector3();
      let resolved = false;

      if (config.nodeName) {
        const node = scene.getObjectByName(config.nodeName);
        if (node) {
          const box = new THREE.Box3().setFromObject(node);
          if (!box.isEmpty()) {
            box.getCenter(focusPoint);
          } else {
            node.getWorldPosition(focusPoint);
          }
          resolved = true;
        }
      }

      // Fallback to hardcoded position if node not found
      if (!resolved && config.position) {
        focusPoint.set(...config.position);
        resolved = true;
      }

      if (!resolved) return;

      // Calculate camera orbit position:
      // Step back from the object in the direction the player came from, at eye height
      const dirFromObject = new THREE.Vector3()
        .subVectors(camera.position, focusPoint)
        .normalize();

      const VIEW_DISTANCE = 1.8;
      const orbitPos = focusPoint
        .clone()
        .add(dirFromObject.multiplyScalar(VIEW_DISTANCE));

      // Keep camera roughly at eye height relative to the object
      orbitPos.y = focusPoint.y + 0.4;

      // Smoothly fly the camera to the orbit position while looking at the object
      gsap.killTweensOf(camera.position);
      gsap.to(camera.position, {
        x: orbitPos.x,
        y: orbitPos.y,
        z: orbitPos.z,
        duration: 1.0,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.lookAt(focusPoint);
        },
      });

      return;
    }

    // ── CLOSE: smoothly return to saved player position / rotation ─────────
    if (isCameraReturning) {
      const startQuat = camera.quaternion.clone();
      const dummy = { t: 0 };

      gsap.killTweensOf(camera.position);
      gsap.to(camera.position, {
        x: savedPos.current.x,
        y: savedPos.current.y,
        z: savedPos.current.z,
        duration: 1.0,
        ease: "power2.inOut",
      });

      gsap.to(dummy, {
        t: 1,
        duration: 1.0,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.quaternion.slerpQuaternions(
            startQuat,
            savedQuat.current,
            dummy.t
          );
        },
        onComplete: () => {
          setIsCameraReturning(false);
        },
      });
    }
  }, [interactionTarget, isCameraReturning, camera, scene, setIsCameraReturning]);

  return null;
}
