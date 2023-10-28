import "./NavBar.css";

import {
  FaMoon,
  FaSignInAlt,
  FaSignOutAlt,
  FaSun,
  FaUser,
  FaUserAlt,
} from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

import { AuthContext } from "../../../providers/AuthProvider";
import Logo from "../../../assets/images/logo.svg";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { useContext } from "react";

const NavBar = () => {
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const {} = useContext(AuthContext);
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error);
      });
  };

  const links = (
    <>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        About
      </NavLink>
      <NavLink
        to="/services"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Services
      </NavLink>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        Blog
      </NavLink>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        contact
      </NavLink>

      <NavLink
        to="/bookings"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "active" : ""
        }
      >
        My Bookings
      </NavLink>
    </>
  );

  return (
    <div
      className={`navbar sticky top-0 z-50 lg:px-0 shadow-lg ${
        isDarkMode ? "dark-theme text-white" : " bg-base-200"
      }`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  rounded-box w-52 lg:space-x-6 ${
              isDarkMode ? "dark-theme text-white !important" : "bg-base-200"
            }`}
          >
            {links}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl hidden lg:block"
        >
          <img src={Logo} alt="" className="w-16" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 lg:space-x-4">{links}</ul>
      </div>
      <div className="navbar-end lg:space-x-6 lg:px-4">
        <span onClick={toggleTheme} className="cursor-pointer mr-2">
          {isDarkMode ? <FaSun /> : <FaMoon />}
        </span>
        <span className="flex items-center">
          {user ? (
            <>
              <span className="lg:text-base text-xs">{user.displayName}</span>
            </>
          ) : (
            <span className="mr-1"></span>
          )}
          {user ? (
            <img
              src={user.photoURL}
              alt="Profile picture"
              className="w-6 h-6 rounded-full ml-2"
            />
          ) : (
            <div className="btn btn-circle btn-outline btn-xs btn-primary">
              <FaUser />
            </div>
          )}
        </span>
        {user ? (
          <>
            <NavLink
              onClick={handleLogOut}
              className="flex items-center space-x-1"
            >
              <FaSignOutAlt className="block lg:hidden" />
              <span className="hidden lg:block">Logout</span>
            </NavLink>
          </>
        ) : (
          <>
            <NavLink to="/login" className="flex items-center space-x-1">
              <FaSignInAlt className="block lg:hidden" />
              <span className="hidden lg:block">Login</span>
            </NavLink>
            <NavLink to="/register" className="flex items-center space-x-1">
              <FaUserAlt className="block lg:hidden" />
              <span className="hidden lg:block">Register</span>
            </NavLink>
          </>
        )}

        <button className="btn btn-outline btn-warning hidden lg:block">
          Appointment
        </button>
      </div>
    </div>
  );
};

export default NavBar;
