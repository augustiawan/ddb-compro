"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

const HeroBanner = () => {
  const imageRef = useRef<any>(null);
  const containerRef = useRef<any>(null);

  // useEffect(() => {
  //   console.log(containerRef.current.clientHeight);
  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: imageRef.current,
  //       start: "+=64 88",
  //       end: "+=" + (containerRef.current.clientHeight - 64),
  //       scrub: true,
  //       pin: false,
  //       markers: true,
  //       toggleClass: "shrinking",
  //     },
  //     onReverseComplete: () => {
  //       console.log("reverse complete");
  //     },
  //   });

  //   tl.to(imageRef.current, {
  //     width: "340px",
  //     duration: 0.5,
  //   });
  // }, []);

  return (
    <div
      className="px-16 md:px-32 pb-[40px] md:pb-[70px] lg:pb-[100px] pt-[60px] md:pt-[88px]"
      ref={containerRef}
    >
      <div className="w-full aspect-[18/5] relative justify-self-start relative">
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

      <div className="mt-32 md:mt-[40px]">
        <p className="uppercase font-mono text-[21px] md:text-24 lg:text-[40px] leading-[31px] md:leading-[38px] lg:leading-[50.8px] text-blue">
          Dassein Established in 2016, Dassein Design Bureau is a
          multidisciplinary design studio based in Bandung, Indonesia. The
          design aspect in business has a crucial function, which we respond to
          and we deepen so that each existing design can bridge all aspects of
          the needs of each business problem that is being faced.{" "}
        </p>
      </div>
    </div>
  );
};

export default HeroBanner;
