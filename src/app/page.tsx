import React from "react";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/Section/HeroBanner";
import HomeContent from "@/components/HomeContent";

import worksJson from "@/data/works.json";
import jurnalJson from "@/data/jurnal.json";
import merchJson from "@/data/merch.json";

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <HomeContent works={worksJson} jurnal={jurnalJson} merch={merchJson} />
    </Layout>
  );
}
