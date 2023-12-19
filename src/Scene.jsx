import React from "react";
import Earth from "./components/Earth";
import Sun from "./components/Sun";
import { Stars } from "@react-three/drei";
// import { useThree } from "@react-three/fiber";

const Scene = () => {
  const earthPosition = [10, 0, 0];
  const moonPosition = [13, 0, 0];
  //   const { camera } = useThree();

  return (
    <>
      <ambientLight intensity={1} />
      {/* <pointLight color='#f6f3ea' intensity={1.2} position={[0, 0, 0]} /> */}
      <Earth earthPosition={earthPosition} moonPosition={moonPosition} />
      <Sun position={[0, 0, 0]} />
      <Stars radius={400} depth={60} count={1000} factor={20} saturation={0} fade speed={1} />
    </>
  );
};

export default Scene;
