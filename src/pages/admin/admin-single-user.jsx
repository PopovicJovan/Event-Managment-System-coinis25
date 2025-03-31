import { useState, useEffect } from "react";
import {useNavigate, useParams} from "react-router-dom";
import {useAdminContext} from "../../context/admin-context.jsx";
import SingleUser from "../../components/single-user.jsx";
import {Button} from "antd";

export const AdminSingleUserPage = () => {
    const { id } = useParams();
    const { getUser } = useAdminContext();
    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const navigate = useNavigate()
    

    const handleGetUser = async (id) => {
        try {
            const userData = await getUser(id);
            userData.created_at = new Intl.DateTimeFormat('en-GB', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            }).format(new Date());
            setUser(userData);
        } catch (err) {
            setError(err.message);
        }
    };

    useEffect(() => {
        handleGetUser(id);
        return () => {};
    }, [id]);

    return (
        <>
            <Button className="my-5 z-40"  size={"large"} onClick={() => navigate(-1)}>EXIT</Button>
            <SingleUser user={user} error={error} showLogout={false}/>
        </>

    )
};
