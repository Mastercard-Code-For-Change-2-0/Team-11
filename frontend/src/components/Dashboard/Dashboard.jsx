import React from "react";
// import { div, divContent } from "@/components/ui/div";
import { Bell, Users, Activity, BookOpen } from "lucide-react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const Dashboard = () => {
  // Dummy data (replace with API later)
  const stats = [
    { title: "Total Beneficiaries", value: 1200, icon: <Users /> },
    { title: "Active Programs", value: 8, icon: <BookOpen /> },
    { title: "Notifications", value: 15, icon: <Bell /> },
    { title: "Pending Updates", value: 23, icon: <Activity /> },
  ];

  const programData = [
    { name: "Education", beneficiaries: 400 },
    { name: "Healthcare", beneficiaries: 300 },
    { name: "Food", beneficiaries: 250 },
    { name: "Training", beneficiaries: 150 },
  ];

  const demographicData = [
    { name: "Male", value: 600 },
    { name: "Female", value: 500 },
    { name: "Other", value: 100 },
  ];
  const COLORS = ["#0088FE", "#FF69B4", "#FFBB28"];

  const recentBeneficiaries = [
    { id: "B001", name: "Ravi Kumar", program: "Education", lastService: "12 Aug" },
    { id: "B002", name: "Anita Singh", program: "Healthcare", lastService: "15 Aug" },
    { id: "B003", name: "Amit Sharma", program: "Food", lastService: "18 Aug" },
  ];

  const notifications = [
    "Reminder: Food Kit distribution on 2nd Sept",
    "Health Camp scheduled for 5th Sept",
    "20 beneficiaries have not updated details",
  ];

  return (
    <div className="p-6 space-y-6">
      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        {stats.map((item, index) => (
          <div key={index} className="shadow-lg rounded-2xl p-4">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-gray-100">{item.icon}</div>
              <div>
                <h2 className="text-xl font-bold">{item.value}</h2>
                <p className="text-sm text-gray-600">{item.title}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Program Tracking Chart */}
        <div className="shadow-lg rounded-2xl p-4">
          <h3 className="font-semibold text-lg mb-2">Program Participation</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={programData}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="beneficiaries" fill="#4F46E5" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Demographics Chart */}
        <div className="shadow-lg rounded-2xl p-4">
          <h3 className="font-semibold text-lg mb-2">Beneficiary Demographics</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={demographicData}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={80}
                fill="#8884d8"
                label
              >
                {demographicData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recent Beneficiaries & Notifications */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="shadow-lg rounded-2xl p-4">
          <h3 className="font-semibold text-lg mb-2">Recent Beneficiaries</h3>
          <ul className="divide-y divide-gray-200">
            {recentBeneficiaries.map((b) => (
              <li key={b.id} className="py-2 flex justify-between text-sm">
                <span>{b.name} ({b.program})</span>
                <span className="text-gray-500">Last: {b.lastService}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="shadow-lg rounded-2xl p-4">
          <h3 className="font-semibold text-lg mb-2">Notifications</h3>
          <ul className="list-disc list-inside text-sm space-y-1">
            {notifications.map((note, i) => (
              <li key={i} className="text-gray-700">{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
