import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Canvas, useFrame, useLoader } from "@react-three/fiber";
import * as THREE from "three";
import { Plane, useScroll } from "@react-three/drei";
import gsap from "gsap";

const useResize = () => {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return size;
};

const BackGround = () => {
  const { width, height } = useResize();

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

  var backWidth = 18;
  var bachHeight = 10;

  if (width < 1200) {
    backWidth = 16;
    bachHeight = 10;
  }

  if (width < 1000) {
    backWidth = 14;
    bachHeight = 9;
  }

  if (width < 800) {
    backWidth = 12;
    bachHeight = 9;
  }

  if (width < 600) {
    backWidth = 10;
    bachHeight = 9;
  }

  return (
    <>
      <mesh
        ref={planeRef}
        position={[-0.4, 0, -0.7]}
        rotation-x={-0.5 * Math.PI}
      >
        <planeGeometry
          args={[backWidth, bachHeight]}
          position={[0, 0, 0]}
          color={"#006240"}
        />
        <meshBasicMaterial map={milkTextureL} />
      </mesh>
    </>
  );
};

export default BackGround;
