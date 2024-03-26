import React from "react";
import Marquee from "react-fast-marquee";
import DasseinLogoScene from "@/components/banner3d";
import Image from "next/image";
import { Metadata } from "next";

const UnderConstruction = () => {
  return (
    <div className="h-[100dvh] w-full relative">
      <div className="bg-blue py-16 h-[73px] md:h-[85px]">
        <Marquee>
          {[Array(3)].map((_, index) => (
            <div className="" key={index}>
              <h1
                key={index}
                className="uppercase text-white text-32 md:text-[42px] leading-[127%] font-mono inline-block mr-[48px]"
              >
                seek and see wait for DASSEIN new play playground
              </h1>
              <h1
                key={index}
                className="uppercase text-white text-32 md:text-[42px] leading-[127%] font-mono inline-block mr-[48px]"
              >
                seek and see wait for DASSEIN new play playground
              </h1>
            </div>
          ))}
        </Marquee>
      </div>
      <div className="h-[calc(100dvh_-_146px)] md:h-[calc(100dvh_-_170px)] block relative">
        <div className="absolute w-full h-full z-[0]">
          <Image
            src="/images/banner/under-construction.gif"
            alt="Under Contruction Banner"
            fill={true}
            sizes="auto"
            className="object-center object-cover"
          />
        </div>
        <div className="h-full w-full relative z-[1]">
          <DasseinLogoScene />
        </div>
      </div>
      <div className="bg-blue py-16 h-[73px] md:h-[85px]">
        <Marquee speed={75}>
          {[Array(3)].map((_, index) => (
            <div className="" key={index}>
              <h1
                key={index}
                className="uppercase text-white text-32 md:text-[42px] leading-[127%] font-mono inline-block mr-[48px]"
              >
                seek and see wait for DASSEIN new play playground
              </h1>
              <h1
                key={index}
                className="uppercase text-white text-32 md:text-[42px] leading-[127%] font-mono inline-block mr-[48px]"
              >
                seek and see wait for DASSEIN new play playground
              </h1>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default UnderConstruction;

export const metadata: Metadata = {
  title: "DDB | Under Construction",
};
