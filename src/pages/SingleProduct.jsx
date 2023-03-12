import React, { useLayoutEffect } from "react";
import {
  Box,
  Grid,
  Tab,
  Tabs,
  Typography,
  Button,
  LinearProgress,
} from "@mui/material";
import { useBottomNav } from "../utils/hooks/useBottomNav";
import { FavoriteBorder } from "@mui/icons-material";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { useGetSingleProduct } from "../utils/hooks/Cart/useCart";
import { useParams } from "react-router-dom";
import Loading from "../components/common/Loading";
import { BASE_URL } from "../configuration";
import { color } from "../mui/common/common";
import { useAddToCart } from "../utils/hooks/Cart/useCart";
import { useSelector } from "react-redux";

function SingleProduct() {
  const [value, setValue] = useBottomNav(0);
  const addToCart = useAddToCart();
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  let { data, isSuccess } = useGetSingleProduct(id);
  const user = useSelector((state) => state.user.value.user);

  const handleAddToCartClick = () => {
    alert("inside handle add to cart");
    if (isSuccess) {
      addToCart(data[0].con_id, data[0].product_id, user.user_id);
    }
  };
  return (
    <>
      <Header />
      {isSuccess ? (
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                margin: 2,
                display: "flex",
                gap: 2,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Typography variant="h6" gutterBottom>
                {data[0].con_spots} Sold out of {data[0]?.con_total_spots}
              </Typography>
              <Box sx={{ ml: "auto" }}>
                <FavoriteBorder />
              </Box>
            </Box>
            <Box sx={{ display: "flex", margin: 2, flexDirection: "column" }}>
              <LinearProgress
                value={(data[0]?.con_spots * 100) / data[0]?.con_total_spots}
                sx={{
                  "& .MuiLinearProgress-bar": {
                    bgcolor:
                      color(
                        (data[0]?.con_spots * 100) / data[0]?.con_total_spots
                      ) + 50,
                  },
                  borderRadius: 5,
                }}
              />
            </Box>
            <img
              src={`${BASE_URL}images/contest_cover/${data[0].con_thumbnails}`}
              alt={data[0].con_thumbnails}
              style={{ width: "100%" }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ p: 2 }}>
              <Tabs
                value={value}
                onChange={(event, newValue) => {
                  setValue(newValue);
                }}
                variant="fullWidth"
                sx={{
                  borderRadius: "30px",
                  overflow: "hidden",
                  border: "2px solid #000",
                  "& .MuiTabs-indicator": {
                    display: "none",
                  },
                }}
                centered
              >
                <Tab
                  label="Prize Details"
                  sx={{
                    borderRadius: "30px",
                    backgroundColor: value === 0 ? "#5A5A5A" : "transparent",
                    color: value === 0 ? "#ffffff" : "#000",
                    "&.Mui-selected": {
                      color: "white",
                    },
                  }}
                />
                <Tab
                  label="Product Details"
                  sx={{
                    borderRadius: "30px",
                    backgroundColor: value === 1 ? "#5A5A5A" : "transparent",
                    color: value === 1 ? "#ffffff" : "#000",
                    "&.Mui-selected": {
                      color: "white",
                    },
                  }}
                />
              </Tabs>
              {value === 0 && (
                <>
                  <Typography variant="h6" gutterBottom>
                    Max draw date :{" "}
                    {new Date(data[0].con_enddate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    Get a chance to WIN :
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {data[0].con_win}
                  </Typography>
                  <Typography
                    variant="p"
                    gutterBottom
                    sx={{ marginBottom: "2px" }}
                  >
                    {data[0].con_discription}
                  </Typography>
                </>
              )}
              {value === 1 && (
                <>
                  <Typography variant="h6" gutterBottom>
                    Max draw date :{" "}
                    {new Date(data[0].con_enddate).toLocaleDateString()}
                  </Typography>
                  <Typography variant="h5" gutterBottom>
                    Buy our
                  </Typography>
                  <Typography
                    variant="h4"
                    gutterBottom
                    sx={{ fontWeight: "bold" }}
                  >
                    {data[0].pr_name}
                  </Typography>
                  <Typography
                    variant="p"
                    gutterBottom
                    sx={{ marginBottom: "2px" }}
                  >
                    {data[0].pr_discription}
                  </Typography>
                </>
              )}
              {/* <Button
                variant="contained"
                color="primary"
                startIcon={<ShoppingCart />}
              >
                Add to Cart
              </Button> */}
              <Box
                sx={{
                  position: "relative",
                  bottom: 0,
                  left: 0,
                  right: 0,
                  marginTop: 3,
                  borderRadius: "20px 20px 0 0",
                  backgroundColor: "#333",
                  padding: "1rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    Buy a {data[0].pr_name}
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    {data[0].pr_price}.0 USD Inclusive of Vat
                  </Typography>
                  <Typography variant="body1" sx={{ color: "#fff" }}>
                    Inclusive of Vat
                  </Typography>
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    ml: "auto",
                    borderRadius: "20px",
                    backgroundColor: "#fff",
                    color: "black",
                  }}
                  onClick={handleAddToCartClick}
                >
                  Add to Cart
                </Button>
              </Box>
              <Box sx={{ mb: "2rem" }}></Box>
            </Box>
          </Grid>
        </Grid>
      ) : (
        <Loading />
      )}
      <Sidebar />
    </>
  );
}

export default SingleProduct;
