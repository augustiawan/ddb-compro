"use client";

import React, { useState, useEffect, useRef } from "react";
import SidebarContainer from "@/components/SidebarContainer";
import Image from "next/image";
import ScrollSpy from "react-scrollspy-navigation";
import AboutPrinciples from "../Section/AbourPrinciples";
import AboutJob from "@/components/Section/AboutJob";
import HomeServices from "@/components/Section/HomeServices";

const sectionIds = [
  {
    id: "target-principles",
    title: "Our Principles",
  },
  {
    id: "target-client",
    title: "Selected Client",
  },
  {
    id: "target-team",
    title: "People",
  },
  {
    id: "target-services",
    title: "What We Do",
  },
  {
    id: "target-jobs",
    title: "Jobs",
  },
];

const AboutContent = () => {
  const imageRef = useRef<any>(null);
  const containerRef = useRef<any>(null);

  return (
    <div className="">
      <div className="block w-full relative h-[100dvh] max-h-[695px] mb-[40px]">
        <Image
          src="/images/banner/banner-about.jpg"
          alt="Works Banner"
          sizes="auto"
          fill={true}
          className="absolute object-top object-cover w-full h-full"
        />
        <div className="max-w-[1024px] lg:max-w-[1280px] w-full px-16 absolute bottom-[50px] left-0 right-0 m-auto">
          <p className="font-mono font-semibold text-[30px] leading-[127%] text-white">
            Founded in 2013, Dassein is a branding studio, begun by Dhanny &
            Shanni. We act as a creative inspiration to encourage our clients to
            take charge of their own brand identity.
          </p>
        </div>
      </div>

      <SidebarContainer
        sidebarContent={
          <div className="block bg-white rounded-[12px] px-16 py-24 mt-32">
            <ScrollSpy
              activeClass="active !pl-[28px] before:visible before:opacity-100 !text-blue-200"
              offsetTop={80}
              rootMargin="-60px 0px 0px 0px"
            >
              <nav className="">
                <ul className="">
                  {sectionIds.map((item, index) => (
                    <li className="my-[5px]" key={`menu-${index}`}>
                      <a
                        href={`#${item.id}`}
                        className={`text-[21px] leading-[25.08px] font-medium transition-all duration-300 text-black relative inline-block group transition-all duration-300 pl-0 before:w-[11px] before:h-[13px] before:rounded-[12px] before:bg-blue-200 before:absolute before:left-0 before:top-[7px] before:opacity-0 before:invicible`}
                      >
                        {item.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </ScrollSpy>
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
        <div className="" ref={containerRef}></div>
        <div id="target-principles">
          <AboutPrinciples />
        </div>
        <div id="target-client"></div>
        <div id="target-team"></div>
        <div className="block w-full" id="target-services">
          <HomeServices />
        </div>
        <div id="target-jobs">
          <AboutJob />
        </div>
      </SidebarContainer>
    </div>
  );
};

export default AboutContent;
