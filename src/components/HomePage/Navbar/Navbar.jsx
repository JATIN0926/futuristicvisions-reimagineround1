"use client";
import React, { useState, useEffect, forwardRef } from "react";
import Link from "next/link";
import Image from "next/image";
import "./style.css";
import { CustomLink } from "@/components/utils/CustomLink/CustomLink";

const Navbar = forwardRef((props, ref) => {
  const [isNavOpen, setisNavOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visible, setVisible] = useState(true);

  const debounce = (func, wait) => {
    let timeout;
    return (...args) => {
      const context = this;
      clearTimeout(timeout);
      timeout = setTimeout(() => func.apply(context, args), wait);
    };
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Only update visibility if there is a significant scroll difference
      if (Math.abs(currentScrollY - scrollY) > 10) {
        if (currentScrollY > scrollY && currentScrollY > 100) {
          setVisible(false);
        } else {
          setVisible(true);
        }
        setScrollY(currentScrollY);
      }
    };

    const debouncedHandleScroll = debounce(handleScroll, 100);

    window.addEventListener("scroll", debouncedHandleScroll);

    return () => {
      window.removeEventListener("scroll", debouncedHandleScroll);
    };
  }, [scrollY]);

  return (
    <div
      className={`outer-nav fixed top-0 left-0 right-0 z-50 border-b-black border-[1px] transition-transform duration-300 ease-in-out ${
        visible ? "translate-y-0" : "-translate-y-full"
      } p-3 w-full px-6 pr-4 mbXSmall:pr-6 mbSmall:pr-8 mbMedium:pr-16 tbPortrait:pr-24 ${
        props.productPage ? "bg-[#006240]" : "bg-[#F1F0EA]"
      }`}
    >
      <div className="navbar gap-[5rem] min-[350px]:gap-[7rem] mbXSmall:gap-[7rem] mbSmall:gap-[12rem] mbMedium:gap-[2.7rem] laptop:gap-[6rem] tbPortrait:gap-[9rem] tbMedium:gap-[11rem] font-sodo-sans">
        <nav
          className={`${
            props.productPage ? "text-[#ECECEC]" : " "
          } hidden mbMedium:flex items-center justify-center gap-4 tbPortrait:gap-8 tbMedium:gap-11 mbMedium:text-xs laptop:text-[0.8rem] tbPortrait:text-base tbLandscape:text-xl`}
        >
          <div
            className={`${
              props.productPage
                ? "hover:text-[#F0DFB0]"
                : "hover:text-[#006240]"
            } hover:font-medium font-light transition-all duration-500`}
          >
            <CustomLink href="/product-page">Menu</CustomLink>
          </div>
          <Link
            href=""
            className={`${
              props.productPage
                ? "hover:text-[#F0DFB0]"
                : "hover:text-[#006240]"
            } hover:font-medium font-light transition-all duration-500`}
          >
            Gift & Rewards
          </Link>
          <Link
            href=""
            className={`${
              props.productPage
                ? "hover:text-[#F0DFB0]"
                : "hover:text-[#006240]"
            } hover:font-medium font-light transition-all duration-500`}
          >
            Our Coffee
          </Link>
          <Link
            href=""
            className={`${
              props.productPage
                ? "hover:text-[#F0DFB0]"
                : "hover:text-[#006240]"
            } hover:font-medium font-light transition-all duration-500`}
          >
            Store
          </Link>
        </nav>
        {/* Mobile view */}
        {props.productPage ? (
          <button
            className="block mbMedium:hidden"
            onClick={() => setisNavOpen(!isNavOpen)}
          >
            <Image
              src="/icons/ListWhite.svg"
              alt="Starbuck"
              width={50}
              height={50}
              className="w-[1.4rem] mbXSmall:w-[1.5rem]"
            />
          </button>
        ) : (
          <button
            className="block mbMedium:hidden"
            onClick={() => setisNavOpen(!isNavOpen)}
          >
            <Image
              src="/icons/List.svg"
              alt="Starbuck"
              width={50}
              height={50}
              className="w-[1.4rem] mbXSmall:w-[1.5rem]"
            />
          </button>
        )}
        <div
          className={`absolute top-[90%] left-0 right-0 mt-2 shadow-lg ${
            props.productPage ? "bg-[#006240]" : "bg-[#F1F0EA]"
          } z-20 transition-all duration-1000 ease-in-out overflow-hidden ${
            isNavOpen ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="p-4">
            <nav
              className={`${
                props.productPage ? "text-[#ECECEC]" : " "
              } text-base mbXSmall:text-lg flex flex-col items-start justify-center gap-2`}
            >
              <CustomLink href="/product-page" className="link">
                Menu
              </CustomLink>
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
        <CustomLink href="/">
          <Image
            ref={ref}
            id="navbar-logo"
            src="/icons/starbucks_logo.png"
            alt="Starbuck"
            width={50}
            height={50}
            className="cursor-pointer w-[2rem] h-[2rem] laptop:w-[2.5rem] laptop:h-[2.5rem] tbPortrait:h-[3rem] tbPortrait:w-[3rem] tbLandscape:w-[4rem] tbLandscape:h-[4rem]"
          />
        </CustomLink>
        <div className="hidden mbMedium:flex items-center justify-center gap-4">
          <div>
            <input
              type="text"
              placeholder="Search for specific"
              className="search relative bg-transparent rounded-full p-1.5 px-3.5 laptop:p-2 laptop:px-6 tbLandscape:p-3 tbLandscape:px-7 border-[1.5px] border-[#D1D1D1] placeholder:text-sm laptop:placeholder:text-base"
            />
          </div>
          {props.productPage ? (
            <Image
              src="/icons/ShoppingCartWhite.svg"
              width={25}
              height={25}
              alt="cart"
              className="cursor-pointer w-[1.4rem] h-[1.4rem] mbXSmall:w-[1.6rem] mbXSmall:h-[1.6rem]"
            />
          ) : (
            <Image
              src="/icons/ShoppingCart.svg"
              width={25}
              height={25}
              alt="cart"
              className="cursor-pointer w-[1rem] h-[1rem] laptop:w-[1.5rem] laptop:h-[1.5rem] tbLandscape:w-[2.5rem] tbLandscape:h-[2.5rem]"
            />
          )}
        </div>
        {/* Mobile view */}
        <div className="flex mbMedium:hidden items-center justify-center gap-3">
          <Image
            src="/icons/MagnifyingGlass.svg"
            width={25}
            height={25}
            alt="cart"
            className="cursor-pointer w-[1.7rem] h-[1.7rem] mbXSmall:w-[2rem] mbXSmall:h-[2rem]"
          />
          <Image
            src="/icons/ShoppingCartWhite.svg"
            width={25}
            height={25}
            alt="cart"
            className="cursor-pointer w-[0.9rem] h-[0.9rem] mbXSmall:w-[1rem] mbXSmall:h-[1rem] laptop:w-[1.5rem] laptop:h-[1.5rem] tbLandscape:w-[2.5rem] tbLandscape:h-[2.5rem]"
          />
        </div>
      </div>
    </div>
  );
});

Navbar.displayName = "Navbar";

export default Navbar;
