import React from "react";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/Section/HeroBanner";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <Layout>
      <HeroBanner />
      <HomeContent />
      <p className="">Homepage</p>
    </Layout>
  );
}
