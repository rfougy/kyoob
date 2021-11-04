import React from "react";
import "../../../App.scss";
import { Box } from "@mui/material";

import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";
import OrbitController from "./OrbitController";

const HomePage = () => {
  return (
    <Box sx={{ position: "fixed", height: "100%", width: "100%" }}>
      <Canvas
        dpr={[1, 2]}
        shadows
        gl={{ alpha: true }}
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <OrbitController />
        <ambientLight intensity={0.3} />
        <directionalLight position={[0, 10, 0]} intensity={1.5} />
        <pointLight position={[-10, 0, -20]} intensity={0.5} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />

        <Cube />
        <gridHelper position={[0, -1, 0]} args={[100, 100, `gray`, `gray`]} />
      </Canvas>
    </Box>
  );
};

export default HomePage;
