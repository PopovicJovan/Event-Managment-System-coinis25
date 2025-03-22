import { NavLink } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <ul className="flex justify-center space-x-6">
        <li>
          <NavLink
            to="/"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/parties"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Parties
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/register"
            className="text-white hover:text-gray-300 transition duration-300"
          >
            Register
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
