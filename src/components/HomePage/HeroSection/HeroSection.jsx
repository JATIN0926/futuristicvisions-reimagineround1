import React from "react";
import { useState, Suspense, useRef, useEffect, useLayoutEffect } from "react";
import "./App.css";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Scroll,
  Environment,
  OrbitControls,
  Html,
  useScroll,
  Text,
  Image,
  useHelper,
} from "@react-three/drei";
import Cup from "./Cup";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./style.css";
import BackGround from "./BackGround";
import TopView from "./TopView";
import { DirectionalLight, DirectionalLightHelper } from "three";

const HeroSection = () => {
  function PopingUp() {
    const textRef = useRef();
    const scroll = useScroll();
    const tl = useRef();

    useFrame((state, delta) => {
      tl.current.seek(scroll.offset * tl.current.duration());
    });

    useLayoutEffect(() => {
      tl.current = gsap.timeline({
        defaults: { duration: 4, ease: "power1.inOut" },
      });

      tl.current
        .from(textRef.current.position, { y: -1 }, 9)
        .from(textRef.current.scale, { x: 0, y: 0, z: 0, duration: 3 }, 9);
    }, []);

    return (
      <mesh className="StarHeading" rotation-x={-0.5 * Math.PI}>
        <Text
          ref={textRef}
          position={[0, 2.3, 0.3]}
          scale={2}
          color={0xd4e9e2}
          className=" font-sodo-sans"
        >
          STARBUCKS
        </Text>
      </mesh>
    );
  }

  function DirectionalLightWithHelper() {
    const lightRef = React.useRef();

    // Use the helper
    useHelper(lightRef, DirectionalLightHelper, 5);

    return (
      <directionalLight
        color={"#000000"}
        ref={lightRef}
        position={[200, 10, -100]}
        intensity={0}
        castShadow
      />
    );
  }

  return (
    <>
      <div className="hero">
        <div
          style={{ zIndex: 19 }}
          id="canvas-container"
          className="canvas-container"
        >
          <Canvas
            camera={{ fov: 75, near: 0.1, far: 1000, position: [0, 5, 0] }}
            shadows
          >
            <ScrollControls pages={3} damping={0.3}>
              <ambientLight intensity={0} />
              <spotLight
                position={[0, 25, 0]}
                angle={1.3}
                penumbra={1}
                // castShadow
                intensity={2}
                shadow-bias={-0.0001}
              />
              <OrbitControls enableZoom={false} />

              <TopView />
              <Suspense fallback={null}>
                <Cup />
              </Suspense>
              <BackGround />
              <Environment preset="sunset" />
              <PopingUp />
            </ScrollControls>
          </Canvas>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
