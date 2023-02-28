import React from "react";
import Loading from "../common/Loading";
import { useGetContestClosingSoon } from "../../utils/hooks/Home/useHome";
import { Typography, Container, Grid } from "@mui/material";
import SingleItem from "../Cart/SingleItem";

function SoldOut() {
  const { data, isSuccess, isError } = useGetContestClosingSoon();
  return (
    <>
      <Typography
        variant="h3"
        sx={{
          margin: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "900",
          fontSize: 20,
        }}
      >
        Sold Out
      </Typography>
      <Container>
        <Grid
          container
          spacing={2}
          // container
          // spacing={3}
          // wrap="wrap"
          // justifyContent="center"
          // alignItems="center"
          // sx={{ overflow: "hidden" }}
          //   sx={{
          //     display: "flex",
          //     flexDirection: { xs: "column", md: "row" },
          //     gap: "1rem",
          //     margin: ".5rem",
          //   }}
        >
          {/* <Box
            sx={{
              display: "flex",
              gap: "2rem",
              justifyContent: "space-around",
            }}
          > */}
          {isSuccess ? (
            data?.data.map((item) => {
              return (
                <SingleItem
                  key={item.id}
                  con_id={item.con_id}
                  product_id={item.product_id}
                  type="sold"
                  item={item.pr_name}
                  thumb={item.con_thumbnails}
                  status={item.con_status}
                  total={item.con_total_spots}
                  spot={item.con_spots}
                  prName={item.pr_name}
                  date={item.con_enddate}
                />
              );
            })
          ) : isError ? (
            <Loading />
          ) : (
            <Loading />
          )}
          {/* </Box> */}
        </Grid>
      </Container>
    </>
  );
}

export default SoldOut;
