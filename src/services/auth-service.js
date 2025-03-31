import { authClient } from "../api/axios-instance";

export const AuthService = {
  login: async (email, password) => {
    try {
      const response = await authClient.post("/auth/login", {
        email: email,
        password: password,
      });
      AuthService.setToken(response.data.token.token);
      return response.data;
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  },

  googleLogin: async (token) => {
    try {
      const response = await authClient.post("/auth/google/auth", {}, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      AuthService.setToken(response.data.token.token);
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  },

  register: async (data) => {
    try {
      const response = await authClient.post("/auth/register", data);
      AuthService.setToken(response.data.token.token);
      return true;
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem("accessToken");
  },

  setToken: (token) => {
    localStorage.setItem("accessToken", token)
  },

  getUser: async () => {
    try {
      const token = localStorage.getItem("accessToken");
      if (!token) {
        throw new Error("No access token found");
      }

      const response = await authClient.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return response.data;
    } catch (error) {
      console.error("Failed to fetch user data", error);
      throw error;
    }
  },

  isAuthenticated: () => {
    return !!localStorage.getItem("accessToken");
  },
};
