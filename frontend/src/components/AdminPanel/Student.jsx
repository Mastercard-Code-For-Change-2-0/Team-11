import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const StudentPage = () => {
  const { id } = useParams();
  const [student, setStudent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchStudent = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/students/${id}`
        );
        setStudent(response.data);
      } catch (err) {
        console.error(err);
        setError("Failed to fetch student data");
      } finally {
        setLoading(false);
      }
    };

    fetchStudent();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gradient-to-br from-blue-600 to-purple-700 text-white">
        <p className="text-xl animate-pulse">Loading student data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-white text-black">
        <p className="text-red-300 font-semibold">{error}</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-purple-700 text-white p-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-4xl font-bold mb-8 text-center">
          Student Profile - {student.id}
        </h1>

        {/* Student Info Card */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            Personal Information
          </h2>
          <div className="space-y-2 text-lg">
            <p>
              <span className="font-semibold text-blue-100">Name:</span>{" "}
              {student.name}
            </p>
            <p>
              <span className="font-semibold text-blue-100">Email:</span>{" "}
              {student.email}
            </p>
            <p>
              <span className="font-semibold text-blue-100">Phone:</span>{" "}
              {student.phone}
            </p>
          </div>
        </div>

        {/* Events Attended */}
        <div className="bg-white/10 backdrop-blur-lg p-6 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-semibold mb-4 text-blue-200">
            Events Attended
          </h2>
          <table className="w-full border-collapse overflow-hidden rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-500/50 text-white">
                <th className="px-4 py-3 text-left">Event</th>
                <th className="px-4 py-3 text-left">Status</th>
              </tr>
            </thead>
            <tbody>
              {student.events.map((event, idx) => (
                <tr
                  key={idx}
                  className="hover:bg-white/20 transition duration-200"
                >
                  <td className="px-4 py-3">{event.name}</td>
                  <td
                    className={`px-4 py-3 font-semibold ${
                      event.status === "Completed"
                        ? "text-green-300"
                        : "text-yellow-300"
                    }`}
                  >
                    {event.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default StudentPage;
