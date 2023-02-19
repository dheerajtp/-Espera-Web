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
      <Box>
        <Carousel
          showThumbs={false}
          showIndicators={true}
          autoPlay={true}
          //   centerMode={true}
          swipeable={true}
          infiniteLoop={true}
          //   width="60%"
        >
          {data?.data?.map((item) => {
            return (
              <div key={item.id}>
                <img
                  src={`${BASE_URL}/images/contest_cover/${item.con_thumbnails}`}
                  alt={item.pr_name}
                />
                <h1>Win</h1>
                <h3>{item.con_win}</h3>
                <h6>{item.con_discription}</h6>
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
