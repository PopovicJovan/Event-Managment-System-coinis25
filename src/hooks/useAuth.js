import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { authService } from "../services/authService";

export const useAuth = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [message, setMessage] = useState(null);

  const login = async () => {
    try {
      await authService.login(user);
      setMessage("Success");
      navigate("/dashboard");
    } catch (err) {
      setMessage("Failed", err);
    }
  };

  const logout = () => {
    authService.logout();
    navigate("/login");
  };

  const register = async () => {
    try {
      await authService.register(user);
      setMessage("Success");
      navigate("/");
    } catch (err) {
      setMessage("Failed", err);
    }
  };

  return {
    user,
    setUser,
    message,
    login,
    register,
    logout,
  };
};
