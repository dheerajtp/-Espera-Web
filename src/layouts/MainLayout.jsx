import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "../pages/404";
import Coupons from "../pages/Coupons";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import Profile from "../pages/Profile";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";
import SingleProduct from "../pages/SingleProduct";
import SignupPage from "../pages/SignupPage";
import HowItWorks from "../pages/HowItWorks";
import Settings from "../pages/Settings";

function MainLayout() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/wish-list" element={<Wishlist />} />
        <Route path="/coupons" element={<Coupons />} />
        <Route path="/cart" element={<MyCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
        <Route path="/login" element={<Login />} />
        <Route path="/single-product/:id" element={<SingleProduct />} />
        <Route path="/register" element={<SignupPage />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default MainLayout;
