import { Canvas } from "@react-three/fiber";
import { Physics } from "use-cannon";
import { Camera } from "./Camera";

const Game = () => {
  return (
    <Canvas>
      <Camera fov={50} />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <Physics>
        <Ground />
        <Player />
      </Physics>
    </Canvas>
  );
};

export default Game;
