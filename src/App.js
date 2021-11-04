import React from "react";
import "./App.scss";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";
import OrbitController from "./components/OrbitController";

function App() {
  return (
    <>
      <h1>kyo͞ob</h1>
      <>
        <Canvas
          dpr={[1, 2]}
          shadows
          gl={{ alpha: false }}
          camera={{ position: [-2, 1, 7], fov: 50 }}
        >
          <color attach="background" args={["#ffffff"]} />
          <OrbitController />
          <ambientLight intensity={0.3} />
          <directionalLight
            position={[0, 10, 0]}
            intensity={1.5}
            shadow-mapSize-width={1024}
            shadow-mapSize-height={1024}
            shadow-camera-far={50}
            shadow-camera-left={-10}
            shadow-camera-right={10}
            shadow-camera-top={10}
            shadow-camera-bottom={-10}
          />
          <pointLight position={[-10, 0, -20]} intensity={0.5} />
          <pointLight position={[0, -10, 0]} intensity={1.5} />

          <Box />
          <group>
            <mesh rottion={[-Math.PI / 2, 0, 0]} position={[0, -3, 0]}>
              <planeBufferGeometry attach="geometry" args={[10, 10]} />
              <meshStandardMaterial wireframe color={"black"} />
            </mesh>
          </group>
        </Canvas>
      </>
    </>
  );
}

export default App;
