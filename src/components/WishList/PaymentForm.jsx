import React, { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Box, Button, Grid, Typography } from "@mui/material";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setLoading(true);

    const cardElement = elements.getElement(CardElement);

    try {
      const { paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
      });

      console.log(paymentMethod);

      setSuccess(true);
      setError(null);
    } catch (error) {
      console.error(error);
      setError(error.message);
      setSuccess(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box maxWidth={600} mx="auto" px={2}>
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">Enter payment details:</Typography>
          </Grid>
          <Grid item xs={12}>
            <CardElement
              options={{
                style: {
                  base: {
                    fontSize: "16px",
                    color: "#424770",
                    "::placeholder": {
                      color: "#aab7c4",
                    },
                  },
                  invalid: {
                    color: "#9e2146",
                  },
                },
              }}
            />
          </Grid>
          {error && (
            <Grid item xs={12}>
              <Typography variant="body1" color="error">
                {error}
              </Typography>
            </Grid>
          )}
          {success && (
            <Grid item xs={12}>
              <Typography variant="body1" color="success">
                Payment succeeded!
              </Typography>
            </Grid>
          )}
          <Grid item xs={12} md={6}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={!stripe || loading}
              fullWidth
            >
              {loading ? "Loading..." : "Pay"}
            </Button>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
}

export default PaymentForm;
