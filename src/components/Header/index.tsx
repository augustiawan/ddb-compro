import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <div className="block w-full py-[24px] px-[34px]">
      <div className="flex justify-between items-center">
        <div className="flex gap-[24px]">
          <Link
            href=""
            className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 px-[24px] text-center"
          >
            <span className="uppercase font-mono text-[18.98px] leading-[22.78px] text-black">
              Index
            </span>
          </Link>
          <Link
            href=""
            className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 px-[24px] text-center"
          >
            <span className="uppercase font-mono text-[18.98px] leading-[22.78px] text-black">
              WORKS
            </span>
          </Link>
        </div>
        <div className="flex gap-[18px]">
          <Link
            href=""
            className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 px-[24px] text-center"
          >
            <span className="uppercase font-mono text-[18.98px] leading-[22.78px] text-black">
              STUDIO
            </span>
          </Link>
          <Link
            href=""
            className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 px-[24px] text-center"
          >
            <span className="uppercase font-mono text-[18.98px] leading-[22.78px] text-black">
              JURNAL
            </span>
          </Link>
          <Link
            href=""
            className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 px-[24px] text-center"
          >
            <span className="uppercase font-mono text-[18.98px] leading-[22.78px] text-black">
              DIDIBI
            </span>
          </Link>
          <Link
            href=""
            className="block bg-blue transition duration-300 hover:bg-[#f2f2f2]-200 rounded-[24px] py-8 px-[24px] text-center"
          >
            <span className="uppercase font-mono text-[18.98px] leading-[22.78px] text-white">
              CONTACT
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Header;
