import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile, userLogin } from "../../../services/Profile";

export const useLogin = () => {
  return useMutation(userLogin);
};

export const useGetProfile = (username) => {
  return useQuery(["get-profile", username], getProfile, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};
