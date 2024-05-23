import React from "react";
import SidebarContainer from "@/components/SidebarContainer";
import Image from "next/image";

const WorksDetailContent = () => {
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
        <div className="">
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[8%] mb-32 last:mb-0">
            <div className="block">
              <h1 className="font-mono font-semibold text-28 md:text-[36px] leading-[36px] md:leading-[48px] tracking-[0.01em] text-blue-200 uppercase md:mt-[-8px]">
                Sumaye Multiscent of Minds
              </h1>
              <div className="flex mt-10 md:mt-20 mx-[-12px]">
                <span className="text-18 md:text-[21px] leading-[21px] md:leading-[25px] block relative px-12 after:content-[''] after:w-[1.5px] after:h-[18px] after:bg-black after:absolute after:right-0 after:top-[2px] after:bottom-0 after:m-auto last:after:hidden">
                  Branding
                </span>
                <span className="text-18 md:text-[21px] leading-[21px] md:leading-[25px] block relative px-12 after:content-[''] after:w-[1.5px] after:h-[18px] after:bg-black after:absolute after:right-0 after:top-[2px] after:bottom-0 after:m-auto last:after:hidden">
                  Identity
                </span>
                <span className="text-18 md:text-[21px] leading-[21px] md:leading-[25px] block relative px-12 after:content-[''] after:w-[1.5px] after:h-[18px] after:bg-black after:absolute after:right-0 after:top-[2px] after:bottom-0 after:m-auto last:after:hidden">
                  Strategy
                </span>
              </div>
            </div>
            <div className="block mt-24 md:mt-0">
              <div className="flex items-start gap-[10%]">
                <div className="block">
                  <h5 className="font-mono uppercase text-blue-200 text-18 md:text-20 leading-[20px]">
                    Client
                  </h5>
                  <span className="text-16 md:text-18 leading-[21.68px] mt-6 md:mt-8 block">
                    Sumaye
                  </span>
                </div>
                <div className="block">
                  <h5 className="font-mono uppercase text-blue-200 text-18 md:text-20 leading-[20px]">
                    Year
                  </h5>
                  <span className="text-16 md:text-18 leading-[21.68px] mt-6 md:mt-8 block">
                    2022
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 md:gap-[8%] mb-32 last:mb-0">
            <div className="block mb-24 md:mb-0">
              <h5 className="uppercase font-mono text-18 md:text-20 leading-[21px] md:leading-[24px] text-blue-200 block mb-12 md:mb-18 underline">
                About
              </h5>
              <p className="text-16 leading-[19.2px]">
                Inspired by perfumery and scents Sumaye encourages people to
                enter the world by transporting images when they smell the
                fragrances. Coming from a place of sadness to creating scents
                that allows people to inhale a piece of peace into their lives.
                Sumaye offers a variety of scents with relevant visual
                identities and unique packaging to create harmonious
                combinations between humans and scents.
              </p>
            </div>
            <div className="block">
              <h5 className="uppercase font-mono text-18 md:text-20 leading-[21px] md:leading-[24px] text-blue-200 block mb-12 md:mb-18">
                Team
              </h5>
              <div className="">
                <span className="text-14 md:text-18 leading-[16.52px] block mb-4 md:mb-6 last:mb-0">
                  <b className="font-medium text-16 md:text-24 leading-[21px] leading-[28.91px] mr-6">
                    Dhany Zuhri,
                  </b>
                  Design Principal
                </span>
                <span className="text-14 md:text-18 leading-[16.52px] block mb-4 md:mb-6 last:mb-0">
                  <b className="font-medium text-16 md:text-24 leading-[21px] leading-[28.91px] mr-6">
                    Shani Nur Muhammad,
                  </b>
                  Business Principal
                </span>
                <span className="text-14 md:text-18 leading-[16.52px] block mb-4 md:mb-6 last:mb-0">
                  <b className="font-medium text-16 md:text-24 leading-[21px] leading-[28.91px] mr-6">
                    Vavaldy Yusuf,
                  </b>
                  Business Principal
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32">
          <img
            src="/images/thumb/thumb-porto-1.jpg"
            alt=""
            className="w-full"
          />
        </div>
      </SidebarContainer>
    </div>
  );
};

export default WorksDetailContent;
