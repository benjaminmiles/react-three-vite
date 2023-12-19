import React, { useEffect, useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Moon from "./Moon";
import useStore from "../store/store";

const Earth = ({ earthPosition }) => {
  const { setEarthOrbitSettings, setMoonOrbitSettings } = useStore();

  const earthRef = useRef();
  const cloudsRef = useRef();
  const moonRef = useRef();
  const earthOrbitSettingsRef = useRef(useStore.getState().earthOrbitSettings);
  const moonOrbitSettingsRef = useRef(useStore.getState().moonOrbitSettings);

  // Subscribe to store updates
  useEffect(() => {
    const unsubscribeEarth = useStore.subscribe(
      state => (earthOrbitSettingsRef.current = state.earthOrbitSettings),
      state => state.earthOrbitSettings
    );

    const unsubscribeMoon = useStore.subscribe(
      state => (moonOrbitSettingsRef.current = state.moonOrbitSettings),
      state => state.moonOrbitSettings
    );

    return () => {
      unsubscribeEarth();
      unsubscribeMoon();
    };
  }, []);

  useFrame((state, delta) => {
    // Update Earth's orbit
    const earthSettings = earthOrbitSettingsRef.current;
    const newEarthAngle = earthSettings.angle + earthSettings.speed * delta;
    const earthX = earthSettings.radius * Math.cos(newEarthAngle);
    const earthZ = earthSettings.radius * Math.sin(newEarthAngle);
    earthRef.current.position.set(earthX, 0, earthZ);
    cloudsRef.current.position.set(earthX, 0, earthZ);
    setEarthOrbitSettings({ ...earthSettings, angle: newEarthAngle });

    // Update Moon's orbit
    const moonSettings = moonOrbitSettingsRef.current;
    const newMoonAngle = moonSettings.angle + moonSettings.speed * delta;
    const moonX = earthX + moonSettings.radius * Math.cos(newMoonAngle);
    const moonZ = earthZ + moonSettings.radius * Math.sin(newMoonAngle);

    if (moonRef.current) {
      moonRef.current.position.set(moonX, 0, moonZ);
      moonRef.current.rotation.y = newMoonAngle;
    }
    setMoonOrbitSettings({ ...moonSettings, angle: newMoonAngle });
  });

  const EarthSphere = () => {
    const [earthTexture, normalTexture, specularTexture] = useTexture([
      "/assets/earth/2k_earth_daymap.jpg",
      "/assets/earth/2k_earth_normal_map.png",
      "/assets/earth/2k_earth_specular_map.png",
    ]);

    return (
      <mesh ref={earthRef} position={earthPosition}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshPhongMaterial metalness={specularTexture} />
        <meshStandardMaterial
          map={earthTexture}
          normalMap={normalTexture}
          clearcoat={1}
          clearcoatRoughness={0}
          roughness={0.7}
          metalness={0.4}
        />
      </mesh>
    );
  };

  const Clouds = () => {
    const cloudsTexture = useTexture("/assets/earth/2k_earth_clouds.jpg");

    return (
      <mesh ref={cloudsRef} position={earthPosition}>
        <sphereGeometry args={[1.01, 32, 32]} />
        <meshPhongMaterial map={cloudsTexture} opacity={0.3} transparent={true} depthWrite={false} />
      </mesh>
    );
  };

  return (
    <>
      <EarthSphere />
      <Clouds />
      <Moon ref={moonRef} />
    </>
  );
};

export default Earth;
