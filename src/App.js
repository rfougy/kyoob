import React from "react";
import "./App.scss";
import { Canvas } from "@react-three/fiber";
import Box from "./components/Box";

function App() {
  return (
    <>
      <Canvas>
        <Box />
      </Canvas>
    </>
  );
}

export default App;
