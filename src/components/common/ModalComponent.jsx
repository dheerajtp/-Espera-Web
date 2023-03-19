import React from "react";
import { Grid, Modal } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../WishList/PaymentForm";

function ModalComponent({ openModal, handleClose }) {
  const stripePromise = loadStripe(
    "pk_test_51H2711DqIVpJBt3RNYIncduJKSJPxTwEYygd4qrZYO34egsxttr06XhTnbZV37mXlAQFqNt2bSvvW2Rvemdn95d3006HwkMWBM"
  );
  return (
    <Modal
      open={openModal}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid
        container
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          //   width: 400,
          bgcolor: "white",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }} // optional: set a height to fill the screen
      >
        <Elements stripe={stripePromise}>
          <PaymentForm />
        </Elements>
      </Grid>
    </Modal>
  );
}

export default ModalComponent;
