import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <Link
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/parties"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Parties
          </Link>
        </li>
        <li>
          <Link
            to="/login"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Login
          </Link>
        </li>
        <li>
          <Link
            to="/register"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Register
          </Link>
        </li>
      </ul>
    </nav>
  );
};
