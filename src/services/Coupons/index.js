import APIConfiguration from "../../api";

export const getCoupons = async ({ queryKey }) => {
  let userId = queryKey[1];
  let { data } = await APIConfiguration.API.get(
    `contest/getMyOrders/${userId}/complete`
  );
  return data;
};
