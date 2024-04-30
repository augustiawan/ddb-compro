import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";
import DasseinLogoScene from "@/components/banner3d";
import Image from "next/image";
import { Metadata } from "next";

import { redirect } from "next/navigation";
export default async function UnderConstruction({ params }: any) {
  redirect("/");
}

export const metadata: Metadata = {
  title: "DDB | Under Construction",
};
