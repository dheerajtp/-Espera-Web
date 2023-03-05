import { Container } from "@mui/material";
import React from "react";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// HashLoader
import { HashLoader } from "react-spinners";

function Loading() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      {/* <Skeleton count={count ? count : 3} width="50%" /> */}
      <HashLoader color="#000" />
    </Container>
  );
}

export default Loading;
