"use client";
import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger, TextPlugin);

const Flavours = ({ onCursorEnter, onCursorLeave }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const overlayRef = useRef(null);

  const [currentImage, setCurrentImage] = useState("/images/flav1.png");
  const [containerHeight, setContainerHeight] = useState("150vh");

  const texts = [
    "Authentically Sourced Coffee Beans",
    "Blended Fresh for Café Essence",
    "Starbucks Coffee Flavors for Home",
  ];

  const images = [
    "/images/flav1.png",
    "/images/flav2.png",
    "/images/flav3.png",
  ];

  useEffect(() => {
    if (typeof window !== "undefined") {
      const totalSections = texts.length;
      let heightFactor = 135;

      if (window.innerWidth >= 600 && window.innerWidth < 1400) {
        heightFactor = 135;
      } else if (window.innerWidth >= 400 && window.innerWidth < 600) {
        heightFactor = 138;
      } else if (window.innerWidth < 400) {
        heightFactor = 135;
      }

      setContainerHeight(`${totalSections * heightFactor}vh`);
    }

    let ctx = gsap.context(() => {
      const container = containerRef.current;
      const textElement = textRef.current;
      const imageElement = imageRef.current;
      const overlayElement = overlayRef.current;

      ScrollTrigger.create({
        trigger: container,
        start: "top 35%",
        onEnter: () => {
          gsap.set(textElement, { opacity: 0, y: 30 });
          gsap.set(imageElement, { opacity: 1, transformOrigin: "top" });
          gsap.set(overlayElement, { height: "100%", transformOrigin: "top" });

          gsap.to(textElement, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          });

          gsap.to(overlayElement, {
            height: "0%",
            duration: 1.2,
            ease: "power3.inOut",
          });
        },
        id: "flavours-enter-animation",
      });

      ScrollTrigger.create({
        trigger: container,
        start: "top top",
        end: `+=${window.innerHeight * texts.length}`,
        pin: true,
        pinSpacing: false,
        scrub: 1,
        id: "flavours-scroll-animation",
        onUpdate: (self) => {
          const progress = self.progress * (texts.length - 1);
          const index = Math.min(Math.floor(progress), texts.length - 1);

          if (textElement.textContent !== texts[index]) {
            gsap.to(textElement, {
              opacity: 0,
              y: 40,
              duration: 0.3,
              ease: "power3.inout",
              onComplete: () => {
                gsap.set(textElement, { opacity: 0, y: 40 });
                gsap.set(textElement, { text: texts[index] });
                gsap.to(textElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power3.inOut",
                });
              },
            });

            gsap.to(imageElement, {
              opacity: 0,
              y: 50,
              duration: 0.3,
              ease: "power2.inOut",
              onComplete: () => {
                setCurrentImage(images[index]);
                gsap.set(imageElement, { opacity: 0 });
                gsap.set(overlayElement, {
                  height: "100%",
                  transformOrigin: "top",
                });
                gsap.to(imageElement, {
                  opacity: 1,
                  y: 0,
                  duration: 0.3,
                  ease: "power2.inOut",
                });
                gsap.to(overlayElement, {
                  height: "0%",
                  duration: 1,
                  ease: "power3.inOut",
                });
              },
            });
          }
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [texts, images]);

  return (
    <>
      <div
        className="outer-container"
        style={{
          height: containerHeight,
        }}
      >
        <div
          ref={containerRef}
          className="relative overflow-x-hidden w-full min-h-screen bg-[#006240] flex flex-col mbXSmall:flex-row items-center justify-center gap-5 text-white p-6 mbSmall:p-0"
        >
          <div className="flex flex-col items-center mbXSmall:items-start justify-center gap-2 mbSmall:gap-3 tbLandscape:gap-6 w-[90%] min-[300px]:w-[85%] mbXSmall:w-[80%] mbSmall:w-1/2">
            <p className=" text-[0.65rem] mbSmall:text-sm mbMedium:text-base laptop:text-lg tbPortrait:text-xl tbMedium:text-2xl tbLandscape:text-3xl font-semibold tracking-[0.2rem] mbSmall:tracking-[0.3rem] font-MaleoTrials-Bold">
              Never Compromise Your Taste
            </p>
            <h1
              ref={textRef}
              className=" text-xl mbXSmall:text-lg mbSmall:text-2xl mbMedium:text-3xl laptop:text-4xl tbPortrait:text-5xl tbMedium:text-[3.5rem] tbLandscape:text-6xl w-[100%] mbSmall:w-[85%] mbSmall:leading-tight mbMedium:leading-tight laptop:leading-snug tbPortrait:leading-snug tbLandscape:leading-normal text-center mbXSmall:text-start font-lander-grande"
            >
              {texts[0]}
            </h1>
            <p className="text-[0.58rem] mbSmall:text-xs mbMedium:text-sm laptop:text-base tbPortrait:text-lg tbMedium:text-xl tbLandscape:text-2xl leading-relaxed font-sodo-sans w-[100%] mbSmall:w-[95%] text-center mbXSmall:text-start font-light not-italic tracking-wide">
              At Starbucks, you can choose from a wide variety of flavors, or
              tweak your drink to match your personal taste. Enjoy a customized
              coffee experience made just for you.
            </p>
          </div>

          <div className="w-[80%] mbXSmall:w-[60%] mbSmall:w-[30%] h-[60%] mbSmall:h-[80%] relative">
            <Image
              ref={imageRef}
              src={currentImage}
              alt="flav"
              fill
              sizes="(max-width: 600px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
              className=" object-cover mbXSmall:object-contain origin-top aspect-auto"
            />
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-[#006240] origin-top overlay pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Flavours;

// "use client";
// import { useEffect, useRef, useState } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import { TextPlugin } from "gsap/TextPlugin";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger, TextPlugin);

// const Flavours = ({ onCursorEnter, onCursorLeave }) => {
//   const containerRef = useRef(null);
//   const textRef = useRef(null);
//   const imageRef = useRef(null);
//   const overlayRef = useRef(null);

//   const [currentImage, setCurrentImage] = useState("/images/flav1.png");
//   const [containerHeight, setContainerHeight] = useState("150vh");

//   const texts = [
//     "Authentically Sourced Coffee Beans",
//     "Blended Fresh for Café Essence",
//     "Starbucks Coffee Flavors for Home",
//   ];

//   const images = [
//     "/images/flav1.png",
//     "/images/flav2.png",
//     "/images/flav3.png",
//   ];

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       const totalSections = texts.length;
//       let heightFactor = 135;

//       if (window.innerWidth >= 600 && window.innerWidth < 1400) {
//         heightFactor = 135;
//       } else if (window.innerWidth >= 400 && window.innerWidth < 600) {
//         heightFactor = 138;
//       } else if (window.innerWidth < 400) {
//         heightFactor = 135;
//       }

//       setContainerHeight(`${totalSections * heightFactor}vh`);
//     }

//     let ctx = gsap.context(() => {
//       const container = containerRef.current;
//       const textElement = textRef.current;
//       const imageElement = imageRef.current;
//       const overlayElement = overlayRef.current;

//       ScrollTrigger.create({
//         trigger: container,
//         start: "top 35%",
//         onEnter: () => {
//           gsap.set(textElement, { opacity: 0, y: 30 });
//           gsap.set(imageElement, { opacity: 1, transformOrigin: "top" });
//           gsap.set(overlayElement, { height: "100%", transformOrigin: "top" });

//           gsap.to(textElement, {
//             opacity: 1,
//             y: 0,
//             duration: 1,
//             ease: "power2.out",
//           });

//           gsap.to(overlayElement, {
//             height: "0%",
//             duration: 1.2,
//             ease: "power3.inOut",
//           });
//         },
//         id: "flavours-enter-animation",
//       });

//       ScrollTrigger.create({
//         trigger: container,
//         start: "top top",
//         end: `+=${window.innerHeight * texts.length}`,
//         pin: true,
//         pinSpacing: false,
//         scrub: 1,
//         id: "flavours-scroll-animation",
//         onUpdate: (self) => {
//           const progress = self.progress * (texts.length - 1);
//           const index = Math.min(Math.floor(progress), texts.length - 1);

//           if (textElement.textContent !== texts[index]) {
//             gsap.to(textElement, {
//               opacity: 0,
//               y: 40,
//               duration: 0.3,
//               ease: "power3.inout",
//               onComplete: () => {
//                 gsap.set(textElement, { opacity: 0, y: 40 });
//                 gsap.set(textElement, { text: texts[index] });
//                 gsap.to(textElement, {
//                   opacity: 1,
//                   y: 0,
//                   duration: 0.3,
//                   ease: "power3.inOut",
//                 });
//               },
//             });

//             gsap.to(imageElement, {
//               opacity: 0,
//               y: 50,
//               duration: 0.3,
//               ease: "power2.inOut",
//               onComplete: () => {
//                 setCurrentImage(images[index]);
//                 gsap.set(imageElement, { opacity: 0 });
//                 gsap.set(overlayElement, {
//                   height: "100%",
//                   transformOrigin: "top",
//                 });
//                 gsap.to(imageElement, {
//                   opacity: 1,
//                   y: 0,
//                   duration: 0.3,
//                   ease: "power2.inOut",
//                 });
//                 gsap.to(overlayElement, {
//                   height: "0%",
//                   duration: 1,
//                   ease: "power3.inOut",
//                 });
//               },
//             });
//           }
//         },
//       });
//     }, containerRef);

//     return () => ctx.revert();
//   }, [texts, images]);

//   return (
//     <div
//       className="outer-container"
//       style={{
//         height: containerHeight,
//       }}
//     >
//       <div
//         ref={containerRef}
//         className="relative overflow-x-hidden w-full min-h-screen bg-[#006240] flex flex-col mbXSmall:flex-row items-center justify-center gap-5 text-white p-6 mbSmall:p-0"
//       >
//         <div className="flex flex-col items-center mbXSmall:items-start justify-center gap-2 mbSmall:gap-3 tbLandscape:gap-6 w-[90%] min-[300px]:w-[85%] mbXSmall:w-[80%] mbSmall:w-1/2">
//           <p className=" text-[0.65rem] mbSmall:text-sm mbMedium:text-base laptop:text-lg tbPortrait:text-xl tbMedium:text-2xl tbLandscape:text-3xl font-semibold tracking-[0.2rem] mbSmall:tracking-[0.3rem] font-MaleoTrials-Bold">
//             Never Compromise Your Taste
//           </p>
//           <h1
//             ref={textRef}
//             className=" text-xl mbXSmall:text-lg mbSmall:text-2xl mbMedium:text-3xl laptop:text-4xl tbPortrait:text-5xl tbMedium:text-[3.2rem] tbLandscape:text-[4.2rem] leading-none font-MaleoTrials-Bold text-center mbXSmall:text-left tracking-wide"
//           >
//             Authentic Taste Everytime
//           </h1>
//           <button
//             onMouseEnter={onCursorEnter}
//             onMouseLeave={onCursorLeave}
//             className="flex items-center justify-center text-[0.6rem] mbSmall:text-[0.65rem] mbMedium:text-xs laptop:text-[0.7rem] tbPortrait:text-sm tbLandscape:text-[0.95rem] font-semibold font-MaleoTrials-Bold gap-1 mbMedium:gap-2 tracking-wider border-2 border-white px-3 py-1 mbXSmall:px-4 mbSmall:px-5 mbSmall:py-2 hover:bg-white hover:text-[#006240] hover:transition-all duration-300"
//           >
//             Discover more
//           </button>
//         </div>
//         <div className="relative mbXSmall:w-[80%] mbSmall:w-1/2 flex items-center justify-center">
//           <Image
//             ref={imageRef}
//             src={currentImage}
//             alt="Flavour"
//             width={500}
//             height={500}
//             className="w-[15rem] h-[15rem] mbXSmall:w-[18rem] mbXSmall:h-[18rem] mbSmall:w-[22rem] mbSmall:h-[22rem] laptop:w-[26rem] laptop:h-[26rem] tbPortrait:w-[28rem] tbPortrait:h-[28rem] tbMedium:w-[32rem] tbMedium:h-[32rem] tbLandscape:w-[40rem] tbLandscape:h-[40rem]"
//           />
//           <div
//             ref={overlayRef}
//             className="absolute top-0 left-0 w-full h-full bg-[#006240]"
//           ></div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Flavours;
