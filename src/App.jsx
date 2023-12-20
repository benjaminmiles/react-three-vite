import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Perf } from "r3f-perf";
import Scene from "./Scene";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

const App = () => {
  const [isPanelExpanded, setIsPanelExpanded] = useState(true);

  const togglePanel = () => {
    setIsPanelExpanded(!isPanelExpanded);
  };

  return (
    <div className='Main'>
      <Canvas id='Canvas' camera={{ fov: 50, position: [0, 30, 0] }}>
        <Perf deepAnalyze />
        <OrbitControls minDistance={3} maxDistance={200} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur intensity={0.2} luminanceThreshold={1} luminanceSmoothing={1.2} radius={0.6} />
        </EffectComposer>
      </Canvas>
      <div className={`settings-panel ${isPanelExpanded ? "expanded" : "collapsed"}`}>
        <button onClick={togglePanel} className='menu-btn'>
          {isPanelExpanded ? "close" : "open"}
        </button>
        {isPanelExpanded && <div>Menu</div>}
      </div>
    </div>
  );
};

export default App;
