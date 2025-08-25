import React, { useState } from "react";
import { Link } from "react-router-dom";

const EventsPage = () => {
  const [events, setEvents] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [registerEvent, setRegisterEvent] = useState(null); // For registration form popup
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/events");
        const data = await res.json();
        setEvents(data);
      } catch (err) {
        console.error("Error fetching events:", err);
      }
    };

    fetchEvents();
  }, []);
  // Filtered events
  const filteredEvents = events.filter(
    (event) =>
      event.name.toLowerCase().includes(search.toLowerCase()) ||
      event.category.toLowerCase().includes(search.toLowerCase()) ||
      event.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      {/* Header with Search */}
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2 border-b border-gray-400 pb-3">
          <span className="w-1 h-6 bg-blue-500 rounded-md"></span>
          Upcoming Events
        </h3>

        <input
          type="text"
          placeholder="Search events..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 text-sm border w-72 rounded-full shadow-sm focus:outline-none focus:ring-1 focus:ring-blue-300"
        />
      </div>

      {/* Events Table */}
      <div className="bg-white/70 backdrop-blur-sm rounded-xl shadow-lg p-6 transition duration-300">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead className="bg-blue-50/70 text-blue-700">
              <tr>
                <th className="py-2 px-4 text-left">Event</th>
                <th className="py-2 px-4 text-left">Date</th>
                <th className="py-2 px-4 text-left">Info</th>
                <th className="py-2 px-4 text-left">Action</th>
              </tr>
            </thead>
            <tbody>
              {filteredEvents.map((event, i) => (
                <tr
                  key={i}
                  className="border-t border-gray-200/60 hover:bg-gray-50/60 transition cursor-pointer"
                  onClick={(e) => {
                    if (!e.target.closest(".register-link")) {
                      setSelectedEvent(event);
                    }
                  }}
                >
                  <td className="py-2 px-4">{event.name}</td>
                  <td className="py-2 px-4 text-gray-500">
                    {formatDate(event.date)}
                  </td>
                  <td className="py-2 px-4 text-gray-500">{event.info}</td>
                  <td className="py-2 px-4">
                    <Link
                      className="text-blue-600 hover:underline register-link cursor-pointer"
                      to='student/auth/login'
                    >
                      Register Now
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Popup Modal */}
      {selectedEvent && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black/20 backdrop-blur-sm"
          onClick={() => setSelectedEvent(null)}
        >
          <div
            className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            <h2 className="text-lg font-semibold mb-1">{selectedEvent.name}</h2>
            <p className="text-sm text-gray-600 mb-1">{selectedEvent.date}</p>
            <p className="mt-1 text-sm font-medium text-blue-600">
              {selectedEvent.category}
            </p>
            <p className="text-gray-700">{selectedEvent.description}</p>

            <div className="mt-4 flex items-center justify-between">
              <button
                onClick={() => setSelectedEvent(null)}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Close
              </button>
              <Link
                to="/student/login"
                className="text-blue-600 hover:underline register-link cursor-pointer ml-4"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventsPage;
