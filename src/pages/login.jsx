// import { useAuth } from "../hooks/use-auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";
import loginImage from "../assets/undraw_login.svg";
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode';
import {faEye, faEyeSlash} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { login, getUser } = useAuthContext();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const success = await login(username, password);
      if (success) {
        navigate("/parties");
      } else {
        setError("Invalid username or password");
      }
    } catch (err) {
      setError("An error has occurred during login");
    }
  };

  const handleLoginSuccess = (response) => {
    const token = response.credential;
    const decoded = jwtDecode(token);
    console.log(decoded);
  };

  const handleLoginFailure = (error) => {
    console.error('Login Failed:', error);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-black">
      <div className="w-5/6 md:w-3/6 bg-gray-900 p-8 rounded-lg shadow-lg flex items-center">
        <div className="w-3/6 hidden lg:block">
          <img src={loginImage} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center text-white mb-6 uppercase">
            Login
          </h1>
          {error && (
            <div className="text-red-500 text-center mb-5">{error}</div>
          )}
          <div>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border border-purple-700 rounded-md mb-4 text-white"
            />
            <div className={"relative"}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-purple-700 rounded-md mb-4 text-white"
              />
              {!showPassword ?
                  <FontAwesomeIcon icon={faEye} className={"absolute end-0 mt-2 me-2"} size={"2xl"} onClick={() => setShowPassword(true)}/> :
                  <FontAwesomeIcon icon={faEyeSlash} className={"absolute end-0 mt-2 me-2"} size={"2xl"} onClick={() => setShowPassword(false)}/>
              }
            </div>
          </div>
          <button
            onClick={handleLogin}
            className="w-full p-3 bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-all duration-300 ease-in-out hover:cursor-pointer mb-4"
          >
            Login
          </button>
          <GoogleOAuthProvider clientId="471502448680-s13pqot74qatipr3l7jlng4f0dvkqa8h.apps.googleusercontent.com">
            <div className="App">
              <GoogleLogin
                  onSuccess={handleLoginSuccess}
                  onError={handleLoginFailure}
                  useOneTap
              />
            </div>
          </GoogleOAuthProvider>
        </div>
      </div>
    </div>
  );
};
