import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/Auth/Forgot";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Homepgae";
import Products from "./pages/Products";
import Productdetail from "./pages/Productdetail/Productdtai";
import Addtocart from "./pages/AddtoCard/Addtocart";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product-detail" element={<Productdetail />} />
        <Route path="/addto-cart" element={<Addtocart />} />
      </Routes>
    </>
  );
};

export default App;
