"use client";

import React from "react";
import Spline from "@splinetool/react-spline";

export default function DasseinLogoScene({ ...props }) {
  return (
    <>
      <div className="h-full w-full relative block">
        <Spline scene="https://prod.spline.design/sAx3c3PuSdoZHrtB/scene.splinecode" />
      </div>
    </>
  );
}
