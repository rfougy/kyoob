import { Box } from "@mui/material";

import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/cannon";
import { Camera } from "./Camera";
import { Player } from "./Player";
import { Ground } from "./Ground";

const Game = () => {
  return (
    <Box sx={{ position: "fixed", height: "100%", width: "100%" }}>
      <Canvas
        dpr={[1, 2]}
        shadows
        gl={{ alpha: true }}
        camera={{ position: [-5, 2, 10], fov: 60 }}
      >
        <Camera fov={50} />
        <ambientLight intensity={0.3} />
        <pointLight position={[0, -10, 0]} intensity={1.5} />
        <Physics>
          <Ground />
          <Player />
        </Physics>
      </Canvas>
    </Box>
  );
};

export default Game;
