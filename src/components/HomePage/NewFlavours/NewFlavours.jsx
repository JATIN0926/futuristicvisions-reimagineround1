// "use client";
// import Image from "next/image";
// import React, { useRef, useEffect, useState } from "react";
// import {
//   motion,
//   useScroll,
//   useTransform,
//   useMotionValue,
//   useAnimate,
//   useMotionValueEvent,
// } from "framer-motion";
// import OurFlavours from "./OurFlavours";
// import "./style.css";

// const NewFlavours = () => {
//   const container = useRef();
//   const [scope, animate] = useAnimate();
//   const { scrollYProgress } = useScroll({
//     target: container,
//     offset: ["start start", "end end"],
//   });

//   const additionalCups = [
//     "/images/newflav1.png", // Main cup included at the first position
//     "/images/newflav2.png",
//     "/images/newflav3.png",
//     "/images/newflav4.png",
//     "/images/newflav5.png",
//     "/images/newflav2.png",
//     "/images/newflav3.png",
//     "/images/newflav4.png",
//   ];

//   const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
//   const [stopPosition, setStopPosition] = useState(0);
//   const [radius, setRadius] = useState(0);
//   const [animationTriggered, setAnimationTriggered] = useState(false);
//   const [textVisible, setTextVisible] = useState(false);

//   const updateStopPosition = () => {
//     let newPosition;
//     if (dimensions.width <= 280) {
//       newPosition = dimensions.height * 0.5; // For very small screens
//     } else if (dimensions.width <= 400) {
//       newPosition = dimensions.height * 0.6; // For small screens
//     } else if (dimensions.width <= 550) {
//       newPosition = dimensions.height * 0.6; // For small screens
//     } else if (dimensions.width <= 700) {
//       newPosition = dimensions.height * 0.62; // For medium screens
//     } else if (dimensions.width <= 1000) {
//       newPosition = dimensions.height * 0.585; // For medium screens
//     } else if (dimensions.width <= 1300) {
//       newPosition = dimensions.height * 0.65; // For large screens
//     } else if (dimensions.width <= 1600) {
//       newPosition = dimensions.height * 0.6; // For large screens
//     } else {
//       newPosition = dimensions.height * 0.75; // For very large screens
//     }
//     setStopPosition(newPosition);
//   };

//   const updateRadius = () => {
//     let newRadius;
//     if (dimensions.height <= 400) {
//       newRadius = dimensions.width * 0.2; // For very small screens
//     } else if (dimensions.height <= 600) {
//       newRadius = dimensions.width * 0.18; // For small screens
//     } else if (dimensions.height <= 800) {
//       newRadius = dimensions.width * 0.15; // For medium screens
//     } else if (dimensions.height <= 1000) {
//       newRadius = dimensions.width * 6; // For large screens
//     } else {
//       newRadius = dimensions.width * 0.12; // For very large screens
//     }
//     setRadius(newRadius);
//   };

//   useEffect(() => {
//     const updateDimensions = () => {
//       setDimensions({ width: window.innerWidth, height: window.innerHeight });
//       updateStopPosition();
//       updateRadius();
//     };
//     window.addEventListener("resize", updateDimensions);
//     updateDimensions();
//     return () => window.removeEventListener("resize", updateDimensions);
//   }, [dimensions.width, dimensions.height]);

//   const y = useTransform(scrollYProgress, [0, 0.3], [0, stopPosition]);
//   const x = useTransform(
//     scrollYProgress,
//     [0, 0.3],
//     [0, dimensions.width * 0.235]
//   );
//   const rotate = useTransform(scrollYProgress, [0, 0.3], [-15, 0]);
//   const scale = useMotionValue(1);

//   useMotionValueEvent(scrollYProgress, "change", (value) => {
//     const newScale = 1 - value * 0.5;
//     scale.set(newScale);
//     if (value >= 0.5 && !animationTriggered) {
//       setTimeout(() => {
//         animateCups(); // Start the circular animation
//         setTimeout(() => setTextVisible(true), 3500); // Show text after circular animation completes (4s delay)
//         setAnimationTriggered(true);
//       }, 100); // Short delay to ensure elements are rendered
//     }
//   });

//   const animateCups = () => {
//     const delayIncrement = 0.2; // Incremental delay for each cup

//     for (let i = 0; i < additionalCups.length; i++) {
//       const delay = i * delayIncrement;
//       const angleOffset = (i / additionalCups.length) * 2 * Math.PI; // Full circle offset

//       animate(
//         `.cup-${i}`,
//         {
//           opacity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1], // Delay visibility for initial seconds
//           x: generatePathX(radius, angleOffset),
//           y: generatePathY(radius, angleOffset),
//           rotate: generateRotation(i),
//           scale: 1, // Keep the additional cups the same size as the main cup
//         },
//         { duration: 2, delay, ease: "linear" } // Control the animation duration and delay here
//       );
//     }
//   };

//   const generatePathX = (radius, angleOffset) => {
//     const keyframes = [];
//     const totalSteps = 25;
//     for (let i = 0; i <= totalSteps; i++) {
//       const angle = (i / totalSteps) * Math.PI * 2 - Math.PI / 2 + angleOffset;
//       const x = radius * Math.cos(angle);
//       keyframes.push(x);
//     }
//     return keyframes;
//   };

