import { useRef, useEffect } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import * as THREE from "three";
import type { InteractableConfig } from "../constants/interactables";

interface InteractableObjectProps {
  config: InteractableConfig;
  setHoveredTarget: (config: InteractableConfig | null) => void;
  activeTargetId: string | null;
}

// Reusable objects — avoid GC every frame
const _ray = new THREE.Raycaster();
const _center = new THREE.Vector2(0, 0); // screen centre = crosshair

// Max hitbox half-size so a couch doesn't fill the whole room
const MAX_HITBOX_HALF = 1.4;

export default function InteractableObject({
  config,
  setHoveredTarget,
  activeTargetId,
}: InteractableObjectProps) {
  const { scene, camera } = useThree();
  const meshRef = useRef<THREE.Mesh>(null);
  const targetPos = useRef(new THREE.Vector3());
  const hitboxSize = useRef(new THREE.Vector3(1, 1, 1));
  const isHoveredRef = useRef(false);
  const isReady = useRef(false); // true once we have a valid position

  // ── One-time setup: resolve position from GLB node or fallback ─────────────
  useEffect(() => {
    isReady.current = false;

    // ── PRIORITY 1: find the named node in the scene ──────────────────────────
    if (config.nodeName) {
      const node = scene.getObjectByName(config.nodeName);
      if (node) {
        const box = new THREE.Box3().setFromObject(node);

        if (!box.isEmpty()) {
          // Use the geometric centre of the bounding box (most accurate)
          box.getCenter(targetPos.current);

          const size = new THREE.Vector3();
          box.getSize(size);

          // Cap each axis — large objects shouldn't fill the whole room
          hitboxSize.current.set(
            Math.min(size.x * 0.5, MAX_HITBOX_HALF),
            Math.min(size.y * 0.5, MAX_HITBOX_HALF),
            Math.min(size.z * 0.5, MAX_HITBOX_HALF)
          );
        } else {
          // Empty box — fall back to world origin of the node
          node.getWorldPosition(targetPos.current);
          hitboxSize.current.set(0.8, 0.8, 0.8);
        }

        isReady.current = true;
        console.info(
          `[InteractableObject] ✅ "${config.id}" attached to node "${config.nodeName}" ` +
          `@ [${targetPos.current.x.toFixed(2)}, ${targetPos.current.y.toFixed(2)}, ${targetPos.current.z.toFixed(2)}]`
        );
      } else {
        // Node name not found — likely renamed by gltf-transform join/flatten
        console.warn(
          `[InteractableObject] ❌ Node "${config.nodeName}" not found for "${config.id}". ` +
          `Check SceneDebugger output for the actual node names in the GLB.`
        );
      }
    }

    // ── PRIORITY 2: hardcoded position fallback ───────────────────────────────
    if (!isReady.current && config.position) {
      targetPos.current.set(...config.position);
      hitboxSize.current.set(0.8, 0.8, 0.8);
      isReady.current = true;
      console.warn(
        `[InteractableObject] ⚠️ "${config.id}" using hardcoded fallback position ` +
        `[${config.position.join(", ")}]. Node "${config.nodeName}" was not found.`
      );
    }

    if (!isReady.current) {
      console.error(
        `[InteractableObject] 🚫 "${config.id}" has neither a valid node nor a fallback position. It will be invisible.`
      );
    }

    // Sync the invisible hitbox mesh
    if (meshRef.current && isReady.current) {
      meshRef.current.position.copy(targetPos.current);
      meshRef.current.scale.copy(hitboxSize.current).multiplyScalar(2); // full size = 2 × half
    }
  }, [scene, config]);

  // ── Per-frame: distance gate + screen-centre raycast ──────────────────────
  useFrame(() => {
    if (!meshRef.current || !isReady.current) return;

    // If another item is open, clear this one and exit
    if (activeTargetId && activeTargetId !== config.id) {
      if (isHoveredRef.current) {
        isHoveredRef.current = false;
        setHoveredTarget(null);
      }
      return;
    }

    // 1. Distance gate — cheap early exit
    const dist = camera.position.distanceTo(targetPos.current);
    if (dist > config.interactionDistance) {
      if (isHoveredRef.current) {
        isHoveredRef.current = false;
        setHoveredTarget(null);
      }
      return;
    }

    // 2. Raycast from screen centre (crosshair) against THIS hitbox only
    _ray.setFromCamera(_center, camera);
    const hits = _ray.intersectObject(meshRef.current, false);
    const lookingAt = hits.length > 0;

    if (lookingAt !== isHoveredRef.current) {
      isHoveredRef.current = lookingAt;
      setHoveredTarget(lookingAt ? config : null);
    }
  });

  return (
    // Fully transparent but still raycasted by R3F
    // Note: visible={false} would skip raycasting — keep opacity=0 instead
    <mesh ref={meshRef}>
      <boxGeometry args={[1, 1, 1]} />
      <meshBasicMaterial transparent opacity={0} depthWrite={false} />
    </mesh>
  );
}
