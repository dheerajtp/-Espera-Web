import { Box, Typography, Grid, Container } from "@mui/material";

export const MUICartHeader = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", margin: ".2rem" }}>
      <Typography
        variant="h3"
        sx={{
          marginBottom: "5rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: "900",
          fontSize: 20,
        }}
      >
        My Cart
      </Typography>
    </Box>
  );
};

export const MUICartMainWrap = ({ children }) => {
  return (
    <Container sx={{ margin: "2rem" }}>
      <Grid
        container
        spacing={4}
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ overflow: "hidden" }}
      >
        {children}
      </Grid>
    </Container>
  );
};

export const MUICouponMainWrap = ({ children }) => {
  return (
    <Container sx={{ margin: "2rem" }}>
      <Grid
        container
        spacing={10}
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ overflow: "hidden" }}
      >
        {children}
      </Grid>
    </Container>
  );
};
