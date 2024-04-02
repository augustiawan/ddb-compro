import React from "react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className="block w-full bg-blue-300 py-[41px] px-[28px]">
        <div className="flex justify-start-start">
          <h2 className="font-barlowcondensed text-[48px] leading-[57.6px] tracking-[-2%] text-blue block max-w-[491px]">
            Design Bridges Business Finding The Gap Within Your Brand.
          </h2>
        </div>
        <div className="flex justify-end w-full">
          <div className="w-1/2 flex flex-col gap-[50px]">
            <div className="flex gap-[24px]">
              <div className="w-1/2">
                <h6 className="uppercase font-medium text-14 leading-[16.8px] text-blue mb-16 block">
                  BUSINESS ENQUIRIES
                </h6>
                <p className="font-medium text-[16.02px] leading-[19.22px]">
                  Hello@dassain.com <br />
                  +62 02903930334
                </p>
              </div>
              <div className="w-1/2">
                <h6 className="uppercase font-medium text-14 leading-[16.8px] text-blue mb-16 block">
                  Careers
                </h6>
                <p className="font-medium text-[16.02px] leading-[19.22px]">
                  dassain.labs@dassain.com <br />
                  +62 02903930334
                </p>
              </div>
            </div>
            <div className="flex gap-[24px]">
              <div className="w-1/2">
                <h6 className="uppercase font-medium text-14 leading-[16.8px] text-blue mb-16 block">
                  HEAD OFFICE
                </h6>
                <p className="font-medium text-[16.02px] leading-[19.22px]">
                  Jl. Cigadung Raya Tengah No.47, Cigadung, Kec. Cibeunying
                  Kaler, Kota Bandung, Jawa Barat 40191
                </p>
              </div>
              <div className="w-1/2">
                <h6 className="uppercase font-medium text-14 leading-[16.8px] text-blue mb-16 block">
                  JAKARTA OFFICE
                </h6>
                <p className="font-medium text-[16.02px] leading-[19.22px]">
                  Alkahf Space - Jl. Merpati V No.13, Bintaro, Jakarta 12330
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="py-[21px] px-[26px] bg-blue text-white">
        <div className="flex justify-between items-center gap-[50px]">
          <div className="flex justify-between items-center">
            <div className="block mr-[5%] xl:mr-[8%] shrink-0">
              <Image
                src="/images/logo-ddb-white.svg"
                alt="Logo white"
                width={33}
                height={30}
                className=""
              />
            </div>
            <span className="font-figtree text-[14.24px] leading-[17.8px] block mr-[10%] xl:mr-[20%] whitespace-nowrap">
              © Copyright 2023 Dassein Design Bureau — All Rights Reserved
            </span>
            <div className="flex items-center gap-[32px] font-inter font-medium text-[12.46px] leading-[15.08px]">
              <Link href="" className="block">
                Terms
              </Link>
              <Link href="" className="block">
                Privacy
              </Link>
              <Link href="" className="block">
                Cookies
              </Link>
            </div>
          </div>
          <div className="shrink-0">
            <h5 className="font-semibold text-24 leading-[20.16px] tracking-[-0.03em]">
              Good Design Brings <br /> Good Business
            </h5>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
