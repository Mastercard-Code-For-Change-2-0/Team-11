import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

const StudentHeader = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    console.log("User logged out");
    navigate("/"); 
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-white/30 shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-2xl font-extrabold tracking-wide text-gray-900">
          NGO Portal
        </h1>

        {/* Navigation Links */}
        <ul className="hidden md:flex gap-8 font-medium text-gray-800">
          <li>
            <NavLink
              to="home"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-500"
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="events"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-500"
                }`
              }
            >
              Events
            </NavLink>
          </li>
          <li>
            <NavLink
              to="dashboard"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-500"
                }`
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink
              to="about"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-500"
                }`
              }
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="student/contact"
              className={({ isActive }) =>
                `transition ${
                  isActive
                    ? "text-yellow-300 font-bold"
                    : "hover:text-yellow-500"
                }`
              }
            >
              Contact
            </NavLink>
          </li>
        </ul>

        {/* Logout Button */}
        <div className="hidden md:flex items-center gap-x-4">
          <button
            onClick={handleLogout}
            className="px-5 py-2 border-2 border-yellow-500 bg-yellow-100 text-yellow-700 rounded-2xl font-semibold shadow hover:bg-yellow-200 transition"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default StudentHeader;
