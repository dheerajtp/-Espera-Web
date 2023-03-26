import React, { useState } from "react";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import { MUICartHeader } from "../mui/cart/cart";
import { useGetCartItems, useGetAddress } from "../utils/hooks/Cart/useCart";
import { useSelector } from "react-redux";
import Loading from "../components/common/Loading";
import MyCartItem from "../components/Cart/MyCartItem";
import { Navigate } from "react-router-dom";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import ModalComponent from "../components/common/ModalComponent";
import AddAddress from "../components/common/AddAddress";

function MyCart() {
  const [selected, setSelected] = useState(1);

  const paymentOption = [
    { id: 1, label: "Outlet collection" },
    { id: 2, label: "Home Delivery" },
  ];
  const [openModal, setOpenModal] = useState(false);
  const [openAddress, setOpenAddress] = useState(false);

  const handleClickOpen = () => {
    setOpenModal(true);
  };

  const handleAddressClose = () => {
    setOpenAddress(false);
  };

  const handleClose = () => {
    setOpenModal(false);
  };
  const handleClick = (id) => {
    setSelected(id);
  };
  const user = useSelector((state) => state.user.value.user);
  let { data, isSuccess } = useGetCartItems(user.user_id);
  let { data: address } = useGetAddress(user.user_id);

  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" />;
  }

  const totalValue = isSuccess
    ? data.reduce(
        (accumulator, item) => accumulator + item.quantity * item.pr_price,
        0
      )
    : 0;

  return (
    <>
      <Header />
      <ModalComponent
        openModal={openModal}
        handleClose={handleClose}
        selected={selected}
        totalValue={totalValue}
        cartDetails={data}
      />
      <AddAddress
        openModal={openAddress}
        handleClose={handleAddressClose}
      />
      <MUICartHeader />
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
          <Container sx={{ maxWidth: "100%" }}>
            <Grid
              container
              spacing={10}
              wrap="wrap"
              justifyContent="center"
              alignItems="center"
              sx={{ overflow: "hidden" }}
            >
              {data.map((item) => {
                return (
                  <MyCartItem
                    key={item.order_id}
                    quantity={item.quantity}
                    pr_name={item.pr_name}
                    con_win={item.con_win}
                    image={item.con_thumbnails}
                    pr_price={item.pr_price}
                    order_id={item.order_id}
                  />
                );
              })}
            </Grid>
          </Container>
        </Box>
      ) : (
        <Loading />
      )}
      {isSuccess ? (
        <>
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
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={6}>
                <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
                  <Typography variant="p" color="white">
                    Inclusive of VAT
                  </Typography>
                  <Typography variant="p" color="white">
                    items
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography color="white" align="right">
                  {totalValue.toFixed(2)} USD
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography color="white">
                  Delivery option ( Charge : $5 )
                </Typography>
              </Grid>
              <Grid
                container
                spacing={2}
                direction="row"
                justifyContent="center"
                alignItems="center"
              >
                {paymentOption.map((item) => (
                  <Grid item key={item.id}>
                    <Box
                      name={item.label}
                      sx={{
                        width: "100px",
                        height: "100px",
                        bgcolor: selected === item.id ? "#5A5A5A" : "#FFFFFF",
                        border: 1,
                        borderColor: "#5A5A5A",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        cursor: "pointer",
                      }}
                      onClick={() => handleClick(item.id)}
                    >
                      <Typography
                        variant="h6"
                        align="center"
                        sx={{ color: selected === item.id ? "white" : "black" }}
                      >
                        {item.label}
                      </Typography>
                    </Box>
                  </Grid>
                ))}
              </Grid>
              <Grid
                container
                spacing={2}
                justifyContent="center"
                alignItems="center"
                m={2}
              >
                <Button
                  variant="contained"
                  sx={{
                    bgcolor: "#5A5A5A",
                    color: "white",
                    borderRadius: "20px",
                    textTransform: "none",
                    "&:hover": {
                      bgcolor: "#4A4A4A",
                    },
                  }}
                  onClick={() => {
                    console.log(address);
                    console.log(selected);
                    if (selected === 2 && !address[0]?.user_address) {
                      // alert("add address first");
                      setOpenAddress(true);
                    }
                    handleClickOpen();
                  }}
                >
                  PAY NOW
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box sx={{ mb: "3rem" }}></Box>
        </>
      ) : (
        ""
      )}

      <Sidebar />
    </>
  );
}

export default MyCart;
