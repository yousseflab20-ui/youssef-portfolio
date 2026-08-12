import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { InteractableConfig } from "../constants/interactables";

interface InteractableObjectProps {
  config: InteractableConfig;
  setHoveredTarget: (config: InteractableConfig | null) => void;
  activeTargetId: string | null;
}

// Reusable objects (avoid GC pressure every frame)
const _ray = new THREE.Raycaster();
const _center = new THREE.Vector2(0, 0); // screen center = crosshair

// Max hitbox half-size so a couch doesn't fill the whole room
const MAX_HITBOX_HALF = 1.2;

export default function InteractableObject({
  config,
  setHoveredTarget,
  activeTargetId,
}: InteractableObjectProps) {
  const { scene, camera } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  const targetPos = useRef(new THREE.Vector3());
  const hitboxSize = useRef(new THREE.Vector3(1, 1, 1));
  const isHoveredRef = useRef(false); // use a ref, not state — avoids re-renders every frame

  // ── One-time setup: find the object position and compute a capped hitbox ──
  useEffect(() => {
    if (config.nodeName) {
      const node = scene.getObjectByName(config.nodeName);
      if (node) {
        const box = new THREE.Box3().setFromObject(node);
        if (!box.isEmpty()) {
          box.getCenter(targetPos.current); // Use geometric center, not node origin
          
          const size = new THREE.Vector3();
          box.getSize(size);

          // Cap each axis so a large couch/bookcase doesn't create a room-sized hitbox
          hitboxSize.current.set(
            Math.min(size.x * 0.5, MAX_HITBOX_HALF),
            Math.min(size.y * 0.5, MAX_HITBOX_HALF),
            Math.min(size.z * 0.5, MAX_HITBOX_HALF)
          );
        } else {
          node.getWorldPosition(targetPos.current);
        }
      }
    } else if (config.position) {
      targetPos.current.set(...config.position);
      hitboxSize.current.set(0.6, 0.6, 0.6);
    }

    // Position and scale the visible hitbox mesh
    if (meshRef.current) {
      meshRef.current.position.copy(targetPos.current);
      meshRef.current.scale.copy(hitboxSize.current).multiplyScalar(2); // full box = 2× half
    }
  }, [scene, config]);

  // ── Per-frame: pure distance + screen-center raycast ─────────────────────
  useFrame(() => {
    if (!meshRef.current) return;

    // If something else is open, clear and exit
    if (activeTargetId && activeTargetId !== config.id) {
      if (isHoveredRef.current) {
        isHoveredRef.current = false;
        setHoveredTarget(null);
      }
      return;
    }

    // 1. Distance gate — fast early exit
    const dist = camera.position.distanceTo(targetPos.current);
    if (dist > config.interactionDistance) {
      if (isHoveredRef.current) {
        isHoveredRef.current = false;
        setHoveredTarget(null);
      }
      return;
    }

    // 2. Raycast from screen center (crosshair) against THIS hitbox mesh only
    _ray.setFromCamera(_center, camera);
    const hits = _ray.intersectObject(meshRef.current, false);
    const lookingAt = hits.length > 0;

    if (lookingAt !== isHoveredRef.current) {
      isHoveredRef.current = lookingAt;
      setHoveredTarget(lookingAt ? config : null);
    }
  });

  return (
    // Visible but fully transparent — needed for raycast to work!
    // R3F raycast does NOT work on visible={false} meshes.
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  );
}
