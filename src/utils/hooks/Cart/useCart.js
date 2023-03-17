import { useMutation, useQuery } from "@tanstack/react-query";
import {
  addAddress,
  addToCart,
  getAddress,
  getCartItems,
  getSingleProduct,
  removeFromCart,
  updateQuantity,
} from "../../../services/Cart";
import { toast } from "react-toastify";

export const useAddToCart = (conId, proId, userId) => {
  return useQuery(["add-to-cart", conId, proId, userId], addToCart, {
    enabled: false,
    staleTime: 10000,
    onSuccess: (data) => {
      toast.success(data.message, {
        toastId: "success1",
      });
    },
    onError: () => {
      toast.error("Some error occured..!", {
        toastId: "error1",
      });
    },
  });
};

export const useGetCartItems = (userId) => {
  return useQuery(["use-get-cart", userId], getCartItems);
};

export const useGetSingleProduct = (conId) => {
  return useQuery(["use-single-product", conId], getSingleProduct);
};

export const useGetAddress = (userId) => {
  return useQuery(["use-get-address", userId], getAddress);
};

export const useAddAddress = () => {
  return useMutation(addAddress);
};

export const useRemoveFromCart = () => {
  return useMutation(removeFromCart);
};

export const useUpdateQuantity = () => {
  return useMutation(updateQuantity);
};
