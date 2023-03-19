import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import { MUICouponRow } from "../../mui/coupon/coupon";

function SingleCoupon({ coupen, order_date, con_enddate, con_id, pr_price }) {
  return (
    <Grid
      item
      xs={12}
      sm={6}
      md={4}
      lg={4}
      justifyContent="center"
      alignItems="center"
    >
      <Card
        sx={{
          borderRadius: 4,
          border: "2px solid black",
          borderWidth: 2,
          minWidth: 320,
          maxWidth: 380,
        }}
      >
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Coupon Number:
          </Typography>
          <Typography variant="p" component="div">
            {coupen}
          </Typography>
          <MUICouponRow>
            <Typography variant="p" component="div">
              Start Date:
            </Typography>
            <Typography variant="p" component="div">
              {new Date(order_date).toLocaleDateString()}
            </Typography>
          </MUICouponRow>
          <MUICouponRow>
            <Typography variant="p" component="div">
              Draw Date:
            </Typography>
            <Typography variant="p" component="div">
              {new Date(con_enddate).toLocaleDateString()}
            </Typography>
          </MUICouponRow>
          <MUICouponRow>
            <Typography variant="p" component="div">
              Contest ID:
            </Typography>
            <Typography variant="p" component="div">
              {con_id}
            </Typography>
          </MUICouponRow>
          <MUICouponRow>
            <Typography variant="p" component="div">
              Coupon Price
            </Typography>
            <Typography variant="p" component="div">
              {pr_price}
            </Typography>
          </MUICouponRow>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default SingleCoupon;
