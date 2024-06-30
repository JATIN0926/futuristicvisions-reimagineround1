"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useAnimate,
  useMotionValueEvent,
} from "framer-motion";
import OurFlavours from "./OurFlavours";
import "./style.css";

const NewFlavours = () => {
  const container = useRef();
  const [scope, animate] = useAnimate();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const additionalCups = [
    "/images/newflav1.png", // Main cup included at the first position
    "/images/newflav2.png",
    "/images/newflav3.png",
    "/images/newflav4.png",
    "/images/newflav5.png",
    "/images/newflav2.png",
    "/images/newflav3.png",
    "/images/newflav4.png",
  ];

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const radius = dimensions.width * 0.15; // Responsive radius

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const y = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, dimensions.height * 0.7] // Adjusted stop position
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, dimensions.width * 0.235]
  );
  const rotate = useTransform(scrollYProgress, [0, 0.4], [-15, 0]);
  const scale = useMotionValue(1);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const newScale = 1 - value * 0.5;
    scale.set(newScale);
    if (value >= 0.5 && !animationTriggered) {
      setTimeout(() => {
        animateCups(); // Start the circular animation
        setTimeout(() => setTextVisible(true), 3500); // Show text after circular animation completes (4s delay)
        setAnimationTriggered(true);
      }, 100); // Short delay to ensure elements are rendered
    }
  });

  const animateCups = () => {
    const delayIncrement = 0.2; // Incremental delay for each cup

    for (let i = 0; i < additionalCups.length; i++) {
      const delay = i * delayIncrement;
      const angleOffset = (i / additionalCups.length) * 2 * Math.PI; // Full circle offset

      animate(
        `.cup-${i}`,
        {
          opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Delay visibility for initial seconds
          x: generatePathX(radius, angleOffset),
          y: generatePathY(radius, angleOffset),
          rotate: generateRotation(i),
          scale: 1, // Keep the additional cups the same size as the main cup
        },
        { duration: 2, delay, ease: "linear" } // Control the animation duration and delay here
      );
    }
  };

  const generatePathX = (radius, angleOffset) => {
    const keyframes = [];
    const totalSteps = 25;
    for (let i = 0; i <= totalSteps; i++) {
      const angle = (i / totalSteps) * Math.PI * 2 - Math.PI / 2 + angleOffset;
      const x = radius * Math.cos(angle);
      keyframes.push(x);
    }
    return keyframes;
  };

  const generatePathY = (radius, angleOffset) => {
    const keyframes = [];
    const totalSteps = 25;
    for (let i = 0; i <= totalSteps; i++) {
      const angle = (i / totalSteps) * Math.PI * 2 - Math.PI / 2 + angleOffset;
      const y = radius * Math.sin(angle);
      keyframes.push(y);
    }
    return keyframes;
  };

  const generateRotation = (i) => {
    const keyframes = [];
    const endRotation = (i / additionalCups.length) * 360;
    const totalSteps = 25;
    for (let j = 0; j <= totalSteps; j++) {
      const angle = (j / totalSteps) * endRotation;
      keyframes.push(angle);
    }
    return keyframes;
  };

  return (
    <div
      ref={container}
      className="max-h-[250vh] w-screen max-w-full p-6 px-10 flex flex-col items-center justify-start"
    >
      <div className="flex items-center w-full h-screen justify-center">
        <motion.div
          className="w-1/2 relative h-full main-cup"
          style={{
            y,
            x,
            rotate,
            scale,
            opacity: 1,
            zIndex: 1, // Increased zIndex
            transition: "opacity 0.2s linear",
          }}
        >
          <Image
            src="/images/newflav1.png"
            alt="flav"
            fill
            className="object-cover"
            // priority
            sizes="calc(50vw - 40px)"
          />
        </motion.div>
        <div className="flex flex-col items-start justify-center gap-6 w-[50%]">
          <p className="text-xl font-semibold tracking-[0.3rem] font-MaleoTrials-Bold text-[#006240]">
            Never Compromise Your Taste
          </p>
          <h1 className="font-lander-grande text-5xl leading-snug text-[#1E3932]">
            Choose or Tweak Your Flavors
          </h1>
          <p className="text-lg leading-relaxed font-sodo-sans w-[95%] font-normal not-italic tracking-wide text-[#006240]">
            At Starbucks, you can choose from a wide variety of flavors, or
            tweak your drink to match your personal taste. Enjoy a customized
            coffee experience made just for you.
          </p>
        </div>
      </div>
      <div className="h-[60vh] flex items-center justify-end overflow-hidden relative w-full">
        <div
          id="scrollbox"
          className="!m-0 relative top-[2rem] left-[6.125rem] h-auto w-full whitespace-nowrap inline-block z-[0]"
        >
          <div className="relative flex">
            <h1
              className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem]"
              style={{
                animation: "move 25s linear infinite",
              }}
            >
              Experience our variety of flavours
            </h1>
            <h1
              className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem]"
              style={{
                animation: "move 25s linear infinite",
              }}
            >
              Experience our variety of flavours
            </h1>
            <h1
              className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem]"
              style={{
                animation: "move 25s linear infinite",
              }}
            >
              Experience our variety of flavours
            </h1>
          </div>
        </div>
      </div>

      <div className="h-[130vh] flex items-center justify-center w-full max-w-full relative">
        <div
          ref={scope}
          className="relative w-full h-full flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: textVisible ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="absolute top-[40%] flex flex-col items-center justify-center"
          >
            <OurFlavours>
              <h1 className="text-[#1E3932] font-extrabold text-xl text-center absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                Explore new Flavours
              </h1>
            </OurFlavours>
          </motion.div>
          {additionalCups.map((img, i) => (
            <motion.div
              key={i}
              className={`w-[14.5%] h-[23%] absolute cup-${i}`}
              style={{
                top: "44%",
                opacity: 0,
              }}
            >
              <Image
                src={img}
                alt={`flav-${i}`}
                fill
                className="object-cover"
                sizes="calc(14.48vw - 11px)"
                // priority
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewFlavours;
