import React from "react";
import { useGetCovers } from "../../utils/hooks/Home/useHome";
import Loading from "../common/Loading";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { BASE_URL } from "../../configuration";
import { Box } from "@mui/material";

function Covers() {
  const { data, isSuccess } = useGetCovers();
  if (isSuccess) {
    return (
      <Box
        sx={{
          padding: "1rem",
          background: "linear-gradient(to bottom,  #333333, #222222)",
        }}
      >
        <Carousel
          showThumbs={false}
          showIndicators={true}
          autoPlay={true}
          swipeable={true}
          infiniteLoop={true}
        >
          {data?.data?.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={`${BASE_URL}/images/contest_cover/${item.con_thumbnails}`}
                  alt={item.pr_name}
                />
                <h1 style={{ textAlign: "left", color: "#FF66CC" }}>Win</h1>
                <h3 style={{ textAlign: "left", color: "white" }}>
                  {item.con_win}
                </h3>
                <h6 style={{ textAlign: "left", color: "white" }}>
                  {item.con_discription}
                </h6>
              </div>
            );
          })}
        </Carousel>
      </Box>
    );
  } else {
    return (
      <Box sx={{ margin: "2rem" }}>
        <Loading />
      </Box>
    );
  }
}

export default Covers;
