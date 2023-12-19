import React from "react";
import Earth from "./components/Earth";
import Sun from "./components/Sun";
import { Stars } from "@react-three/drei";

const Scene = () => {
  const earthPosition = [10, 0, 0];
  const moonPosition = [13, 0, 0];

  return (
    <>
      <ambientLight intensity={0.04} />
      <pointLight color='#f6f3ea' intensity={1.2} position={[0, 0, 0]} />
      <Earth earthPosition={earthPosition} moonPosition={moonPosition} />
      <Sun position={[0, 0, 0]} />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={0.5} />
    </>
  );
};

export default Scene;
