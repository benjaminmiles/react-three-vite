import { useEffect, useRef } from "react";
import { OrbitControls } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import useStore from "../store/store"; // Adjust the import path as needed

const CameraControls = () => {
  const { camera, gl } = useThree();
  const orbitControlsRef = useRef();

  const { setOrbitControls, selectedPlanet, planetPositions } = useStore();

  useEffect(() => {
    setOrbitControls(orbitControlsRef.current);
  }, []);

  // selected planets are automatically focused
  useEffect(() => {
    if (selectedPlanet && planetPositions[selectedPlanet]) {
      useStore.getState().setCameraTarget(planetPositions[selectedPlanet]);
    }
  }, [selectedPlanet, planetPositions]);

  return (
    <OrbitControls
      zoomSpeed={0.1}
      near={0.1}
      far={2000}
      minDistance={10}
      maxDistance={1000}
      ref={orbitControlsRef}
      args={[camera, gl.domElement]}
    />
  );
};

export default CameraControls;
