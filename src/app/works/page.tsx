import React from "react";
import Layout from "@/components/Layout";
import Fullbanner from "@/components/Banner/Fullbanner";
import WorksContent from "@/components/WorksContent";
import { MENU_WORKS } from "@/store/constant";

import worksJson from "@/data/works.json";

const WorksPage = async () => {
  return (
    <Layout activeMenu={MENU_WORKS}>
      <Fullbanner image="/images/banner/banner-works.jpg" />
      <WorksContent works={worksJson} />
    </Layout>
  );
};

export default WorksPage;
