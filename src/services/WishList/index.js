import APIConfiguration from "../../api";

export const getWishList = async ({ queryKey }) => {
  let userId = queryKey[1];
  let { data } = await APIConfiguration.API.get(`user/getWishLists/${userId}`);
  return data;
};
