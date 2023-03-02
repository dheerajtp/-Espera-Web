import React from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { Box } from "@mui/material";
import Covers from "../components/Home/Covers";
import ClosingSoon from "../components/Home/ClosingSoon";
import ActiveContest from "../components/Home/ActiveContest";
import SoldOut from "../components/Home/SoldOut";

function Home() {
  return (
    <>
      <Header />
      <Box sx={{ display: "flex", flexDirection: "column",gap:".5rem" }}>
        <Covers />
        <ClosingSoon />
        <ActiveContest />
        <SoldOut />
      </Box>
      <Sidebar />
    </>
  );
}

export default Home;
