import React from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Scene from "./Scene";

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
