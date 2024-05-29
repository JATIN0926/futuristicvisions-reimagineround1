"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { useRef } from "react";

const Flavours = () => {
  // const containerRef = useRef();
  // useGSAP(() => {
  //   gsap.from(".container .text", {
  //     transform: "translateX(-150%)",
  //     scrollTrigger: {
  //       trigger: ".container",
  //       scroller: "body",
  //       markers: true,
  //       start: "top 20%",
  //       end: "top -100%",
  //       scrub: 2,
  //       pin: true,
  //     },
  //   });
  // });
  return (
    <div className="relative container  w-full px-10 py-20 bg-[#006240] flex items-center justify-center gap-5 text-white">
      <div
        className="flex flex-col items-start justify-center gap-3 w-1/2"
        // ref={containerRef}
      >
        <p className="text-xl font-semibold tracking-[0.3rem] font-MaleoTrials-Bold">
          Never Compromise Your Taste
        </p>
        <h1 className="text-5xl leading-snug font-lander-grande text">
          Authentically Sourced Coffee Beans
        </h1>
        <p className="text-lg  leading-relaxed font-sodo-sans font-normal not-italic">
          At Starbucks, you can choose from a wide variety of flavors, or tweak
          your drink to match your personal taste. Enjoy a customized coffee
          experience made just for you.
        </p>
      </div>

      <div className="w-[30%] h-[30rem] relative">
        <Image
          src="/images/flav1.png"
          alt="flav1"
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
};

export default Flavours;
