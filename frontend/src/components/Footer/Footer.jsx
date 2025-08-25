import React from "react";
import { Link } from "react-router-dom";
import {
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

function Footer() {
  return (
    <footer className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Brand Info */}
        <div>
          <h2 className="text-3xl font-extrabold tracking-wide">Katalyst</h2>
          <p className="mt-3 text-sm text-gray-100 leading-relaxed">
            Empowering women to dream bigger and aim higher through education,
            mentorship, and opportunities.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link to="/" className="hover:text-yellow-200 transition">
                Home
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:text-yellow-200 transition">
                Events
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-yellow-200 transition">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-yellow-200 transition">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} /> info@katalystindia.org
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 98765 43210
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={50} /> Aurus Chambers, 502 A Wing, S S, Shivram Seth
              Amritwar Marg, Worli, Mumbai, Maharashtra 400025
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com/katalystwindsofchange"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-200"
            >
              <Facebook size={20} />
            </a>
            <a
              href="https://www.instagram.com/katalyst_india/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-200"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://twitter.com/katalyst_india"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-200"
            >
              <Twitter size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/katalyst-india"
              target="_blank"
              rel="noreferrer"
              className="hover:text-yellow-200"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Note */}
      <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm text-gray-100">
        © {new Date().getFullYear()} Katalyst India. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
