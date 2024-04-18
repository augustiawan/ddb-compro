import React from "react";
import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="px-32">
      <div className="w-full aspect-[18/5] relative">
        <Image
          src="/images/logo-ddb-full.svg"
          alt="Home Banner"
          sizes="auto"
          fill={true}
          className="absolute object-center w-full h-full"
        />
      </div>

      <div className="mt-[40px]">
        <p className="uppercase font-mono text-[40px] leading-[50.8px] text-blue">
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
