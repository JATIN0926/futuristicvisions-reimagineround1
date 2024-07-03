// "use client";
// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import Image from "next/image";
// import cursorEffect from "./script.js";
// import "./style.css";

// const AboutUs = () => {
//   useEffect(() => {
//     cursorEffect();
//   }, []);

//   return (
//     <div className="outer-container" id="aboutUs">
//       <div
//         id="cursor"
//         className="fixed text-sm opacity-0 !m-0 !p-0 translate-x-[-50%] translate-y-[50%] min-h-[7vw] min-w-[7vw] bg-[#006240] box-border text-white rounded-full z-[99] flex items-center font-700 justify-center"
//       >
//         About Us
//       </div>
//       <div className="relative w-full min-h-screen bg-[#F1F0EA] max-w-full flex flex-row items-center justify-center gap-5 z-0 text-[#006240]">
//         <motion.div
//           initial={{
//             y: 100,
//             opacity: 0,
//           }}
//           animate={{
//             y: 0,
//             opacity: 1,
//           }}
//           transition={{
//             duration: 0.5,
//             delay: 0.5,
//           }}
//           className="flex flex-col items-center justify-center gap-3 w-1/2"
//         >
//           <p className="text-xl font-semibold tracking-[0.3rem] text-center font-MaleoTrials-Bold">
//             STARBUCKS - YOUR HOME AWAY FROM HOME
//           </p>
//           <h1 className="text-5xl leading-snug font-lander-grande"></h1>
//           <p className="text-lg leading-relaxed font-sodo-sans font-normal not-italic text-center z-[2] ">
//             From the moment you step in, you will be greeted with a smile and a
//             familiar warmth that makes you feel right at home. Our comfortable
//             seating, free Wi-Fi, and personalised service ensure that whether
//             you are catching up with friends, working, or simply taking a break,
//             you will always find your perfect spot at Starbucks.
//           </p>
//           <div className="whitespace-nowrap ">
//             <div
//               id="scrollbox"
//               className="!m-0 relative top-[-2rem] left-[6.125rem] h-auto w-[130vw] whitespace-nowrap inline-block z-[0]"
//             >
//               <h1 className="m-0 flex-1 h-auto relative pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block  max-w-full mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem] text-[#FAF6F3]">
//                 Experience coffee like home
//               </h1>
//               <h1 className="m-0  flex-1 h-auto relative pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block  max-w-full mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem] text-[#FAF6F3]">
//                 Experience coffee like home
//               </h1>
//               <h1 className="m-0  flex-1 h-auto relative pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block  max-w-full mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem] text-[#FAF6F3]">
//                 Experience coffee like home
//               </h1>
//             </div>
//           </div>

