import React from "react";
import { styled } from "@mui/material/styles";
import { Box, Grid, Typography } from "@mui/material";
import { Step, StepLabel, Stepper } from "@mui/material";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      label: "Shop from our products",
      description: "Select from our wide range of products items",
    },
    {
      id: 2,
      label: "Get Complementary Coupons to enter the draw",
      description:
        "With each product purchased you are awarded a complimentary coupon to a prize draw",
    },
    {
      id: 3,
      label: "Win luxury prizes",
      description:
        "Once all products  with in a campaign are sold the draw will happen and the winner will be announced",
    },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant="h4" align="center">
            How It Works
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Stepper activeStep={1} alternativeLabel>
            {steps.map((step) => (
              <Step key={step.id}>
                <StyledStepLabel>
                  {step.label}
                  <Typography variant="body2">{step.description}</Typography>
                </StyledStepLabel>
              </Step>
            ))}
          </Stepper>
        </Grid>
      </Grid>
    </Box>
  );
};

const StyledStepLabel = styled(StepLabel)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  "& .MuiStepLabel-label": {
    marginTop: "8px",
    fontSize: "1rem",
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  "& .MuiTypography-body2": {
    fontSize: "0.875rem",
    fontWeight: "normal",
    color: "#8c8c8c",
    textAlign: "center",
    marginTop: "4px",
  },
});

export default HowItWorks;
