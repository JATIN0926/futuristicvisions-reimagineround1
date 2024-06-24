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
  const [hideMainCup, setHideMainCup] = useState(false);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const radius = dimensions.width * 0.15; // Responsive radius
  const opacityDelay = 1; // Initial delay in seconds before opacity changes

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
    [0, 0.4],
    [0, dimensions.height * 0.84]
  );
  const x = useTransform(
    scrollYProgress,
    [0, 0.4],
    [0, dimensions.width * 0.235]
  );
  const rotate = useTransform(scrollYProgress, [0, 0.4], [-15, 0]);
  const scale = useMotionValue(1);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    const newScale = 1 - value * 0.5;
    scale.set(newScale);
    if (value >= 0.4 && !animationTriggered) {
      setTimeout(() => setHideMainCup(true), 1500); // Hide the main cup immediately
      animateCups(); // Start the circular animation
      setTimeout(() => setTextVisible(true), 3500); // Show text after circular animation completes (4s delay)
      setAnimationTriggered(true);
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
        { duration: 2.5, delay, ease: "linear" } // Control the animation duration and delay here
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
      className="h-[250vh] w-screen max-w-full p-6 px-10 flex flex-col items-center justify-start"
    >
      <div className="flex items-center w-full h-screen justify-center">
        <motion.div
          className="w-1/2 relative h-[70%] main-cup"
          style={{
            y,
            x,
            rotate,
            scale,
            opacity: hideMainCup ? 0 : 1,
            zIndex: -2,
            transition: "opacity 0.2s linear",
          }}
        >
          <Image
            src="/images/newflav1.png"
            alt="flav"
            fill
            className="object-cover"
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
      <div className="h-[150vh] flex items-center justify-center w-full max-w-full relative">
        <div
          ref={scope}
          className="relative w-full h-full flex items-center justify-center"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: textVisible ? 1 : 0 }}
            transition={{ duration: 0.4, ease: "linear" }}
            className="absolute top-[34%] flex flex-col items-center justify-center"
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
              className={`w-[20%] h-[20%] absolute cup-${i}`}
              style={{
                opacity: 0,
                top: "35%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                zIndex: -1,
              }}
              animate={{
                opacity: i === 0 ? 0 : [0, 0, 1], // Delay visibility for additional cups
              }}
              transition={{
                duration: 2, // Duration for the opacity animation
                delay: i === 0 ? 0 : opacityDelay + i * 0.2, // Incremental delay
                ease: "linear",
              }}
              initial={{ opacity: 0, x: 0, y: 0, rotate: 0 }}
            >
              <Image
                src={img}
                alt={`flav-${i}`}
                layout="fill"
                objectFit="contain"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewFlavours;
