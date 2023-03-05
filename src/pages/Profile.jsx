import React from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Profile() {
  const user = useSelector((state) => state.user.value.user);
  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Header />
      <div>Profile</div>
      <Sidebar />
    </>
  );
}

export default Profile;
