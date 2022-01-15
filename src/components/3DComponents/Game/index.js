import { Canvas } from "@react-three/fiber";
import { Physics } from "use-cannon";

const Game = () => {
  return (
    <Canvas>
      <Camera />
      <ambientLight intensity={0.3} />
      <pointLight position={[0, -10, 0]} intensity={1.5} />
      <Physics>
        <Ground/>
        <Player/>
      </Physics>
    </Canvas>
  );
};

export default Game;
