

import Navbar from "@/components/HomePage/Navbar/Navbar";
import ProductsList from "@/components/ProductPage/ProductsList/ProductsList";
import React from "react";
import Bento from "@/components/ProductPage/BentoGrid/Bento";

const page = () => {
  return (
    <div className="flex flex-col gap-8 max-w-[100vw]">
      <Navbar productPage={true} />
       <Bento />
      <ProductsList />
    </div>
  );
};

export default page;