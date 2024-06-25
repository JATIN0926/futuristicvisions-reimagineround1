import Image from "next/image";
import React from "react";
import Column from "./Column";

const Footer = () => {
  return (
    <div className="bg-[#006240] h-[60vh] w-screen max-w-full p-2 py-10 font-sodo-sans text-white">
      <div className="flex flex-col items-center justify-between h-full">
        <div className="w-full flex items-center justify-around">
          <div className="flex flex-col items-start justify-center gap-5 w-[25%] pl-12">
            <div className="h-[4rem] w-[4rem] relative">
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
                className="w-12 h-12 cursor-pointer"
                alt=""
              />
              <Image
                src="/icons/instagram.png"
                height={30}
                width={30}
                className="w-12 h-7 cursor-pointer"
                alt=""
              />
              <Image
                src="/icons/facebook.png"
                height={30}
                width={30}
                className="w-12 h-10 cursor-pointer"
                alt=""
              />
            </div>
          </div>
          <div className="flex items-start justify-evenly h-full w-[65%]">
            <Column
              heading="Homepage"
              p1="Explore products"
              p2="about us"
              p3="coffee at home"
              p4="Environment"
            />
            <Column
              heading="Responsibility"
              p1="Diversity"
              p2="Community"
              p3="Ethical Sourcing"
              p4="Learn more"
            />
            <Column
              heading="Quick Links"
              p1="Privacy Policy"
              p2="Terms & condition"
              p3="FAQs"
              p4="Season’s Gifting"
            />
          </div>
        </div>
        <h1 className="text-[#FFFFFF]">
          Copyright &copy; 2023 Starbucks | All rights reserved
        </h1>
      </div>
    </div>
  );
};

export default Footer;
