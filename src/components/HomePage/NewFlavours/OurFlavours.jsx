import React from "react";
import Image from "next/image";

const OurFlavours = ({ children }) => {
  return (
    <div className="relative w-[6rem] h-[6rem] mbXSmall:w-[8rem] mbXSmall:h-[8rem] mbSmall:w-40 mbSmall:h-40 mbMedium:w-[10rem] mbMedium:h-[10rem] tbPortrait:w-[13rem] tbPortrait:h-[13rem] flex items-center justify-center">
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
