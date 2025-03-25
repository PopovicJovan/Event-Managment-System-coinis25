import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImage from "../assets/logo.png";
import { useAuthContext } from "../context/auth-context";

export const NavbarComponent = () => {
  const [isArrowVisible, setArrowVisible] = useState(false);
  const [isBurgerVisible, setBurgerVisible] = useState(false);
  const { isAuthenticated, logout } = useAuthContext();
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setArrowVisible(window.scrollY > 100);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const handleBurgerClick = () => {
    setBurgerVisible(!isBurgerVisible);
  };
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/parties", label: "Parties" },
    { path: "/about", label: "About" },
  ];

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };
  const renderNavLink = (path, label, className = "", onClick = null) => (
    <NavLink
      className={({ isActive }) =>
        `${
          isActive ? "border-b-purple-700 border-b-2" : ""
        } text-white p-2 hover:text-purple-700 transition-all duration-300 ease-in-out ${className}`
      }
      to={path}
      onClick={onClick}
    >
      {label}
    </NavLink>
  );
  return (
    <>
      <nav className="navbar m-auto px-12 pt-8 pb-7 bg-gray-900">
        <div className="list-container flex justify-between w-5/7 m-auto md:items-center">
          <div className="logo-container flex justify-between items-center">
            <Link to="/">
              <img className="w-25" src={logoImage} alt="Logo" />
            </Link>
            <button
              onClick={handleBurgerClick}
              className="burger-button md:hidden"
              aria-label="Toggle mobile menu"
            >
              <i
                className={`fa-solid ${
                  isBurgerVisible ? "fa-times" : "fa-bars"
                } text-2xl`}
              ></i>
            </button>
          </div>
          <ul className="space-x-4 primary-nav-list hidden md:block">
            {navItems.map((item) => (
              <li key={item.path} className="inline">
                {renderNavLink(item.path, item.label)}
              </li>
            ))}
          </ul>
          <ul className="space-x-4 secondary-nav-list hidden md:block">
            {isAuthenticated ? (
              <>
                <li className="inline text-md">
                  <button
                    className="text-white p-2 hover:text-purple-700 transition-all duration-300 ease-in-out cursor-pointer"
                    onClick={toggleDropdown}
                  >
                    <i class="fa-solid fa-user hover:text-purple-700"></i>
                  </button>
                  {isDropdownVisible && (
                    <div className="absolute bg-gray-800 text-white rounded-md shadow-lg mt-2 p-4">
                      <ul>
                        <li>
                          <NavLink
                            className="block py-2 px-4 hover:bg-purple-700 text-sm cursor-pointer"
                            to="/user"
                          >
                            Profile
                          </NavLink>
                        </li>
                        <li>
                          <button
                            onClick={logout}
                            className="block py-2 px-4 hover:bg-purple-700 text-sm cursor-pointer"
                          >
                            Logout
                          </button>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
                <li className="inline text-md">
                  <NavLink
                    className="text-white p-2 hover:text-purple-700 transition-all duration-300 ease-in-out"
                    to="/create-event"
                  >
                    <i class="fa-solid fa-plus hover:text-purple-700"></i>
                  </NavLink>
                </li>
                <li className="inline text-md">
                  <NavLink
                    className="text-white p-2 hover:text-purple-700 transition-all duration-300 ease-in-out"
                    to="/admin"
                  >
                    <i class="fa-solid fa-lock"></i>
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                <li className="inline">
                  <NavLink
                    className="nav-item p-2 text-white font-bold outline-purple-700 outline-2 rounded-2xl hover:bg-purple-700"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </li>
                <li className="inline">
                  <NavLink
                    className="nav-item p-2 text-white font-bold bg-purple-700 rounded-2xl hover:outline-purple-900 hover:outline-2 hover:bg-transparent"
                    to="/register"
                  >
                    Register
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
      </nav>
      <div
        className={`mobile-nav bg-gray-800 transition-all duration-300 ease-in-out ${
          isBurgerVisible
            ? "max-h-128 opacity-100 visible"
            : "opacity-0 invisible max-h-0"
        } md:hidden`}
      >
        <ul className="py-4 px-12">
          {navItems.map((item) => (
            <li key={item.path} className="py-2">
              {renderNavLink(item.path, item.label, "block")}
            </li>
          ))}
          {isAuthenticated ? (
            <>
              <li className="py-2">
                <NavLink className="nav-item" to="/user">
                  Profile
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink className="nav-item" to="/create-event">
                  Event
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink className="nav-item" to="/admin">
                  Admin Panel
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="py-2">
                <NavLink className="nav-item" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="py-2">
                <NavLink className="nav-item" to="/register">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="nav-border pb-1"></div>
      <button
        onClick={scrollToTop}
        className={`arrow-up m-5 text-l p-3 rounded ${
          isArrowVisible ? "opacity-100" : "opacity-0 hidden"
        }`}
        aria-label="Scroll to top"
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
};
