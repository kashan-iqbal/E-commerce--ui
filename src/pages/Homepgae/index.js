import React from "react";
import Banner from "../../Component/Banner/Banner";
import Qform from "../../Component/Displayfom/Qform";
import Feature from "../../Component/Feature/Feature";
import Footer from "../../Component/Footer/Footer";
import Header from "../../Component/Header/Header";
import Hero from "../../Component/Hero/Hero";
import NewProduct from "../../Component/Newproducts/NewProduct";
import Product from "../../Component/Product/Product";
import Smbanner from "../../Component/SmBanner/Smbanner";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <Feature />
      <Product />
      <Banner />
      <NewProduct />
      <Smbanner />
      <Qform />
      <Footer />
    </>
  );
};

export default Home;
