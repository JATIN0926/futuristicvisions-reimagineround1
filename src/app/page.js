// "use client";
// import { useState } from "react";
// import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
// import Hero from "@/components/HomePage/Hero/Hero";
// import Navbar from "@/components/HomePage/Navbar/Navbar";
// import Flavours from "@/components/HomePage/Flavours/Flavours";
// import Cursor from "@/components/Cursor/Cursor";

// export default function Home() {
//   const [cursorStyle, setCursorStyle] = useState("");
//   const [cursorText, setCursorText] = useState("");

//   const handleCursorEnter = () => {
//     setCursorStyle(
//       "rounded-full w-24 h-24 flex items-center justify-center text-[#006240] font-semibold text-sm bg-[#F0DFB0] z-20"
//     );
//     setCursorText("Explore Now");
//   };

//   const handleCursorLeave = () => {
//     setCursorStyle("");
//     setCursorText("");
//   };

//   return (
//     <main className="flex flex-col gap-8 max-w-[100vw]">
//       <Cursor cursorStyle={cursorStyle} cursorText={cursorText} />
//       <Navbar />
//       <Hero />
//       <AboutUs />
//       <Flavours
//         onCursorEnter={handleCursorEnter}
//         onCursorLeave={handleCursorLeave}
//       />
//       <AboutUs />
//       <AboutUs />
//       <AboutUs />
//     </main>
//   );
// }

import AboutUs from "@/components/HomePage/AboutUs/AboutUs";
import Hero from "@/components/HomePage/Hero/Hero";
import Navbar from "@/components/HomePage/Navbar/Navbar";
import Flavours from "@/components/HomePage/Flavours/Flavours";
import Footer from "@/components/HomePage/Footer/Footer";

export default function Home() {
  return (
    <main className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar />
      <Hero />
      <AboutUs />
      <Flavours />
      <Footer />
    </main>
  );
}
