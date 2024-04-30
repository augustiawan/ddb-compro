import React from "react";
import CardJurnal, { TCardJurnalProps } from "@/components/Cards/CardJurnal";

export type THomeJurnalProps = {
  jurnal: TCardJurnalProps[];
};

const HomeJurnal = (props: THomeJurnalProps) => {
  return (
    <div className="block w-full mt-[40px] md:mt-[70px] overflow-hidden">
      <h6 className="uppercase font-mono font-semibold text-blue text-[26px] leading-[33.02px]">
        JURNAL
      </h6>
      <div className="block">
        <div className="flex flex-wrap mt-4 md:mt-32 mx-[-16px] md:mx-[-24px] lg:mx-[-30px]">
          {props.jurnal.map((item, index) => (
            <div
              className="block w-full md:w-1/2 py-16 md:py-24 px-16 md:px-24 lg:px-[30px]"
              key={index}
            >
              <CardJurnal {...item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeJurnal;
