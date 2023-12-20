import React, { useRef } from "react";
import Earth from "./components/Earth";
import Sun from "./components/Sun";
import { Stars } from "@react-three/drei";
import useStore from "./store/store";
import Planet from "./components/Planet";
import planetsData from "./data/planetsData";

const Scene = () => {
  const { sunSettings } = useStore();

  return (
    <>
      <ambientLight intensity={1} />
      <pointLight color='#f6f3ea' intensity={1.2} position={[0, 0, 0]} />
      <Planet bodyData={planetsData.Earth} />
      <Planet bodyData={planetsData.Moon} />
      <Planet bodyData={planetsData.Mars} />
      <Planet bodyData={planetsData.Venus} />
      <Planet bodyData={planetsData.Mercury} />
      <Planet bodyData={planetsData.Jupiter} />
      <Planet bodyData={planetsData.Saturn} />
      <Planet bodyData={planetsData.Uranus} />
      <Planet bodyData={planetsData.Neptune} />
      <Planet bodyData={planetsData.Pluto} />
      <Sun position={sunSettings.position} />
      <Stars radius={500} count={5000} factor={20} saturation={0} fade speed={0.5} />
    </>
  );
};

export default Scene;
