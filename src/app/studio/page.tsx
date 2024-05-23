import react from "react";
import Layout from "@/components/Layout";
import AboutContent from "@/components/AboutContent";
import { MENU_STUDIO } from "@/store/constant";

const AboutPage = async () => {
  return (
    <Layout activeMenu={MENU_STUDIO}>
      <AboutContent />
    </Layout>
  );
};

export default AboutPage;
