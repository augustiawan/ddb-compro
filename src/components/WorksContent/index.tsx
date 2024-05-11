"use client";

import React from "react";
import SidebarContainer from "@/components/SidebarContainer";
import HomeWorks, { THomeWorksProps } from "@/components/Section/HomeWorks";
import Image from "next/image";

type TypeWorksContentProps = THomeWorksProps;

const sectionIds = [
  {
    id: "target-branding",
    title: "Branding (82)",
  },
  {
    id: "target-editorial",
    title: "Editorial design (51)",
  },
  {
    id: "target-packaging",
    title: "Packaging (34)",
  },
  {
    id: "target-wayfinding",
    title: "Wayfinding (21)",
  },
  {
    id: "target-motion",
    title: "3D and motion (15)",
  },
  {
    id: "target-web",
    title: "Web Design (12)",
  },
];

const WorksContent = (props: TypeWorksContentProps) => {
  const { works } = props;

  return (
    <div className="mt-[60px]">
      <SidebarContainer
        sidebarContent={
          <div className="block bg-white rounded-[12px] px-16 py-24 mt-32">
            <nav className="">
              <h6 className="font-barlowcondensed text-[18px] leading-[14px] font-semibold text-blue py-[5px]">
                Works Category
              </h6>
              <ul className="">
                {sectionIds.map((item, index) => (
                  <li className="my-[5px]" key={`menu-${index}`}>
                    <a
                      href="#"
                      className={`text-[18px] leading-[18px] transition-all duration-300 text-black relative inline-block`}
                    >
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        }
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
        <div className="block w-full">
          <ul className="flex gap-[20px] m-0 mb-[50px]">
            <li className="uppercase text-20 leading-[119.41%] font-mono font-semibold group active">
              <a
                href="#"
                className="block text-black bg-white rounded-[21.125px] px-12 py-8 group-[.active]:bg-blue-200 group-[.active]:text-white"
              >
                TYPE OF WORKS
              </a>
            </li>
            <li className="uppercase text-20 leading-[119.41%] font-mono font-semibold group">
              <a
                href="#"
                className="block text-black bg-white rounded-[21.125px] px-12 py-8 group-[.active]:bg-blue-200 group-[.active]:text-white"
              >
                TYPE OF CLIENT
              </a>
            </li>
            <li className="uppercase text-20 leading-[119.41%] font-mono font-semibold group">
              <a
                href="#"
                className="block text-black bg-white rounded-[21.125px] px-12 py-8 group-[.active]:bg-blue-200 group-[.active]:text-white"
              >
                ALL WORKS
              </a>
            </li>
          </ul>
          <HomeWorks works={works} noTitle={false} />
        </div>
      </SidebarContainer>
    </div>
  );
};

export default WorksContent;
