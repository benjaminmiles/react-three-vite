import React, { useRef, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import OrbitPath from "./OrbitPath";
import planetsData from "../data/planetsData";

// default values
const defaultBodyData = planetsData.test;

// scale down data for our model
const distanceScaleFactor = 0.0000001;
const sizeScaleFactor = 0.001;
const speedScaleFactor = 0.01;

const Planet = forwardRef(({ bodyData }, ref) => {
  console.log(defaultBodyData);
  const localRef = ref || useRef();
  const mergedData = { ...defaultBodyData, ...bodyData };
  const {
    name,
    mass,
    radius,
    orbitalOrigin,
    orbitalRadius,
    orbitalSpeed,
    orbitalPeriod,
    orbitalInclination,
    axialTilt,
    rotationPeriod,
    surfaceTemp,
    color,
    gravity,
  } = mergedData;

  const scaledOrbitalRadius = orbitalRadius * distanceScaleFactor;
  const scaledRadius = radius * sizeScaleFactor;
  const scaledOrbitalSpeed = orbitalSpeed * speedScaleFactor;

  useFrame((state, delta) => {
    // Simplified orbital mechanics
    const angle = (state.clock.getElapsedTime() * scaledOrbitalSpeed) / scaledOrbitalRadius;
    const x = scaledOrbitalRadius * Math.cos(angle);
    const z = scaledOrbitalRadius * Math.sin(angle);

    if (localRef.current) {
      localRef.current.position.set(x, 0, z);
      // Add rotation logic here if needed
    }
  });
  console.log({ scaledRadius });
  console.log(localRef.current);
  return (
    <>
      <mesh ref={localRef}>
        <sphereGeometry args={[2, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <OrbitPath origin={orbitalOrigin} radius={scaledOrbitalRadius} color='silver' />
    </>
  );
});

export default Planet;
