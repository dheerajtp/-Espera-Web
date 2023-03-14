import React from "react";
import {
  Box,
  Grid,
  Card,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { BASE_URL } from "../../configuration";

function MyCartItem({ quantity, pr_name, con_win, image, pr_price }) {
  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Card
        sx={{
          borderRadius: 4,
          border: "2px solid green",
          borderWidth: 4,
        }}
      >
        <CardHeader title={pr_name} />
        <CardMedia
          component="img"
          height="150"
          image={`${BASE_URL}images/contest_cover/${image}`}
          alt="Product Image"
        />
        <Grid container spacing={2} alignItems="center" justifyContent="center">
          <Grid item xs={12} sx={{ padding: "16px" }}>
            <Grid container spacing={0.5} alignItems="center">
              <Grid item xs={6} sx={{ padding: "8px" }}>
                <Typography variant="p">WIN {con_win}</Typography>
              </Grid>
              <Grid item xs={6}>
                <Grid container spacing={0.5} alignItems="center">
                  <Grid item xs={12}>
                    <Typography variant="h6" align="center">
                      {pr_price}.0 USD
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant="body2" align="center">
                      Quantity
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2,
                      }}
                    >
                      <IconButton>
                        <Remove />
                      </IconButton>
                      <Typography variant="P" align="center">
                        {quantity}
                      </Typography>
                      <IconButton>
                        <Add />
                      </IconButton>
                    </Box>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    </Grid>
  );
}

export default MyCartItem;
