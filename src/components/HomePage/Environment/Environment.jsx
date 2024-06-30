"use client";
import React from "react";
import { motion } from "framer-motion"
import Image from "next/image";
import "./style.css";
import ImageReveal from "./imageReveal";


const images = [
  '/images/environment1.png',
  '/images/environment2.png',
  '/images/environment3.png',
];
const Environment = () => {
  return <div
  className="outer-container"
>
  <div
    className="relative w-full min-h-screen bg-[#F1F0EA] max-w-full flex flex-row items-center justify-center gap-5 text-[#006240]"
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
      STARBUCK'S ENVIRONMENTAL COMMITMENT
      </p>
      <h1
        
        className="text-5xl leading-snug font-lander-grande"
      >
  
      </h1>
      <p className="text-lg leading-relaxed font-sodo-sans font-normal not-italic text-center z-[2] ">
      Starbucks is committed to sustainability and helping the planet. We ethically source our coffee, caring for the environment and communities. We reduce waste with recyclable and reusable packaging and cut down on single-use plastics.
      </p>
      <div className="whitespace-nowrap ">
          <div id="scrollbox" 
          className="!m-0 relative top-[-2rem] left-[6.125rem] h-auto w-[130vw] whitespace-nowrap inline-block z-[0]">
            <h1 className="m-0 flex-1 h-auto relative pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block  max-w-full mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem] text-[#FAF6F3]">
              We care about the Air we breath
            </h1>
            <h1 className="m-0  flex-1 h-auto relative pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block  max-w-full mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem] text-[#FAF6F3]">
              We care about the Air we breath
            </h1>
            <h1 className="m-0  flex-1 h-auto relative pl-[2rem] tracking-[0.23em] leading-[5rem] font-normal font-inherit inline-block  max-w-full mbMedium:text-[5.625rem] mbMedium:leading-[5rem] mbMini:text-[1.563rem] mbMini:leading-[2rem] text-[#FAF6F3]">
              We care about the Air we breath
            </h1>
          </div></div>
      
      <div className="box-border relative  top-[-5rem] w-[32.313rem] h-[1.063rem] border-t-[1px] border-solid border-color-700 z-[5]" />
      <p className="mt-[-5rem] text-lg leading-relaxed font-sodo-sans font-normal  not-italic text-center z-[2]">
      We invest in renewable energy and make our stores energy-efficient. Starbucks also supports reforestation and water conservation projects, working towards a greener future for everyone.
      </p>
      
     {/* <ImageReveal className="z-[999]"
        imageUrl="/images/environment1.png"
        altText="Your image description"
        animationStyle="slide-up" 
      /> */}
    </motion.div>
    <div className="flex ">
      <ImageReveal images={images} altText="Environment Images" />
    </div>
  </div>
</div>
};

export default Environment;