//           <div className="box-border relative  top-[-5rem] w-[32.313rem] h-[1.063rem] border-t-[1px] border-solid border-color-700 z-[5]" />
//           <p className="mt-[-5rem] text-lg leading-relaxed font-sodo-sans font-normal  not-italic text-center z-[2]">
//             Instead of many components, we offer one seamless experience.
//             Quality beans are sourced ethically, expert baristas craft each
//             drink to your taste, and our welcoming stores provide a cozy
//             atmosphere for you to relax and enjoy your coffee.
//           </p>
//         </motion.div>
//       </div>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  let component = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Pinning the text section
      ScrollTrigger.create({
        trigger: ".page2",
        start: "top top",
        end: "bottom top",
        pin: ".page2",
        pinSpacing: false,
        id: "pin-text-section",
      });

      // Blur and fade effect on text section
      gsap.to(".text-section", {
        scrollTrigger: {
          trigger: ".page2",
          start: "top top",
          end: "bottom top",
          scrub: true,
          id: "blur-fade-effect",
          onUpdate: (self) => {
            const progress = self.progress;
            const adjustedProgress = Math.max(progress - 0.3, 0) / 0.7; // Adjust progress to start at 0.3
            const blurAmount =
              adjustedProgress <= 0.6 ? adjustedProgress * 10 : 6; // 0 to 6 blur amount for 60% of scroll
            const opacity =
              adjustedProgress > 0.6 ? 1 - (adjustedProgress - 0.6) * 2.5 : 1; // 1 to 0 opacity for last 40% of scroll
            gsap.to(".text-section", {
              filter: `blur(${blurAmount}px)`,
              opacity: opacity,
              duration: 0,
            });
          },
        },
      });

      // Trigger to scroll and reveal image section
      gsap.to(".page2", {
        scrollTrigger: {
          trigger: ".page",
          start: "top top",
          end: "bottom top",
          scrub: true,
          id: "scroll-reveal",
        },
      });
    }, component); // <- selector scoping
    return () => ctx.revert();
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center gap-3"
      ref={component}
    >
      <div className="page2 max-h-screen w-screen max-w-full z-10">
        <div className="text-section relative min-h-screen bg-[#F1F0EA] w-screen max-w-full flex flex-row items-center justify-center gap-5 text-[#006240]">
          <div className="flex flex-col items-center justify-center gap-2 w-1/2">
            <p className=" mb-3 text-xs mbXSmall:text-sm mbSmall:text-base w-[100vw] mbSmall:w-[70vw] text-center mbMedium:text-lg tbPortrait:text-xl tbLandscape:text-2xl font-semibold tracking-[0.15rem] mbXSmall:tracking-[0.22rem] mbSmall:tracking-[0.3rem] font-MaleoTrials-Bold">
              STARBUCKS - YOUR HOME AWAY FROM HOME
            </p>
            <p className="text-[0.6rem] mbXSmall:text-xs mbSmall:text-sm mbMedium:text-base tbPortrait:text-lg w-[80vw] laptop:w-[70vw] tbLandscape:text-xl laptop:leading-2rem font-lander-grande text-[#1E3932] font-normal not-italic text-center z-[2] ">
              From the moment you step in, you will be greeted with a smile and
              a familiar warmth that makes you feel right at home. Our
              comfortable seating, free Wi-Fi, and personalised service ensure
              that whether you are catching up with friends, working, or simply
              taking a break, you will always find your perfect spot at
              Starbucks.
            </p>
            <div className="h-[20vh] tbLandscape:h-[16vh] flex items-center justify-center overflow-hidden relative w-screen">
              <div
                id="scrollbox"
                className="!m-0 relative top-[-2rem] left-[6.125rem] h-auto w-full whitespace-nowrap inline-block z-[0]"
              >
                <div className="relative flex">
                  <h1
                    className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.1rem] laptop:text-[5.625rem] mbMedium:leading-[5rem] tbLandscape:text-[6.5rem]"
                    style={{ animation: "move 35s linear infinite" }}
                  >
                    We care about the Air we breathe
                  </h1>
                  <h1
                    className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.1rem] laptop:text-[5.625rem] mbMedium:leading-[5rem] tbLandscape:text-[6.5rem]"
                    style={{ animation: "move 35s linear infinite" }}
                  >
                    We care about the Air we breathe
                  </h1>
                  <h1
                    className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.1rem] laptop:text-[5.625rem] mbMedium:leading-[5rem] tbLandscape:text-[6.5rem]"
                    style={{ animation: "move 35s linear infinite" }}
                  >
                    We care about the Air we breathe
                  </h1>
                </div>
              </div>
            </div>

            <div className="" />
            <p className=" mt-[-4rem] mbSmall:mt-[-3rem] w-[80vw] laptop:w-[55vw] text-[#1E3932]  text-[0.6rem] mbXSmall:text-xs mbSmall:text-sm  mbMedium:text-base  tbPortrait:text-lg tbLandscape:text-xl laptop:leading-relaxed font-lander-grande font-normal not-italic text-center z-[2]">
              Instead of many components, we offer one seamless experience.
              Quality beans are sourced ethically, expert baristas craft each
              drink to your taste, and our welcoming stores provide a cozy
              atmosphere for you to relax and enjoy your coffee.
            </p>
          </div>
        </div>
      </div>
      <div className="page h-screen w-full z-40">
        <div className="image-section h-screen flex flex-col items-center justify-around w-full">
          <div className="w-full h-[40%] flex item-center justify-center">
            <Image
              src="/images/About1.png"
              alt="Environment Image"
              width={500}
              height={500}
              className="object-cover w-[60vw] h-[28vh] mbXSmall:w-[55vw] mbXSmall:h-[35vh] mbSmall:w-[35vw] mbSmall:h-[36vh] laptop:w-[38vw] laptop:h-[40vh] tbLandscape:w-[40vw] tbLandscape:h-[43vh]"
            />
          </div>
          <div className="flex items-center justify-evenly w-full h-[40%]">
            <Image
              src="/images/About2.png"
              alt="Environment Image"
              width={500}
              height={500}
              className=" object-cover mbXSmall:object-contain w-[45vw] h-[28vh] mbXSmall:w-[35vw] mbXSmall:h-[33vh] mbSmall:w-[28vw] mbSmall:h-[31vh] laptop:w-[30vw] laptop:h-[35vh] tbLandscape:w-[32vw] tbLandscape:h-[38vh] self-start"
            />
            <Image
              src="/images/about3.png"
              alt="Environment Image"
              width={500}
              height={500}
              className="object-cover mbXSmall:object-contain w-[45vw] h-[28vh]  mbXSmall:w-[35vw] mbXSmall:h-[33vh] mbSmall:w-[28vw] mbSmall:h-[31vh]  laptop:w-[30vw] laptop:h-[35vh] tbLandscape:w-[32vw] tbLandscape:h-[38vh] self-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
