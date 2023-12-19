import React, { useRef, useState } from "react";
import { useTexture } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import Moon from "./Moon";
import * as THREE from "three";

const Earth = ({ earthPosition }) => {
  const earthRef = useRef();
  const cloudsRef = useRef();
  const moonRef = useRef();

  const moonOrbitRadius = 2; // Distance from the Earth
  const moonOrbitSpeed = 0.2;
  let moonAngle = 0;

  useFrame((state, delta) => {
    earthRef.current.rotation.y += 0.04 * delta;
    cloudsRef.current.rotation.y += 0.05 * delta;

    // Update the moons posotion
    moonAngle -= moonOrbitSpeed * delta;
    const moonX = earthPosition[0] + moonOrbitRadius * Math.cos(moonAngle);
    const moonZ = earthPosition[2] + moonOrbitRadius * Math.sin(moonAngle);

    if (moonRef.current) {
      moonRef.current.position.set(moonX, earthPosition[1], moonZ);
      moonRef.current.rotation.y = moonAngle;
    }
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
