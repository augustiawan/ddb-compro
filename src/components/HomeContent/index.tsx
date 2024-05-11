"use client";

import React, { useState, useEffect, useRef } from "react";
import SidebarContainer from "@/components/SidebarContainer";
import HomeWorks, { THomeWorksProps } from "@/components/Section/HomeWorks";
import HomeServices from "@/components/Section/HomeServices";
import HomeJurnal, { THomeJurnalProps } from "@/components/Section/HomeJurnal";
import HomeMerch, { THomeMerchProps } from "@/components/Section/HomeMerch";
import withScrollActive, {
  TWithScrollActiveProps,
} from "@/utils/withScrollActive";
import Link from "next/link";
import ScrollSpy from "react-scrollspy-navigation";
import Image from "next/image";
import withDimension, { TWithDimensionProps } from "@/utils/withDImension";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type THomeContentProps = THomeWorksProps &
  THomeJurnalProps &
  THomeMerchProps &
  TWithDimensionProps;

const sectionIds = [
  {
    id: "target-work",
    title: "Recent Work",
  },
  {
    id: "target-services",
    title: "What We Do",
  },
  {
    id: "target-jurnal",
    title: "Jurnal",
  },
  {
    id: "target-didibi",
    title: "Didibi Objek",
  },
];

const HomeContent = (props: THomeContentProps) => {
  const { works, jurnal, merch, windowDimension } = props;
  const imageRef = useRef<any>(null);
  const containerRef = useRef<any>(null);

  const onClickEachHandler = (e: any, next: any, container: any) => {
    console.log("The clicked element:", e.target);
    console.log("The target container element:", container);
    next();
  };

  useEffect(() => {
    if (windowDimension.width > 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "max",
          toggleActions: "play none none reverse",
          markers: false,
        },
      });

      tl.to(imageRef.current, {
        opacity: 1,
        duration: 0,
        ease: "none",
      });
    }
  }, []);

  return (
    <SidebarContainer
      sidebarContent={
        <div className="block bg-white rounded-[12px] px-16 py-24 mt-32">
          <ScrollSpy
            activeClass="active !pl-[28px] before:visible before:opacity-100 !text-blue-200"
            offsetTop={80}
            rootMargin="-60px 0px 0px 0px"
            onClickEach={onClickEachHandler}
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
        <div
          className="w-full aspect-[18/5] relative opacity-0 !transition-none"
          ref={imageRef}
        >
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
      <div className="block w-full" id="target-work">
        <HomeWorks works={works} />
      </div>
      <div className="block w-full" id="target-services">
        <HomeServices />
      </div>
      <div className="block w-full" id="target-jurnal">
        <HomeJurnal jurnal={jurnal} />
      </div>
      <div className="block w-full" id="target-didibi">
        <HomeMerch merch={merch} />
      </div>
    </SidebarContainer>
  );
};

export default withDimension(HomeContent);
