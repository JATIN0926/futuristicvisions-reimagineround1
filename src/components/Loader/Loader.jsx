import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

const textStages = ["Starbucks", "Taste", "Like Home"];

const Loader = ({ onLoaded }) => {
  const [stage, setStage] = useState(0);
  const loadingLogoRef = useRef(null);
  const [navbarLogoPosition, setNavbarLogoPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timers = [
      setTimeout(() => setStage(1), 1000), // Change text to "Taste"
      setTimeout(() => setStage(2), 2000), // Change text to "Like Home"
      setTimeout(() => setStage(3), 3000), // Hide text
      setTimeout(() => setStage(4), 4000), // Move logo to navbar position
      setTimeout(() => onLoaded(), 5000), // Show homepage content
    ];

    return () => timers.forEach((timer) => clearTimeout(timer));
  }, [onLoaded]);

  useEffect(() => {
    if (stage === 4) {
      const navbarLogoRect = document
        .getElementById("navbar-logo")
        .getBoundingClientRect();
      const loadingLogoRect = loadingLogoRef.current.getBoundingClientRect();

      const x =
        navbarLogoRect.left +
        navbarLogoRect.width / 2 -
        (loadingLogoRect.left + loadingLogoRect.width / 2);
      const y = navbarLogoRect.top - loadingLogoRect.top;

      setNavbarLogoPosition({ x, y });
    }
  }, [stage]);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <motion.div className="flex items-center justify-center relative">
        <motion.img
          ref={loadingLogoRef}
          src="/icons/starbucks_logo.png"
          alt="Starbucks Logo"
          className="w-10 h-10 mr-4"
          animate={
            stage === 4
              ? { x: navbarLogoPosition.x, y: navbarLogoPosition.y }
              : {}
          }
          transition={{ duration: 0.85, ease: "easeInOut" }}
        />
        <div className="relative w-40 h-6 overflow-hidden">
          {textStages.map((text, index) => (
            <motion.h1
              key={index}
              className="absolute text-[#006240] font-bold w-full text-left text-2xl font-sodo-sans"
              initial={{ y: "100%", opacity: 1 }}
              animate={{
                y: stage === index ? 0 : stage > index ? "-100%" : "100%",
                opacity:
                  stage === index ? 1 : stage === 3 && index === 2 ? 0 : 1,
              }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {stage === index || (stage === 2 && index === 2) ? text : ""}
            </motion.h1>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Loader;
