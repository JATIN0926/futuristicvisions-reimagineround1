import React from "react";

const Column = ({ heading, p1, p2, p3, p4 }) => {
  return (
    <div className="flex flex-col items-start justify-between h-full">
      <h1 className="font-semibold cursor-pointer">{heading}</h1>
      <p className="font-light cursor-pointer">{p1}</p>
      <p className="font-light cursor-pointer">{p2}</p>
      <p className="font-light cursor-pointer">{p3}</p>
      <p className="font-light cursor-pointer">{p4}</p>
    </div>
  );
};

export default Column;
