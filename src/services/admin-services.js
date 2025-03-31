import {adminClient} from "../api/axios-instance";
export const adminService = {
    async getUsers() {
        try {
            const response = await adminClient.get("/users", {
                headers: {
                    "Authorization": `Bearer ${localStorage.getItem("accessToken")}`
                }
            });
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async getUserById(id) {
        try {
            const response = await adminClient.get(`/users/${id}`);
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    async banUser(id) {
        () => {};
    }
};
