import React from "react";
import CardWorkThumb, {
  TCardWorkThumbProps,
} from "@/components/Cards/CardWorkThumb";
import { CARD_QUARTER, CARD_FULL, CARD_HALF } from "@/store/constant";

export type TWorkThumbProps = TCardWorkThumbProps & {
  card_format: string;
};

export type THomeWorksProps = {
  works: TWorkThumbProps[];
  noTitle?: boolean;
};

const HomeWorks = ({ works, noTitle = true }: THomeWorksProps) => {
  return (
    <div className="block w-full">
      {noTitle && (
        <h6 className="uppercase font-mono font-semibold text-blue text-[26px] leading-[33.02px] mb-16 md:mb-[28px] lg:mb-[34px]">
          recent work
        </h6>
      )}
      <div className="grid grid-cols-4 content-end gap-[12px] md:gap-[20px]">
        {works.map((item: TWorkThumbProps, index: number) => (
          <div
            key={index}
            className={`flex items-end ${
              item.card_format == CARD_FULL
                ? "col-span-4"
                : item.card_format == CARD_HALF
                ? "col-span-4 md:col-span-2"
                : "col-span-2 md:col-auto"
            }`}
          >
            <CardWorkThumb
              image={item.image}
              title={item.title}
              category={item.category}
              year={item.year}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomeWorks;
