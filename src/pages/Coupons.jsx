import React from "react";
import Header from "../components/common/Header";
import Loading from "../components/common/Loading";
import Sidebar from "../components/common/Sidebar";
import { useGetCoupons } from "../utils/hooks/Coupons/useCoupons";
import { Box, Container, Grid } from "@mui/material";
import SingleCoupon from "../components/Coupon/SingleCoupon";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function Coupons() {
  const user = useSelector((state) => state.user.value.user);
  let { data, isSuccess } = useGetCoupons(user.user_id);
  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" />;
  }
  return (
    <>
      <Header />
      {isSuccess ? (
        <Box
          sx={{
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
          <Container sx={{ maxWidth: "100%", margin: "2rem 0 4rem" }}>
            <Grid
              container
              spacing={2}
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              sx={{ overflow: "hidden" }}
            >
              {data.length === 0 ? (
                <p>Nothing to show here</p>
              ) : (
                data.map((item) => {
                  return (
                    <SingleCoupon
                      key={item.id}
                      coupen={item.coupen}
                      order_date={item.order_date}
                      con_enddate={item.con_enddate}
                      con_id={item.con_id}
                      pr_price={item.pr_price}
                    />
                  );
                })
              )}
            </Grid>
          </Container>
        </Box>
      ) : (
        <Loading />
      )}
      <Sidebar />
    </>
  );
}

export default Coupons;
