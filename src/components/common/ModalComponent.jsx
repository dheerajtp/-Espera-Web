import React from "react";
import { Grid, Modal } from "@mui/material";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import PaymentForm from "../WishList/PaymentForm";
import { STRIPE_KEY } from "../../configuration";

function ModalComponent({ openModal, handleClose, selected, totalValue }) {
  const stripePromise = loadStripe(STRIPE_KEY);
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
          <PaymentForm selected={selected} totalValue={totalValue} />
        </Elements>
      </Grid>
    </Modal>
  );
}

export default ModalComponent;
