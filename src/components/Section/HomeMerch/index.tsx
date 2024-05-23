import React from "react";
import CardMerch, { TCardMerchProps } from "@/components/Cards/CardMerch";

export type THomeMerchProps = {
  merch: TCardMerchProps[];
};

const HomeMerch = (props: THomeMerchProps) => {
  return (
    <div className="block w-full mt-[40px] md:mt-[70px] mb-[15px]">
      <h6 className="uppercase font-mono font-semibold text-blue-200 text-[26px] leading-[33.02px] mb-16 md:mb-[28px] lg:mb-[34px]">
        DIDIBI OBJEK
      </h6>
      <div className="flex items-start mt-32 overflow-auto pb-8">
        {props.merch.map((item, index) => (
          <div
            className="shrink-0 min-w-[200px] w-1/2 md:w-1/3 px-12"
            key={index}
          >
            <CardMerch {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeMerch;
