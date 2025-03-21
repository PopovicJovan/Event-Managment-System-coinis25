import { apiClient } from "./axiosInstance";
export const partiesService = {
  async getParties() {
    try {
      const response = await apiClient.get();
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};
