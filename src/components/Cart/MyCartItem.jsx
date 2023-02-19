import React from "react";
import {
  Box,
  Grid,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@mui/material";
import { Add, Remove } from "@mui/icons-material";
import { BASE_URL } from "../../configuration";

function MyCartItem({ quantity, pr_name, con_win, image, pr_price }) {
  return (
    <Grid item xs={12} sm={6} md={3} lg={3}>
      <Card sx={{ maxWidth: 345 }}>
        <Typography variant="h4" m={1}>
          {pr_name}
        </Typography>
        <CardMedia
          component="img"
          height="194"
          image={`${BASE_URL}images/contest_cover/${image}`}
          alt={pr_name}
        />
        <CardContent>
          <Typography variant="h6" color="text.secondary" m={2}>
            WIN {con_win}
          </Typography>
          <Box sx={{ display: "flex", gap: ".2rem" }}>
            <Typography
              variant="h6"
              color="text.secondary"
              m={2}
              fontWeight="bold"
            >
              {pr_price}
            </Typography>
            <Typography variant="h6" color="text.secondary" m={2}>
              USD
            </Typography>
          </Box>
        </CardContent>
        <CardActions sx={{ display: "flex", flexDirection: "column" }}>
          <Typography>Quantity</Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton>
              <Remove />
            </IconButton>
            <Typography variant="subtitle1" component="div">
              {quantity}
            </Typography>
            <IconButton>
              <Add />
            </IconButton>
          </Box>
        </CardActions>
      </Card>
    </Grid>
  );
}

export default MyCartItem;