//   const generatePathY = (radius, angleOffset) => {
//     const keyframes = [];
//     const totalSteps = 25;
//     for (let i = 0; i <= totalSteps; i++) {
//       const angle = (i / totalSteps) * Math.PI * 2 - Math.PI / 2 + angleOffset;
//       const y = radius * Math.sin(angle);
//       keyframes.push(y);
//     }
//     return keyframes;
//   };

//   const generateRotation = (i) => {
//     const keyframes = [];
//     const endRotation = (i / additionalCups.length) * 360;
//     const totalSteps = 25;
//     for (let j = 0; j <= totalSteps; j++) {
//       const angle = (j / totalSteps) * endRotation;
//       keyframes.push(angle);
//     }
//     return keyframes;
//   };

//   return (
//     <div
//       ref={container}
//       className="max-h-[250vh] w-screen max-w-full p-6 px-10 flex flex-col items-center justify-start"
//     >
//       <div className="flex items-center w-full h-screen justify-center gap-8 laptop:gap-2 tbPortrait:gap-0">
//         <motion.div
//           className=" relative w-[40%] h-[70%] mbSmall:w-[45%] mbSmall:h-[90%] mbMedium:w-[40%] mbMedium:h-[85%] laptop:w-1/2  laptop:h-full main-cup"
//           style={{
//             y,
//             x,
//             rotate,
//             scale,
//             opacity: 1,
//             zIndex: 1, // Increased zIndex
//             transition: "opacity 0.2s linear",
//           }}
//         >
//           <Image
//             src="/images/newflav1.png"
//             alt="flav"
//             fill
//             className="object-cover"
//             // priority
//             sizes="calc(50vw - 40px)"
//           />
//         </motion.div>
//         <div className="flex flex-col items-start justify-center gap-2 mbSmall:gap-4 mbMedium:gap-6 w-[60%] mbSmall:w-[50%]">
//           <p className=" text-[0.7rem] mbSmall:text-base mbMedium:text-lg laptop:text-xl font-semibold tracking-[0.15rem] mbSmall:tracking-[0.25rem] mbMedium:tracking-[0.3rem] font-MaleoTrials-Bold text-[#006240]">
//             Never Compromise Your Taste
//           </p>
//           <h1 className="font-lander-grande text-xl mbSmall:text-3xl mbMedium:text-4xl laptop:text-5xl leading-snug text-[#1E3932]">
//             Choose or Tweak Your Flavors
//           </h1>
//           <p className=" text-[0.65rem] mbSmall:text-sm mbMedium:text-base laptop:text-lg leading-relaxed font-sodo-sans w-[95%] font-normal not-italic tracking-wide text-[#006240]">
//             At Starbucks, you can choose from a wide variety of flavors, or
//             tweak your drink to match your personal taste. Enjoy a customized
//             coffee experience made just for you.
//           </p>
//         </div>
//       </div>
//       <div className="h-[60vh] flex items-center justify-end overflow-hidden relative w-screen max-w-full">
//         <div
//           id="scrollbox"
//           className="!m-0 relative top-[4rem] left-[6.125rem] h-auto w-full whitespace-nowrap inline-block z-[0]"
//         >
//           <div className="relative flex">
//             <h1
//               className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3]  mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
//               style={{
//                 animation: "move 25s linear infinite",
//               }}
//             >
//               Experience our variety of flavours
//             </h1>
//             <h1
//               className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3]  mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
//               style={{
//                 animation: "move 25s linear infinite",
//               }}
//             >
//               Experience our variety of flavours
//             </h1>
//             <h1
//               className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3]  mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
//               style={{
//                 animation: "move 25s linear infinite",
//               }}
//             >
//               Experience our variety of flavours
//             </h1>
//           </div>
//         </div>
//       </div>

