import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://www.goabase.net/api/party/json/",
  headers: {
    "Content-Type": "application/json",
  },
});
