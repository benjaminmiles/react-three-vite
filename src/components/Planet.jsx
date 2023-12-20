import React, { useRef, forwardRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import OrbitPath from "./OrbitPath";
import planetsData from "../data/planetsData";
import useStore from "../store/store";

// default values
const defaultBodyData = planetsData.test;

// scale down data for our model
const distanceScaleFactor = 0.0000001;
const sizeScaleFactor = 0.00015;
const rotationSpeedScaleFactor = 600000;
// const speedScaleFactor = 0.01;

const Planet = forwardRef(({ bodyData, textures }, ref) => {
  const { simSpeed } = useStore();
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
  const numberOfRotationsPerOrbit = rotationPeriod ? (orbitalPeriod * 24) / rotationPeriod : 0;

  const scaledOrbitalRadius = orbitalRadius * distanceScaleFactor;
  const scaledRadius = radius * sizeScaleFactor;
  const scaledOrbitalSpeed = orbitalSpeed * simSpeed;
  let rotationSpeed = rotationPeriod ? (2 * Math.PI) / (rotationPeriod * 3600) : 0;
  rotationSpeed *= rotationSpeedScaleFactor;
  // const [rotationCount, setRotationCount] = useState(0);
  // const lastRotationRef = useRef(0);
  // console.log({ name, numberOfRotationsPerOrbit });
  useFrame((state, delta) => {
    // Orbit animation
    const angle = (state.clock.getElapsedTime() * scaledOrbitalSpeed) / scaledOrbitalRadius;
    const x = scaledOrbitalRadius * Math.cos(angle);
    const z = scaledOrbitalRadius * Math.sin(angle);
    // const currentRotation = angle * numberOfRotationsPerOrbit;

    if (localRef.current) {
      localRef.current.position.set(x, 0, z);

      // Calculate rotation based on the orbital angle
      // localRef.current.rotation.y = angle * numberOfRotationsPerOrbit;
    }
    // if (name === "Moon") {
    //   // Check if a full rotation is completed
    //   if (Math.floor(currentRotation / (2 * Math.PI)) > lastRotationRef.current) {
    //     lastRotationRef.current = Math.floor(currentRotation / (2 * Math.PI));
    //     setRotationCount(lastRotationRef.current);
    //     console.log(`${name} completed rotations: ${rotationCount}`);
    //   }
    // }
  });

  return (
    <>
      <mesh ref={localRef}>
        <sphereGeometry args={[scaledRadius, 32, 32]} />
        {textures ? <meshStandardMaterial map={textures.map} /* other texture properties */ /> : <meshStandardMaterial color={color} />}
      </mesh>
      <OrbitPath origin={orbitalOrigin} radius={scaledOrbitalRadius} color={color} name={name} />
    </>
  );
});

export default Planet;
