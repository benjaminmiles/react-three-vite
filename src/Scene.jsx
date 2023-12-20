import React, { useRef } from "react";
import Sun from "./components/Sun";
import { Stars, useTexture } from "@react-three/drei";
import useStore from "./store/store";
import Planet from "./components/Planet";
import planetsData from "./data/planetsData";

const Scene = () => {
  const { sunSettings } = useStore();
  // const earthTextures = useTexture({
  //   map: "/assets/earth/2k_earth_daymap.jpg",
  //   normal: "/assets/earth/2k_earth_normal_map.png",
  //   specular: "/assets/earth/2k_earth_specular_map.png",
  // });
  // const jupiterTextures = useTexture({
  //   map: "/assets/jupiter/jupiter.png",
  // });
  // const venusTextures = useTexture({
  //   map: "/assets/venus/venus.png",
  // });

  return (
    <>
      <ambientLight intensity={0.2} />
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
      {/* <Planet bodyData={planetsData.Pluto} /> */}
      <Sun position={sunSettings.position} />
      <Stars radius={500} count={5000} factor={20} saturation={0} fade speed={0.5} />
    </>
  );
};

export default Scene;
