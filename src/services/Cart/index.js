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

export const addAddress = async (body) => {
  let { data } = await APIConfiguration.API.post(`user/updateMyAddress`, body);
  return data;
};

export const removeFromCart = async (body) => {
  let { data } = await APIConfiguration.API.post(
    `contest/removeFromCart`,
    body
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

export const updateQuantity = async (input) => {
  let body = {
    quantity: input.quantity,
  };
  let { data } = await APIConfiguration.API.post(
    `contest/updateQuantity/${input.order_id}/`,
    body
  );
  return data;
};

export const confirmPaymentIntent = async (body) => {
  let { data } = await APIConfiguration.API.post(
    `user/paymentIntentConfirm`,
    body
  );
  return data;
};

export const getSingleProduct = async ({ queryKey }) => {
  let conId = queryKey[1];
  let { data } = await APIConfiguration.API.get(
    `contest/getOneWithProduct/${conId}`
  );
  return data;
};

export const getAddress = async ({ queryKey }) => {
  let userId = queryKey[1];
  let { data } = await APIConfiguration.API.get(`user/getMyAddress/${userId}`);
  return data;
};
