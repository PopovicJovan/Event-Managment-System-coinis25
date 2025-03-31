import { useAuthContext } from "../context/auth-context";
import { useState, useEffect } from "react";
import userImage from "../assets/user_image.jpg";
import { Mail, Calendar, Award } from "lucide-react";
import { SpinLoader } from "../components/spin-loader.jsx";
import SingleUser from "../components/single-user.jsx";

export const UserPage = () => {
  const { getUser, logout } = useAuthContext();
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  const handleGetUser = async () => {
    try {
      const userData = await getUser();
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
    handleGetUser();
    return () => {};
  }, []);

  return <SingleUser user={user} error={error} logout={logout}/>
};
