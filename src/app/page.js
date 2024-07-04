"use client";
import { useEffect, useRef, useState } from "react";
import { useLoader } from "@/context/LoaderContext";

import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import Flavours from "@/components/HomePage/Flavours/Flavours";
import Environment from "@/components/HomePage/Environment/Environment";
import NewFlavours from "@/components/HomePage/NewFlavours/NewFlavours";
import Products from "@/components/HomePage/Products/Products";
import Loader from "@/components/Loader/Loader";
import HeroSection from "@/components/HomePage/HeroSection/HeroSection";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  const { shouldShowLoader, setShouldShowLoader } = useLoader();
  const [loaded, setLoaded] = useState(!shouldShowLoader);
  const navbarLogoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (shouldShowLoader) {
      setLoaded(false);
    }
  }, [shouldShowLoader]);

  const handleLoaded = () => {
    setLoaded(true);
    setShouldShowLoader(false);
  };

  return (
    <div className="relative">
      {!loaded && <Loader onLoaded={handleLoaded} />}
      <div
        className={`flex flex-col max-w-[100vw] transition-opacity duration-500 gap-8 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar ref={navbarLogoRef} productPage={false} />
        <HeroSection />
        <Products />
        <AboutUs />
        <NewFlavours />
        <Flavours />
        <Environment />
      </div>
    </div>
  );
}
