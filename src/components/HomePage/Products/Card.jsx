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
      if (count === 0 && cursorVisible && !product.outOfStock) {
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
      className={`group relative hover:scale-[1.03] transition-all duration-300  ${
        product.outOfStock ? "grayscale" : ""
      }  p-4 overflow-hidden m-2 h-[18rem] mbSmall:h-[21rem] tbLandscape:h-[24rem] bg-white rounded-md flex flex-col items-start justify-start flex-grow-0 flex-shrink-0 min-w-0 basis-[70%] mbXSmall:basis-[45%] mbSmall:basis-[40%] mbMedium:basis-[30%] laptop:basis-[28%] tbPortrait:basis-[22%] card`}
      onClick={handleCardClick}
    >
      <div className="w-[10rem] h-16 z-50 absolute left-[15%] top-[55%]">
        <Image src="/images/shadow.png" fill alt="veg" />
      </div>
      {product.outOfStock ? (
        <div className="w-32 h-8 absolute left-2 top-3 bg-[#EBFEF4]  rounded-lg">
          <Image
            src="/icons/outOfStock.svg"
            fill
            alt="outOfStock"
            sizes="calc(50vw - 40px)"
          />
        </div>
      ) : product.veg ? (
        <div className="w-4 h-4 absolute left-3 top-3">
          <Image src="/icons/veg.svg" fill alt="veg" />
        </div>
      ) : (
        <div className="w-4 h-4 absolute left-3 top-3">
          <Image src="/icons/nonVeg.svg" fill alt="non-veg" />
        </div>
      )}

      <div className="absolute bottom-0 left-0 w-[200%] h-[200%] bg-[#F0DFB0] rounded-full transform -translate-x-[50%] translate-y-[70%] transition-transform duration-300 group-hover:translate-y-[60%]"></div>
      {count > 0 && !product.outOfStock && (
        <div
          className={`absolute z-20 text-sm top-5 right-5 rounded-full font-semibold border-[1.5px] border-[#00A062] text-[#00A062] font-sodo-sans flex items-center justify-between p-1.5 w-[4.5rem] cursor-pointer`}
          onMouseEnter={() => setCursorVisible(false)}
          onMouseLeave={() => setCursorVisible(true)}
        >
          <Image
            src="/icons/minus.png"
            width={14}
            height={16}
            alt=""
            onClick={(e) => {
              e.stopPropagation();
              handleCountChange(-1);
            }}
            sizes="220px"
          />
          {count}
          <Image
            src="/icons/Plus.png"
            width={14}
            height={14}
            alt=""
            onClick={(e) => {
              e.stopPropagation();
              handleCountChange(1);
            }}
            sizes="220px"
          />
        </div>
      )}
      <div className="relative z-10 flex flex-col items-center h-full justify-between w-full">
        {product.tags.includes("Frappuccino") ? (
          <div className="h-[60%] w-[60%] top-6 relative">
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                fill
                alt={product.name}
                className=" object-contain rounded-lg aspect-square"
                sizes="(min-width: 1000px) calc(19.35vw - 16px), (min-width: 800px) calc(27.22vw - 31px), (min-width: 600px) calc(36.11vw - 30px), (min-width: 400px) calc(40.56vw - 29px), calc(63.75vw - 31px)"
              />
            </div>
          </div>
        ) : (
          <div className="h-[90%] w-[90%] relative">
            <div className="relative w-full h-full">
              <Image
                src={product.image}
                fill
                alt={product.name}
                className=" object-contain rounded-lg aspect-square"
                sizes="(min-width: 1000px) calc(19.35vw - 16px), (min-width: 800px) calc(27.22vw - 31px), (min-width: 600px) calc(36.11vw - 30px), (min-width: 400px) calc(40.56vw - 29px), calc(63.75vw - 31px)"
              />
            </div>
          </div>
        )}
        <div className="w-full font-sodo-sans">
          <h1 className="text-sm mbXSmall:text-[0.75rem] laptop:text-lg  text-start font-semibold">
            {product.name}
          </h1>
          <p className="font-medium text-[0.8rem] mbXSmall:text-sm mbSmall:text-base">
            {product.price}
          </p>
        </div>
      </div>
      {cursorVisible && count === 0 && !product.outOfStock && (
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
