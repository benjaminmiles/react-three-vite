import React, { useRef, forwardRef } from "react";
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

  useFrame((state, delta) => {
    localAngleRef.current += (delta * scaledOrbitalSpeed * simSpeed) / scaledOrbitalRadius;
    updatePlanetAngle(name, localAngleRef.current);

    // Calculate position from angle
    const x = scaledOrbitalRadius * Math.cos(localAngleRef.current);
    const z = scaledOrbitalRadius * Math.sin(localAngleRef.current);

    if (localRef.current) {
      localRef.current.position.set(x, 0, z);
      updatePlanetPosition(name, { x, y: 0, z });
    }
    if (isPlanetSelected) {
      const targetPosition = localRef.current.position.clone().add(cameraOffset);
      camera.position.lerp(targetPosition, 0.1); // Smoothly move the camera to the target position
      camera.lookAt(localRef.current.position); // Make the camera look at the planet
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
