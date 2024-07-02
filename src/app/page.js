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
import Pin from "@/components/Pin/Pin";

export default function Home() {
  // useEffect(() => {
  //   (async () => {
  //     const LocomotiveScroll = (await import("locomotive-scroll")).default;
  //     const locomotiveScroll = new LocomotiveScroll();
  //   })();
  // }, []);
  const [loaded, setLoaded] = useState(false);
  const navbarLogoRef = useRef(null);

  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);

  return (
    <div className="relative">
      {/* {!loaded && <Loader onLoaded={() => setLoaded(true)} />} */}
      {/* ${
          loaded ? "opacity-100" : "opacity-0"
        } */}
      <div
        className={`flex flex-col  max-w-[100vw] transition-opacity duration-500   `}
      >
        <Navbar ref={navbarLogoRef} productPage={false} />
        <HeroSection />
        <div className="flex flex-col  max-w-[100vw] gap-6">
          <Products />
          {/* <AboutUs /> */}
          {/* <Pin />  */}
          <NewFlavours />
          <Flavours />
          <Environment />
          <Footer />
        </div>
      </div>
    </div>
  );
}
