"use client";
import Card from "@/components/HomePage/Products/Card";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import products from "@/data/ProductData";
import gsap from "gsap";
import { easeOut } from "framer-motion";
import { useGlobal } from "@/context/GlobalContext";

const ProductsList = () => {
  const { selectedCategory, setSelectedCategory } = useGlobal();
  const [selectedTag, setSelectedTag] = useState("All Products");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [filteredProducts, setfilteredProducts] = useState([]);
  useEffect(() => {
    const filteredProducts = products.filter((item) =>
      item.tags.includes(selectedTag)
    );
    setfilteredProducts(filteredProducts);
  }, [selectedTag]);

  useEffect(() => {
    if (selectedCategory) {
      setSelectedTag(selectedCategory);
      animate();
      console.log(selectedCategory);
    }
  }, [selectedCategory]);

  const animate = () => {
    gsap.fromTo(
      ".products_list",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: easeOut }
    );
  };
  const categories = [
    "All Products",
    "Most Popular",
    "Coffee",
    "Tea",
    "Frappuccino",
    "Food",
    "Espresso drink",
    "New flavours",
    "Other Beverages",
    "Coffee at home",
    "Merchandise",
  ];

  const handleCategoryClick = (tag) => {
    setSelectedTag(tag);
    setSelectedCategory("");
    setDropdownOpen(false);
  };

  return (
    <div
      id="products-list-section"
      className="w-screen max-w-full flex items-start justify-center p-1 mbSmall:p-2 py-4"
    >
      <div className="w-[95%] laptop:w-[85%]">
        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <div className="w-full items-center justify-between hidden mbMedium:flex">
            <h1 className="font-MaleoTrials-Medium text-3xl font-light text-[#006240]">
              Shop in Comfort
            </h1>
            <div className="flex items-center justify-center w-[45%] laptop:w-[35%] tbPortrait:w-[30%]">
              <button className="bg-[#02754B] rounded-md text-white p-1.5 pl-4 w-[45%] laptop:w-[50%] flex items-center justify-start gap-2">
                <Image
                  src="/icons/accessible.svg"
                  width={20}
                  height={20}
                  alt=""
                  priority
                />
                <h1 className="text-sm laptop:text-lg font-medium">Dine In</h1>
              </button>
              <button className="bg-white rounded-md p-1.5 pl-4 w-[50%] flex items-center justify-start gap-2">
                <Image src="/icons/Basket.svg" width={20} height={20} alt="" />
                <h1 className="text-sm laptop:text-lg font-medium">
                  Take Away
                </h1>
              </button>
            </div>
          </div>
          <div className="hidden mbMedium:flex items-center justify-between w-full">
            {categories.map((tag) => (
              <h1
                key={tag}
                className={` text-base hover:text-[#02754B] transition-all duration-200 laptop:text-xl cursor-pointer font-normal font-MaleoTrials-Regular tracking-wider ${
                  selectedTag === tag
                    ? "text-[#02754B] underline"
                    : "text-[#B0B0B0]"
                }`}
                onClick={() => {
                  handleCategoryClick(tag);
                  // setSelectedTag(tag);
                  animate();
                }}
              >
                {tag}
              </h1>
            ))}
          </div>
          {/* Mobile View */}
          <div className="flex flex-col w-full items-start justify-center gap-5 mbMedium:hidden">
            <h1 className="font-MaleoTrials-Medium text-2xl mbSmall:text-3xl font-light text-[#006240]">
              Shop in Comfort
            </h1>
            <div className="flex items-center justify-between w-full relative">
              <div className="flex items-center justify-center w-[60%] laptop:w-[35%] tbPortrait:w-[30%]">
                <button className="bg-[#02754B] rounded-md text-white p-1.5 pl-4 w-[49%] mbXSmall:w-[40%] mbSmall:w-[45%] laptop:w-[50%] flex items-center justify-start font-light gap-0.5 mbXSmall:gap-1 mbSmall:gap-2">
                  <Image
                    src="/icons/WheelChair.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="w-[0.8rem] h-[0.8rem] mbSmall:w-[1.2rem] mbSmall:h-[1.2rem]"
                    sizes="(max-width: 768px) 16px, 20px"
                  />
                  <h1 className=" text-[0.6rem] mbXSmall:text-xs mbSmall:text-sm laptop:text-lg font-light mbSmall:font-medium">
                    Dine In
                  </h1>
                </button>
                <button className="bg-white rounded-md p-1.5 pl-4  w-[60%] mbXSmall:w-[50%] mbSmall:w-[50%] flex items-center justify-start gap-0.5 mbXSmall:gap-1 mbSmall:gap-2">
                  <Image
                    src="/icons/Basket.svg"
                    width={20}
                    height={20}
                    alt=""
                    className="w-[0.8rem] h-[0.8rem] mbSmall:w-[1.2rem] mbSmall:h-[1.2rem]"
                    sizes="(max-width: 768px) 16px, 20px"
                  />
                  <h1 className=" text-[0.6rem] mbXSmall:text-xs mbSmall:text-sm laptop:text-lg font-light mbSmall:font-medium">
                    Take Away
                  </h1>
                </button>
              </div>
              <button
                className="rounded-full px-1.5 mbXSmall:px-2.5 mbSmall:px-4 p-0.5 mbSmall:p-1 border-[1.5px] border-[#02754B] flex items-center justify-center gap-1 mbXSmall:gap-2"
                onClick={() => setDropdownOpen(!dropdownOpen)}
              >
                <h1 className=" text-sm mbXSmall:text-lg mbSmall:text-xl text-[#02754B] font-MaleoTrials-Medium">
                  {selectedTag}
                </h1>
                <Image
                  src="/icons/DropDown.svg"
                  width={18}
                  height={18}
                  alt=""
                />
              </button>
              <div
                className={`absolute w-[30%]  right-0 mt-2 shadow-lg rounded-lg bg-white top-full z-20 transition-all duration-500 ease-in-out overflow-hidden ${
                  dropdownOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div className="flex flex-col items-start justify-center gap-2 p-4">
                  {categories.map((tag) => (
                    <h1
                      key={tag}
                      className={` text-base mbXSmall:text-lg mbSmall:text-xl cursor-pointer font-normal font-MaleoTrials-Regular tracking-wide ${
                        selectedTag === tag
                          ? "text-[#02754B] underline"
                          : "text-[#B0B0B0]"
                      }`}
                      onClick={() => {
                        handleCategoryClick(tag);
                        animate();
                      }}
                    >
                      {tag}
                    </h1>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="w-[103%] products_list flex items-center  justify-center gap-y-8 gap-x-[0.8rem] laptop:gap-x-[1.25rem] flex-wrap">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product, index) => (
                <Card key={index} product={product} />
              ))
            ) : (
              <div className="w-full h-[30vh] mbSmall:h-[50vh] flex flex-col gap-8 items-center justify-center">
                <h1 className=" text-6xl mbSmall:text-9xl tracking-[0.1rem] text-[#E7E7E7] font-MaleoTrials-Bold">
                  Out of stock
                </h1>
                <p className="  text-xl mbSmall:text-2xl tracking-[0.1rem] text-[#D1D1D1] font-MaleoTrials-Bold">
                  We will get back to you soon
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsList;
