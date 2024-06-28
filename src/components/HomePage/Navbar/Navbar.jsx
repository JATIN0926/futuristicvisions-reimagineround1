"use client";
import React, { useState } from "react";
import "./style.css";
import Link from "next/link";
import Image from "next/image";
const Navbar = () => {
  const [isNavOpen, setisNavOpen] = useState(false);
  return (
    <>
      <div className="outer-nav relative p-4">
        <div className="navbar p-1 pr-2 mbSmall:pr-10 px-8 font-sodo-sans ">
          <nav className=" hidden  mbMedium:flex items-center justify-center gap-8 mbMedium:text-xs laptop:text-sm tbPortrait:text-base tbLandscape:text-xl">
            <Link href="" className="link">
              Menu
            </Link>
            <Link href="" className="link">
              Gift & Rewards
            </Link>
            <Link href="" className="link">
              Our Coffee
            </Link>
            <Link href="" className="link">
              Store
            </Link>
          </nav>
          {/* mobile view */}
          <button
            className="block mbMedium:hidden"
            onClick={() => setisNavOpen(!isNavOpen)}
          >
            <Image
              id="navbar-logo"
              src="/icons/List.svg"
              alt="Starbuck"
              width={50}
              height={50}
              className=" w-[1.7rem] h-[1.7rem] mbXSmall:w-[2rem] mbXSmall:h-[2rem]"
            />
          </button>
          <div
            className={`absolute top-[90%] left-0 right-0 mt-2 shadow-lg bg-[#F1F0EA] z-20 transition-all duration-1000 ease-in-out overflow-hidden ${
              isNavOpen ? "max-h-96" : "max-h-0"
            }`}
          >
            <div className=" p-4">
              <nav className=" text-base mbXSmall:text-lg flex flex-col  items-start justify-center gap-2 ">
                <Link href="" className="link">
                  Menu
                </Link>
                <Link href="" className="link">
                  Gift & Rewards
                </Link>
                <Link href="" className="link">
                  Our Coffee
                </Link>
                <Link href="" className="link">
                  Store
                </Link>
              </nav>
            </div>
          </div>
          <Image
            id="navbar-logo"
            src="/icons/starbucks_logo.png"
            alt="Starbuck"
            width={50}
            height={50}
            className=" w-[2rem] h-[2rem] laptop:w-[2.5rem] laptop:h-[2.5rem] tbPortrait:h-[3rem] tbPortrait:w-[3rem] tbLandscape:w-[4rem] tbLandscape:h-[4rem]"
          />
          <div className="hidden  mbMedium:flex items-center justify-center gap-4">
            <div>
              <input
                type="text"
                placeholder="Search for specific"
                className="search relative bg-transparent rounded-full p-1.5 px-3.5 laptop:p-2 laptop:px-6 tbLandscape:p-3 tbLandscape:px-7 border-[1.5px] border-[#D1D1D1] placeholder:text-sm laptop:placeholder:text-base"
              />
            </div>
            <Image
              src="/icons/ShoppingCart.svg"
              width={25}
              height={25}
              alt="cart"
              className=" cursor-pointer w-[1rem] h-[1rem] laptop:w-[1.5rem] laptop:h-[1.5rem] tbLandscape:w-[2.5rem] tbLandscape:h-[2.5rem]"
            />
          </div>
          {/* mobile view */}
          <div className="flex mbMedium:hidden items-center justify-center gap-3">
            <Image
              src="/icons/MagnifyingGlass.svg"
              width={25}
              height={25}
              alt="cart"
              className=" cursor-pointer w-[1.7rem] h-[1.7rem] mbXSmall:w-[2rem] mbXSmall:h-[2rem]"
            />
            <Image
              src="/icons/ShoppingCart.svg"
              width={25}
              height={25}
              alt="cart"
              className=" cursor-pointer w-[0.8rem] h-[0.8rem] mbXSmall:w-[1rem] mbXSmall:h-[1rem] laptop:w-[1.5rem] laptop:h-[1.5rem] tbLandscape:w-[2.5rem] tbLandscape:h-[2.5rem]"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
