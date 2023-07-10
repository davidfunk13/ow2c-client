import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "/api/",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "X-Requested-With": "XMLHttpRequest"
  }
});
