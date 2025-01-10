import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: import.meta.env.MODE === "development" ? "https://back-test-production-708f.up.railway.app/api" : "/api",
  withCredentials: true,
});
