"use client";

import React, { useEffect, useRef } from "react";
import "./style.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const GiftCard = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    const validImages = imagesRef.current.filter((image) => image !== null);

    if (validImages.length > 0) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".outer-container", // Trigger element
          start: "top 80%", // When the top of the trigger hits 80% of the viewport height
          end: "bottom 20%", // When the bottom of the trigger hits 20% of the viewport height
          toggleActions: "play none none none", // Play the animation on entering the viewport
        },
      });

      tl.to(validImages, {
        y: 100,
        duration: 0.25,
        ease: "circ.inOut",
        stagger: 0.1,
        onComplete: () => {
          gsap.to(validImages, {
            y: -150,
            duration: 0.25,
            stagger: 0.1,
            onComplete: () => {
              gsap.to(validImages, {
                y: 0,
                duration: 0.25,
                stagger: 0.1,
              });
            },
          });
        },
      });
    }
  }, []);

  return (
    <div className="outer-container w-screen max-w-full flex items-center justify-center max-h-70">
      <div className="gift-card-sec flex flex-col mbMedium:flex-row bg-center bg-cover bg-gift-bg ">
        <div className="sec-text p-10 mbMedium:pl-14 gap-3 mbSmall:gap-6 items-center w-[100%] mbMedium:items-start mbMedium:w-[40%]">
          <h2 className="font-MaleoTrials-Bold tracking-[0.2rem] laptop:tracking-[0.4rem] text-sm mbXSmall:text-[1rem] laptop:text-lg tbPortrait:text-2xl">
            Share Joy With Others
          </h2>
          <h1 className="font-lander-grande text-3xl laptop:text-5xl font-medium">
            Gift Cards
          </h1>
          <h3 className="font-sodo-sans text-xs mbXSmall:text-sm text-center mbMedium:text-start laptop:text-base">
            Whether it is for a birthday, a thank you, or just because, a
            Starbucks gift card is a heartfelt gesture that lets them savour
            their favourite drinks and treats.
          </h3>
        </div>
        <div className="sec-images">
          <img
            ref={(el) => (imagesRef.current[0] = el)}
            className="img-left image"
            src="/images/image163-removebg-preview.png"
            alt="image1"
          />
          <img
            ref={(el) => (imagesRef.current[1] = el)}
            className="img-center image"
            src="/images/image164-removebg-preview.png"
            alt="image2"
          />
          <img
            ref={(el) => (imagesRef.current[2] = el)}
            className="img-right image"
            src="/images/image166-removebg-preview.png"
            alt="image3"
          />
        </div>
      </div>
    </div>
  );
};

export default GiftCard;
