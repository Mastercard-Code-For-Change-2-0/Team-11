import React from "react";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/30 backdrop-blur-md border-b border-white/20 text-white px-6 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-extrabold tracking-wide">Katalyst</h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/events"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-300"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Login / Signup */}
        <div className="hidden md:flex items-center gap-x-4">
          <Link
            to="/student/auth/login"
            className="px-5 py-2 border-2 border-yellow-400 bg-yellow-300 text-gray-900 rounded-2xl font-semibold shadow hover:bg-yellow-400 transition"
          >
            Login
          </Link>

          <Link
            to="/student/auth/signup"
            className="px-5 py-2 border-2 border-yellow-400 bg-white text-gray-900 rounded-2xl font-semibold shadow hover:bg-yellow-300 transition"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
