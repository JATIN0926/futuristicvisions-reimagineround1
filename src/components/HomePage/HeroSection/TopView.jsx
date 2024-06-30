import { Html, Image, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import React, { useLayoutEffect, useRef } from "react";

const TopView = () => {
  const imgRef = useRef();
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
      .to(imgRef.current.rotation, { z: -6.3 }, 0)
      .to(imgRef.current.position, { x: 0 }, 0)

      .to(imgRef.current.scale, { x: 0, y: 0, z: 0, duration: 0.4 }, 1.2);
  }, []);

  return (
    <mesh position={[0, 0, 0]} rotation-x={-0.5 * Math.PI} scale={5.2}>
      <Image ref={imgRef} scale={1} url={"/3D/LinkedPathGroup.png"} alt="" />
    </mesh>
  );
};

export default TopView;
