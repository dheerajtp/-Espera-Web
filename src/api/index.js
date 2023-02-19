import axios from "axios";
import { BASE_URL } from "../configuration";

const instance = axios.create({ baseURL: BASE_URL });
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log("error", error);
  }
);

instance.interceptors.request.use((config) => {
  // config.headers["access-token"] = TOKEN;
  return config;
});

const APIConfiguration = {
  API: instance,
};

export default APIConfiguration;
