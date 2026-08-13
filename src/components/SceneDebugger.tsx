import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";

/**
 * DEV-ONLY — logs every named object in the scene with its world position.
 * Remove from Scene.tsx before deploying to production.
 *
 * Usage: add <SceneDebugger /> anywhere inside <Canvas> to activate.
 */
export default function SceneDebugger() {
  const { scene, camera } = useThree();

  useEffect(() => {
    if (import.meta.env.PROD) return; // silent in production

    const pos = new THREE.Vector3();
    const results: { name: string; type: string; position: string }[] = [];

    scene.traverse((obj) => {
      if (!obj.name || obj.name.trim() === "") return;

      obj.getWorldPosition(pos);
      results.push({
        name: obj.name,
        type: obj.type,
        position: `[${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}]`,
      });
    });

    // Sort alphabetically so it's easy to scan
    results.sort((a, b) => a.name.localeCompare(b.name));

    console.group("🏠 [SceneDebugger] All named scene objects");
    const textList = results.map(r => `- ${r.name} (${r.type}) @ ${r.position}`).join("\n");
    console.log(textList || "No named objects found.");
    console.groupEnd();

    // Also check specifically for our target objects
    const targets = [
      "MacBook", "BookCase", "StandSpeaker", "CouchSet",
      "Plants", "Desk", "iMac", "EnteranceDoor", "Kitchen",
    ];

    console.group("🎯 [SceneDebugger] Target object lookup");
    targets.forEach((name) => {
      const node = scene.getObjectByName(name);
      if (node) {
        node.getWorldPosition(pos);
        console.log(
          `✅ "${name}" found — world pos: [${pos.x.toFixed(2)}, ${pos.y.toFixed(2)}, ${pos.z.toFixed(2)}]`
        );
      } else {
        console.warn(`❌ "${name}" NOT found in scene`);
      }
    });
    console.groupEnd();

    // Add keydown listener to log exactly where the user is looking
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key.toLowerCase() === 'o') {
        const raycaster = new THREE.Raycaster();
        const center = new THREE.Vector2(0, 0); // Center of the screen
        
        raycaster.setFromCamera(center, camera);
        // Intersect against all children in the scene (recursively)
        const intersects = raycaster.intersectObjects(scene.children, true);
        
        // Filter out invisible objects like hitboxes
        const validHits = intersects.filter(hit => hit.object.visible && hit.object.type === 'Mesh');

        if (validHits.length > 0) {
          const point = validHits[0].point;
          console.log(
            `🎯 [CROSSHAIR HIT] => [${point.x.toFixed(2)}, ${point.y.toFixed(2)}, ${point.z.toFixed(2)}]`
          );
        } else {
          console.log(`⚠️ [CROSSHAIR] No object found in center of screen! (Standing at [${camera.position.x.toFixed(2)}, ${camera.position.y.toFixed(2)}, ${camera.position.z.toFixed(2)}])`);
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [scene, camera]);

  return null;
}
