import React, { useRef, forwardRef, useState } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import OrbitPath from "./OrbitPath";
import planetsData from "../data/planetsData";
import useStore, { usePlanetStore } from "../store/store";
import * as THREE from "three";
// default values
const defaultBodyData = planetsData.Earth;

// scale down data for our model
const distanceScaleFactor = 0.0000001;
const sizeScaleFactor = 0.00015;
const rotationSpeedScaleFactor = 600000;
// const speedScaleFactor = 0.01;

const Planet = forwardRef(({ bodyData, textures }, ref) => {
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
  const { simSpeed, resetCamera } = useStore();
  const { updatePlanetAngle, planetAngles, planetPositions, updatePlanetPosition, selectedPlanet, setSelectedPlanet } = usePlanetStore();

  const localRef = ref || useRef();
  const localAngleRef = useRef(planetAngles[name] || 0); // Initialize with saved angle or 0

  // calculating scaled values
  const numberOfRotationsPerOrbit = rotationPeriod ? (orbitalPeriod * 24) / rotationPeriod : 0;
  const scaledOrbitalRadius = orbitalRadius * distanceScaleFactor;
  const scaledRadius = radius * sizeScaleFactor;
  const scaledOrbitalSpeed = orbitalSpeed * simSpeed;
  let rotationSpeed = rotationPeriod ? (2 * Math.PI) / (rotationPeriod * 3600) : 0;
  rotationSpeed *= rotationSpeedScaleFactor;

  const isPlanetSelected = selectedPlanet && selectedPlanet.name === name; // clicked planet

  const { camera } = useThree();
  const cameraOffset = new THREE.Vector3(0, 5, -10); // Adjust as needed
  const [rotationCount, setRotationCount] = useState(0);
  const lastRotationRef = useRef(0);
  const [rotationElapsedTime, setRotationElapsedTime] = useState(0);

  useFrame((state, delta) => {
    // Adjust delta based on simulation speed
    const adjustedDelta = delta * simSpeed;

    // Rotation Speed (radians per second)
    // Earth rotates 360 degrees in 24 hours (86400 seconds)
    const rotationSpeed = (2 * Math.PI) / (24 * 60 * 60); // Radians per second

    // Orbital Speed (radians per simulation year)
    // Assuming Earth's orbital period is 365.25 days
    const orbitalSpeed = (2 * Math.PI) / (365.25 * 24 * 60 * 60); // Radians per second

    // Update planet's rotation
    if (rotationPeriod) {
      localRef.current.rotation.y += rotationSpeed * adjustedDelta;
    }

    // Update planet's orbital position
    localAngleRef.current += orbitalSpeed * adjustedDelta;
    const x = scaledOrbitalRadius * Math.cos(localAngleRef.current);
    const z = scaledOrbitalRadius * Math.sin(localAngleRef.current);
    const currentRotation = localAngleRef.current * numberOfRotationsPerOrbit;

    if (localRef.current) {
      // Update the planet's position
      localRef.current.position.set(x, 0, z);
      updatePlanetPosition(name, { x, y: 0, z });

      // Increment the elapsed time by delta each frame
      setRotationElapsedTime(prev => prev + delta);

      const completedRotations = Math.floor(currentRotation / (2 * Math.PI));
      if (completedRotations > lastRotationRef.current) {
        lastRotationRef.current = completedRotations;

        // Compare simulation time with real rotation period
        const realRotationPeriodHours = rotationPeriod; // real rotation period in hours
        const simulationRotationTimeHours = rotationElapsedTime / 3600; // convert seconds to hours
        console.log(`Simulation time for ${name} rotation: ${simulationRotationTimeHours.toFixed(2)} hours`);
        console.log(`Real time for ${name} rotation: ${realRotationPeriodHours} hours`);

        // Reset rotation elapsed time for next rotation
        setRotationElapsedTime(0);
      }

      // Planet rotation on its own axis
      if (rotationPeriod) {
        // Increment the rotation based on rotation speed
        const rotationIncrement = rotationSpeed * delta;
        localRef.current.rotation.y += rotationIncrement;
      }

      // Camera logic for selected planet
      if (isPlanetSelected) {
        const targetPosition = localRef.current.position.clone().add(cameraOffset);
        camera.position.lerp(targetPosition, 0.1);
        camera.lookAt(localRef.current.position);
      }
    }
  });

  const handleClick = e => {
    e.stopPropagation();

    if (selectedPlanet && selectedPlanet.name === name) {
      setSelectedPlanet(null);
      resetCamera();
    } else {
      setSelectedPlanet(mergedData); // Assuming mergedData has the necessary planet info
      // No need to manually call setCameraTarget here, as it's handled in CameraControls useEffect
    }
  };

  return (
    <>
      <group ref={localRef} onClick={handleClick}>
        <mesh>
          <sphereGeometry args={[scaledRadius, 32, 32]} />
          {textures ? <meshStandardMaterial map={textures.map} /> : <meshStandardMaterial color={color} />}
          {/* {isPlanetSelected &&
          } */}
        </mesh>
      </group>
      <OrbitPath origin={orbitalOrigin} radius={scaledOrbitalRadius} color={color} name={name} />
    </>
  );
});

export default Planet;
