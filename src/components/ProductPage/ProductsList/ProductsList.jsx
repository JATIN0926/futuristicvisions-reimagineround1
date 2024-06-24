"use client";
import Card from "@/components/HomePage/Products/Card";
import Image from "next/image";
import React, { useState } from "react";
import products from "@/data/ProductData";
const ProductsList = () => {
  const [selectedTag, setselectedTag] = useState("All Products");

  const filteredProducts = products.filter((item) =>
    item.tags.includes(selectedTag)
  );
  return (
    <div className="w-screen max-w-full flex items-start justify-center p-2 py-4">
      <div className="w-[85%]">
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <div className="w-full flex items-center justify-between">
            <h1 className=" font-MaleoTrials-Bold text-3xl font-light text-[#006240]">
              Shop in Comfort
            </h1>
            <div className="flex items-center justify-center w-[30%]">
              <button className="bg-[#02754B] rounded-md text-white p-1.5 pl-4 w-[50%] flex items-center justify-start gap-2">
                <Image
                  src="/icons/WheelChair.svg"
                  width={20}
                  height={20}
                  alt=""
                />
                <h1 className="text-lg font-medium">Dine In</h1>
              </button>
              <button className="bg-white rounded-md p-1.5 pl-4 w-[50%] flex items-center justify-start gap-2">
                <Image src="/icons/Basket.svg" width={20} height={20} alt="" />
                <h1 className="text-lg font-medium">Take Away</h1>
              </button>
            </div>
          </div>
          <div className="flex items-center justify-between w-full">
            {" "}
            {[
              "All Products",
              "Most Popular",
              "Coffee",
              "Tea",
              "Frappuccino",
              "Food",
              "Espresso drink",
              "New flavours",
              "Merchandise",
            ].map((tag) => (
              <h1
                key={tag}
                className={`text-xl cursor-pointer font-light font-MaleoTrials-Bold tracking-wide ${
                  selectedTag === tag
                    ? "text-[#02754B] underline"
                    : "text-[#B0B0B0]"
                }`}
                onClick={() => setselectedTag(tag)}
              >
                {tag}
              </h1>
            ))}
          </div>
          <div className="w-full flex items-center justify-start gap-5 flex-wrap">
            {filteredProducts.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
