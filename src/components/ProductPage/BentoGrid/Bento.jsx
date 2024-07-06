"use client";
import React, { useState } from "react";
import Image from "next/image";
import "./style.css";
import { useGlobal } from "@/context/GlobalContext";

const Bento = () => {
  const { setSelectedCategory } = useGlobal();

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    document
      .getElementById("products-list-section")
      .scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="w-screen mt-24 max-w-full flex items-start justify-center laptop:p-2 mbMini:p-0 py-4 bg-[#F1F0EA]">
      <div className="w-[85%]">
        <div className="w-full flex items-center  justify-between">
          <h1 className=" font-MaleoTrials-Medium lapotp:text-3xl mbSmall:text-2xl font-light tracking-[0.06rem] text-[#006240]">
            Explore By Category
          </h1>
          <div className="flex items-center justify-center w-[60%] laptop:w-[35%] tbPortrait:w-[30%]">
            <button className="bg-[#02754B] rounded-md text-white p-1.5 pl-4 w-[49%] mbXSmall:w-[40%] mbSmall:w-[45%] laptop:w-[50%] flex items-center justify-start font-light gap-0.5 mbXSmall:gap-1 mbSmall:gap-2">
              <Image
                src="/icons/accessible.svg"
                width={20}
                height={20}
                alt=""
                sizes="(max-width: 768px) 16px, 20px"
                unoptimized
                className="w-[0.8rem] h-[0.8rem] mbSmall:w-[1.2rem] mbSmall:h-[1.2rem]"
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
                sizes="(max-width: 768px) 16px, 20px"
                className="w-[0.8rem] h-[0.8rem] mbSmall:w-[1.2rem] mbSmall:h-[1.2rem]"
              />
              <h1 className=" text-[0.6rem] mbXSmall:text-xs mbSmall:text-sm laptop:text-lg font-light mbSmall:font-medium">
                Take Away
              </h1>
            </button>
          </div>
        </div>
        <div className="!mt-[2rem] laptop:grid grid-cols-2 bg- h-[70vh] laptop:gap-4 mbMini:gap-0 hidden ">
          {/* First column */}
          <div className="col-span-1 inline ">
            {/* Subcolumn 1 */}
            <div className="grid grid-cols-9 grid-rows-subgrid gap-4">
              {/* Rows */}
              <div className="laptop:row-span-15 laptop:col-span-9 laptop:h-[26.2vh] laptop:w-[41.5vw] bg-[url('/images/gridRow1.png')] bg-cover   bg-center"></div>

              <div
                className="menu row-span-14 col-span-5 z-[1] cursor-pointer h-[28.5vh] relative overflow-hidden   bg-white"
                onClick={() => handleCategoryClick("Food")}
              >
                <p className=" p-[0.5rem] z-[4] text-black font-bold">Food</p>
                <Image
                  src="/images/food.png"
                  width={280}
                  height={150}
                  sizes="(min-width: 1340px) 280px, calc(18.44vw + 37px)"
                  className="Image origin-bottom-right absolute z-[2] right-[-2rem] top-[6.2vh]"
                  alt=""
                />
              </div>

              <div
                className="menu row-span-14 cursor-pointer h-[28.5vh] col-span-4 relative overflow-hidden bg-white  "
                onClick={() => handleCategoryClick("Tea")}
              >
                <p className=" p-[0.5rem] text-black font-bold">Tea</p>
                <Image
                  src="/images/tea1.png"
                  width={150}
                  height={150}
                  className="Image  absolute left-[-3rem] top-[10vh]"
                  alt=""
                  sizes="150px"
                />
                <Image
                  src="/images/tea2.png"
                  width={150}
                  height={150}
                  className="Image absolute right-[-3rem] top-[13vh]"
                  alt=""
                  sizes="150px"
                />
              </div>
              <div
                className="menu row-span-14 cursor-pointer h-[26.5vh] relative col-span-3 overflow-hidden    bg-white"
                onClick={() => handleCategoryClick("Merchandise")}
              >
                <p className=" p-[0.5rem] text-black font-bold">Merchandise</p>
                <Image
                  src="/images/merchandise.png"
                  width={200}
                  height={200}
                  className="Image absolute right-[-4.5rem] top-[15vh]"
                  alt=""
                  sizes="(min-width: 1620px) 200px, 12.33vw"
                />
              </div>
              <div
                className="menu   row-span-14 h-[26.5vh] cursor-pointer  col-span-6 relative overflow-hidden bg-white"
                onClick={() => handleCategoryClick("Coffee at home")}
              >
                <p className=" p-[0.5rem] text-black font-bold">
                  Coffee at home
                </p>
                <Image
                  src="/images/coffee.jpg"
                  width={220}
                  height={220}
                  className="Image absolute right-[-3rem] top-[12vh]"
                  alt=""
                  // sizes="220px"
                />
              </div>
            </div>
          </div>

          {/* Second column */}
          <div className="col-span-1 inline ">
            {/* Subcolumn 1 */}
            <div className="grid grid-cols-2 grid-rows-subgrid gap-4">
              {/* Rows */}
              <div
                className="row-span-6 col-span-2 relative flex cursor-pointer   overflow-hidden bg-[#DD92C0] "
                onClick={() => handleCategoryClick("Most Popular")}
              >
                <p className=" absolute top-0 left-0 p-[0.5rem] !pb-[-2rem] text-white font-semibold">
                  Most Popular
                </p>
                <div className="absolute menu  w-max flex flex-row gap-5 pl-5 mr-[2rem] top-3 bottom-[-2] right-0 pr-[1rem] pt-[1rem] space-x-2 items-end justify-end ">
                  <Image
                    src="/images/Coffee_01.png"
                    width={50}
                    height={50}
                    className="Image "
                    alt=""
                    sizes="50px"
                  />
                  <Image
                    src="/images/Coffee_02.png"
                    width={50}
                    height={50}
                    className="Image "
                    alt=""
                    sizes="50px"
                  />
                  <Image
                    src="/images/Coffee_03.png"
                    width={50}
                    height={50}
                    className="Image"
                    alt=""
                    sizes="50px"
                  />
                  <Image
                    src="/images/Coffee_04.png"
                    width={40}
                    height={40}
                    className="Image "
                    alt=""
                    sizes="40px"
                  />
                </div>
              </div>
              <div
                className="menu row-span-15 h-[44.5vh] cursor-pointer relative overflow-hidden col-span-1   bg-white"
                onClick={() => handleCategoryClick("Coffee")}
              >
                <p className=" p-[0.5rem] text-black  font-bold">Coffee</p>
                <Image
                  src="/images/coffeeCup.png"
                  width={250}
                  height={250}
                  className="Image absolute right-[-3rem] top-[16vh]"
                  alt=""
                  sizes="(min-width: 1340px) 250px, calc(16.56vw + 31px)"
                />
              </div>
              <div
                className="menu row-span-15 cursor-pointer h-[44.5vh] relative overflow-hidden col-span-1   bg-white"
                onClick={() => handleCategoryClick("Frappuccino")}
              >
                <p className=" p-[0.5rem] ] text-black  font-bold">
                  Frappuccino
                </p>
                <Image
                  src="/images/frappuccino.png"
                  width={250}
                  height={250}
                  className="Image absolute right-[-3rem] top-[16vh]"
                  alt=""
                  sizes="(min-width: 1340px) 250px, calc(16.56vw + 31px)"
                />
              </div>
              <div
                className="menu row-span-14 cursor-pointer  h-[26.5vh] relative overflow-hidden col-span-1   bg-white"
                onClick={() => handleCategoryClick("Espresso drink")}
              >
                <p className=" p-[0.5rem] ] text-black  font-bold">Espresso</p>
                <Image
                  src="/images/espresso.jpg"
                  width={250}
                  height={250}
                  className=" Image absolute right-[-4rem] top-[4rem]"
                  alt=""
                  sizes="(min-width: 1340px) 250px, calc(16.56vw + 31px)"
                />
              </div>
              <div
                className="menu row-span-14 cursor-pointer h-[26.5vh] relative overflow-hidden col-span-1   bg-white"
                onClick={() => handleCategoryClick("New flavours")}
              >
                <p className=" p-[0.5rem] ] text-black  font-bold">
                  New Flavours
                </p>
                <Image
                  src="/images/starbucksCup.png"
                  width={250}
                  height={250}
                  className="Image absolute right-[-4rem] top-[3.5rem]"
                  alt=""
                  sizes="(min-width: 1340px) 250px, calc(16.56vw + 31px)"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container px-0 mt-[1rem] laptop:hidden">
          <div className="grid grid-cols-1 gap-2 ">
            {/* Row 1: Split into 80% and 20% */}
            <div className="flex relative w-[85vw] gap-2">
              <div className="  h-[20vh] w-[85vw] relative z-10 ">
                <Image
                  src="/images/tasty.png"
                  width={280}
                  height={140}
                  className="Image h-[20vh] w-[80vw] object-cover absolute "
                  alt=""
                  sizes="(min-width: 420px) 71.61vw, (min-width: 380px) calc(215vw - 580px), calc(48.33vw + 63px)"
                />
              </div>
              <div
                className="w-[15vw]  relative bg-[#DD92C0] h-[20vh] flex items-end justify-start  overflow-hidden cursor-pointer"
                onClick={() => handleCategoryClick("Most Popular")}
              >
                <p className="flex self-start  pl-[1rem] pt-[1rem] text-white rotate-90 writing-mode:vertical-lr font-sodo-sans font-regular text-sm mbXSmall:text-base mbXSmall:text-nowrap mbXSmall:pt-[8vh] ">
                  {" "}
                  Most Popular
                </p>
                <Image
                  src="/images/Coffee_01.png"
                  width={40}
                  height={40}
                  className="Image absolute left-[-3vw] bottom-[-3vh] rotate-45 "
                  alt=""
                  sizes="(min-width: 400px) 50px, calc(7.5vw + 17px)"
                />
                <Image
                  src="/images/Coffee_02.png"
                  width={40}
                  height={40}
                  className="Image absolute right-[-3vw] bottom-[2vh] -rotate-45 "
                  alt=""
                  sizes="(min-width: 400px) 50px, calc(7.5vw + 17px)"
                />
              </div>
            </div>

            {/* Row 2: Split into 2 equal columns */}
            <div className="grid grid-cols-2 gap-2 relative w-[85vw] font-sodo-sans ">
              <div
                className="relative bg-white cursor-pointer overflow-hidden h-[25vh]"
                onClick={() => handleCategoryClick("Coffee")}
              >
                <p className=" p-[0.5rem] text-black  font-bold">Coffee</p>
                <Image
                  src="/images/coffeeCup.png"
                  width={160}
                  height={160}
                  className="Image absolute right-[-2rem] top-[6vh]"
                  alt=""
                  sizes="(min-width: 420px) 160px, (min-width: 380px) calc(95vw - 220px), calc(28.33vw + 39px)"
                />
              </div>
              <div
                className="relative bg-white overflow-hidden cursor-pointer h-[25vh]"
                onClick={() => handleCategoryClick("Frappuccino")}
              >
                {" "}
                <p className=" p-[0.5rem] ] text-black  font-bold">
                  Frappuccino
                </p>
                <Image
                  src="/images/frappuccino.png"
                  width={160}
                  height={160}
                  className="Image absolute right-[-2rem] top-[6vh]"
                  alt=""
                  sizes="(min-width: 420px) 160px, (min-width: 380px) calc(95vw - 220px), calc(28.33vw + 39px)"
                />{" "}
              </div>
            </div>

            {/* Row 3: 3 equal columns */}
            <div className="grid grid-cols-3 gap-2 w-[85vw] font-sodo-sans text-sm">
              <div
                className="relative bg-white overflow-hidden z-[1] h-[14vh]"
                onClick={() => handleCategoryClick("Food")}
              >
                {" "}
                <p className=" p-[0.5rem] z-[7] text-black  font-bold">Foods</p>
                <Image
                  src="/images/food1.png"
                  width={200}
                  height={200}
                  className="Image absolute z-[5] w-auto h-[2.5rem] right-[2rem] top-[9vh]"
                  alt=""
                  sizes="(min-width: 420px) 28.21vw, (min-width: 380px) calc(85vw - 232px), calc(18.33vw + 25px)"
                />
                <Image
                  src="/images/food2.png"
                  width={200}
                  height={200}
                  className="Image absolute z-[4] w-auto h-[5rem] right-[-1.5rem]"
                  alt=""
                  sizes="(min-width: 420px) 28.21vw, (min-width: 380px) calc(85vw - 232px), calc(18.33vw + 25px)"
                />
              </div>
              <div
                className="relative bg-white overflow-hidden cursor-pointer h-[14vh]"
                onClick={() => handleCategoryClick("Tea")}
              >
                {" "}
                <p className=" p-[0.5rem] ] text-black  font-bold">Tea</p>
                <Image
                  src="/images/tea1.png"
                  width={80}
                  height={80}
                  className="Image absolute left-[-2rem] top-[5.9vh]"
                  alt=""
                  sizes="80px"
                />
                <Image
                  src="/images/tea2.png"
                  width={80}
                  height={80}
                  className="Image absolute right-[-2rem] top-[7.2vh]"
                  alt=""
                  sizes="80px"
                />
              </div>
              <div
                className="relative bg-white overflow-hidden cursor-pointer h-[14vh]"
                onClick={() => handleCategoryClick("Espresso drink")}
              >
                <p className=" p-[0.5rem] ] text-black  font-bold">Espresso</p>
                <Image
                  src="/images/espresso.jpg"
                  width={150}
                  height={150}
                  className="Image absolute right-[-2rem] top-[6vh]"
                  alt=""
                  sizes="(min-width: 600px) 150px, (min-width: 420px) calc(22.5vw + 20px), (min-width: 380px) calc(85vw - 232px), calc(18.33vw + 25px)"
                />
              </div>
            </div>

            {/* Row 4: 3 equal columns */}
            <div className="grid grid-cols-3 gap-2 w-[85vw] font-sodo-sans text-sm">
              <div
                className="relative bg-white overflow-hidden cursor-pointer h-[14vh]"
                onClick={() => handleCategoryClick("New flavours")}
              >
                {" "}
                <p className=" p-[0.5rem] ] text-black  font-bold">
                  New Flavours
                </p>
                <Image
                  src="/images/starbucksCup.png"
                  width={150}
                  height={150}
                  className="Image absolute right-[-1.5rem] top-[6vh]"
                  alt=""
                  sizes="(min-width: 600px) 150px, (min-width: 420px) calc(22.5vw + 20px), (min-width: 380px) calc(85vw - 232px), calc(18.33vw + 25px)"
                />
              </div>
              <div
                className="relative bg-white overflow-hidden cursor-pointer h-[14vh]"
                onClick={() => handleCategoryClick("Merchandise")}
              >
                {" "}
                <p className=" p-[0.5rem] ] text-black  font-bold">
                  Merchandise
                </p>
                <Image
                  src="/images/merchandise.png"
                  width={150}
                  height={150}
                  className="Image absolute right-[-1.5rem] top-[8.5vh]"
                  alt=""
                  sizes="(min-width: 600px) 150px, (min-width: 420px) calc(22.5vw + 20px), (min-width: 380px) calc(85vw - 232px), calc(18.33vw + 25px)"
                />
              </div>
              <div
                className="relative bg-white overflow-hidden cursor-pointer h-[14vh]"
                onClick={() => handleCategoryClick("Coffee at home")}
              >
                <p className=" p-[0.5rem] ] text-black font-bold ">
                  Coffee at home
                </p>
                <Image
                  src="/images/coffee.jpg"
                  width={150}
                  height={150}
                  className="Image absolute right-[-1.5rem] top-[6.2vh]"
                  alt=""
                  sizes="(min-width: 600px) 150px, (min-width: 420px) calc(22.5vw + 20px), (min-width: 380px) calc(85vw - 232px), calc(18.33vw + 25px)"
                />
              </div>
            </div>
          </div>
        </div>

        {/*mobile view*/}

        {/* <div className="!mt-[2rem] laptop:hidden grid grid-rows-6 grid-cols-6 bg- h-[70vh] laptop:gap-4 mbMini:gap-0">
           
            <div className="row-span-2 inline ">
              
                <div className="grid grid-cols-6 grid-rows-subgrid gap-4">
                   
                    <div className=" menu overflow-hidden relative flex row-span-2 col-span-5 h-[17.2vh] w-[50vw]  ">
                    <Image src="/images/tasty.png" width={850} height={250} className='Image  aspect-video h-[17.2vh] w-[50vw]  absolute  '/>
                    </div>

        

                    <div className="row-span-14 col-span-5  h-[28.5vh]  bg-[url('/images/food.png')] bg-cover hover:bg-scale-110 flex align-top justify-start"><p className=' p-[0.5rem] text-black font-bold'>Food</p></div>
                    
                    
                    
                    <div className="menu row-span-14  h-[28.5vh] col-span-4 relative overflow-hidden bg-white"><p className=' p-[0.5rem] text-black font-bold'>Tea</p>
                    <Image src="/images/tea1.png" width={150} height={150} className='Image absolute left-[-3rem] top-[10vh]'/>
                    <Image src="/images/tea2.png" width={150} height={150} className='Image absolute right-[-3rem] top-[13vh]'/></div>
                    <div className="menu row-span-14 h-[26.5vh] relative col-span-3 overflow-hidden bg-white">
                    <p className=' p-[0.5rem] text-black font-bold'>Merchandise</p>
                    <Image src="/images/merchandise.png" width={200} height={200} className='Image absolute right-[-4.5rem] top-[15vh]'/>
                    </div>
                    <div className="menu row-span-14 h-[26.5vh]  col-span-6 relative overflow-hidden bg-white">
                    <p className=' p-[0.5rem] text-black font-bold'>Coffee at home</p>
                    <Image src="/images/coffee.png" width={220} height={220} className='Image absolute right-[-3rem] top-[12vh]'/>
                    </div>
                </div>
            </div>

           
            <div className="col-span-1 inline ">
               
                <div className="grid grid-cols-2 grid-rows-subgrid gap-4">
                    
                    <div className="row-span-6 col-span-2 relative flex  overflow-hidden bg-[#DD92C0] ">
                    <p className=' absolute top-0 left-0 p-[0.5rem] !pb-[-2rem] text-white font-semibold'>Most Popular</p>
                    <div className='absolute menu w-max flex flex-row gap-5 pl-5 mr-[2rem] top-3 bottom-[-2] right-0 pr-[1rem] pt-[1rem] space-x-2 items-end justify-end '>
                    <Image src="/images/Coffee_01.png" width={50} height={50} className='Image '/>
                    <Image src="/images/Coffee_02.png" width={50} height={50} className='Image '/>
                    <Image src="/images/Coffee_03.png" width={50} height={50} className='Image'/>
                    <Image src="/images/Coffee_04.png" width={40} height={40} className='Image '/>
                    </div>
                    </div>
                    <div className="menu row-span-15 h-[44.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] text-black  font-bold'>Coffee</p>
                    <Image src="/images/coffeeCup.png" width={250} height={250} className='Image absolute right-[-3rem] top-[16vh]'/></div>
                    <div className="menu row-span-15  h-[44.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] ] text-black  font-bold'>Frappuccino</p>
                    <Image src="/images/frappuccino.png" width={250} height={250} className='Image absolute right-[-3rem] top-[17vh]'/></div>
                    <div className="menu row-span-14  h-[26.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] ] text-black  font-bold'>Espresso</p>
                    <Image src="/images/Espresso.png" width={250} height={250} className=' Image absolute right-[-4rem] top-[4rem]'/>
                    </div>
                    <div className="menu row-span-14 h-[26.5vh] relative overflow-hidden col-span-1 bg-white">
                    <p className=' p-[0.5rem] ] text-black  font-bold'>New Flavours</p>
                    <Image src="/images/starbucksCup.png" width={250} height={250} className='Image absolute right-[-4rem] top-[8vh]'/>
                    </div>
                </div>
            </div>
        </div> */}
        <div
          className="flex flex-1 cursor-pointer mbMini:mt-[1rem] laptop:mt-[9rem] p-[1rem] justify-center items-center border border-black font-bold"
          onClick={() => handleCategoryClick("Other Beverages")}
        >
          Explore other beverages
        </div>
      </div>
    </div>
  );
};

export default Bento;
