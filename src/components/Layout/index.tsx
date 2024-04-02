import React, { ReactNode } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

type TLayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: TLayoutProps) => {
  return (
    <>
      <main className="">
        <Header />
        <div className="">{children}</div>
        <Footer />
      </main>
    </>
  );
};

export default Layout;
