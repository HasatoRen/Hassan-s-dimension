import { useEffect, useRef } from "react";

import planeScene from "../assets/3d/plane.glb";
import { useAnimations, useGLTF } from "@react-three/drei";

const Plane = ({ isRotating, ...props }) => {
  const ref = useRef();
  const { scene, animations } = useGLTF(planeScene);
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    const animation = actions["Take 001"];
    if (!animation) {
      console.log("actions not found error",actions)
    }
    if (isRotating) {
      animation.play();
    } else {
      animation.stop();
    }
  }, [actions, isRotating]);

  return (
    <mesh {...props} ref={ref}>
      <primitive object={scene} />
    </mesh>
  );
};

export default Plane;


// trying to do it from scratch and debugging