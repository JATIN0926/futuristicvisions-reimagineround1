"use client";

import React, { useEffect, useRef } from "react";
import "./style.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const GiftCard = () => {
  const imagesRef = useRef([]);

  useEffect(() => {
    // GSAP timeline for staggered bounce effect
    gsap.timeline().to(imagesRef.current, {
      y: 100,
      //   opacity: 1,
      duration: 0.3,
      ease: "circ.inOut",
      //   ease: 'bounce.out',
      stagger: 0.1,
      onComplete: () => {
        gsap.to(imagesRef.current, {
          y: -150,
          duration: 0.3,
          // opacity: 1,
          stagger: 0.1,
          onComplete: () => {
            gsap.to(imagesRef.current, {
              y: 0,
              duration: 0.3,
              stagger: 0.1,
            });
          },
        });
      },
    });
  }, []);

  return (
    <>
      <div className="w-screen max-w-full flex items-center justify-center max-h-70">
        <div className="gift-card-sec">
          <div className="sec-text">
            <h2 className="font-MaleoTrials-Bold tracking-wider text-2xl ml-14 mt-14 mb-9">
              Share Joy With Others
            </h2>
            <h1 className="font-lander-grande text-5xl font-medium ml-14 my-4 mb-9">
              Gift Cards
            </h1>
            <h3 className="font-sodo-sans ml-14">
              Whether it is for a birthday, a thank you, or just because, a
              Starbucks gift cardis a heartfelt gesture that lets them savour
              their favourite drinks and treats{" "}
            </h3>
          </div>
          <div className="sec-images">
            <img
              ref={(el) => (imagesRef.current[0] = el)}
              className="img-left image mr--5"
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
    </>
  );
};

export default GiftCard;
