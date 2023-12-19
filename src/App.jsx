import React, { Suspense, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
// import { Perf } from "r3f-perf";
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
        {/* <Perf deepAnalyze /> */}
        <OrbitControls minDistance={3} maxDistance={100} />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <EffectComposer>
          <Bloom mipmapBlur luminanceThreshold={1} radius={0.5} />
        </EffectComposer>
      </Canvas>
      <div className={`settings-panel ${isPanelExpanded ? "expanded" : "collapsed"}`}>
        <button onClick={togglePanel} className='menu-btn'>
          settings
        </button>
        {isPanelExpanded && <div>Menu</div>}
      </div>
    </div>
  );
};

export default App;
