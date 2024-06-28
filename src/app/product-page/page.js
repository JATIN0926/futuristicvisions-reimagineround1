import Navbar from "@/components/HomePage/Navbar/Navbar";
import ProductsList from "@/components/ProductPage/ProductsList/ProductsList";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar />
      <ProductsList />
    </div>
  );
};

export default page;
