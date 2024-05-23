import React from "react";
import SidebarContainer from "@/components/SidebarContainer";
import Image from "next/image";
import CardJurnal from "@/components/Cards/CardJurnal";
import { THomeJurnalProps } from "@/components/Section/HomeJurnal";

const JurnalContent = (props: THomeJurnalProps) => {
  return (
    <div className="pt-32 md:pt-[88px]">
      <SidebarContainer
        sidebarHead={
          <div className="w-full aspect-[18/5] relative">
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
        <div className="w-full">
          <h6 className="uppercase font-mono font-semibold text-blue text-20 md:text-[26px] leading-[26px] md:leading-[33.02px] mb-18 md:mb-24 lg:mb-[41px]">
            Journal
          </h6>
          <h1 className="font-barlowcondensed font-medium text-32 md:text-[40px] lg:text-[48px] leading-[34px] md:leading-[46px] lg:leading-[48px] tracking-[-0.02em]">
            It serves as a reference point for documenting when specific tasks
            or events occur within the brand design process.
          </h1>
          <div className="mb-[48px] mt-[40px] md:mt-[52px] lg:mt-[70px]">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-[48px] my-[-22px]">
              {props.jurnal.map((item, index) => (
                <div className="py-[22px]" key={index}>
                  <CardJurnal {...item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </SidebarContainer>
    </div>
  );
};

export default JurnalContent;
