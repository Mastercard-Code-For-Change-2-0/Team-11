import React from "react";

const RecentActivities = ({ activities }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-4 border-b pb-2 border-gray-200">
        Recent Activities
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="bg-blue-50 text-blue-700">
            <tr>
              <th className="py-2 px-4 text-left">Activity</th>
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((a, i) => (
              <tr
                key={i}
                className="border-t border-gray-200 hover:bg-gray-50 transition"
              >
                <td className="py-2 px-4">{a.name}</td>
                <td className="py-2 px-4 text-gray-500">{a.date}</td>
                <td className="py-2 px-4">
                  <span
                    className={`px-2 py-0.5 text-xs font-medium rounded-full ${
                      a.status === "Completed"
                        ? "bg-green-100 text-green-700"
                        : "bg-yellow-100 text-yellow-700"
                    }`}
                  >
                    {a.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentActivities;
