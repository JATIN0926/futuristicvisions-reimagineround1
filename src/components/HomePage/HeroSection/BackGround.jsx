import React, { useEffect, useLayoutEffect, useRef } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Plane, useScroll } from "@react-three/drei";
import gsap from "gsap";

const BackGround = () => {
  const planeRef = useRef();
  const scroll = useScroll();
  const tl = useRef();

  const milkTextureL = useLoader(THREE.TextureLoader, "/3D/hero_3.png");

  useFrame((state, delta) => {
    tl.current.seek(scroll.offset * tl.current.duration());
  });

  useLayoutEffect(() => {
    tl.current = gsap.timeline({
      defaults: { duration: 4, ease: "power1.inOut" },
    });

    tl.current.from(
      planeRef.current.scale,
      { x: 0, y: 0, z: 0, duration: 3 },
      5
    );
  }, []);

  return (
    <>
      <mesh
        ref={planeRef}
        position={[-0.4, 0, -0.7]}
        rotation-x={-0.5 * Math.PI}
      >
        <planeGeometry args={[18, 10]} position={[0, 0, 0]} color={"#006240"} />
        <meshBasicMaterial map={milkTextureL} />
      </mesh>
    </>
  );
};

export default BackGround;
