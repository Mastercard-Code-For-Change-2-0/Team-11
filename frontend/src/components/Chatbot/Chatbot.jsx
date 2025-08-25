import { useState } from "react";
import { X, Send, Maximize2, Minimize2, RefreshCcw } from "lucide-react";

const Chatbot = ({ isOpen, onClose }) => {
  const initialMessage = [
    { sender: "bot", text: "Hello 👋, how can I help you today?" },
  ];

  const [messages, setMessages] = useState(initialMessage);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);

  const sendMessage = async () => {
    if (!input.trim()) return;

    // Add user message
    const newMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, newMessage]);
    const query = input;
    setInput("");
    setLoading(true);

    try {
      const res = await fetch("https://a902bbcc71cf.ngrok-free.app/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ query }),
      });

      if (!res.ok) throw new Error("Failed to fetch answer");

      const data = await res.json();
      const botMessage = {
        sender: "bot",
        text: data.answer || "⚠️ No answer received.",
      };

      setMessages((prev) => [...prev, botMessage]);
    } catch (error) {
      console.error("❌ Chatbot Error:", error);
      setMessages((prev) => [
        ...prev,
        { sender: "bot", text: "⚠️ Sorry, could not reach the server." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const refreshChat = () => {
    setMessages(initialMessage);
  };

  return (
    isOpen && (
      <div
        className={`fixed bottom-20 right-6 bg-white shadow-2xl rounded-2xl overflow-hidden flex flex-col z-50 transition-all duration-300 ${
          expanded ? "w-[32rem] h-[36rem]" : "w-80 md:w-96 h-[28rem]"
        }`}
      >
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 via-orange-500 to-yellow-400 text-white flex justify-between items-center px-4 py-3">
          <h2 className="font-semibold">NGO Assistant</h2>
          <div className="flex gap-3 items-center">
            <button onClick={refreshChat} title="Refresh Chat">
              <RefreshCcw size={20} />
            </button>
            <button
              onClick={() => setExpanded(!expanded)}
              title="Expand/Minimize"
            >
              {expanded ? <Minimize2 size={20} /> : <Maximize2 size={20} />}
            </button>
            <button onClick={onClose} title="Close">
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-3 bg-gray-50">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={`p-3 rounded-lg max-w-[75%] break-words ${
                msg.sender === "user"
                  ? "bg-gradient-to-r from-red-600 to-orange-500 text-white ml-auto"
                  : "bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <div className="bg-gray-200 text-gray-800 p-3 rounded-lg w-fit">
              Typing...
            </div>
          )}
        </div>

        {/* Input */}
        <div className="flex items-center border-t px-3 py-2 bg-white gap-2">
          <input
            type="text"
            className="flex-1 px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:ring-orange-400 text-gray-900 placeholder-gray-500"
            placeholder="Type your message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          />
          <button
            onClick={sendMessage}
            disabled={loading}
            className="ml-2 bg-gradient-to-r from-red-600 to-orange-500 text-white p-2 rounded-lg hover:opacity-90 disabled:opacity-50 transition"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    )
  );
};

export default Chatbot;
