import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useGLTF, useScroll } from "@react-three/drei";
import gsap from "gsap";
import { useFrame } from "@react-three/fiber";

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

export default function Model(props) {
  const { nodes, materials } = useGLTF("/3D/cup.gltf");

  // THE ANIMATION PART
  const cupRef = useRef();
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
      .to(cupRef.current.rotation, { y: -6.3 }, 2)
      .to(cupRef.current.position, { x: 0 }, 2)

      .to(cupRef.current.rotation, { x: -0.45 * Math.PI }, 5)
      .to(cupRef.current.scale, { x: 1.2, y: 1.2, z: 1.2 })
      .to(cupRef.current.position, { z: 1.3 });
  }, []);

  const { width, height } = useResize();

  var cupSize = 0.48;

  if (width < 1200) {
    cupSize = 0.44;
  }

  if (width < 600) {
    cupSize = 0.42;
  }

  return (
    <group {...props} dispose={null} ref={cupRef}>
      <group scale={cupSize} position={[0, -1.33, 0]}>
        <mesh
          geometry={nodes.Circle_Material002_0.geometry}
          material={materials["Material.002"]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          receiveShadow
        />
        <mesh
          geometry={nodes.Circle001_Material001_0.geometry}
          material={materials["Material.001"]}
          position={[-0.933, 7.028, -1.396]}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          receiveShadow
        />
        <mesh
          geometry={nodes.Circle002_Paper_0.geometry}
          material={materials.Paper}
          rotation={[-Math.PI / 2, 0, 0]}
          scale={100}
          receiveShadow
        />
      </group>
    </group>
  );
}

useGLTF.preload("/3D/cup.gltf");
