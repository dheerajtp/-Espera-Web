import APIConfiguration from "../../api";

export const getWishList = async ({ queryKey }) => {
  let userId = queryKey[1];
  let { data } = await APIConfiguration.API.get(`user/getWishLists/${userId}`);
  return data;
};

export const removeFromWishList = async (body) => {
  let { data } = await APIConfiguration.API.delete(
    `user/removeFromWishList`,
    body
  );
  return data;
};
