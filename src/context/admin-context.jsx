import { createContext, useContext } from "react";
import {useAdmin} from "../hooks/use-admin.js";

const AdminContext = createContext();

export const AdminProvider = ({ children }) => {
    const { getUser, getUsers } = useAdmin()

    return (
        <AdminContext.Provider value={{ getUser, getUsers }}>
            {children}
        </AdminContext.Provider>
    );
};

export const useAdminContext = () => {
    const context = useContext(AdminContext);
    if (!context) {
        throw new Error("useAdminContext must be used within AdminProvider");
    }
    return context;
};
