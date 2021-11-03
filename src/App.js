import React from "react";
import "./App.scss";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";

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
          <ambientLight intensity={0.3} />
          <Box />
        </Canvas>
      </>
    </>
  );
}

export default App;
