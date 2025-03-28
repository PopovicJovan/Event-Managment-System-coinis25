import React, {useState} from "react";
import registerImage from "../assets/undraw_login.svg";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useTheme } from "../context/theme-context";
import {AuthService} from "/src/services/auth-service.js";
import {AuthInput} from "./auth-input.jsx";

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export const RegisterPopup = ({ className, isAdmin = false }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [registerClicked, setRegisterClicked] = useState(false);
  const { theme } = useTheme();

  const [errors, setErrors] = useState({});
  const handleError = (name, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value,
    }));
  };

  const handleLoginSuccess = (response) => {
    const token = response.credential;
    const decoded = jwtDecode(token);
    console.log(decoded);
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  const handleRegister = async () => {
    setRegisterClicked(true);
    if (password.trim() !== passwordConfirm.trim()){
      handleError("general", "Passwords do not match!");
      return;
    }
    if (!emailRegex.test(email) && !errors.email){
      handleError("email", "Email adress is not valid");
      return;
    }
    if (Object.keys(errors).every(key => errors[key].trim() !== "")) return;
    try{
        await AuthService.register({
          username: username,
          password: password,
          email: email,
          password_confirmation: passwordConfirm
      })
    }catch (error){
      if (Array.isArray(error?.response?.data?.detail)){
        error.response.data.detail.forEach((err) => {
          handleError(err.loc[1] ?? err.loc[0], err.msg)
        });
      }
      handleError('general', error?.response?.data?.detail?.msg)
    }
  }

  return (
    <div
      className={"flex justify-center items-center h-screen " + className}
      style={{
        backgroundColor:
          theme === "light" ? "var(--lightBgColor)" : "var(--bgColor)",
      }}
    >
      <div
        className="w-5/6 md:w-3/6 bg-gray-900 p-8 rounded-lg shadow-lg flex items-center"
        style={{
          backgroundColor:
            theme === "light" ? "var(--secondaryGray)" : "var(--primaryGray)",
        }}
      >
        <div className="w-1/2 hidden xl:block">
          <img src={registerImage} alt="" />
        </div>
        <div className={"w-full sm:w-2/3 xl:w-1/2 mx-auto xl:mx-0"}>
          <h1 className="text-2xl font-bold text-center text-white uppercase">
            Register
          </h1>
          {
            <p className={"text-red-700 text-center h-7"}>{errors.general}</p>
          }
          <div>
            <AuthInput value={username} setValue={setUsername}
                       type={"text"} placeholder={"Username"}
                       error={errors.username} setError={handleError}
                       name={"username"} required={true} showError={registerClicked}/>
            <AuthInput value={email} setValue={setEmail}
                       type={"email"} placeholder={"Email"}
                       error={errors.email} name={"email"}
                       setError={handleError}  required={true} showError={registerClicked}/>
            <AuthInput value={password} setValue={setPassword}
                         type="password" name={"password"}
                       setError={handleError} placeholder={"Password"}
                       error={errors.password}  required={true} showError={registerClicked}/>
            <AuthInput value={passwordConfirm} setValue={setPasswordConfirm}
                         type="password" name={"password_confirmation"}
                         placeholder={"Password confirmation"} setError={handleError}
                         error={errors.password_confirmation}  required={true} showError={registerClicked}/>
          </div>
          <button className="w-full p-3 bg-purple-900 text-white rounded-md
           hover:bg-purple-800 transition-all duration-300 ease-in-out hover:cursor-pointer "
          onClick={handleRegister}>
            Register
          </button>
          {!isAdmin && (
            <GoogleOAuthProvider clientId="471502448680-s13pqot74qatipr3l7jlng4f0dvkqa8h.apps.googleusercontent.com">
              <div className="App mt-2">
                <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginFailure}
                  useOneTap
                />
              </div>
            </GoogleOAuthProvider>
          )}
        </div>
      </div>
    </div>
  );
};
