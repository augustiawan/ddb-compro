"use client";

import React, { ReactNode } from "react";
import Image from "next/image";
import { gsap } from "gsap";

type SidebarContainer = {
  children: ReactNode;
  sidebarContent?: ReactNode;
};

const SidebarContainer = ({ children, sidebarContent }: SidebarContainer) => {
  return (
    <div className="block w-full">
      <div className="w-full flex items-start lg:space-x-32 px-16 md:px-32 py-24">
        <div className="shrink-0 w-[340px] h-[calc(100dvh_-_48px)] fixed lg:sticky left-[-100%] lg:left-0 top-24">
          <div className="flex flex-col justify-between h-full">
            <div className="w-full relative">
              <div className="w-full aspect-[18/5] relative">
                <Image
                  src="/images/logo-ddb-full.svg"
                  alt="Home Banner"
                  sizes="auto"
                  fill={true}
                  className="absolute object-center w-full h-full"
                />
              </div>

              <ul className="flex flex-wrap gap-[6px] mt-[28px]">
                <li className="cursor-pointer rounded-[19px] py-[2px] px-16 block bg-white-300">
                  <span className="uppercase text-black text-18 leading-[21.49px] font-semibold">
                    Index
                  </span>
                </li>
                <li className="cursor-pointer rounded-[19px] py-[2px] px-16 block bg-white-300">
                  <span className="uppercase text-black text-18 leading-[21.49px] font-semibold">
                    WORKS
                  </span>
                </li>
                <li className="cursor-pointer rounded-[19px] py-[2px] px-16 block bg-white-300">
                  <span className="uppercase text-black text-18 leading-[21.49px] font-semibold">
                    STUDIO
                  </span>
                </li>
                <li className="cursor-pointer rounded-[19px] py-[2px] px-16 block bg-white-300">
                  <span className="uppercase text-black text-18 leading-[21.49px] font-semibold">
                    JURNAL
                  </span>
                </li>
                <li className="cursor-pointer rounded-[19px] py-[2px] px-16 block bg-white-300">
                  <span className="uppercase text-black text-18 leading-[21.49px] font-semibold">
                    DIDIBI
                  </span>
                </li>
              </ul>

              {sidebarContent}
            </div>

            <div className="block">
              <div className="flex flex-wrap gap-[32px]">
                <span className="block font-14 leading-[16.72px] font-medium">
                  Instagram
                </span>
                <span className="block font-14 leading-[16.72px] font-medium">
                  Youtube
                </span>
                <span className="block font-14 leading-[16.72px] font-medium">
                  Behance
                </span>
              </div>

              <p className="font-figtree text-14 leading-[17.8px] text-blue-200 mt-24">
                © Copyright 2024 Dassein Design Bureau — All Rights Reserved
              </p>
            </div>
          </div>
        </div>
        <div className="relative max-w-full w-full">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContainer;
