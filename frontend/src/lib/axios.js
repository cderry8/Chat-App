import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://chatapp-ypsb.onrender.com/api", // updated base URL
  withCredentials: true,
});
