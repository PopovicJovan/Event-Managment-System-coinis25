import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import logoImage from "../assets/logo.png";
export const NavbarComponent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <nav className="navbar m-auto px-12 pt-8 pb-7">
        <div className="flex justify-between w-5/7 m-auto">
          <img className="w-25" src={logoImage} alt="" />
          <ul className="space-x-7">
            <li className="inline">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-nav nav-item rounded-xl"
                    : "inactive-nav nav-item rounded-xl"
                }
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="inline">
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "active-nav nav-item rounded-xl"
                    : "inactive-nav nav-item rounded-xl"
                }
                to="/parties"
              >
                Parties
              </NavLink>
            </li>
          </ul>
          <ul>
            <li className="inline text-lg">
              <NavLink className="nav-item" to="/">
                <i className="fa-solid fa-toggle-off"></i>
              </NavLink>
            </li>
            <li className="inline text-lg">
              <NavLink className="nav-item" to="/">
                <i className="fa-solid fa-user"></i>
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <button
        onClick={scrollToTop}
        className={`arrow-up m-5 text-l p-3 rounded ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
};
