import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Chatbot from "../Chatbot/Chatbot";

export default function Home() {
  const [chatOpen, setChatOpen] = useState(false);

  return (
    <section className="relative bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white">
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Hero Section */}
      <div className="relative z-10 container mx-auto px-6 py-20 lg:py-32 flex flex-col lg:flex-row items-center lg:justify-between gap-10">
        {/* Left Content */}
        <motion.div
          className="max-w-xl text-center lg:text-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight">
            Empowering Women to <br />
            <span className="bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              Dream Bigger, Aim Higher
            </span>
          </h1>
          <p className="mt-6 text-lg text-gray-100">
            Katalyst India is an award-winning NGO that prepares young women for
            leadership roles, creating a wider talent pool for India Inc and
            bridging the gender divide.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link
              to="/register"
              className="px-6 py-3 rounded-2xl bg-white text-red-600 font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              Register
            </Link>
            <a
              href="#impact"
              className="px-6 py-3 rounded-2xl border border-white font-semibold hover:bg-white hover:text-orange-600 transition"
            >
              Learn More
            </a>
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          className="w-full lg:w-1/2 flex justify-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <img
            src="https://c8.alamy.com/comp/2K6628B/ngo-or-non-governmental-organization-to-serve-specific-social-and-political-needs-in-template-hand-drawn-cartoon-flat-illustration-2K6628B.jpg"
            alt="Illustration of NGO community support"
            className="rounded-2xl shadow-2xl w-[90%] lg:w-[80%] border-4 border-white"
          />
        </motion.div>
      </div>

      {/* Mission & Impact Section */}
      <div
        id="impact"
        className="relative z-10 bg-white text-gray-900 py-16 px-6 lg:px-20 rounded-t-3xl shadow-lg"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-red-600">
            Our Mission
          </h2>
          <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
            Katalyst stands for the economic empowerment of women. We prepare
            young women for leadership roles and create capable, valuable talent
            who are eager to shape their own future as well as the world’s.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          <div className="p-6 bg-red-50 rounded-2xl shadow-md">
            <h3 className="text-4xl font-extrabold text-red-600">1777+</h3>
            <p className="mt-2 text-gray-600">Women directly impacted</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl shadow-md">
            <h3 className="text-4xl font-extrabold text-red-600">908</h3>
            <p className="mt-2 text-gray-600">Currently in the program</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl shadow-md">
            <h3 className="text-4xl font-extrabold text-red-600">55%</h3>
            <p className="mt-2 text-gray-600">At managerial level</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl shadow-md">
            <h3 className="text-4xl font-extrabold text-red-600">12%</h3>
            <p className="mt-2 text-gray-600">At senior leadership level</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl shadow-md">
            <h3 className="text-4xl font-extrabold text-red-600">43%</h3>
            <p className="mt-2 text-gray-600">Higher median salary</p>
          </div>
          <div className="p-6 bg-red-50 rounded-2xl shadow-md sm:col-span-2 lg:col-span-2">
            <h3 className="text-4xl font-extrabold text-red-600">69%</h3>
            <p className="mt-2 text-gray-600">Outperform peers at workplace</p>
          </div>
        </div>
      </div>

      {/* ✅ Chatbot Component */}
      <Chatbot isOpen={chatOpen} onClose={() => setChatOpen(false)} />

      {/* ✅ Floating Chat Button */}
      {!chatOpen && (
        <button
          onClick={() => setChatOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-red-600 to-orange-500 text-white p-4 rounded-full shadow-xl hover:scale-105 transition flex items-center justify-center"
          aria-label="Open Chatbot"
        >
          <MessageCircle size={28} />
        </button>
      )}
    </section>
  );
}
