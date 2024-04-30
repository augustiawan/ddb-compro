import React from "react";
import Image from "next/image";

const HomeServices = () => {
  return (
    <div className="block w-full mt-[40px] md:mt-[70px]">
      <h6 className="uppercase font-mono font-semibold text-blue text-[26px] leading-[33.02px] mb-16 md:mb-[28px] lg:mb-[34px]">
        What we do
      </h6>
      <div className="flex flex-start flex-wrap md:flex-nowrap md:gap-[4%] lg:gap-[7%]">
        <div className="max-w-[200px] shrink-0 w-full aspect-[12/16] relative mb-16 md:m-0">
          <Image
            src="/images/thumb/thumb-quarter-1.jpg"
            alt=""
            fill={true}
            className="object-cover object-center"
          />
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 gap-[3%] md:gap-[5%]">
          <div className=" text-18 leading-[22px]">
            <ul className="m-0 p-0">
              <li className="font-semibold text-blue py-8">
                Creative Direction:
              </li>
              <li className="py-8">Naming</li>
              <li className="py-8">Copywriting</li>
              <li className="py-8">Brand narrative</li>
              <li className="py-8">Social media</li>
              <li className="py-8">Art direction</li>
            </ul>
          </div>
          <div className="">
            <ul className="m-0 p-0">
              <li className="font-semibold text-blue py-8">Graphic Design:</li>
              <li className="py-8">Branding</li>
              <li className="py-8">Editorial design</li>
              <li className="py-8">Packaging</li>
              <li className="py-8">Wayfinding</li>
              <li className="py-8">3D and motion</li>
            </ul>
          </div>
          <div className="">
            <ul className="m-0 p-0">
              <li className="font-semibold text-blue py-8">Digital:</li>
              <li className="py-8">Web design</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeServices;
