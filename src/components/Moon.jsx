import React, { useRef, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import useStore, { usePlanetStore } from "../store/store";
import OrbitPath from "./OrbitPath";

// scale down data for our model
const distanceScaleFactor = 0.000005;
const sizeScaleFactor = 0.00015;
const rotationSpeedScaleFactor = 600000;

const Moon = forwardRef(({ bodyData, parentPosition }, ref) => {
  const { simSpeed } = useStore();
  // console.log(planetAngles);
  const localRef = ref || useRef();
  const localAngleRef = useRef(0);
  // const pathRef = useRef();

  const { name, orbitalRadius, radius, color, orbitalSpeed } = bodyData;

  // Apply scaling factors
  const scaledOrbitalRadius = orbitalRadius * distanceScaleFactor;
  const scaledRadius = radius * sizeScaleFactor;
  const scaledOrbitalSpeed = orbitalSpeed * simSpeed;

  useFrame((state, delta) => {
    localAngleRef.current += (delta * scaledOrbitalSpeed) / scaledOrbitalRadius;

    // Calculate Moon's position relative to Earth
    const moonX = parentPosition.x + scaledOrbitalRadius * Math.cos(localAngleRef.current);
    const moonZ = parentPosition.z + scaledOrbitalRadius * Math.sin(localAngleRef.current);

    if (localRef.current) {
      localRef.current.position.set(moonX, 0, moonZ);
    }

    // Set the OrbitPath's position to the Earth's position
    // if (pathRef.current) {
    //   pathRef.current.position.set(parentPosition.x, 0, parentPosition.z);
    // }
  });

  return (
    <>
      <mesh ref={localRef}>
        <sphereGeometry args={[scaledRadius, 32, 32]} />
        <meshStandardMaterial color={color} />
      </mesh>
      {/* <OrbitPath ref={pathRef} origin={parentPosition} radius={scaledOrbitalRadius} color={color} name={name} /> */}
    </>
  );
});

export default Moon;
