// import { useAuth } from "../hooks/use-auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/auth-context";
import loginImage from "../assets/undraw_login.svg";

export const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
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

  const test = async (e) => {
    e.preventDefault();
    try {
      const user = await getUser();
      if (user) {
        console.log(user);
      }
    } catch (err) {
      console.log(err);
    }
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
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border border-purple-700 rounded-md mb-4 text-white"
            />
          </div>
          <button
            onClick={handleLogin}
            className="w-full p-3 bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-all duration-300 ease-in-out hover:cursor-pointer mb-4"
          >
            Login
          </button>
          <button onClick={test}>Test</button>
        </div>
      </div>
    </div>
  );
};
