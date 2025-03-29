import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";
import loginImage from "../assets/undraw_login.svg";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { AuthInput } from "../components/auth-input";
import { useTheme } from "../context/theme-context";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const { theme } = useTheme();


  const [loginButtonClicked, setLoginButtonCLicked] = useState(false)
  const [errors, setErrors] = useState({});
  const handleError = (name, value) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: value,
    }));
  };


  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const success = await login({email, password}, setLoginButtonCLicked, handleError, errors);
      if (success) {
        navigate("/");
      }
    } catch (err) {
      handleError("general", err);
    }
  };

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
      className="flex justify-center items-center h-screen"
      style={{
        backgroundColor:
          theme === "light" ? "var(--lightBgColor)" : "var(--bgColor)",
      }}
    >
      <div
        className="w-5/6 md:w-1/2 p-8 rounded-lg shadow-lg flex items-center justify-between"
        style={{
          backgroundColor:
            theme === "light" ? "var(--secondaryGray)" : "var(--primaryGray)",
        }}
      >
        <div className="w-1/2 hidden xl:block">
          <img src={loginImage} alt="" />
        </div>
        <div className={"w-full sm:w-2/3 xl:w-1/2 mx-auto xl:mx-0"}>
          <h1 className="text-2xl font-bold text-center text-white mb-6 uppercase">
            Login
          </h1>
          {<p className={"text-red-700 text-center h-7"}>{errors.general}</p>}
          <div>
            {/* Use AuthInput for username */}
            <AuthInput
              type="email"
              placeholder="Email"
              value={email}
              setValue={setEmail}
              error={errors.email}
              setError={handleError}
              name={"email"}
              required={true}
              showError={loginButtonClicked}
            />
            <div className={"relative"}>
              {/* Use AuthInput for password */}
              <AuthInput
                type={"password"}
                placeholder="Password"
                value={password}
                setValue={setPassword}
                error={errors.password}
                setError={handleError}
                name={"password"}
                required={true}
                showError={loginButtonClicked}
              />
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
