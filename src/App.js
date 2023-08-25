import React from "react";
import { Route, Routes } from "react-router-dom";
import ForgotPassword from "./pages/Auth/Forgot";
import Login from "./pages/Auth/Login";
import Register from "./pages/Auth/Register/Register";
import Home from "./pages/Homepgae";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
};

export default App;
