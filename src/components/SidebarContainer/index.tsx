import React, { ReactNode } from "react";
import Image from "next/image";

type SidebarContainer = {
  children: ReactNode;
};

const SidebarContainer = ({ children }: SidebarContainer) => {
  return (
    <div className="relative h-auto w-screen mt-[100px]">
      <div className="w-full flex items-start space-x-32 px-32">
        <div className="w-[340px] h-[calc(100dvh_-_48px)] sticky top-0">
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

              <div className="block bg-white rounded-[12px] px-16 py-24 mt-32">
                <ul className="">
                  <li className="my-[5px]">
                    <span className="text-[21px] leading-[25.08px] font-medium">
                      Recent Work
                    </span>
                  </li>
                  <li className="my-[5px]">
                    <span className="text-[21px] leading-[25.08px] font-medium">
                      Whate We Do
                    </span>
                  </li>
                  <li className="my-[5px]">
                    <span className="text-[21px] leading-[25.08px] font-medium">
                      Jurnal
                    </span>
                  </li>
                  <li className="my-[5px]">
                    <span className="text-[21px] leading-[25.08px] font-medium">
                      Didibi Objek
                    </span>
                  </li>
                </ul>
              </div>
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
        <div className="relative max-w-full">
          <div className="w-full">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default SidebarContainer;
