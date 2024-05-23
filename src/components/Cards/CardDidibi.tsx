import React from "react";
import Image from "next/image";

const CardDidibi = () => {
  return (
    <div className="">
      <div className="relative w-full aspect-[16/15]">
        <Image
          src="/images/thumb/thumb-didibi-3.jpg"
          alt="Thumb Card"
          sizes="auto"
          fill={true}
          className="absolute object-center w-full h-full"
        />
      </div>
      <div className="mt-16 md:mt-24 flex items-start justify-between">
        <h6 className="font-medium text-18 leading-[21.6px] text-blue-200">
          DASS SOLEN ZINE
        </h6>
        <span className="text-right text-16 leading-[19.22px] text-blue-200">
          120.00 IDR
        </span>
      </div>
    </div>
  );
};

export default CardDidibi;
