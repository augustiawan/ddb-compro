import React from "react";

export type TCardMerchProps = {
  image: string;
  title: string;
  price: string;
};

const CardMerch = (props: TCardMerchProps) => {
  return (
    <div className="block w-full">
      <div className="relative flex aspect-[10/16]">
        {props.image && props.image !== "" && (
          <img src={props.image} alt="" className="m-auto" />
        )}
      </div>
      <div className="flex justify-between items-start flex-col lg:flex-row gap-[8px] mt-8">
        {props.title && props.title !== "" && (
          <h6 className="font-medium text-18 leading-[21.6px] text-blue">
            {props.title}
          </h6>
        )}
        {props.price && props.price !== "" && (
          <span className="shrink-0 font-light text-16 leading-[19.22px]">
            {props.price}
          </span>
        )}
      </div>
    </div>
  );
};

export default CardMerch;
