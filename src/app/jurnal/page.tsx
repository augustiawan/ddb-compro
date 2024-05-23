import React from "react";
import Layout from "@/components/Layout";
import JurnalContent from "@/components/JurnalContent";
import { MENU_JURNAL } from "@/store/constant";

import jurnalJson from "@/data/jurnal.json";

const JurnalPage = () => {
  return (
    <Layout activeMenu={MENU_JURNAL}>
      <JurnalContent jurnal={jurnalJson} />
    </Layout>
  );
};

export default JurnalPage;
