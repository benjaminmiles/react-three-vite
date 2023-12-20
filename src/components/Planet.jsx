import React, { useRef, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import OrbitPath from "./OrbitPath";
import planetsData from "../data/planetsData";
import useStore from "../store/store";

// default values
const defaultBodyData = planetsData.test;

// scale down data for our model
const distanceScaleFactor = 0.0000001;
const sizeScaleFactor = 0.00015;
const speedScaleFactor = 0.01;

const Planet = forwardRef(({ bodyData }, ref) => {
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
    // Orbit animation
    const angle = (state.clock.getElapsedTime() * scaledOrbitalSpeed) / scaledOrbitalRadius;
    const x = scaledOrbitalRadius * Math.cos(angle);
    const z = scaledOrbitalRadius * Math.sin(angle);

    if (localRef.current) {
      localRef.current.position.set(x, 0, z);
      // add rotation later
    }
  });

  return (
    <>
      <mesh ref={localRef}>
        <sphereGeometry args={[scaledRadius, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      <OrbitPath origin={orbitalOrigin} radius={scaledOrbitalRadius} color={color} name={name} />
    </>
  );
});

export default Planet;
