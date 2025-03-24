import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImage from "../assets/logo.png";

export const NavbarComponent = () => {
  const [isArrowVisible, setArrowVisible] = useState(false);
  const [isBurgerVisible, setBurgerVisible] = useState(false);

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

  const renderNavLink = (path, label, className = "", onClick = null) => (
      <NavLink
          className={({ isActive }) =>
              `${isActive ? "active-nav" : "inactive-nav"} nav-item ${className}`
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
          <div className="list-container flex justify-between w-5/7 m-auto">
            <div className="logo-container flex justify-between">
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
          </div>
        </nav>

        <div
            className={`mobile-nav bg-gray-800 transition-all duration-300 ease-in-out ${
                isBurgerVisible ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
            } md:hidden`}
        >
          <ul className="py-4 px-12">
            {navItems.map((item) => (
                <li key={item.path} className="py-2">
                  {renderNavLink(item.path, item.label, "block")}
                </li>
            ))}
            <li className="py-2 flex space-x-4">
              <NavLink className="nav-item" to="/" onClick={handleBurgerClick}>
                <i className="fa-solid fa-toggle-off text-xl"></i>
              </NavLink>
              <NavLink className="nav-item" to="/" onClick={handleBurgerClick}>
                <i className="fa-solid fa-user text-xl"></i>
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="nav-border pb-1"></div>

        <button
            onClick={scrollToTop}
            className={`arrow-up m-5 text-l p-3 rounded ${
                isArrowVisible ? "opacity-100" : "opacity-0"
            }`}
            aria-label="Scroll to top"
        >
          <i className="fa-solid fa-arrow-up"></i>
        </button>
      </>
  );
};
