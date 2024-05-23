"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import withDimension, { TWithDimensionProps } from "@/utils/withDimension";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const HeroBanner = (props: TWithDimensionProps) => {
  const { windowDimension } = props;
  const imageRef = useRef<any>(null);
  const containerRef = useRef<any>(null);
  const paragrafRef = useRef<any>(null);

  useEffect(() => {
    if (windowDimension.width > 768) {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: imageRef.current,
          start: "+=64 88",
          end: "+=" + containerRef.current.clientHeight,
          scrub: false,
          pin: false,
          markers: false,
          toggleClass: "shrinking",
          toggleActions: "play none none reverse",
        },
        onReverseComplete: () => {
          console.log("reverse complete");
        },
      });

      tl.fromTo(
        imageRef.current,
        {
          width: containerRef.current.clientWidth - 64,
        },
        {
          width: "340px",
          duration: 0.2,
          ease: "none",
        }
      );

      tl.to(
        paragrafRef.current,
        {
          y: -45,
          opacity: 0,
          duration: 0.3,
        },
        "<+0.1"
      );
    }
  }, []);

  return (
    <div
      className="px-16 md:px-32 pb-[40px] md:pb-[70px] lg:pb-[100px] pt-[60px] md:pt-[88px]"
      ref={containerRef}
    >
      <div className="w-full aspect-[18/5] relative justify-self-start relative z-[2]">
        <div
          className="w-full !max-w-full min-w-[340px] aspect-[18/5] relative transition-all"
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
      </div>

      <div className="mt-32 md:mt-[40px] translate-y-[0]" ref={paragrafRef}>
        <p className="uppercase font-mono text-[21px] md:text-24 lg:text-[40px] leading-[31px] md:leading-[38px] lg:leading-[50.8px] text-blue">
          Dassein Established in 2016, Dassein Design Bureau is a
          multidisciplinary design studio based in Bandung, Indonesia. The
          design aspect in business has a crucial function, which we respond to
          and we deepen so that each existing design can bridge all aspects of
          the needs of each business problem that is being faced.
        </p>
        <p className="uppercase font-mono text-[21px] md:text-24 lg:text-[40px] leading-[31px] md:leading-[38px] lg:leading-[50.8px] text-blue mt-16">
          WE DESIGN A DESIGN TO DESIGN YOUR BUSINESS.
        </p>
      </div>
    </div>
  );
};

export default withDimension(HeroBanner);
