import axios from "axios";

export const api = axios.create({
  baseURL: "https://rockenotes-api.onrender.com",
});
