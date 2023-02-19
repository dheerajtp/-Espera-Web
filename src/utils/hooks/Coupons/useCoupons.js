import { useQuery } from "@tanstack/react-query";
import { getCoupons } from "../../../services/Coupons";

export const useGetCoupons = (userId) => {
  return useQuery(["get-coupons", userId], getCoupons, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};
