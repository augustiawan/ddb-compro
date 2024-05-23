import React from "react";
import Layout from "@/components/Layout";
import HeroBanner from "@/components/Section/HeroBanner";
import HomeContent from "@/components/HomeContent";
import { MENU_INDEX } from "@/store/constant";

import worksJson from "@/data/works.json";
import jurnalJson from "@/data/jurnal.json";
import merchJson from "@/data/merch.json";

async function getPortofolios() {
  try {
    let response = await fetch(
      `${process.env.NEXT_PUBLIC_WORDPRESS_API_URL}/portfolio`
    );

    if (response.ok) {
      return response.json();
    }

    throw Error(`Failed to fetch category ${response.status}`);
  } catch (error) {
    console.log(error);
    return null; // Return null on error
  }
}

export default async function Home() {
  const data = await getPortofolios();
  console.log(data);
  return (
    <Layout activeMenu={MENU_INDEX}>
      <HeroBanner />
      <HomeContent
        works={worksJson}
        jurnal={jurnalJson}
        merch={merchJson}
        dataWorks={data}
      />
    </Layout>
  );
}
