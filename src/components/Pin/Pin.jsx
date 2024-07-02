import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Pin() {
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
            const blurAmount = progress <= 0.6 ? progress * 10 : 6; // 0 to 6 blur amount for 60% of scroll
            const opacity = progress > 0.6 ? 1 - (progress - 0.6) * 2.5 : 1; // 1 to 0 opacity for last 40% of scroll
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
      <div className="page2 h-screen w-full z-10">
        <div className="text-section relative min-h-screen bg-[#F1F0EA] max-w-full flex flex-row items-center justify-center gap-5 text-[#006240]">
          <div className="flex flex-col items-center justify-center gap-3 w-1/2">
            <p className="text-xl font-semibold tracking-[0.3rem] font-MaleoTrials-Bold">
              STARBUCKS ENVIRONMENTAL COMMITMENT
            </p>
            <h1 className="text-5xl leading-snug font-lander-grande"></h1>
            <p className="text-lg leading-relaxed font-sodo-sans font-normal not-italic text-center z-[2] ">
              Starbucks is committed to sustainability and helping the planet.
              We ethically source our coffee, caring for the environment and
              communities. We reduce waste with recyclable and reusable
              packaging and cut down on single-use plastics.
            </p>
            <div className="h-[20vh] flex items-center justify-center overflow-hidden relative w-screen">
              <div
                id="scrollbox"
                className="!m-0 relative top-[-2rem] left-[6.125rem] h-auto w-full whitespace-nowrap inline-block z-[0]"
              >
                <div className="relative flex">
                  <h1
                    className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
                    style={{ animation: "move 25s linear infinite" }}
                  >
                    We care about the Air we breathe
                  </h1>
                  <h1
                    className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
                    style={{ animation: "move 25s linear infinite" }}
                  >
                    We care about the Air we breathe
                  </h1>
                  <h1
                    className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
                    style={{ animation: "move 25s linear infinite" }}
                  >
                    We care about the Air we breathe
                  </h1>
                </div>
              </div>
            </div>

            <div className="box-border relative top-[-5rem] w-[32.313rem] h-[1.063rem] border-t-[1px] border-solid border-color-700 z-[5]" />
            <p className="mt-[-5rem] text-lg leading-relaxed font-sodo-sans font-normal not-italic text-center z-[2]">
              We invest in renewable energy and make our stores
              energy-efficient. Starbucks also supports reforestation and water
              conservation projects, working towards a greener future for
              everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="page h-screen w-full z-50">
        <div className="image-section h-screen flex flex-col items-center justify-center gap-8 w-full">
          <div className="w-full h-[40%] flex item-center justify-center">
            <Image
              src="/images/environment1.png"
              alt="Environment Image"
              width={500}
              height={500}
              className="object-cover w-[40%] h-[90%]"
            />
          </div>
          <div className="flex items-center justify-evenly w-full h-[40%]">
            <Image
              src="/images/environment2.png"
              alt="Environment Image"
              width={500}
              height={500}
              className="object-contain w-[50%] h-[90%] self-start"
            />
            <Image
              src="/images/environment3.png"
              alt="Environment Image"
              width={500}
              height={500}
              className="object-contain w-[50%] h-[90%] self-end"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
// import React, { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import Image from "next/image";

// gsap.registerPlugin(ScrollTrigger);

// export default function Pin() {
//   let component = useRef();

//   useEffect(() => {
//     let ctx = gsap.context(() => {
//       // Pinning the text section
//       ScrollTrigger.create({
//         trigger: ".page2",
//         start: "top top",
//         end: "bottom top",
//         pin: ".page2",
//         pinSpacing: false,
//         // markers: true,
//       });

//       // Blur and fade effect on text section
//       gsap.to(".text-section", {
//         scrollTrigger: {
//           trigger: ".page2",
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//           // markers: true,
//           onUpdate: (self) => {
//             const progress = self.progress;
//             const blurAmount = progress <= 0.6 ? progress * 10 : 6; // 0 to 6 blur amount for 60% of scroll
//             const opacity = progress > 0.6 ? 1 - (progress - 0.6) * 2.5 : 1; // 1 to 0 opacity for last 40% of scroll
//             gsap.to(".text-section", {
//               filter: `blur(${blurAmount}px)`,
//               opacity: opacity,
//               duration: 0,
//             });
//           },
//         },
//       });

//       // Trigger to scroll and reveal image section
//       gsap.to(".page2", {
//         scrollTrigger: {
//           trigger: ".page",
//           start: "top top",
//           end: "bottom top",
//           scrub: true,
//           // markers: true,
//         },
//       });
//     }, component); // <- selector scoping
//     return () => ctx.revert();
//   }, []);

//   return (
//     <div
//       className="flex flex-col items-center justify-center gap-3"
//       ref={component}
//     >
//       <div className="page2 h-screen w-full z-10">
//         <div className="text-section relative min-h-screen bg-[#F1F0EA] max-w-full flex flex-row items-center justify-center gap-5 text-[#006240]">
//           <div className="flex flex-col items-center justify-center gap-3 w-1/2">
//             <p className="text-xl font-semibold tracking-[0.3rem] font-MaleoTrials-Bold">
//               STARBUCKS ENVIRONMENTAL COMMITMENT
//             </p>
//             <h1 className="text-5xl leading-snug font-lander-grande"></h1>
//             <p className="text-lg leading-relaxed font-sodo-sans font-normal not-italic text-center z-[2] ">
//               Starbucks is committed to sustainability and helping the planet.
//               We ethically source our coffee, caring for the environment and
//               communities. We reduce waste with recyclable and reusable
//               packaging and cut down on single-use plastics.
//             </p>
//             <div className="h-[20vh] flex items-center justify-center overflow-hidden relative w-screen">
//               <div
//                 id="scrollbox"
//                 className="!m-0 relative top-[-2rem] left-[6.125rem] h-auto w-full whitespace-nowrap inline-block z-[0]"
//               >
//                 <div className="relative flex">
//                   <h1
//                     className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
//                     style={{ animation: "move 25s linear infinite" }}
//                   >
//                     We care about the Air we breathe
//                   </h1>
//                   <h1
//                     className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
//                     style={{ animation: "move 25s linear infinite" }}
//                   >
//                     We care about the Air we breathe
//                   </h1>
//                   <h1
//                     className="m-0 flex-1 h-auto pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block text-[#FAF6F3] mbMini:text-[1.563rem] mbMini:leading-[2rem] mbSmall:text-[5rem] mbSmall:leading-[4rem] mbMedium:text-[5.625rem] mbMedium:leading-[5rem]"
//                     style={{ animation: "move 25s linear infinite" }}
//                   >
//                     We care about the Air we breathe
//                   </h1>
//                 </div>
//               </div>
//             </div>

//             <div className="box-border relative top-[-5rem] w-[32.313rem] h-[1.063rem] border-t-[1px] border-solid border-color-700 z-[5]" />
//             <p className="mt-[-5rem] text-lg leading-relaxed font-sodo-sans font-normal not-italic text-center z-[2]">
//               We invest in renewable energy and make our stores
//               energy-efficient. Starbucks also supports reforestation and water
//               conservation projects, working towards a greener future for
//               everyone.
//             </p>
//           </div>
//         </div>
//       </div>
//       <div className="page h-screen w-full z-50">
//         <div className="image-section h-screen flex flex-col items-center justify-center gap-8 w-full">
//           <div className="w-full h-[40%] flex item-center justify-center">
//             <Image
//               src="/images/environment1.png"
//               alt="Environment Image"
//               width={500}
//               height={500}
//               className="object-cover w-[40%] h-[90%]"
//             />
//           </div>
//           <div className="flex items-center justify-evenly w-full h-[40%]">
//             <Image
//               src="/images/environment2.png"
//               alt="Environment Image"
//               width={500}
//               height={500}
//               className="object-contain w-[50%] h-[90%] self-start"
//             />
//             <Image
//               src="/images/environment3.png"
//               alt="Environment Image"
//               width={500}
//               height={500}
//               className="object-contain w-[50%] h-[90%] self-end"
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
