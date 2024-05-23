import React from "react";
import Layout from "@/components/Layout";
import JurnalDetailContent from "@/components/JurnalDetailContent";
import { MENU_JURNAL } from "@/store/constant";

const JurnalDetail = () => {
  return (
    <Layout activeMenu={MENU_JURNAL}>
      <JurnalDetailContent />
    </Layout>
  );
};

export default JurnalDetail;
