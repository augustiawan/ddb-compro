"use client";

import React, { useRef, useEffect, useState } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import MenuMobile from "./MenuMobile";
import "./style.css";

gsap.registerPlugin(ScrollTrigger);

const Header = () => {
  const menuRef = useRef<(HTMLDivElement | null)[]>([]);
  const headerRef = useRef<HTMLDivElement | null>(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [openNavbar, setOpenNavbar] = useState(false);

  const addMenuToRefs = (item: any) => {
    if (item) {
      menuRef.current.push(item);
    }
  };

  const handleNavbar = () => {
    setOpenNavbar(!openNavbar);
  };

  useEffect(() => {
    const staggerMenu = gsap.to(menuRef.current, {
      y: -88,
      duration: 0.05,
      ease: "back.in",
      stagger: {
        each: 0.05,
        from: "start",
      },
    });

    ScrollTrigger.create({
      start: "88 88",
      end: "max",
      markers: false,
      animation: staggerMenu,
      toggleActions: "play none none reverse",
    });
  }, []);

  return (
    <>
      <div
        className="hidden md:block w-full py-[24px] px-16 md:px-[34px] fixed w-full top-0 left-0 z-[100]"
        ref={headerRef}
      >
        <div className="flex justify-between items-center gap-[16px] lg:gap-[24px]">
          <div className="md:hidden lg:flex gap-[16px] lg:gap-[24px]">
            <Link
              href=""
              className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 md:px-[20px] lg:px-[24px] text-center"
              ref={addMenuToRefs}
            >
              <span className="uppercase font-mono md:text-16 lg:text-[18.98px] md:leading-[20px] lg:leading-[22.78px] text-black">
                Index
              </span>
            </Link>
            <Link
              href=""
              className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 md:px-[20px] lg:px-[24px] text-center"
              ref={addMenuToRefs}
            >
              <span className="uppercase font-mono md:text-16 lg:text-[18.98px] md:leading-[20px] lg:leading-[22.78px] text-black">
                WORKS
              </span>
            </Link>
          </div>
          <div className="flex gap-[18px] md:justify-around lg:justify-end md:w-full lg:w-auto">
            <Link
              href=""
              className="md:block lg:hidden bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 md:px-[20px] lg:px-[24px] text-center"
              ref={addMenuToRefs}
            >
              <span className="uppercase font-mono md:text-16 lg:text-[18.98px] md:leading-[20px] lg:leading-[22.78px] text-black">
                Index
              </span>
            </Link>
            <Link
              href=""
              className="md:block lg:hidden bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 md:px-[20px] lg:px-[24px] text-center"
              ref={addMenuToRefs}
            >
              <span className="uppercase font-mono md:text-16 lg:text-[18.98px] md:leading-[20px] lg:leading-[22.78px] text-black">
                WORKS
              </span>
            </Link>
            <Link
              href=""
              className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 md:px-[20px] lg:px-[24px] text-center"
              ref={addMenuToRefs}
            >
              <span className="uppercase font-mono md:text-16 lg:text-[18.98px] md:leading-[20px] lg:leading-[22.78px] text-black">
                STUDIO
              </span>
            </Link>
            <Link
              href=""
              className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 md:px-[20px] lg:px-[24px] text-center"
              ref={addMenuToRefs}
            >
              <span className="uppercase font-mono md:text-16 lg:text-[18.98px] md:leading-[20px] lg:leading-[22.78px] text-black">
                JURNAL
              </span>
            </Link>
            <Link
              href=""
              className="block bg-white transition duration-300 hover:bg-[#f2f2f2] rounded-[24px] py-8 md:px-[20px] lg:px-[24px] text-center"
              ref={addMenuToRefs}
            >
              <span className="uppercase font-mono md:text-16 lg:text-[18.98px] md:leading-[20px] lg:leading-[22.78px] text-black">
                DIDIBI
              </span>
            </Link>
            <Link
              href=""
              className="block bg-blue transition duration-300 hover:bg-[#f2f2f2]-200 rounded-[24px] py-8 md:px-[20px] lg:px-[24px] text-center"
              ref={addMenuToRefs}
            >
              <span className="uppercase font-mono md:text-16 lg:text-[18.98px] md:leading-[20px] lg:leading-[22.78px] text-white">
                CONTACT
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="fixed w-full flex justify-end px-16 py-20 z-[100]">
        <div
          id="nav-icon3"
          className={`relative z-30 block tablet-min:hidden ${
            openNavbar ? "open" : ""
          }`}
          onClick={handleNavbar}
        >
          <span></span>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <MenuMobile isOpen={openNavbar}>
        <div className="w-full h-full p-16 relative flex justify-center items-center">
          <div
            id="nav-icon3"
            className={`!absolute z-30 block top-[20px] right-16 ${
              openNavbar ? "open" : ""
            }`}
            onClick={handleNavbar}
          >
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="text-center">
            <li className="text-[25px] leading-tight py-12 stagger-item">
              <Link href="">
                <span className="block uppercase text-blue font-medium">
                  Index
                </span>
              </Link>
            </li>
            <li className="text-[25px] leading-tight py-12 stagger-item">
              <Link href="">
                <span className="block uppercase text-blue font-medium">
                  Works
                </span>
              </Link>
            </li>
            <li className="text-[25px] leading-tight py-12 stagger-item">
              <Link href="">
                <span className="block uppercase text-blue font-medium">
                  Studio
                </span>
              </Link>
            </li>
            <li className="text-[25px] leading-tight py-12 stagger-item">
              <Link href="">
                <span className="block uppercase text-blue font-medium">
                  Jurnal
                </span>
              </Link>
            </li>
            <li className="text-[25px] leading-tight py-12 stagger-item">
              <Link href="">
                <span className="block uppercase text-blue font-medium">
                  DIDIBI
                </span>
              </Link>
            </li>
            <li className="text-[25px] leading-tight py-12 stagger-item">
              <Link href="">
                <span className="block uppercase text-blue font-medium">
                  Contact
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </MenuMobile>
    </>
  );
};
export default Header;
