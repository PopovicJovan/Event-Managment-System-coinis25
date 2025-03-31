import {adminClient, apiClient} from "../api/axios-instance";
export const usersService = {
    async getUsers() {
        try {
            const response = await adminClient.get("/users", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            console.log("users:",response);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async getUserById(id) {
        try {
            const response = await apiClient.get(`https://dummyjson.com/users/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async banUser(id) {
        () => {};
    }
};
