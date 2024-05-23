import React from "react";
import WorksDetailContent from "@/components/WorksDetailContent";
import Layout from "@/components/Layout";
import { MENU_WORKS } from "@/store/constant";

const WorksDetail = () => {
  return (
    <Layout activeMenu={MENU_WORKS}>
      <WorksDetailContent />
    </Layout>
  );
};

export default WorksDetail;
