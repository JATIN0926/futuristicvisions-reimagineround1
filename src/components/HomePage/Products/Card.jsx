import Image from "next/image";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import "./style.css";

const Card = ({ product }) => {
  const [cursorVisible, setCursorVisible] = useState(true);
  const [count, setCount] = useState(0);
  const cardRef = useRef(null);
  const cursorRef = useRef(null);

  useGSAP(() => {
    if (cursorRef.current) {
      gsap.set(cursorRef.current, { scale: 0, opacity: 0 });
    }

    const handleMouseEnter = () => {
      if (count === 0 && cursorVisible) {
        gsap.to(cursorRef.current, {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power4.out",
        });
        document.body.classList.add("hide-cursor");
      } else {
        document.body.classList.remove("hide-cursor");
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        ease: "power4.out",
      });
      document.body.classList.remove("hide-cursor");
    };

    const handleMouseMove = (e) => {
      if (!cursorVisible) return;

      const rect = cardRef.current.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      gsap.to(cursorRef.current, {
        x: mouseX,
        y: mouseY,
        duration: 0.5,
        ease: "power4.out",
      });
    };

    const card = cardRef.current;
    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);
    card.addEventListener("mousemove", handleMouseMove);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
      card.removeEventListener("mousemove", handleMouseMove);
    };
  }, [cursorVisible, count]);

  const handleCountChange = (increment) => {
    setCount((prevCount) => Math.max(prevCount + increment, 0));
    if (count + increment > 0) {
      setCursorVisible(false);
      document.body.classList.remove("hide-cursor");
    } else {
      setCursorVisible(true);
    }
  };

  const handleCardClick = () => {
    if (count === 0) {
      handleCountChange(1);
    }
  };

  return (
    <div
      ref={cardRef}
      className="group relative p-4 overflow-hidden m-2 h-[21rem] bg-white rounded-lg flex flex-col items-start justify-start flex-grow-0 flex-shrink-0 min-w-0 basis-1/2 laptop:basis-[22%] mbMedSmall:basis-3/5 mbXSmall:basis-3/4 mbMini:basis-[95%] tbLandscape:basis-4/12 card"
      onClick={handleCardClick}
    >
      <div className="absolute bottom-0 left-0 w-[200%] h-[200%] bg-[#F0DFB0] rounded-full transform -translate-x-[50%] translate-y-[70%] transition-transform duration-300 group-hover:translate-y-[60%]"></div>
      {count > 0 && (
        <div
          className={`absolute z-20 top-5 right-5 rounded-full font-semibold border-[1.5px] border-[#00A062] text-[#00A062] font-sodo-sans flex items-center justify-between p-2 w-[5rem] cursor-pointer`}
          onMouseEnter={() => setCursorVisible(false)}
          onMouseLeave={() => setCursorVisible(true)}
        >
          <Image
            src="/icons/minus.png"
            width={16}
            height={20}
            alt=""
            onClick={(e) => {
              e.stopPropagation();
              handleCountChange(-1);
            }}
          />
          {count}
          <Image
            src="/icons/Plus.png"
            width={16}
            height={16}
            alt=""
            onClick={(e) => {
              e.stopPropagation();
              handleCountChange(1);
            }}
          />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center h-full justify-between w-full">
        <div className="h-[90%] mt-5 w-[100%] relative">
          <Image
            src={product.image}
            fill
            alt={product.name}
            className="object-cover"
          />
        </div>
        <div className="w-full font-sodo-sans">
          <h1 className="text-lg text-start font-semibold">{product.name}</h1>
          <p className="font-medium">{product.price}</p>
        </div>
      </div>
      {cursorVisible && count === 0 && (
        <motion.div
          ref={cursorRef}
          whileTap={{ scale: 0.6 }}
          className="custom-cursor text-[0.65rem]"
        >
          Add to cart
        </motion.div>
      )}
    </div>
  );
};

export default Card;
