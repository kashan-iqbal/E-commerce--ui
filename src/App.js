import React from "react";
import Header from "./Component/Header/Header";
import Hero from "./Component/Hero/Hero";
import Feature from "./Component/Feature/Feature";
import Product from "./Component/Product/Product";
import Banner from "./Component/Banner/Banner";
import NewProduct from "./Component/Newproducts/NewProduct";
import Smbanner from "./Component/SmBanner/Smbanner";
import Qform from "./Component/Displayfom/Qform";
import Footer from "./Component/Footer/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Hero/>
      <Feature/>
      <Product/>
      <Banner/>
      <NewProduct/>
      <Smbanner/>
      <Qform/>
      <Footer/>
    </>
  );
};

export default App;
