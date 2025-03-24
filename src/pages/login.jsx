import { useAuth } from "../hooks/use-auth";
import loginImage from "../assets/undraw_login.svg";

export const LoginPage = () => {
  const { user, setUser, message, login } = useAuth();

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
          {message && (
            <p className="text-center text-red-500 mb-4">{message}</p>
          )}
          <div>
            <input
              type="text"
              placeholder="Username"
              value={user.username}
              onChange={(e) => setUser({ ...user, username: e.target.value })}
              className="w-full p-3 border border-purple-700 rounded-md mb-4 text-white"
            />
            <input
              type="password"
              placeholder="Password"
              value={user.password}
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              className="w-full p-3 border border-purple-700 rounded-md mb-4 text-white"
            />
          </div>
          <button
            onClick={login}
            className="w-full p-3 bg-purple-900 text-white rounded-md hover:bg-purple-800 transition-all duration-300 ease-in-out hover:cursor-pointer mb-4"
          >
            Login
          </button>
        </div>
      </div>
    </div>
  );
};
