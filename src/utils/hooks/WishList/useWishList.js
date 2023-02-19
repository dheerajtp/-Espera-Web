import { useQuery } from "@tanstack/react-query";
import { getWishList } from "../../../services/WishList";

export const useGetWishList = (userId) => {
  return useQuery(["get-user-wishlist", userId], getWishList, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};
