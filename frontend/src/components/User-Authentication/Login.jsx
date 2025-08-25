import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // ✅ Correct endpoint for student login
      const res = await fetch("http://localhost:5000/api/user/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      console.log("Login response:", data);

      if (res.ok) {
        // ✅ Save token in localStorage
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", "student");

        alert("Login successful!");
        // ✅ Redirect student to their dashboard/home
        navigate("/student/dashboard");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (err) {
      console.error("Login failed:", err);
      alert("Something went wrong. Try again.");
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white relative">
      <div className="absolute inset-0 bg-black/20"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 w-full max-w-md bg-white text-gray-900 rounded-2xl shadow-2xl px-8 py-4 "
      >
        <h2 className="text-3xl font-extrabold text-center text-orange-400">
          Student Login
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Welcome back! Please sign in to continue.
        </p>

        <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label className="block text-sm font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium">Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••"
              required
              className="mt-1 w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-orange-400 hover:bg-orange-600 text-white py-3 rounded-xl font-semibold transition"
          >
            Login
          </button>
        </form>

        {/* Student signup link */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link
            to="/student/auth/signup"
            className="text-orange-400 font-semibold hover:underline"
          >
            Sign up
          </Link>
        </p>

        {/* Admin login link */}
        <p className="mt-2 text-center text-sm text-gray-600 flex items-center justify-center gap-1">
          <Link
            to="/admin/login"
            className="text-orange-400 font-semibold hover:underline flex items-center gap-1"
          >
            Login
          </Link>
          <span> as admin</span>
        </p>
      </motion.div>
    </section>
  );
}
