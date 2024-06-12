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
  const buttonRef = useRef(null);

  const [currentImage, setCurrentImage] = useState("/images/flav1.png");

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
    const container = containerRef.current;
    const textElement = textRef.current;
    const imageElement = imageRef.current;
    const overlayElement = overlayRef.current;

    const totalSections = texts.length;
    const containerHeight = window.innerHeight * totalSections;

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
    });

    ScrollTrigger.create({
      trigger: container,
      start: "top top",
      end: `+=${containerHeight}`,
      pin: true,
      pinSpacing: false,
      scrub: 1,
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

    return () => {
      ScrollTrigger.getAll().forEach((instance) => instance.kill());
    };
  }, [texts, images]);

  return (
    <>
      <div
        className="outer-container"
        style={{ height: `${texts.length * 100}vh` }}
      >
        <div
          ref={containerRef}
          className="relative overflow-x-hidden w-full min-h-screen bg-[#006240] flex items-center justify-center gap-5 text-white"
        >
          <div className="flex flex-col items-start justify-center gap-3 w-1/2">
            <p className="text-xl font-semibold tracking-[0.3rem] font-MaleoTrials-Bold">
              Never Compromise Your Taste
            </p>
            <h1
              ref={textRef}
              className="text-5xl leading-snug font-lander-grande"
            >
              {texts[0]}
            </h1>
            <p className="text-lg leading-relaxed font-sodo-sans w-[95%] font-light not-italic tracking-wide">
              At Starbucks, you can choose from a wide variety of flavors, or
              tweak your drink to match your personal taste. Enjoy a customized
              coffee experience made just for you.
            </p>
          </div>

          <div className="w-[30%] h-[30rem] relative">
            <Image
              ref={imageRef}
              src={currentImage}
              alt="flav"
              fill
              className="object-cover origin-top"
            />
            <div
              ref={overlayRef}
              className="absolute inset-0 bg-[#006240] origin-top overlay pointer-events-none"
            ></div>
          </div>
        </div>
      </div>
      <div className="h-screen w-full max-w-full"></div>
    </>
  );
};

export default Flavours;
