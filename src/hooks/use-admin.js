import {adminService} from "../services/admin-services.js";
import {adminClient} from "../api/axios-instance.js";

export const useAdmin = () => {
    const getUser = async (id) => {
        try {
            return await adminService.getUserById(id);
        } catch (error) {
            console.error("Error getting user", error);
            return null;
        }
    };

    const getUsers = async () => {
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
    };

    return {
        getUser, getUsers
    };
};
