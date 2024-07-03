import React, {
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
  Suspense,
} from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  ScrollControls,
  Environment,
  useScroll,
  Text,
  useHelper,
} from "@react-three/drei";
import gsap from "gsap";
import "./style.css";
import Cup from "./Cup";
import BackGround from "./BackGround";
import TopView from "./TopView";
import { DirectionalLightHelper } from "three";

const useResize = () => {
  const [size, setSize] = useState({
    width: typeof window !== "undefined" ? window.innerWidth : 0,
    height: typeof window !== "undefined" ? window.innerHeight : 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

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

const HeroSection = () => {
  const { width, height } = useResize();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  }

  function PopingUp() {
    const textRef = useRef();
    const scroll = useScroll();
    const tl = useRef();

    useFrame(() => {
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

    let fontSize = 1;
    let fontHeight = 2;

    if (width < 1200) {
      fontSize = 0.8;
      fontHeight = 1.5;
    }

    if (width < 800) {
      fontSize = 0.6;
      fontHeight = 1.4;
    }

    if (width < 600) {
      fontSize = 0.47;
      fontHeight = 1.2;
    }

    if (width < 510) {
      fontSize = 0.4;
      fontHeight = 1.2;
    }

    return (
      <mesh className="font-sodo-sans text-4xl" rotation-x={-0.5 * Math.PI}>
        <Text
          ref={textRef}
          position={[0, fontHeight, 0.3]}
          scale={2}
          color={0xffffff}
          fontSize={fontSize}
          font="/3D/SoDoSans-Black.ttf"
        >
          Starbucks
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

  if (width >= 400) {
    return (
      <div className="hero mt-[4.5rem]">
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
                intensity={2}
                shadow-bias={-0.0001}
              />
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
    );
  } else if (width < 400) {
    return (
      <div className="mobile-view">
        <img className="mobile-img" src="/images/mobile_view.png" alt="" />
      </div>
    );
  }

  return null;
};

export default HeroSection;
