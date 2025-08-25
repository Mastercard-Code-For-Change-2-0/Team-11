import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import axios from "axios";

const EventLeads = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  // ✅ Fetch students from backend
  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/events/${id}/students`
        );
        setStudents(res.data);
      } catch (err) {
        console.error("Error fetching students:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, [id]);

  const stats = {
    total: students.length,
    attended: students.filter((s) => s.status === "Attended").length,
    notAttended: students.filter((s) => s.status === "Not Attended").length,
  };

  const chartData = [
    { name: "Attended", value: stats.attended },
    { name: "Not Attended", value: stats.notAttended },
  ];

  const COLORS = ["#22c55e", "#ef4444"]; // green, red

  const filteredStudents = students.filter((student) => {
    const matchesSearch =
      student.name.toLowerCase().includes(search.toLowerCase()) ||
      student.id.toLowerCase().includes(search.toLowerCase());

    const matchesFilter = filter === "All" || student.status === filter;

    return matchesSearch && matchesFilter;
  });

  // ✅ Export CSV
  const exportCSV = () => {
    const csvContent =
      "data:text/csv;charset=utf-8," +
      ["Student ID,Name,Status"]
        .concat(students.map((s) => `${s.id},${s.name},${s.status}`))
        .join("\n");

    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.href = encodedUri;
    link.download = `event_${id}_leads.csv`;
    link.click();
  };

  if (loading) {
    return <div className="text-gray-700 p-6">Loading...</div>;
  }

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Event {id} - Leads</h1>
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
        >
          ⬅ Back
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-4 gap-6 mb-6">
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-lg font-semibold text-gray-600">Total</p>
          <p className="text-2xl font-bold text-gray-900">{stats.total}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-lg font-semibold text-gray-600">Attended</p>
          <p className="text-2xl font-bold text-green-600">{stats.attended}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 text-center">
          <p className="text-lg font-semibold text-gray-600">Not Attended</p>
          <p className="text-2xl font-bold text-red-600">{stats.notAttended}</p>
        </div>
        <div className="bg-white shadow rounded-lg p-4 flex items-center justify-center">
          <button
            onClick={exportCSV}
            className="bg-yellow-500 text-black px-4 py-2 rounded-lg hover:bg-yellow-400 transition"
          >
            📥 Export CSV
          </button>
        </div>
      </div>

      {/* Pie Chart */}
      <div className="flex justify-center mb-6 bg-white shadow rounded-lg p-6">
        <PieChart width={400} height={300}>
          <Pie
            data={chartData}
            dataKey="value"
            cx="50%"
            cy="50%"
            outerRadius={100}
            label
          >
            {chartData.map((entry, index) => (
              <Cell key={index} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </div>

      {/* Search & Filter */}
      <div className="flex justify-between mb-4">
        <input
          type="text"
          placeholder="Search by name or ID..."
          className="px-3 py-2 rounded-lg border w-1/3 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <select
          className="px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Attended">Attended</option>
          <option value="Not Attended">Not Attended</option>
        </select>
      </div>

      {/* Students Table */}
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-200 text-gray-700">
              <th className="p-3 text-left">Student ID</th>
              <th className="p-3 text-left">Name</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredStudents.map((student) => (
              <tr
                key={student.id}
                className="hover:bg-gray-100 cursor-pointer"
                onClick={() => navigate(`/student/${student.id}`)}
              >
                <td className="p-3 border-t">{student.id}</td>
                <td className="p-3 border-t">{student.name}</td>
                <td
                  className={`p-3 border-t font-semibold ${
                    student.status === "Attended"
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {student.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EventLeads;
