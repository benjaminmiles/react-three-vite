import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import * as THREE from "three";
import useStore from "../store/store";

const CameraController = () => {
  const { camera } = useThree();
  const store = useStore();
  const targetRef = store.cameraTarget; // Assuming this is a ref to the target object
  const cameraOffset = new THREE.Vector3(0, 5, -10); // Adjust as needed

  useFrame(() => {
    if (targetRef.current) {
      // Calculate the desired camera position relative to the target
      const desiredPosition = targetRef.current.position.clone().add(cameraOffset);
      camera.position.lerp(desiredPosition, 0.1); // Smooth transition to the desired position
      camera.lookAt(targetRef.current.position);
    }
  });

  return null;
};

export default CameraController;
