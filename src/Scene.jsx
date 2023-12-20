import React, { useRef } from "react";
import Earth from "./components/Earth";
import Sun from "./components/Sun";
import { Stars } from "@react-three/drei";
import OrbitPath from "./components/OrbitPath";
import useStore from "./store/store";
import Planet from "./components/Planet";

const Scene = () => {
  const { sunSettings, moonSettings, earthSettings } = useStore();

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color='#f6f3ea' intensity={1.2} position={[0, 0, 0]} />
      <OrbitPath origin={sunSettings.position} radius={earthSettings.radius} color='dodgerblue' name='earth' />
      {/* <Earth /> */}
      <Planet />
      <Sun position={sunSettings.position} />
      <Stars radius={300} count={500} factor={20} saturation={0} fade speed={0.5} />
    </>
  );
};

export default Scene;
