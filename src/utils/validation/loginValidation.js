import * as yup from "yup";

export const loginValidation = yup.object().shape({
  username: yup.string().required("Email is required"),
  password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
