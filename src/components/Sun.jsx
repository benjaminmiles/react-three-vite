import { useTexture } from "@react-three/drei";
import React from "react";

const Sun = props => {
  const sunTexture = useTexture("/assets/sun/2k_sun.jpg");

  return (
    <mesh {...props}>
      <sphereGeometry args={[3, 32, 32]} />
      <meshBasicMaterial map={sunTexture} />
    </mesh>
  );
};

export default Sun;
