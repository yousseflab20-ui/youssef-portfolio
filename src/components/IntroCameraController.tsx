import { useEffect, useRef } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import gsap from "gsap";

// These positions are computed from the GLB's node matrices.
// The EnteranceDoor node's world position is approximately [13.07, 4.36, -1.68].
// All furniture is clustered near the origin (X: -5 to 6, Y: 0-2, Z: -2 to 0).
// 
//   OUTSIDE: Camera behind the door from the outside, looking in.
//   APPROACH: Moves to just outside the door.
//   INSIDE: Player's starting exploration point.

const OUTSIDE_POS  = new THREE.Vector3(13.07, 6.5, 12.0);
const APPROACH_POS = new THREE.Vector3(13.07, 4.8, 0.5);
const INSIDE_POS   = new THREE.Vector3(4.0, 1.6, -0.5); // Just past the door, inside
const PLAYER_POS   = new THREE.Vector3(0.0, 1.5, 0.0);  // Final free-explore position

interface IntroCameraControllerProps {
  introStarted: boolean;
  introFinished: boolean;
  setIntroFinished: (v: boolean) => void;
}

export default function IntroCameraController({
  introStarted,
  introFinished,
  setIntroFinished,
}: IntroCameraControllerProps) {
  const { camera, scene } = useThree();
  const tlRef = useRef<gsap.core.Timeline | null>(null);
  const initRef = useRef(false);

  // ── Set up initial camera position (exterior) ─────────────────────────────
  useEffect(() => {
    if (introFinished) return; // Skip was clicked, player controls take over
    if (initRef.current) return;
    initRef.current = true;

    camera.position.copy(OUTSIDE_POS);
    camera.lookAt(13.07, 4.36, -1.68); // Look at door
  }, [camera, introFinished]);

  // ── Handle Skip: instantly warp to player spawn ────────────────────────────
  useEffect(() => {
    if (introFinished && !introStarted) {
      // User clicked Skip before animation started
      camera.position.copy(PLAYER_POS);
      camera.lookAt(0, 1.5, -5); // Look into the room
    }
  }, [introFinished, introStarted, camera]);

  // ── Trigger the cinematic entrance sequence ───────────────────────────────
  useEffect(() => {
    if (!introStarted || introFinished) return;
    if (tlRef.current) return; // Already running

    const doorNode = scene.getObjectByName("EnteranceDoor");
    const tl = gsap.timeline({
      onComplete: () => {
        setIntroFinished(true);
      },
    });
    tlRef.current = tl;

    // ── Phase 1: Drift forward from outside toward the door ──────────────────
    tl.to(camera.position, {
      x: APPROACH_POS.x,
      y: APPROACH_POS.y,
      z: APPROACH_POS.z,
      duration: 3.5,
      ease: "power2.inOut",
    });

    // ── Phase 2: Try to open the door naturally ───────────────────────────────
    // The EnteranceDoor pivot may not be at the hinge. We attempt a small rotation.
    // If it looks bad visually, the user can disable this block — the camera flies
    // through anyway, making it feel cinematic regardless.
    if (doorNode) {
      tl.to(
        doorNode.rotation,
        {
          y: doorNode.rotation.y - Math.PI * 0.4, // 72° swing open
          duration: 1.8,
          ease: "power1.inOut",
        },
        "-=1.5" // Start 1.5s before camera arrives
      );
    }

    // ── Phase 3: Glide through the doorway, into the house ───────────────────
    tl.to(camera.position, {
      x: INSIDE_POS.x,
      y: INSIDE_POS.y,
      z: INSIDE_POS.z,
      duration: 2.2,
      ease: "power2.inOut",
    });

    // ── Phase 4: Settle at the player's exploration start point ──────────────
    tl.to(camera.position, {
      x: PLAYER_POS.x,
      y: PLAYER_POS.y,
      z: PLAYER_POS.z,
      duration: 1.5,
      ease: "power2.out",
    });

    // Rotate camera to face into the room while settling
    const lookTarget = new THREE.Vector3(0, 1.5, -5);
    const dummy = camera.clone();
    dummy.position.copy(PLAYER_POS);
    dummy.lookAt(lookTarget);

    tl.to(
      camera.quaternion,
      {
        x: dummy.quaternion.x,
        y: dummy.quaternion.y,
        z: dummy.quaternion.z,
        w: dummy.quaternion.w,
        duration: 1.5,
        ease: "power2.out",
      },
      "<" // Parallel with last position tween
    );

    return () => {
      tl.kill();
      tlRef.current = null;
    };
  }, [introStarted, introFinished, camera, scene, setIntroFinished]);

  return null;
}