//       <div className="min-h-[130vh] h-[130vh] flex items-center justify-center w-screen max-w-full relative">
//         <div
//           ref={scope}
//           className="relative w-full h-full flex items-center justify-center"
//         >
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: textVisible ? 1 : 0 }}
//             transition={{ duration: 0.4, ease: "linear" }}
//             className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
//           >
//             <OurFlavours>
//               <h1 className="text-[#1E3932] font-extrabold text-xl text-center">
//                 Explore new Flavours
//               </h1>
//             </OurFlavours>
//           </motion.div>
//           <div className="w-full"></div>
//           {additionalCups.map((img, i) => (
//             <motion.div
//               key={i}
//               className={`w-[14.5%] h-[23%] absolute cup-${i}`}
//               style={{
//                 // top: "50%",
//                 // left: "50%",
//                 // transform: "translate(-50%, -50%)",
//                 opacity: 0,
//               }}
//             >
//               <Image
//                 src={img}
//                 alt={`flav-${i}`}
//                 fill
//                 className="object-cover"
//                 sizes="calc(14.48vw - 11px)"
//                 // priority
//               />
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default NewFlavours;

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
  const [stopPosition, setStopPosition] = useState(0);
  const [radius, setRadius] = useState(0);
  const [animationTriggered, setAnimationTriggered] = useState(false);
  const [textVisible, setTextVisible] = useState(false);

  const updateStopPosition = () => {
    let newPosition;
    if (dimensions.width <= 280) {
      newPosition = dimensions.height * 0.5; // For very small screens
    } else if (dimensions.width <= 400) {
      newPosition = dimensions.height * 0.6; // For small screens
    } else if (dimensions.width <= 550) {
      newPosition = dimensions.height * 0.6; // For small screens
    } else if (dimensions.width <= 700) {
      newPosition = dimensions.height * 0.62; // For medium screens
    } else if (dimensions.width <= 1000) {
      newPosition = dimensions.height * 0.585; // For medium screens
    } else if (dimensions.width <= 1300) {
      newPosition = dimensions.height * 0.65; // For large screens
    } else if (dimensions.width <= 1600) {
      newPosition = dimensions.height * 0.6; // For large screens
    } else {
      newPosition = dimensions.height * 0.75; // For very large screens
    }
    setStopPosition(newPosition);
  };

  const updateRadius = () => {
    let newRadius;
    if (dimensions.height <= 400) {
      newRadius = dimensions.width * 0.2; // For very small screens
    } else if (dimensions.height <= 600) {
      newRadius = dimensions.width * 0.18; // For small screens
    } else if (dimensions.height <= 800) {
      newRadius = dimensions.width * 0.15; // For medium screens
    } else if (dimensions.height <= 1000) {
      newRadius = dimensions.width * 0.9; // For large screens
    } else {
      newRadius = dimensions.width * 0.12; // For very large screens
    }
    setRadius(newRadius);
    console.log(newRadius);
  };

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
      updateStopPosition();
      updateRadius();
    };
    window.addEventListener("resize", updateDimensions);
    updateDimensions();
    return () => window.removeEventListener("resize", updateDimensions);
  }, [dimensions.width, dimensions.height]);

  const y = useTransform(scrollYProgress, [0, 0.3], [0, stopPosition]);
  const x = useTransform(
    scrollYProgress,
    [0, 0.3],
    [0, dimensions.width * 0.235]
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
      console.log(radius);
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
      <div className="flex items-center w-full h-screen justify-center gap-8 laptop:gap-2 tbPortrait:gap-0">
        <motion.div
          className=" relative w-[40%] h-[70%] mbSmall:w-[45%] mbSmall:h-[90%] mbMedium:w-[40%] mbMedium:h-[85%] laptop:w-1/2  laptop:h-full main-cup"
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
        <div className="flex flex-col items-start justify-center gap-2 mbSmall:gap-4 mbMedium:gap-6 w-[60%] mbSmall:w-[50%]">
          <p className=" text-[0.7rem] mbSmall:text-base mbMedium:text-lg laptop:text-xl font-semibold tracking-[0.15rem] mbSmall:tracking-[0.25rem] mbMedium:tracking-[0.3rem] font-MaleoTrials-Bold text-[#006240]">
            Never Compromise Your Taste
          </p>
          <h1 className="font-lander-grande text-xl mbSmall:text-3xl mbMedium:text-4xl laptop:text-5xl leading-snug text-[#1E3932]">
            Choose or Tweak Your Flavors
          </h1>
          <p className=" text-[0.65rem] mbSmall:text-sm mbMedium:text-base laptop:text-lg leading-relaxed font-sodo-sans w-[95%] font-normal not-italic tracking-wide text-[#006240]">
            At Starbucks, you can choose from a wide variety of flavors, or
            tweak your drink to match your personal taste. Enjoy a customized
            coffee experience made just for you.
          </p>
        </div>
      </div>
      <div className="h-[60vh] flex items-center justify-end overflow-hidden relative w-screen max-w-full">
        <div
          id="scrollbox"
          className="!m-0 relative top-[4rem] left-[6.125rem] h-auto w-full whitespace-nowrap inline-block z-[0]"
        >
          <div className="relative flex">
            <h1
              className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3]  mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
              style={{
                animation: "move 25s linear infinite",
              }}
            >
              Experience our variety of flavours
            </h1>
            <h1
              className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3]  mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
              style={{
                animation: "move 25s linear infinite",
              }}
            >
              Experience our variety of flavours
            </h1>
            <h1
              className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3]  mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
              style={{
                animation: "move 25s linear infinite",
              }}
            >
              Experience our variety of flavours
            </h1>
          </div>
        </div>
      </div>

      <div className="min-h-[130vh] h-[130vh] flex items-center justify-center w-screen max-w-full relative">
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
              <h1 className="text-[#1E3932] font-extrabold text-xl text-center">
                Explore new Flavours
              </h1>
            </OurFlavours>
          </motion.div>
          <div className="w-full"></div>
          {additionalCups.map((img, i) => (
            <motion.div
              key={i}
              className={`w-[14.5%] h-[23%] absolute cup-${i}`}
              style={{
                opacity: 0,
              }}
            >
              <Image
                src={img}
                alt={`flav-${i}`}
                fill
                className="object-cover"
                sizes="calc(14.48vw - 11px)"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewFlavours;
