import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

function ContactUs() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 via-orange-500 to-yellow-400 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Page Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-8">
          Contact Us
        </h1>
        <p className="text-lg text-center max-w-2xl mx-auto mb-12 text-gray-100">
          We’d love to hear from you! Whether you have questions about our
          programs, partnerships, or want to contribute to our mission, reach
          out to us.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Info Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <div className="space-y-4 text-gray-200">
              <p className="flex items-center gap-3">
                <Mail className="w-6 h-6 text-yellow-300" />{" "}
                info@katalystindia.org
              </p>
              <p className="flex items-center gap-3">
                <Phone className="w-6 h-6 text-yellow-300" /> +91 98765 43210
              </p>
              <p className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-yellow-300" /> Pune, Mumbai,
                Bengaluru & Delhi
              </p>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-6">Send Us a Message</h2>
            <form className="space-y-5">
              <div>
                <label className="block text-sm mb-1">Your Name</label>
                <input
                  type="text"
                  className="w-full p-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-yellow-300 outline-none"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Email</label>
                <input
                  type="email"
                  className="w-full p-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-yellow-300 outline-none"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="block text-sm mb-1">Message</label>
                <textarea
                  rows="4"
                  className="w-full p-3 rounded-xl text-gray-900 focus:ring-2 focus:ring-yellow-300 outline-none"
                  placeholder="Write your message here..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-yellow-400 hover:bg-yellow-500 text-red-700 font-semibold py-3 rounded-xl transition"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Extra: Map Embed */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Our Location
          </h2>
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <iframe
              title="Katalyst Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.927879353321!2d73.85674331489282!3d18.520430187398233!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c088cfb9a6d7%3A0x69d4f89c393c9a91!2sPune!5e0!3m2!1sen!2sin!4v1615568215661!5m2!1sen!2sin"
              width="100%"
              height="350"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
