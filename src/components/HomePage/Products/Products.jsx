import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import EmblaCarousel from "./EmblaCarousel";
import { gsap } from "gsap";
import { motion } from "framer-motion";
import "./style.css";

const OPTIONS = { dragFree: true };

const Products = () => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const productPageRef = useRef(null);
  const cursorRef = useRef(null);
  const testref = useRef(null);
  const router = useRouter();

  useEffect(() => {
    const cursor = cursorRef.current;
    if (cursor) {
      gsap.set(cursor, { scale: 0, opacity: 0 });
    }

    const handleMouseEnter = () => {
      if (cursorVisible) {
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        });
        document.body.classList.add("hide-cursor");
      }
    };

    const handleMouseLeave = () => {
      if (cursorVisible) {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          ease: "power4.out",
        });
      }
      document.body.classList.remove("hide-cursor");
    };

    const handleMouseMove = (e) => {
      if (!cursorVisible) return;
      const rect = testref.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      gsap.to(cursor, {
        x: mouseX,
        y: mouseY,
        duration: 0.3,
        ease: "power3.out",
      });
    };

    const productPage = productPageRef.current;
    const testContainer = testref.current;
    testContainer.addEventListener("mouseenter", handleMouseEnter);
    testContainer.addEventListener("mouseleave", handleMouseLeave);
    testContainer.addEventListener("mousemove", handleMouseMove);
    productPage.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      testContainer.removeEventListener("mouseenter", handleMouseEnter);
      testContainer.removeEventListener("mouseleave", handleMouseLeave);
      testContainer.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorVisible]);

  const handleMouseEnterCarousel = () => {
    setCursorVisible(false);
    if (cursorRef.current) {
      gsap.to(cursorRef.current, { scale: 0, opacity: 0 });
    }
  };

  const handleMouseLeaveCarousel = () => {
    setCursorVisible(true);
    if (cursorRef.current && testref.current) {
      gsap.to(cursorRef.current, {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        ease: "power4.out",
      });
      document.body.classList.add("hide-cursor");
    }
  };

  const handleCursorClick = () => {
    if (cursorVisible) {
      gsap.to(cursorRef.current, {
        scale: 0.7,
        duration: 0.2,
        ease: "power3.out",
        onComplete: () => {
          router.push("/product-page");
        },
      });
      document.body.classList.remove("hide-cursor");
    }
  };

  return (
    <div
      ref={productPageRef}
      className="w-screen max-w-full max-h-screen pt-12 relative flex flex-col items-center justify-center gap-3 mbMedium:gap-6 tbMedium:gap-10"
    >
      <div
        className="w-full flex items-center justify-center"
        onClick={handleCursorClick}
        ref={testref}
      >
        <motion.div
          ref={cursorRef}
          whileTap={{ scale: 0.6 }}
          className="explore-cursor text-[0.65rem]"
        >
          Explore more
        </motion.div>
        <div className="flex flex-col gap-2 mbMedium:gap-4 tbLandscape:gap-6 items-center justify-center w-[85%] mbXSmall:w-[65%] mbSmall:w-[60%] mbMedium:w-[50%] laptop:w-[35%] tbPortrait:w-[30%]">
          <h2 className="text-[#006240] text-xs mbXSmall:text-sm mbSmall:text-lg mbMedium:text-xl tbMedium:text-2xl font-MaleoTrials-Bold tracking-[0.15rem] mbXSmall:tracking-[0.2rem] mbMedium:tracking-[0.3rem]">
            Order instantly favourite Coffee
          </h2>
          <h1 className="text-[1.7rem] mbXSmall:text-2xl mbSmall:text-4xl tbMedium:text-5xl leading-8 mbSmall:leading-[3rem] text-center font-medium text-[#1E3932] font-lander-grande">
            Add to your cart or explore more.
          </h1>
        </div>
      </div>
      <div
        className="w-full carousel-section"
        onMouseEnter={handleMouseEnterCarousel}
        onMouseLeave={handleMouseLeaveCarousel}
      >
        <EmblaCarousel options={OPTIONS} />
      </div>
    </div>
  );
};

export default Products;
