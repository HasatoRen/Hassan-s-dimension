import { useRef, useEffect } from "react";

import birdScene from "../assets/3d/bird.glb";
import { Gltf, useAnimations, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

const Bird = () => {
  const birdRef = useRef();
  const { scene, animations } = useGLTF(birdScene);

  const { actions } = useAnimations(animations, birdRef);

  useEffect (() =>{
    actions['Take 001'].play();
  }, []);

  useFrame(({clock, camera }) => {
    // update the Y position stimulating the flight moving in sin wave
    birdRef.current.position.y = Math.sin(clock.elapsedTime) * 0.02 + 2
    //checking if the bird reached a certain point relative to the camera
    if (birdRef.current.position.x > camera.position.x + 10) {
      //change the direction of the bird by 180 degree flipping it
      birdRef.current.rotation.y = Math.PI;
    } else if (birdRef.current.position.x < camera.position.x - 10 ) {
      // the direction to the bird
      birdRef.current.rotation.y = 0;
    }
    //update the X and z position based on the direction
    if (birdRef.current.rotation.y === 0) {
      birdRef.current.position.x += 0.01
      birdRef.current.position.z -= 0.01
    } else{
      // reversing it making it comeback to its orignal position
      birdRef.current.position.x -= 0.01
      birdRef.current.position.z += 0.01
    }
  })

  return (
    <mesh 
    position={[-5, 2, 1]} 
    scale={[0.003, 0.003, 0.003]}
    ref={birdRef}
    >
      <primitive object={scene} />
    </mesh>
  );
};

export default Bird;
