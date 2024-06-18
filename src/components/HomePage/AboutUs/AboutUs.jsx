"use client";
import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";
import cursorEffect from "./script";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";



const AboutUs = () => {
  return <div
  className="outer-container" id="aboutUs"
>
<div id="cursor" className="fixed  !m-0 !p-0 translate-x-[-50%] translate-y-[50%] min-h-[7vw] min-w-[7vw] bg-[#006240] box-border text-white rounded-full z-[99] flex items-center font-700 justify-center">About Us</div>
  <div
    className="relative w-full min-h-screen bg-[#F1F0EA] max-w-full flex flex-row items-center justify-center gap-5 z-0 text-[#006240]"
  >
    
    <motion.div 
    
    initial={{
      y: 100,
      opacity: 0
    }}
    animate={{
     y: 0,
      opacity: 1
    }}
    transition={{
      duration: 0.5,
      delay:0.5
    }}
    className="flex flex-col items-center justify-center gap-3 w-1/2">
      <p className="text-xl font-semibold tracking-[0.3rem] font-MaleoTrials-Bold">
       STARBUCKS - YOUR HOME AWAY FROM HOME
      </p>
      <h1
        
        className="text-5xl leading-snug font-lander-grande"
      >
  
      </h1>
      <p className="text-lg leading-relaxed font-sodo-sans font-normal not-italic text-center z-[2] ">
      From the moment you step in, you'll be greeted with a smile and a familiar warmth that makes you feel right at home. Our comfortable seating, free Wi-Fi, and personalised service ensure that whether you're catching up with friends, working, or simply taking a break, you'll always find your perfect spot at Starbucks.
      </p>
      <div
    
      className="!m-0 relative top-[-2rem] left-[6.125rem] h-auto w-[110vw] overflow-hidden flex flex-row items-start justify-start z-[0]">
      <h1 
      className="m-0 flex-1 h-auto relative tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block whitespace-nowrap max-w-full mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem] text-[#FAF6F3]">
            Experience coffee like home
          </h1>
          </div>
      
      <div className="box-border relative  top-[-5rem] w-[32.313rem] h-[1.063rem] border-t-[1px] border-solid border-color-700 z-[5]" />
      <p className="mt-[-5rem] text-lg leading-relaxed font-sodo-sans font-normal  not-italic text-center z-[2]">
      Instead of many components, we offer one seamless experience. Quality beans are sourced ethically, expert baristas craft each drink to your taste, and our welcoming stores provide a cozy atmosphere for you to relax and enjoy your coffee.
      </p>

    </motion.div>
  </div>
</div>
};

export default AboutUs;
