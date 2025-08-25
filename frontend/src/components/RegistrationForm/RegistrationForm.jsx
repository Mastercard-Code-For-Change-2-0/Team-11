import React, { useState } from "react";
import axios from "axios";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    city: "",
    state: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Replace with your backend API endpoint
      const response = await axios.post(
        "http://localhost:5000/api/register",
        formData
      );

      console.log("Response:", response.data);
      alert("Registration successful!");

      // Reset form after success
      setFormData({
        name: "",
        phone: "",
        email: "",
        address: "",
        city: "",
        state: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to submit registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-b from-blue-100 to-blue-300 p-4">
      <div className="bg-white my-5 shadow-lg rounded-lg p-8 w-full max-w-lg">
        {/* Title */}
        <h2 className="text-center text-2xl font-bold mb-6 text-blue-600">
          Registration Form
        </h2>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {["name", "phone", "email", "address", "city", "state"].map(
            (field) => (
              <div key={field}>
                <label className="block text-gray-700 font-medium mb-1 capitalize">
                  {field}:
                </label>
                <input
                  type={
                    field === "email"
                      ? "email"
                      : field === "phone"
                      ? "tel"
                      : "text"
                  }
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  required={["name", "phone", "email"].includes(field)}
                  className="w-full border rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 outline-none"
                />
              </div>
            )
          )}

          {/* Submit */}
          <div className="text-center">
            <button
              type="submit"
              disabled={loading}
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-500 transition disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
