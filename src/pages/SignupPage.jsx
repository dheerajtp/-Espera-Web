import React from "react";
import {
  Grid,
  Box,
  TextField,
  Button,
  FormHelperText,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerValidation } from "../utils/validation/registerValidation";
import { images } from "../assets/images";

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerValidation),
  });

  const onSubmit = (data) => {
    console.log(data);
    alert("button clicked");
  };
  return (
    <Grid container spacing={2} justifyContent="center">
      <Grid
        item
        xs={12}
        md={6}
        sx={{ marginLeft: { xs: 2, sm: 0 }, marginRight: { xs: 2, sm: 0 } }}
      >
        <Box sx={{ display: "flex", justifyContent: "center"}} mt={2}>
          <Box
            component="img"
            alt="logo"
            src={images.nameDark}
            sx={{
              height: "auto",
              maxWidth: { xs: "40%", md: "50%" },
            }}
          ></Box>
        </Box>
        <Typography variant="h4" align="center" m={2}>
          Sign Up
        </Typography>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="User Name"
                variant="outlined"
                name="username"
                {...register("username")}
              />
              {errors.username && (
                <FormHelperText error>{errors.username.message}</FormHelperText>
              )}
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                name="fullname"
                {...register("fullname")}
              />
              {errors.fullname && (
                <FormHelperText error>{errors.fullname.message}</FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Referral User Id"
                variant="outlined"
                name="referrelUserId"
                {...register("referrelUserId")}
              />
              {errors.referrelUserId && (
                <FormHelperText error>
                  {errors.referrelUserId.message}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                name="email"
                {...register("email")}
              />
              {errors.email && (
                <FormHelperText error>{errors.email.message}</FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Phone"
                variant="outlined"
                name="mobile"
                {...register("mobile")}
              />
              {errors.mobile && (
                <FormHelperText error>{errors.mobile.message}</FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                variant="outlined"
                type="password"
                name="user_password"
                {...register("user_password")}
              />
              {errors.user_password && (
                <FormHelperText error>
                  {errors.user_password.message}
                </FormHelperText>
              )}
            </Grid>
            <Grid item xs={12}>
              <StyledButton
                fullWidth
                variant="contained"
                type="submit"
                sx={{
                  bgcolor: "black",
                }}
              >
                Sign Up
              </StyledButton>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

const StyledButton = styled(Button)({
  marginTop: "16px",
});

export default SignupPage;
