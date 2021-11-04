import React from "react";
import "../../../App.scss";
import { Canvas } from "@react-three/fiber";
import Box from "./Box";
import OrbitController from "./OrbitController";

const HomePage = () => {
  return (
      <Canvas
        dpr={[1, 2]}
        shadows
        gl={{ alpha: false }}
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <color attach="background" args={["#ffffff"]} />
        <OrbitController />
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <Box />
        <gridHelper position={[0, -1, 0]} args={[100, 100, `gray`, `gray`]} />
      </Canvas>
  );
};

export default HomePage;
