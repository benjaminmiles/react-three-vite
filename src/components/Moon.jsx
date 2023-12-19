import { useTexture } from "@react-three/drei";
import React from "react";

const Moon = ({ moonPosition }) => {
  const moonTexture = useTexture("/assets/moon/2k_moon.jpg");

  return (
    <mesh position={moonPosition}>
      <sphereGeometry args={[0.27, 32, 32]} />
      <meshStandardMaterial map={moonTexture} />
    </mesh>
  );
};

export default Moon;
