"use client";
import { useEffect } from "react";

import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Hero from "@/components/HomePage/Hero/Hero";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import Flavours from "@/components/HomePage/Flavours/Flavours";
import Footer from "@/components/HomePage/Footer/Footer";
import Environment from "@/components/HomePage/Environment/Environment";

export default function Home() {
  useEffect(() => {
    (async () => {
      const LocomotiveScroll = (await import("locomotive-scroll")).default;
      const locomotiveScroll = new LocomotiveScroll();
    })();
  }, []);
  return (
    <main className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar />
      <Hero />
      <AboutUs />
      <Flavours />
      <Environment />
      <Footer />
    </main>
  );
}
