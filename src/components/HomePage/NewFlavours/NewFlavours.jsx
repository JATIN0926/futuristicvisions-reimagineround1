"use client";
import Image from "next/image";
import React, { useRef, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useAnimate,
  useMotionValueEvent,
  useMotionValue,
} from "framer-motion";
import OurFlavours from "./OurFlavours";
import { gsap } from "gsap";
import "./style.css";
import { CustomLink } from "@/components/utils/CustomLink/CustomLink";

const NewFlavours = () => {
  const container = useRef();
  const CustomcursorRef = useRef();
  const circularContainerRef = useRef(null);
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
  const [stopPosition, setStopPosition] = useState(0);
  const [radius, setRadius] = useState(0);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [textVisible, setTextVisible] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  const updateStopPosition = () => {
    let newPosition;
    if (dimensions.width <= 280) {
      newPosition = dimensions.height * 0.4; // For very small screens
    } else if (dimensions.width <= 400) {
      newPosition = dimensions.height * 0.4; // For small screens
    } else if (dimensions.width <= 600) {
      newPosition = dimensions.height * 0.55; // For small screens
    } else if (dimensions.width <= 800) {
      newPosition = dimensions.height * 0.85; // For medium screens
    } else if (dimensions.width <= 1100) {
      newPosition = dimensions.height * 0.85; // For medium screens
    } else if (dimensions.width <= 1300) {
      newPosition = dimensions.height * 0.65; // For large screens
    } else if (dimensions.width <= 1600) {
      newPosition = dimensions.height * 0.72; // For large screens
    } else {
      newPosition = dimensions.height * 0.75; // For very large screens
    }
    setStopPosition(newPosition);
  };

  const updateRadius = (width) => {
    let newRadius;

    if (width <= 400) {
      newRadius = width * 0.27;
    } else if (width <= 600) {
      newRadius = width * 0.27;
    } else if (width <= 800) {
      newRadius = width * 0.23;
    } else if (width <= 1000) {
      newRadius = width * 0.19;
    } else if (width <= 1200) {
      newRadius = width * 0.17;
    } else if (width <= 1400) {
      newRadius = width * 0.15;
    } else {
      newRadius = width * 0.14;
    }
    setRadius(newRadius);
  };

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      updateStopPosition();
      updateRadius(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, [dimensions.width, dimensions.height]);

  useEffect(() => {
    const cursor = CustomcursorRef.current;

    const handleResize = () => {
      if (window.innerWidth < 400) {
        setIsSmallScreen(true);
        if (cursor) {
          gsap.set(cursor, { scale: 0, opacity: 0, x: 0, y: 0 });
        }
      } else {
        setIsSmallScreen(false);
        if (cursor) {
          gsap.set(cursor, { scale: 0, opacity: 0 });
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const y = useTransform(scrollYProgress, [0, 0.3], [0, stopPosition]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, dimensions.width > 400 ? dimensions.width * 0.235 : 0]
  );
  const rotate = useTransform(scrollYProgress, [0, 0.3], [-15, 0]);
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
          opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
          x: generatePathX(radius, angleOffset),
          y: generatePathY(radius, angleOffset),
          rotate: generateRotation(i),
          scale: 1, // Keep the additional cups the same size as the main cup
        },
        { duration: 1.6, delay, ease: "easeOut" }
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

  useEffect(() => {
    const cursor = CustomcursorRef.current;
    const circularContainer = circularContainerRef.current;
    if (cursor && !isSmallScreen) {
      gsap.set(cursor, { scale: 0, opacity: 0 });
    }

    const handleMouseEnter = () => {
      gsap.to(cursor, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
      });
      document.body.classList.add("hide-cursor");
    };

    const handleMouseLeave = () => {
      gsap.to(cursor, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });
      document.body.classList.remove("hide-cursor");
    };

    const handleMouseMove = (e) => {
      if (circularContainer) {
        const rect = circularContainer.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        gsap.to(cursor, {
          x: mouseX,
          y: mouseY,
          duration: 0.3,
          ease: "power3.out",
        });
      }
    };

    circularContainer.addEventListener("mouseenter", handleMouseEnter);
    circularContainer.addEventListener("mouseleave", handleMouseLeave);
    circularContainer.addEventListener("mousemove", handleMouseMove);

    return () => {
      circularContainer.removeEventListener("mouseenter", handleMouseEnter);
      circularContainer.removeEventListener("mouseleave", handleMouseLeave);
      circularContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleClick = () => {
    gsap.to(CustomcursorRef.current, {
      scale: 0.6,
      duration: 0.2,
      ease: "power3.out",
    });
    document.body.classList.remove("hide-cursor");
  };

  return (
    <div
      ref={container}
      className="max-h-[250vh] w-screen max-w-full p-6 px-10 flex flex-col items-center justify-start"
    >
      <div className="flex flex-col-reverse mbXSmall:flex-row items-center w-full h-[80vh] mbXSmall:h-[60vh] mbSmall:h-screen justify-center gap-0 mbXSmall:gap-10 mbSmall:gap-6 laptop:gap-2 tbPortrait:gap-0">
        {/* h-[70vh] w-[50vw]  */}
        <motion.div
          className=" relative w-[75%] h-[45%] mbXSmall:w-[45%] mbXSmall:h-[80%] mbSmall:w-[40%] mbSmall:h-[60%] mbMedium:w-[50%] mbMedium:h-[95%] laptop:w-1/2  laptop:h-full  main-cup"
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
            className="object-cover mbMedium:object-contain"
            // priority
            sizes="calc(50vw - 40px)"
          />
        </motion.div>
        <div className="flex flex-col items-center mbXSmall:items-start justify-center gap-2 mbSmall:gap-4 mbMedium:gap-6 w-[90%] mbXSmall:w-[60%] mbSmall:w-[50%]">
          <p className=" text-[0.65rem] mbXSmall:text-[0.7rem] mbSmall:text-base mbMedium:text-lg laptop:text-xl font-semibold tracking-[0.15rem] mbSmall:tracking-[0.25rem] mbMedium:tracking-[0.3rem] font-MaleoTrials-Bold text-[#006240]">
            Never Compromise Your Taste
          </p>
          <h1 className="font-lander-grande text-center mbXSmall:text-start text-lg mbXSmall:text-xl mbSmall:text-3xl mbMedium:text-4xl laptop:text-5xl leading-snug text-[#1E3932]">
            Choose or Tweak Your Flavors
          </h1>
          <p className=" text-[0.55rem] mbXSmall:text-[0.65rem] text-center mbXSmall:text-start mbSmall:text-sm mbMedium:text-base laptop:text-lg leading-relaxed font-sodo-sans w-[95%] font-normal not-italic tracking-wide text-[#006240]">
            At Starbucks, you can choose from a wide variety of flavors, or
            tweak your drink to match your personal taste. Enjoy a customized
            coffee experience made just for you.
          </p>
        </div>
      </div>
      <div className=" h-[30vh] mbXSmall:h-[50vh] mbSmall:h-[60vh] flex items-center justify-end overflow-hidden relative w-screen max-w-full">
        <div
          id="scrollbox"
          className="!m-0 relative top-[0rem] mbSmall:top-[4rem]  left-[6.125rem] h-auto w-full whitespace-nowrap inline-block z-[0]"
        >
          <div className="relative flex">
            <h1
              className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3]  mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
              style={{
                animation: "move 35s linear infinite",
              }}
            >
              Experience our variety of flavours
            </h1>
            <h1
              className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3]  mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
              style={{
                animation: "move 35s linear infinite",
              }}
            >
              Experience our variety of flavours
            </h1>
            <h1
              className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3]  mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
              style={{
                animation: "move 35s linear infinite",
              }}
            >
              Experience our variety of flavours
            </h1>
          </div>
        </div>
      </div>

      <CustomLink href="/product-page">
        <div
          ref={circularContainerRef}
          onClick={handleClick}
          className="max-h-[130vh] h-[50vh] mbXSmall:h-[65vh] mbSmall:h-screen tbPortrait:h-[130vh] flex items-center justify-center w-screen max-w-full relative"
        >
          {isSmallScreen && (
            <motion.button
              // onClick={handleTransition}
              whileTap={{ scale: 0.7 }}
              className="small-screen-cursor2 z-50 text-[0.65rem]"
            >
              Explore more
            </motion.button>
          )}
          {!isSmallScreen && (
            <motion.div
              ref={CustomcursorRef}
              whileTap={{ scale: 0.6 }}
              className="explore-cursor2 text-[0.75rem]"
            >
              Explore more
            </motion.div>
          )}

          <div
            ref={scope}
            className="relative w-full h-full flex items-center justify-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: textVisible ? 1 : 0 }}
              transition={{ duration: 0.4, ease: "linear" }}
              className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
            >
              <OurFlavours>
                <h1 className="text-[#1E3932] font-extrabold text-xs mbXSmall:text-base mbSmall:text-lg tbPortrait:text-xl text-center">
                  Explore new Flavours
                </h1>
              </OurFlavours>
            </motion.div>
            <div className="w-full"></div>
            {additionalCups.map((img, i) => (
              <motion.div
                key={i}
                className={` w-[30%] h-[40%] mbXSmall:w-[27%] mbXSmall:h-[35%] mbSmall:w-[23%] mbSmall:h-[32%] mbMedium:w-[20%] mbMedium:h-[30%] laptop:w-[16%] laptop:h-[26%] tbPortrait:w-[14.5%] tbPortrait:h-[23%] absolute cup-${i}`}
                style={{
                  opacity: 0,
                }}
              >
                <Image
                  src={img}
                  alt={`flav-${i}`}
                  fill
                  className="object-contain"
                  sizes="calc(14.48vw - 11px)"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </CustomLink>
    </div>
  );
};

export default NewFlavours;
