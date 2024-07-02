import React from "react";

const Column = ({ heading, p1, p2, p3, p4, mobile }) => {
  return (
    <div
      className={`flex flex-col items-start ${
        mobile ? "gap-5" : "justify-between"
      } justify-between h-full text-[0.55rem] mbXSmall:text-xs mbSmall:text-sm laptop:text-base tbMedium:text-lg tbLandscape:text-xl`}
    >
      <h1 className="font-semibold cursor-pointer hover:text-[#F0DFB0] transition-all">
        {heading}
      </h1>
      <p className="font-light cursor-pointer hover:text-[#F0DFB0] transition-all">
        {p1}
      </p>
      <p className="font-light cursor-pointer hover:text-[#F0DFB0] transition-all">
        {p2}
      </p>
      <p className="font-light cursor-pointer hover:text-[#F0DFB0] transition-all">
        {p3}
      </p>
      <p className="font-light cursor-pointer hover:text-[#F0DFB0] transition-all">
        {p4}
      </p>
    </div>
  );
};

export default Column;
