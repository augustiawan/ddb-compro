import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type TLayoutProps = {
  children: ReactNode;
  activeMenu: string;
};

const Layout = ({ children, activeMenu }: TLayoutProps) => {
  return (
    <>
      <main className="">
        <Header activeMenu={activeMenu} />
        <div className="">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
