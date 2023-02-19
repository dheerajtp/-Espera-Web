import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Error from "../pages/404";
import Coupons from "../pages/Coupons";
import Home from "../pages/Home";
import MyCart from "../pages/MyCart";
import Profile from "../pages/Profile";
import Wishlist from "../pages/Wishlist";
import Login from "../pages/Login";

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
      </Routes>
    </Router>
  );
}

export default MainLayout;
