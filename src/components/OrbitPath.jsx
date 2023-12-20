import React, { useMemo } from "react";
import { Line } from "@react-three/drei";
import * as THREE from "three";

const OrbitPath = ({ origin = new THREE.Vector3(0, 0, 0), radius = 2, color = "white", name = "orbit-path" }) => {
  // console.log("OrbitPath:", name, origin, radius);

  const points = useMemo(() => {
    const orbitPoints = [];
    for (let i = 0; i <= 360; i += 1) {
      const radians = (i * Math.PI) / 180;
      orbitPoints.push(new THREE.Vector3(origin.x + radius * Math.cos(radians), origin.y, origin.z + radius * Math.sin(radians)));
    }
    return orbitPoints;
  }, [origin, radius]);

  return <Line points={points} color={color} lineWidth={0.5} />;
};

export default OrbitPath;
