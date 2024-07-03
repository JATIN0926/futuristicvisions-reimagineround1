import Image from "next/image";
import React from "react";
import Column from "./Column";

const Footer = () => {
  return (
    <div className="bg-[#006240] mt-20 mbMedium:h-[60vh] w-screen max-w-full p-2 py-10 font-sodo-sans text-white">
      <div className="flex-col items-center justify-between h-full hidden mbMedium:flex">
        <div className="w-full flex items-center justify-around">
          <div className="flex flex-col items-start justify-center gap-4 laptop:gap-5 tbMedium:gap-7 tbLandscape:gap-8 w-[25%] pl-12 text-sm laptop:text-base tbMedium:text-lg tbLandscape:text-xl">
            <div className="h-[4rem] w-[4rem] relative">
              <Image
                src="/icons/starbucks_logo.png"
                fill
                alt=""
                sizes="(min-width: 600px) 64px, (min-width: 400px) 53px, 40px"
              />
            </div>
            <h1 className="uppercase  font-bold cursor-pointer hover:text-[#F0DFB0] transition-all">
              Starbucks coffee
            </h1>
            <h1 className="uppercase  font-bold cursor-pointer hover:text-[#F0DFB0] transition-all">
              Contact Us
            </h1>
            <div className="flex items-center justify-start gap-3">
              <Image
                src="/icons/youtube.png"
                height={30}
                width={30}
                className=" w-10 h-10 laptop:w-12 laptop:h-12 cursor-pointer"
                alt=""
              />
              <Image
                src="/icons/instagram.png"
                height={30}
                width={30}
                className=" w-10 h-5 laptop:w-12 laptop:h-7 cursor-pointer"
                alt=""
              />
              <Image
                src="/icons/facebook.png"
                height={30}
                width={30}
                className=" w-10 h-7 laptop:w-12 laptop:h-10 cursor-pointer"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-start justify-around mbXSmall:justify-evenly h-full w-[65%]">
            <Column
              heading="Homepage"
              p1="Explore products"
              p2="about us"
              p3="coffee at home"
              p4="Environment"
              mobile={false}
            />
            <Column
              heading="Responsibility"
              p1="Diversity"
              p2="Community"
              p3="Ethical Sourcing"
              p4="Learn more"
              mobile={false}
            />
            <Column
              heading="Quick Links"
              p1="Privacy Policy"
              p2="Terms & condition"
              p3="FAQs"
              p4="Season’s Gifting"
              mobile={false}
            />
          </div>
        </div>
        <h1 className="text-[#FFFFFF]  text-base tbMedium:text-lg tbLandscape:text-xl">
          Copyright &copy; 2023 Starbucks | All rights reserved
        </h1>
      </div>
      {/* mobile view */}
      <div className=" flex flex-col items-center justify-center gap-8 mbXSmall:gap-10 w-full mbMedium:hidden">
        <div className="flex flex-col items-center w-full justify-center gap-2.5 mbXSmall:gap-4 laptop:gap-5 tbMedium:gap-7 tbLandscape:gap-8 text-[0.6rem] mbXSmall:text-xs  mbSmall:text-sm">
          <div className=" w-[2.5rem] h-[2.5rem] mbXSmall:h-[3.3rem] mbXSmall:w-[3.3rem] mbSmall:h-[4rem] mbSmall:w-[4rem] relative">
            <Image src="/icons/starbucks_logo.png" fill alt="" />
          </div>
          <h1 className="uppercase  font-bold cursor-pointer">
            Starbucks coffee
          </h1>
          <h1 className="uppercase  font-bold cursor-pointer">Contact Us</h1>
          <div className="flex items-center justify-start gap-3">
            <Image
              src="/icons/youtube.png"
              height={30}
              width={30}
              className=" w-7 h-7 mbXSmall:w-8 mbXSmall:h-8 mbSmall:w-10 mbSmall:h-10 laptop:w-12 laptop:h-12 cursor-pointer"
              alt=""
            />
            <Image
              src="/icons/instagram.png"
              height={30}
              width={30}
              className=" w-7 h-4 mbXSmall:w-8 mbXSmall:h-4 mbSmall:w-10 mbSmall:h-5 laptop:w-12 laptop:h-7 cursor-pointer"
              alt=""
            />
            <Image
              src="/icons/facebook.png"
              height={30}
              width={30}
              className=" w-6 h-5 mbXSmall:w-8 mbXSmall:h-6 mbSmall:w-10 mbSmall:h-7 laptop:w-12 laptop:h-10 cursor-pointer"
              alt=""
            />
          </div>
        </div>
        <div className="flex items-center justify-evenly h-full w-[100%]">
          <Column
            heading="Homepage"
            p1="Explore products"
            p2="about us"
            p3="coffee at home"
            p4="Environment"
            mobile={true}
          />
          <Column
            heading="Responsibility"
            p1="Diversity"
            p2="Community"
            p3="Ethical Sourcing"
            p4="Learn more"
            mobile={true}
          />
          <Column
            heading="Quick Links"
            p1="Privacy Policy"
            p2="Terms & condition"
            p3="FAQs"
            p4="Season’s Gifting"
            mobile={true}
          />
        </div>
        <h1 className="text-[#FFFFFF] font-light text-[0.55rem] mbXSmall:text-xs mbSmall:text-sm  mbMedium:text-base tbMedium:text-lg tbLandscape:text-xl">
          Copyright &copy; 2023 Starbucks | All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
