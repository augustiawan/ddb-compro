"use client";

import React from "react";
import SidebarContainer from "@/components/SidebarContainer";
import Image from "next/image";
import CardDidibi from "@/components/Cards/CardDidibi";

const DidibiContent = () => {
  return (
    <div className="pt-32 md:pt-[88px]">
      <SidebarContainer
        sidebarHead={
          <div className="w-full aspect-[18/5] relative">
            <Image
              src="/images/logo-ddb-full.svg"
              alt="Home Banner"
              sizes="auto"
              fill={true}
              className="absolute object-center w-full h-full"
            />
          </div>
        }
      >
        <div className="w-full">
          <h4 className="block font-mono font-semibold text-[26px] leading-[33.02px] text-blue mb-20 md:mb-32">
            BOOK/ ZINE
          </h4>
          <div className="flex gap-24 gap-32 2xl:gap-[44px]">
            <div className="hidden md:block w-full md:max-w-[180px] lg:max-w-[203px]">
              <div className="relative aspect-[5/13] w-full">
                <Image
                  src="/images/thumb/thumb-didibi-1.jpg"
                  alt="Thumb 1"
                  sizes="auto"
                  fill={true}
                  className="absolute object-center w-full h-full"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-[24px] my-[-4px] md:my-[-6px]">
                {[...Array(6)].map((item) => (
                  <div className="block py-[4px] md:py-6">
                    <CardDidibi />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full mt-[77px] mb-[50px]">
          <h4 className="block font-mono font-semibold text-[26px] leading-[33.02px] text-blue mb-20 md:mb-32">
            MERCH / PRINTING
          </h4>
          <div className="flex gap-24 gap-32 2xl:gap-[44px]">
            <div className="hidden md:block w-full md:max-w-[180px] lg:max-w-[203px]">
              <div className="relative aspect-[5/13] w-full">
                <Image
                  src="/images/thumb/thumb-didibi-1.jpg"
                  alt="Thumb 1"
                  sizes="auto"
                  fill={true}
                  className="absolute object-center w-full h-full"
                />
              </div>
            </div>
            <div className="w-full">
              <div className="grid grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-[24px] my-[-4px] md:my-[-6px]">
                {[...Array(6)].map((item) => (
                  <div className="block py-[4px] md:py-6">
                    <CardDidibi />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </SidebarContainer>
    </div>
  );
};

export default DidibiContent;
