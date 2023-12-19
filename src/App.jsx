import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import Earth from "./components/Earth";
import Sun from "./components/Sun";
import { Perf } from "r3f-perf";

const Scene = () => {
  return (
    <>
      <ambientLight intensity={0.04} />
      <pointLight color='#f6f3ea' intensity={1.2} position={[0, 0, 0]} />
      <Earth earthPosition={[10, 0, 0]} />
      <Sun position={[0, 0, 0]} />
      <Stars radius={300} depth={60} count={20000} factor={7} saturation={0} fade speed={0.5} />
    </>
  );
};

const App = () => {
  return (
    <Canvas camera={{ fov: 50, position: [0, 0, 25] }}>
      <Perf deepAnalyze />
      <OrbitControls minDistance={3} maxDistance={100} />
      <Scene />
    </Canvas>
  );
};

export default App;
