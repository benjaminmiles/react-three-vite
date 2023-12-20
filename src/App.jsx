import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Scene from "./Scene";
import { Bloom, EffectComposer } from "@react-three/postprocessing";
import Menu from "./components/Menu";

const App = () => {
  return (
    <div className='Main'>
      <Canvas id='Canvas' camera={{ fov: 50, position: [0, 40, 0], near: 0.1, far: 2000 }}>
        {/* <Perf deepAnalyze /> */}
        <OrbitControls minDistance={5} maxDistance={980} zoomSpeed={0.2} dampingFactor={1.2} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.2} luminanceThreshold={1} luminanceSmoothing={1.2} radius={0.6} />
        </EffectComposer>
      </Canvas>
      <Menu />
    </div>
  );
};

export default App;
