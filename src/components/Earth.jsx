import React, { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import Moon from "./Moon";
import useStore from "../store/store";
import OrbitPath from "./OrbitPath";

const Earth = () => {
  const store = useStore();
  const earthRef = useRef();
  const moonRef = useRef();
  const [moonOrbitPathOrigin, setMoonOrbitPathOrigin] = useState(store.earthSettings.position);

  useFrame((state, delta) => {
    const earthSettings = store.earthSettings;
    const moonSettings = store.moonSettings;

    // Update Earth orbit
    const newEarthAngle = earthSettings.angle + earthSettings.speed * delta;
    const earthX = earthSettings.radius * Math.cos(newEarthAngle);
    const earthZ = earthSettings.radius * Math.sin(newEarthAngle);
    earthRef.current.position.set(earthX, 0, earthZ);
    store.setEarthOrbit({ ...earthSettings, angle: newEarthAngle });

    // Update Moon orbit
    setMoonOrbitPathOrigin(earthRef.current.position.clone());
    const newMoonAngle = moonSettings.angle + moonSettings.speed * delta;
    const moonX = earthX + moonSettings.radius * Math.cos(newMoonAngle);
    const moonZ = earthZ + moonSettings.radius * Math.sin(newMoonAngle);

    if (moonRef.current) {
      moonRef.current.position.set(moonX, 0, moonZ);
      moonRef.current.rotation.y = newMoonAngle;
    }
    store.setMoonOrbit({ ...moonSettings, angle: newMoonAngle });
  });

  const EarthSphere = () => {
    return (
      <mesh ref={earthRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial color='dodgerblue' roughness={0.7} metalness={0.5} />
      </mesh>
    );
  };

  return (
    <>
      <OrbitPath origin={moonOrbitPathOrigin} radius={store.moonSettings.radius} color='darkgray' name='moon' />
      <EarthSphere />
      <Moon ref={moonRef} />
    </>
  );
};

export default Earth;
