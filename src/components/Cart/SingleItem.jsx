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
  Button,
  Grid,
} from "@mui/material";
import { images } from "../../assets/images";
import { useAddToCart } from "../../utils/hooks/Cart/useCart";
import { color, LinearGradientNew } from "../../mui/common/common";
import { useNavigate } from "react-router-dom";

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
  price,
}) {
  const navigate = useNavigate();
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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Card
          sx={{
            minWidth: 320,
            maxWidth: 320,
            // borderWidth: 4,
            // borderColor: "#EDEDED",
            borderRadius: 2,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            paddingVertical: 2,
            minHeight: 320,
            maxHeight: 320,
            position: "relative",
            borderWidth: 10,
            borderColor: "#E5E5E5",
          }}
        >
          <CardMedia
            sx={{ minHeight: 140, maxHeight: 150 }}
            image={images.soldOut}
            title={item}
          />
          <CardContent>
            <Typography
              fontSize={14}
              fontWeight="bold"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/single-product/${con_id}`);
              }}
            >
              WIN {item}
            </Typography>
            <Typography> buy our {prName}</Typography>
          </CardContent>
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              right: 0,
              backgroundColor: "#CD1719",
              padding: "30px",
              paddingY: "5px",
              borderTopLeftRadius: "25px",
              zIndex: 1,
              width: "60%",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontFamily: "Roboto",
                color: "#fff",
                fontSize: "9px",
                marginRight: "5px",
              }}
            >
              Draw Date:{" "}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontFamily: "Roboto",
                color: "#fff",
                fontSize: "12px",
              }}
            >
              {new Date(date).toLocaleDateString()}
            </Typography>
          </Box>
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
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
        }}
      >
        <Card
          sx={{
            minWidth: 320,
            maxWidth: 320,
            borderWidth: 4,
            borderColor: "#EDEDED",
            borderRadius: 2,
            backgroundColor: "#fff",
            paddingHorizontal: 10,
            paddingVertical: 2,
            minHeight: 320,
            maxHeight: 320,
          }}
        >
          {type === "addToCart" ? (
            <Box sx={{ marginBottom: 3 }}>
              <LinearGradientNew
                width_percent={width_percent}
                sold={total}
                remaining={spot}
              />
            </Box>
          ) : (
            ""
          )}
          <CardMedia
            sx={{ minHeight: 140, maxHeight: 150 }}
            image={`${BASE_URL}images/contest_cover/${thumb}`}
            title={item}
          />
          <CardContent>
            {type !== "addToCart" ? (
              <Typography
                gutterBottom
                component="div"
                fontSize={12}
                sx={{ cursor: "pointer" }}
                onClick={() => {
                  navigate(`/single-product/${con_id}`);
                }}
              >
                Get a chance to
              </Typography>
            ) : (
              ""
            )}

            <Typography
              fontSize={14}
              fontWeight="bold"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                navigate(`/single-product/${con_id}`);
              }}
            >
              WIN {item}
            </Typography>
            {type === "addToCart" ? (
              <Box sx={{ display: "flex", flexWrap: "wrap" }}>
                <Box
                  sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}
                >
                  <Typography fontSize={14} fontWeight="bold">
                    {price}.0
                  </Typography>
                  <Typography
                    sx={{ marginLeft: "0.5rem", flexGrow: 1 }}
                    fontSize={14}
                  >
                    USD Only
                  </Typography>
                  <Button
                    variant="contained"
                    sx={{
                      backgroundColor: "#333333",
                      color: "white",
                      borderRadius: "12px",
                    }}
                    onClick={() => {
                      addToCart();
                    }}
                  >
                    ADD TO CART
                  </Button>
                </Box>
                <Typography sx={{ flexGrow: 1, mt: 1 }} fontSize={14}>
                  Buy our {prName}
                </Typography>
              </Box>
            ) : (
              ""
            )}
            {type !== "addToCart" && (
              <>
                <LinearProgress
                  variant="determinate"
                  value={width_percent}
                  sx={{
                    "& .MuiLinearProgress-bar": {
                      bgcolor: color(width_percent) + 50,
                    },
                    borderRadius: 5,
                    overflow: "hidden",
                    marginTop: 3,
                  }}
                />
                <Box sx={{ display: "flex", marginTop: 3 }}>
                  <Typography fontSize={10} fontWeight={900}>
                    {total} Sold
                  </Typography>
                  {"  "}
                  <Typography fontSize={10}> Out of {spot}</Typography>
                </Box>
              </>
            )}
          </CardContent>
        </Card>
      </Grid>
    );
  }
}

export default SingleItem;
