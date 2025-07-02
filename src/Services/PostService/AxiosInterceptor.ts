import axios, { type InternalAxiosRequestConfig } from "axios";

export const apiRequest = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

apiRequest.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  config.headers.Authorization = "DEVTOKEN123";
  return config;
});
