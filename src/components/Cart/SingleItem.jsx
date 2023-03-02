import React from "react";
import { toast } from "react-toastify";
import { useSelector } from "react-redux";
import { BASE_URL } from "../../configuration";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Typography,
  LinearProgress,
  CardActions,
  Button,
  Grid,
} from "@mui/material";
import { images } from "../../assets/images";
import { useAddToCart } from "../../utils/hooks/Cart/useCart";

function SingleItem({
  type,
  item,
  thumb,
  con_id,
  product_id,
  status,
  total,
  spot,
  prName,
  date,
}) {
  let width_percent = (spot * 100) / total;
  const user = useSelector((state) => state.user.value.user);
  let { refetch } = useAddToCart(con_id, product_id, user.user_id);
  const addToCart = () => {
    if (user === null) {
      toast.error("Please login to continue");
    } else {
      refetch();
    }
  };
  if (type === "sold") {
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card sx={{ minWidth: 240, maxWidth: 345 }}>
          <CardMedia
            sx={{ minHeight: 140, maxHeight: 150 }}
            image={images.soldOut}
            title={item}
          />
          <CardContent>
            <Typography fontSize={14}>WIN {item}</Typography>
            <Typography> buy our {prName}</Typography>
            <Typography> buy our {prName}</Typography>
            <Box sx={{ display: "flex" }}>
              <Typography fontSize={9} color="red">
                Draw Date:
              </Typography>
              <Typography fontSize={9} color="red">
                {new Date(date).toLocaleDateString()}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      </Grid>
    );
  } else {
    return (
      <Grid
        item
        xs={12}
        sm={6}
        md={4}
        lg={3}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Card sx={{ minWidth: 240, maxWidth: 345 }}>
          <CardMedia
            sx={{ minHeight: 140, maxHeight: 150 }}
            image={`${BASE_URL}images/contest_cover/${thumb}`}
            title={item}
          />
          <CardContent>
            <Typography gutterBottom component="div" fontSize={12}>
              Get a chance to
            </Typography>
            <Typography fontSize={14}>WIN {item}</Typography>
            {type !== "addToCart" && (
              <>
                <LinearProgress
                  variant="determinate"
                  value={width_percent}
                  sx={{ margin: ".5rem 0" }}
                />
                <Box sx={{ display: "flex" }}>
                  <Typography fontSize={10} fontWeight={900}>
                    {total} Sold
                  </Typography>
                  {"  "}
                  <Typography fontSize={10}> Out of {spot}</Typography>
                </Box>
              </>
            )}
          </CardContent>
          {type === "addToCart" ? (
            <CardActions>
              <Button
                size="small"
                onClick={() => {
                  addToCart();
                }}
              >
                ADD TO CART
              </Button>
            </CardActions>
          ) : (
            ""
          )}
        </Card>
      </Grid>
    );
  }
}

export default SingleItem;
