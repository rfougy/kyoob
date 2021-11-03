import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial wireframe color="black" />
    </mesh>
  );
};

export default Box;
