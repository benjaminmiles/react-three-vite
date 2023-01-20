import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stage, Grid, OrbitControls, Environment, Box } from "@react-three/drei";
import { Hyperdeck } from "./Hyperdeck";

const Scene = () => {
  const boxRef = useRef();
  useFrame((state, delta) => {
    boxRef.current.rotation.y += 0.02;
  });

  return (
    <>
      <directionalLight intensity={3.14} decay={2} position={[-2.78, 4.23, -4.81]} rotation={[-2.21, -0.33, -2.73]} />
      <directionalLight intensity={0.63} decay={2} position={[2.2, 2.58, 2.99]} rotation={[-0.11, 0.63, -0.03]} />
      <pointLight intensity={9.11} decay={2} distance={10} position={[0, 1.61, 0]} rotation={[-Math.PI, 0, -Math.PI]} />
      <Stage>
        <Box />
      </Stage>
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ fov: 70, position: [0, 0, 3] }}>
      <Scene />
    </Canvas>
  );
};

export default App;
