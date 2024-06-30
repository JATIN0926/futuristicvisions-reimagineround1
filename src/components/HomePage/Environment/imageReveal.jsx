import React, { useRef, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ImageReveal = ({ images, altText, animationStyle = 'fade-in' }) => {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);
    const imageArray = Array.isArray(images) ? images : [images];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const { ref, inView } = useInView({ threshold: 0.5 });

    useEffect(() => {
      setIsVisible(inView);
    }, [inView]);

    // Change to the next image every 5 seconds
    useEffect(() => {
        if (images) {
      const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
      }, 5000); // Change image every 5 seconds

      return () => clearInterval(interval);}

    }, [images]);

    const variants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    };

    const transition = { duration: 0.7, ease: 'easeInOut' };

    return (
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        transition={transition}
        className="relative h-[30rem] w-[20rem]"
      >
        <img
          ref={imageRef}
          src={images && images.length > 0 ? images[currentImageIndex] : '/images/environment1.png'}
          alt={altText}
          className="absolute inset-0 object-cover w-full h-full"
        />
      </motion.div>
    );
};

export default ImageReveal;