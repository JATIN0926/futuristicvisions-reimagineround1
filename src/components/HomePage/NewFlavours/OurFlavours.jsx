import React from "react";
import Image from "next/image";

const OurFlavours = ({ children }) => {
  return (
    <div className="relative w-40 h-40 mbMedium:w-48 mbMedium:h-48 tbPortrait:w-[13rem] tbPortrait:h-[13rem] flex items-center justify-center">
      <Image
        fill
        className="object-contain"
        src="/images/curve_text.png"
        alt=""
        sizes="(min-width: 1200px) 208px, (min-width: 800px) 192px, 160px"
      />
      {children}
    </div>
  );
};

export default OurFlavours;
