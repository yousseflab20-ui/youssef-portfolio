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

export default function CameraController({ interactionTarget, isCameraReturning, setIsCameraReturning }: CameraControllerProps) {
  const { camera, scene } = useThree();
  const initialCameraPos = useRef(new THREE.Vector3());
  const initialCameraQuat = useRef(new THREE.Quaternion());
  const targetPos = useRef(new THREE.Vector3());

  useEffect(() => {
    if (interactionTarget) {
      // Save the current player camera position and rotation before moving
      initialCameraPos.current.copy(camera.position);
      initialCameraQuat.current.copy(camera.quaternion);

      const config = INTERACTABLES[interactionTarget];
      if (!config) return;

      // Find where we should look at
      if (config.nodeName) {
        const node = scene.getObjectByName(config.nodeName);
        if (node) {
          node.getWorldPosition(targetPos.current);
        }
      } else if (config.position) {
        targetPos.current.set(...config.position);
      }

      // Calculate a spot slightly in front of and above the object to view it
      // This is a simple offset. For a robust system, you might want to calculate the direction from the player to the object.
      const offsetPos = targetPos.current.clone();
      
      // We'll calculate a vector from the object to the player, normalize it, and step back a bit
      const dirToPlayer = new THREE.Vector3().subVectors(camera.position, targetPos.current).normalize();
      
      // Distance to stay away from the object
      const viewDistance = 1.5; 
      offsetPos.add(dirToPlayer.multiplyScalar(viewDistance));
      offsetPos.y = targetPos.current.y + 0.5; // Look slightly down at it

      // Smoothly move the camera
      gsap.to(camera.position, {
        x: offsetPos.x,
        y: offsetPos.y,
        z: offsetPos.z,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          // Keep looking at the target while moving
          camera.lookAt(targetPos.current);
        }
      });
      
    } else if (isCameraReturning) {
      // We need to return to the player's saved position and rotation
      
      // We will interpolate quaternion for smooth rotation
      const dummyObj = { t: 0 };
      const startQuat = camera.quaternion.clone();

      gsap.to(camera.position, {
        x: initialCameraPos.current.x,
        y: initialCameraPos.current.y,
        z: initialCameraPos.current.z,
        duration: 1,
        ease: "power2.inOut",
      });

      gsap.to(dummyObj, {
        t: 1,
        duration: 1,
        ease: "power2.inOut",
        onUpdate: () => {
          camera.quaternion.slerpQuaternions(startQuat, initialCameraQuat.current, dummyObj.t);
        },
        onComplete: () => {
          setIsCameraReturning(false); // Done returning! Player can move again.
        }
      });
    }
  }, [interactionTarget, isCameraReturning, camera, scene, setIsCameraReturning]);

  return null;
}
