import React from "react";
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  FormHelperText,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginValidation } from "../utils/validation/loginValidation";
import { useLogin } from "../utils/hooks/Auth/useAuth";
import { toast } from "react-toastify";
import { createUser } from "../store/features/user";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import withAuthRedirect from "../components/common/withAuthRedirect";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { mutate, isLoading } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginValidation),
  });

  const onSubmit = (data) => {
    let body = {
      username: data.username,
      user_password: data.password,
    };
    mutate(body, {
      onSuccess: (data) => {
        if (typeof data.data === "string") {
          toast.error(data.data);
        } else {
          dispatch(createUser(data.data[0]));
          toast.success("Login successful");
          navigate("/");
        }
      },
      onError: (data) => {
        console.log("error");
        console.log(data);
      },
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Container maxWidth="xs">
        <Box sx={{ mb: 3 }}>
          <Typography variant="h4" align="center">
            Login
          </Typography>
        </Box>
        <Box component="form" onSubmit={handleSubmit(onSubmit)}>
          <TextField
            fullWidth
            label="Email Address"
            margin="normal"
            type="text"
            name="username"
            {...register("username")}
          />
          {errors.username && (
            <FormHelperText error>{errors.username.message}</FormHelperText>
          )}
          <TextField
            fullWidth
            label="Password"
            margin="normal"
            type="password"
            name="password"
            {...register("password")}
          />
          {errors.password && (
            <FormHelperText error>{errors.password.message}</FormHelperText>
          )}
          <Box sx={{ mt: 3 }}>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Login;
// export default withAuthRedirect(Login, "/");
