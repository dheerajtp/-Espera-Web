import { useMutation, useQuery } from "@tanstack/react-query";
import { getWishList, removeFromWishList } from "../../../services/WishList";

export const useGetWishList = (userId) => {
  return useQuery(["get-user-wishlist", userId], getWishList, {
    refetchOnWindowFocus: false,
    keepPreviousData: true,
  });
};

export const useRemoveItem = () => {
  return useMutation(removeFromWishList);
};
