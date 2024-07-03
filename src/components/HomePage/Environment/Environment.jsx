import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

export default function Environment() {
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
            const adjustedProgress = Math.max(progress - 0.45, 0) / 0.7; // Adjust progress to start at 0.3
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
              STARBUCKS ENVIRONMENTAL COMMITMENT
            </p>
            <p className="text-[0.6rem] mbXSmall:text-xs mbSmall:text-sm mbMedium:text-base tbPortrait:text-lg w-[80vw] laptop:w-[70vw] tbLandscape:text-xl laptop:leading-2rem font-lander-grande text-[#1E3932] font-normal not-italic text-center z-[2] ">
              Starbucks is committed to sustainability and helping the planet.
              We ethically source our coffee, caring for the environment and
              communities. We reduce waste with recyclable and reusable
              packaging and cut down on single-use plastics.
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
              We invest in renewable energy and make our stores
              energy-efficient. Starbucks also supports reforestation and water
              conservation projects, working towards a greener future for
              everyone.
            </p>
          </div>
        </div>
      </div>
      <div className="page h-screen w-full z-40">
        <div className="image-section h-screen  flex flex-col items-center justify-around w-full">
          <div className="w-full h-[40%] flex item-center justify-center">
            <Image
              src="/images/environment1.png"
              alt="Environment Image"
              width={500}
              height={500}
              className="object-cover w-[60vw] h-[28vh] mbXSmall:w-[55vw] mbXSmall:h-[35vh] mbSmall:w-[35vw] mbSmall:h-[36vh] laptop:w-[38vw] laptop:h-[40vh] tbLandscape:w-[40vw] tbLandscape:h-[43vh]"
            />
          </div>
          <div className="flex items-center justify-evenly w-full h-[40%]">
            <Image
              src="/images/environment2.png"
              alt="Environment Image"
              width={500}
              height={500}
              className=" object-cover mbXSmall:object-contain w-[45vw] h-[28vh] mbXSmall:w-[35vw] mbXSmall:h-[33vh] mbSmall:w-[28vw] mbSmall:h-[31vh] laptop:w-[30vw] laptop:h-[35vh] tbLandscape:w-[32vw] tbLandscape:h-[38vh] self-start"
            />
            <Image
              src="/images/environment3.png"
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
