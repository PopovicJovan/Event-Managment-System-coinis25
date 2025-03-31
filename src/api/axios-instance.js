import axios from "axios";

export const apiClient = axios.create({
  baseURL: "https://www.goabase.net/api/party/json/",
  headers: {
    "Content-Type": "application/json",
  },
});

export const authClient = axios.create({
  baseURL: "http://localhost:8001/api/v1",
  headers: {
    "Content-Type": "application/json",
  },
});

export const adminClient = axios.create({
  baseURL: "http://localhost:8001/api/v1",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
  },
})
