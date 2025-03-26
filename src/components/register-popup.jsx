import React, { useState } from "react";
import registerImage from "../assets/undraw_login.svg";
import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { AuthInput } from "../components/auth-input";

export const RegisterPopup = ({ className, isAdmin = false }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleLoginSuccess = (response) => {
    const token = response.credential;
    const decoded = jwtDecode(token);
    console.log(decoded);
  };

  const handleLoginFailure = (error) => {
    console.error("Login Failed:", error);
  };

  return (
    <div
      className={
        "flex justify-center items-center h-screen bg-black " + className
      }
    >
      <div className="w-5/6 md:w-3/6 bg-gray-900 p-8 rounded-lg shadow-lg flex items-center">
        <div className="w-6/6 hidden lg:block">
          <img src={registerImage} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-center text-white mb-6 uppercase">
            Register
          </h1>
          <div>
            <AuthInput
              username={username}
              setValue={setUsername}
              type="text"
              placeholder="Username"
            />
            <AuthInput
              username={email}
              setValue={setEmail}
              type="email"
              placeholder="Email"
            />
            <div className={"relative"}>
              <AuthInput
                username={password}
                setValue={setPassword}
                type={showPassword ? "text" : "password"}
                placeholder="Password"
              />
              {!showPassword ? (
                <FontAwesomeIcon
                  icon={faEye}
                  className={"absolute end-0 mt-2 me-2"}
                  size={"2xl"}
                  onClick={() => setShowPassword(true)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className={"absolute end-0 mt-2 me-2"}
                  size={"2xl"}
                  onClick={() => setShowPassword(false)}
                />
              )}
            </div>
            <div className={"relative"}>
              <AuthInput
                username={passwordConfirm}
                setValue={setPasswordConfirm}
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
              />
              {!showConfirmPassword ? (
                <FontAwesomeIcon
                  icon={faEye}
                  className={"absolute end-0 mt-2 me-2"}
                  size={"2xl"}
                  onClick={() => setShowConfirmPassword(true)}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faEyeSlash}
                  className={"absolute end-0 mt-2 me-2"}
                  size={"2xl"}
                  onClick={() => setShowConfirmPassword(false)}
                />
              )}
            </div>
          </div>
          <button className="w-full p-3 bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-all duration-300 ease-in-out hover:cursor-pointer mb-4">
            Register
          </button>
          {!isAdmin && (
            <GoogleOAuthProvider clientId="471502448680-s13pqot74qatipr3l7jlng4f0dvkqa8h.apps.googleusercontent.com">
              <div className="App">
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
