import {AuthProvider, useAuthContext} from "../context/auth-context.jsx";
import {Navigate, Outlet} from "react-router-dom";


const PrivateRoute = () => {
    const {isAuthenticated} = useAuthContext()
    if (!isAuthenticated) return <Navigate to="/" />;

    return(
        <AuthProvider>
            <Outlet />
        </AuthProvider>
    )

}

export default PrivateRoute;