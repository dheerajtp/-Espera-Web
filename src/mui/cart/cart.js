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
        spacing={3}
        wrap="wrap"
        justifyContent="center"
        alignItems="center"
        sx={{ overflow: "hidden" }}
        //   sx={{
        //     display: "flex",
        //     flexDirection: { xs: "column", md: "row" },
        //     gap: "1rem",
        //     margin: ".5rem",
        //   }}
      >
        {children}
      </Grid>
    </Container>
  );
};
