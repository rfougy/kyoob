import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Cube = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <mesh ref={mesh}>
      <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
      <meshStandardMaterial material="material" color="red" />
    </mesh>
  );
};

export default Cube;
