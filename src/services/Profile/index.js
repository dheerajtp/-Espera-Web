import APIConfiguration from "../../api";

export const userLogin = async (body) => {
  // const body = {username: email, user_password: password};
  let response = await APIConfiguration.API.post(`user/login`, body);
  return response;
};

export const getProfile = async ({ queryKey }) => {
  let username = queryKey[1];
  let { data } = await APIConfiguration.API.get(
    `user/getUser/username/${username}`
  );
  return data;
};
