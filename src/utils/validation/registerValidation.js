import * as yup from "yup";

export const registerValidation = yup.object().shape({
  username: yup
    .string()
    .min(3, "Username must contain 3 letters")
    .required("Username is required"),
  fullname: yup
    .string()
    .min(3, "Name must contain 3 letters")
    .required("Name is required"),
  referrelUserId: yup.string().required("Refferal user id is required"),
  email: yup
    .string()
    .email("Please enter a valid email address")
    .required("Email is required"),
  mobile: yup
    .string()
    .min(3, "Please enter a valid mobile number")
    .required("Mobile Number is required"),
  user_password: yup
    .string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});
