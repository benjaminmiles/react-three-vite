import React, { useRef, forwardRef } from "react";
import { useFrame } from "@react-three/fiber";
import OrbitPath from "./OrbitPath";
import planetsData from "../data/planetsData";
import useStore from "../store/store";
import { usePlanetStore } from "../store/store";
// default values
const defaultBodyData = planetsData.Earth;

// scale down data for our model
const distanceScaleFactor = 0.0000001;
const sizeScaleFactor = 0.00015;
const rotationSpeedScaleFactor = 600000;
// const speedScaleFactor = 0.01;

const Planet = forwardRef(({ bodyData, textures }, ref) => {
  const { simSpeed, setCameraTarget } = useStore();
  const { updatePlanetAngle, planetAngles } = usePlanetStore();

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
  const localAngleRef = useRef(planetAngles[name] || 0); // Initialize with saved angle or 0

  useFrame((state, delta) => {
    localAngleRef.current += (delta * scaledOrbitalSpeed * simSpeed) / scaledOrbitalRadius;
    updatePlanetAngle(name, localAngleRef.current);

    // Calculate position from angle
    const x = scaledOrbitalRadius * Math.cos(localAngleRef.current);
    const z = scaledOrbitalRadius * Math.sin(localAngleRef.current);

    if (localRef.current) {
      localRef.current.position.set(x, 0, z);
    }
  });

  const handleClick = e => {
    // Log the click
    e.stopPropagation();
    console.log("clicked:", name);

    // Update the camera's target to focus on the clicked planet
    // Assuming you have a method in your store or context to update the camera
    // For example, setCameraTarget could be a method in your Zustand store
    setCameraTarget(localRef.current.position);
  };

  return (
    <>
      <group ref={localRef} onClick={handleClick}>
        <mesh>
          <sphereGeometry args={[scaledRadius, 32, 32]} />
          {textures ? <meshStandardMaterial map={textures.map} /* other texture properties */ /> : <meshStandardMaterial color={color} />}
        </mesh>
      </group>
      <OrbitPath origin={orbitalOrigin} radius={scaledOrbitalRadius} color={color} name={name} />
    </>
  );
});

export default Planet;
