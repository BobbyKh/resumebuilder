import axios from "axios";
import {ACCESS_TOKEN, GOOGLE_ACCESS_TOKEN} from "../auth/Token";

const API_URL =
  process.env.NODE_ENV === "development"
    ? "http://127.0.0.1:8000/api"
    : "https://resumaven.net/api";


export const api = axios.create({

  baseURL: API_URL




}
)
api.interceptors.request.use(
  (config) => {
      const accessToken = localStorage.getItem(ACCESS_TOKEN);
      if (accessToken) {
          config.headers.Authorization = `Bearer ${accessToken}`;
      }

      const googleAccessToken = localStorage.getItem(GOOGLE_ACCESS_TOKEN);
      if (googleAccessToken) {
          config.headers["X-Google-Access-Token"] = googleAccessToken
      }

      return config;
  },

  (error) => {
      return Promise.reject(error);
  }
);

export default API_URL