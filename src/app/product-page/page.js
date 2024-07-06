import Navbar from "@/components/HomePage/Navbar/Navbar";
import ProductsList from "@/components/ProductPage/ProductsList/ProductsList";
import React from "react";
import Bento from "@/components/ProductPage/BentoGrid/Bento";
import GiftCard from "@/components/ProductPage/GiftCard/GiftCard";

const page = () => {
  return (
    <>
      <Navbar productPage={true} />
      <div className="flex flex-col gap-[7rem] max-w-[100vw]">
        <Bento />
        <GiftCard />
        <ProductsList />
      </div>
    </>
  );
};

export default page;
