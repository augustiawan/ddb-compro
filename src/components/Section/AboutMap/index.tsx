import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutMap = () => {
  return (
    <div className="block w-full mt-[48px] mb-[31px] overflow-hidden">
      <div className="w-full md:w-1/2">
        <h5 className="font-barlowcondensed font-semibold text-black text-28 md:text-[36px] leading-[127%] mb-24">
          If you’d like to talk about a project, please get in touch
        </h5>
      </div>
      <div className="flex flex-col-reverse flex-row gap-32 md:gap-[12px]">
        <div className="w-full md:w-1/2">
          <div className="block mb-32 md:mb-[48px]">
            <span className="block text-18 leading-[22px] mb-10 tracking-[-0.02em] font-bold">
              Email
            </span>
            <Link
              href="mailto:dassein.general@gmail.com"
              target="_blank"
              className="block text-18 md:text-[21px] leading-[22px] md:leading-[25px] tracking-[-0.02em] text-blue font-barlowcondensed"
            >
              dassein.general@gmail.com
            </Link>
          </div>
          <div className="block">
            <span className="block text-18 leading-[22px] mb-10 tracking-[-0.02em] font-bold">
              Follow Us
            </span>
            <Link
              href="#"
              target="_blank"
              className="block text-18 md:text-[21px] leading-[22px] md:leading-[25px] tracking-[-0.02em] text-blue font-barlowcondensed mb-14 md:mb-20 last:mb-0"
            >
              Instagram
            </Link>
            <Link
              href="#"
              target="_blank"
              className="block text-18 md:text-[21px] leading-[22px] md:leading-[25px] tracking-[-0.02em] text-blue font-barlowcondensed mb-14 md:mb-20 last:mb-0"
            >
              Linked In
            </Link>
            <Link
              href="#"
              target="_blank"
              className="block text-18 md:text-[21px] leading-[22px] md:leading-[25px] tracking-[-0.02em] text-blue font-barlowcondensed mb-14 md:mb-20 last:mb-0"
            >
              Behance
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/2">
          <div className="max-w-[426px] shrink-0 w-full aspect-[16/12] relative mb-16 md:mb-[22px]">
            <Image
              src="/images/maps.jpg"
              alt=""
              fill={true}
              className="object-cover object-center"
            />
          </div>
          <p className="font-barlowcondensed text-18 md:text-[21px] leading-normal md:leading-[127%]">
            Jl. Cigadung Raya Tengah No.47, Cigadung, Kec. Cibeunying Kaler,
            Kota Bandung, Jawa Barat 40191
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMap;
