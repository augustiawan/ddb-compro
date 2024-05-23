import React from "react";
import Layout from "@/components/Layout";
import DidibiContent from "@/components/DidibiContent";
import { MENU_DIDIBI } from "@/store/constant";

const DidibiPage = () => {
  return (
    <Layout activeMenu={MENU_DIDIBI}>
      <DidibiContent />
    </Layout>
  );
};

export default DidibiPage;
