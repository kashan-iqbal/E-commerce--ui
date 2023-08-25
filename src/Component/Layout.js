import React from "react";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

const Layout = ({ childrens }) => {
  return (
    <>
      <Header />
      <main>{childrens}</main>
      <Footer />
    </>
  );
};

export default Layout;
