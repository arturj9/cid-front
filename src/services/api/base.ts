import axios from "axios";
import { getCookie, hasCookie } from "cookies-next/client";

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || "";

export const api = axios.create({
  baseURL: API_BASE_URL,
});

api.interceptors.request.use(
  async (config) => {
    if (hasCookie("token")) {
      config.headers.Authorization = `Bearer ${getCookie("token")}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);