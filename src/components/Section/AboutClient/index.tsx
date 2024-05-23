import React from "react";
import Image from "next/image";

const AboutClient = () => {
  return (
    <div className="block w-full mt-[50px] overflow-hidden">
      <h5 className="uppercase font-mono font-semibold text-blue-200 text-24 md:text-[26px] leading-[33.02px] mb-24 md:mb-32">
        SELECTED CLIENT
      </h5>
      <div className="flex flex-col-reverse md:flex-row justify-between gap-[16px] font-barlowcondensed">
        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-2 gap-[12px]">
            <div className="">
              <ul className="m-0 mt-[-8px]">
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Mutu Loka</span>
                </li>
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Sumaye</span>
                </li>
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">
                    Bell Living Lab
                  </span>
                </li>
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Jatinangor</span>
                </li>
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Laloba</span>
                </li>
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Ettan Habitat</span>
                </li>
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Baso Aci</span>
                </li>
              </ul>
            </div>
            <div className="">
              <ul className="m-0 mt-[-8px]">
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Mang Moel</span>
                </li>
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Ria Miranda</span>
                </li>
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Modestalk</span>
                </li>
                <li className="block py-8">
                  <span className="text-18 leading-[22px]">Nasi Katok</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="max-w-[418px] shrink-0 w-full aspect-[16/9] relative mb-12 md:m-0">
            <Image
              src="/images/thumb/thumb-about-1.jpg"
              alt=""
              fill={true}
              className="object-cover object-center"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClient;
