"use client";

import Spline from "@splinetool/react-spline";

export default function DasseinLogoScene({ ...props }) {
  return (
    <>
      <div className="h-full w-full relative hidden md:block">
        <Spline scene="https://prod.spline.design/g83rrF987022SLKJ/scene.splinecode" />
      </div>
      <div className="h-full w-full relative block md:hidden">
        <Spline scene="https://prod.spline.design/BMTxUdyBMkq8klkJ/scene.splinecode" />
      </div>
    </>
  );
}
