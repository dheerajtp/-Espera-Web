import React, { useState } from "react";
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
import {
  useRemoveFromCart,
  useUpdateQuantity,
} from "../../utils/hooks/Cart/useCart";
import { useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

function MyCartItem({ order_id, quantity, pr_name, con_win, image, pr_price }) {
  const queryClient = useQueryClient();
  let [itemQuantity, setItemQuantity] = useState(Number(quantity));
  const { mutate, isLoading } = useRemoveFromCart();
  const { mutate: updateQuantity, isLoading: updateQuantityIsLoading } =
    useUpdateQuantity();
  const removeItem = () => {
    let item = {
      order_id,
    };
    mutate(item, {
      onSuccess: (data) => {
        toast.success("Removed Item From Cart");
        queryClient.invalidateQueries({ queryKey: ["use-get-cart"] });
      },
      onError: () => {
        queryClient.invalidateQueries({ queryKey: ["use-get-cart"] });
        toast.error("Some error occured");
      },
    });
  };
  const increaseQuantity = () => {
    let item = {
      order_id,
      quantity: itemQuantity + 1,
    };
    setItemQuantity(itemQuantity + 1);
    updateQuantity(item, {
      onSuccess: (data) => {
        console.log("data", data);
        toast.success("Quantity succesfully updated");
        queryClient.invalidateQueries({ queryKey: ["use-get-cart"] });
      },
      onError: () => {
        queryClient.invalidateQueries({ queryKey: ["use-get-cart"] });
        toast.error("Some error occured");
      },
    });
  };
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
                      <IconButton disabled={isLoading}>
                        <Remove onClick={removeItem} />
                      </IconButton>

                      <Typography variant="P" align="center">
                        {itemQuantity}
                      </Typography>
                      <IconButton disabled={updateQuantityIsLoading}>
                        <Add onClick={increaseQuantity} />
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
