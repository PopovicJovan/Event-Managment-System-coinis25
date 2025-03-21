import { useAuth } from "../composable/useAuth";

export const Login = () => {
  const { user, setUser, message, login } = useAuth();

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
          Login
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
            type="password"
            placeholder="Password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            className="w-full p-3 border border-gray-300 rounded-md mb-4"
          />
        </div>
        <button
          onClick={login}
          className="w-full p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600 mb-4"
        >
          Login
        </button>
      </div>
    </div>
  );
};
