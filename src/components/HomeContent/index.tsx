import React from "react";
import SidebarContainer from "@/components/SidebarContainer";
import HomeWorks from "../Section/HomeWorks";
import Image from "next/image";

const HomeContent = () => {
  return (
    <SidebarContainer>
      <HomeWorks />
    </SidebarContainer>
  );
};

export default HomeContent;
