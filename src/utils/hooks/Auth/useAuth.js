import { useMutation } from "@tanstack/react-query";
import { userLogin } from "../../../services/Profile";

export const useLogin = () => {
  return useMutation(userLogin);
};
