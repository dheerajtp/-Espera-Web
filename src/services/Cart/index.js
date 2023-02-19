import APIConfiguration from "../../api";

export const addToCart = async ({ queryKey }) => {
  let conId = queryKey[1],
    prodId = queryKey[2],
    userId = queryKey[3];
  let { data } = await APIConfiguration.API.get(
    `contest/orderSpot/${userId}/${conId}/${prodId}`
  );
  return data;
};

export const getCartItems = async ({ queryKey }) => {
  let userId = queryKey[1];
  let { data } = await APIConfiguration.API.get(
    `contest/getMyOrders/${userId}/oncart`
  );
  return data;
};
