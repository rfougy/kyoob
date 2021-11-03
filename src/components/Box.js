import React, { useRef } from "react";
import { useFrame } from "@react-three/fiber";

const Box = () => {
  const mesh = useRef(null);
  useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.005));
  return (
    <group dispose={null}>
      {/* <mesh ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial color="yellow" />
      </mesh> */}
      <mesh ref={mesh}>
        <boxBufferGeometry attach="geometry" args={[1, 1, 1]} />
        <meshStandardMaterial wireframe color="black" />
      </mesh>
    </group>
  );
};

export default Box;
