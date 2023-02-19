import { Container } from "@mui/material";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
function Loading({ count }) {
  return (
    <Container align="center">
      <Skeleton count={count ? count : 3} width="50%" />
    </Container>
  );
}

export default Loading;
