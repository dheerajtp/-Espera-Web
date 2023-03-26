import React from "react";
import Loading from "../common/Loading";
import { useGetActiveContest } from "../../utils/hooks/Home/useHome";
import { Grid, Container,Box } from "@mui/material";
import SingleItem from "../Cart/SingleItem";

function ActiveContest() {
  let { data, isSuccess, isError } = useGetActiveContest();
  return (
    <Box
      sx={{
        margin: "2rem",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontWeight: "900",
        fontSize: {
          xs: 16,
          sm: 18,
          md: 20,
        },
      }}
    >
      <Container sx={{ maxWidth: "100%" }}>
        <Grid
          container
          spacing={2}
          sx={{
            display: "flex",
            flexDirection: {
              xs: "column",
              sm: "row",
            },
            justifyContent: "center",
            alignItems: "center",
            gap: {
              xs: 1,
              sm: 2,
              md: 4,
            },
          }}
        >
          {isSuccess ? (
            data?.data.map((item) => {
              return (
                <SingleItem
                  key={item.id}
                  con_id={item.con_id}
                  product_id={item.product_id}
                  type="addToCart"
                  item={item.pr_name}
                  thumb={item.con_thumbnails}
                  status={item.con_status}
                  total={item.con_total_spots}
                  spot={item.con_spots}
                  prName={item.pr_name}
                  date={item.con_enddate}
                  price={item?.pr_price}
                  pr_thumbnails={item.pr_thumbnails}
                />
              );
            })
          ) : isError ? (
            <Loading />
          ) : (
            <Loading />
          )}
        </Grid>
      </Container>
    </Box>
  );
}

export default ActiveContest;
