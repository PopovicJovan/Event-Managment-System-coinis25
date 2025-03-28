import { useState } from "react";
import { AuthService } from "../services/auth-service";
import { useNavigate } from "react-router-dom";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    AuthService.isAuthenticated()
  );
  const navigate = useNavigate();

  const login = async (username, password) => {
    try {
      await AuthService.login(username, password);
      setIsAuthenticated(true);
      return true;
    } catch (error) {
      setIsAuthenticated(false);
      return false;
    }
  };

  const register = async (data, setRegisterClicked, handleError, errors) => {
    setRegisterClicked(true);
    if (data.password.trim() !== data.passwordConfirm.trim()){
      handleError("general", "Passwords do not match!");
      return;
    }
    if (!emailRegex.test(data.email) && !errors.email){
      handleError("email", "Email adress is not valid");
      return;
    }
    if (Object.keys(errors).every(key => errors[key].trim() !== "")) return;
    try{
      await AuthService.register({
        username: data.username,
        password: data.password,
        email: data.email,
        password_confirmation: data.passwordConfirm
      })
      setIsAuthenticated(true);
    }catch (error){
      if (Array.isArray(error?.response?.data?.detail)){
        error.response.data.detail.forEach((err) => {
          handleError(err.loc[1] ?? err.loc[0], err.msg)
        });
      }
      handleError('general', error?.response?.data?.detail?.msg)
    }
  }

  const logout = () => {
    AuthService.logout();
    setIsAuthenticated(false);
    navigate("/");
  };

  const getUser = async () => {
    try {
      return await AuthService.getUser();
    } catch (error) {
      console.error("Error getting user", error);
      return null;
    }
  };

  return {
    isAuthenticated,
    login,
    logout,
    getUser,
    register
  };
};
