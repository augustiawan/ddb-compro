import React from "react";
import Image from "next/image";

const HomeBanner = () => {
  return (
    <div className="">
      <div className="w-full aspect-[18/7] relative">
        <Image
          src="/images/logo-ddb-full.svg"
          alt="Home Banner"
          sizes="auto"
          fill={true}
          className="absolute object-center w-full h-full"
        />
      </div>
    </div>
  );
};

export default HomeBanner;
