import React from "react";
import { Box, Grid, Tab, Tabs, Typography, Button } from "@mui/material";
import { useBottomNav } from "../utils/hooks/useBottomNav";
import { ShoppingCart } from "@mui/icons-material";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";

function SingleProduct() {
  const [value, setValue] = useBottomNav(0);
  return (
    <>
      <Header />
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <img
            src="https://picsum.photos/200/300"
            alt="https://picsum.photos/200/300"
            style={{ width: "100%" }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Box sx={{ p: 2 }}>
            <Typography variant="h4" gutterBottom>
              Product 1
            </Typography>
            <Typography variant="h5" gutterBottom>
              $19.99
            </Typography>
            <Tabs
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
              centered
            >
              <Tab label="Description" />
              <Tab label="Specifications" />
              <Tab label="Reviews" />
            </Tabs>
            {value === 0 && (
              <Typography variant="body1" sx={{ p: 2 }}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
                dolor dolorum porro, rem blanditiis, ut pariatur sit, culpa
                tempore labore quis maxime et ipsa neque quidem explicabo eum
                repellat dignissimos.
              </Typography>
            )}
            {value === 1 && (
              <Typography variant="body1" sx={{ p: 2 }}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Aliquid earum vitae distinctio consequuntur reprehenderit fuga,
                sint doloribus nisi rerum. Nesciunt magnam, ipsam dicta
                doloribus nulla in adipisci ipsa atque quisquam.
              </Typography>
            )}
            {value === 2 && (
              <Typography variant="body1" sx={{ p: 2 }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
                molestias. Distinctio fugiat, voluptate cumque debitis aliquid
                nesciunt ratione ducimus, tempore quasi ad nisi dolorum facilis
                quo doloremque quaerat in maiores?
              </Typography>
            )}
            <Button
              variant="contained"
              color="primary"
              startIcon={<ShoppingCart />}
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Sidebar />
    </>
  );
}

export default SingleProduct;
