import { apiClient } from "../api/axios-instance";

export const authService = {
  async login(user) {
    try {
      const response = await apiClient.post("/signin", {
        username: user.username,
        password: user.password,
      });
      if (response.data.accessToken) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }
      return response.data;
    } catch (error) {
      console.error("Loggin error", error);
      throw error;
    }
  },
  logout() {
    localStorage.removeItem("user");
  },
  async register(user) {
    try {
      const response = await apiClient.post("/signup", {
        username: user.username,
        email: user.email,
        password: user.password,
      });
      return response.data;
    } catch (error) {
      console.error("Register error", error);
      throw error;
    }
  },
};
