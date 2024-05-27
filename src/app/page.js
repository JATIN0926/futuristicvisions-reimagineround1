import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Hero from "@/components/HomePage/Hero/Hero";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import { Flavors } from "next/font/google";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar />
      <Hero />
      <AboutUs />
      <Flavors />
    </main>
  );
}
