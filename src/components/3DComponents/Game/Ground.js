import React from "react";
import { usePlane } from "@react-three/cannon";

export const Ground = (props) => {
  const [ref] = usePlane(() => ({ ...props }));

  return (
    <mesh ref={ref} receiveShadow>
      <gridHelper
        ref={ref}
        recieveShadow
        position={[0, 9, 0]}
        args={[100, 100, `gray`, `gray`]}
      />

      {/* <planeBufferGeometry attach="geometry" args={[1000, 1000]} />
      <meshStandardMaterial attach="material" /> */}
    </mesh>
  );
};
