"use client";
import { useEffect, useRef, useState } from "react";

import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import Flavours from "@/components/HomePage/Flavours/Flavours";
import Footer from "@/components/HomePage/Footer/Footer";
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
  const [loaded, setLoaded] = useState(false);
  const navbarLogoRef = useRef(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative">
      {!loaded && <Loader onLoaded={() => setLoaded(true)} />}
      <div
        className={`flex flex-col  max-w-[100vw] transition-opacity duration-500 ${
          loaded ? "opacity-100" : "opacity-0"
        }`} // I removed "gap-8" from the class and it fixed the nav bar.
      >
        <Navbar ref={navbarLogoRef} productPage={false} />
        <HeroSection />
        <Products />
        {/* <AboutUs /> */}
        <NewFlavours />
        <Flavours />
        {/* <Environment /> */}
        <Footer />
      </div>
    </div>
  );
}
