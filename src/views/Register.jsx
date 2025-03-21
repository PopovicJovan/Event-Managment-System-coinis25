import { useState } from "react";
import { useAuth } from "../composable/useAuth";

export const Register = () => {
  const { user, setUser, register, message } = useAuth();
  const [passwordConfirm, setPasswordConfirm] = useState("");

  const handleRegister = () => {
    if (user.password !== passwordConfirm) {
      alert("Passwords do not match");
      return;
    }
    register();
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Register
        </h1>
        {message && <p className="text-center text-red-500 mb-4">{message}</p>}
        <div>
          <input
            type="text"
            placeholder="Username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="email"
            placeholder="Email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={passwordConfirm}
            onChange={(e) => setPasswordConfirm(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
        </div>
        <button
          onClick={handleRegister}
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Register
        </button>
      </div>
    </div>
  );
};
