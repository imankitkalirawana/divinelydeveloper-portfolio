import { useState } from "react";

const Chatbot = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input) return;

    const userMessage = input;
    setMessages([...messages, { user: userMessage, bot: "" }]);
    setInput("");

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();
      setMessages((prev) => [
        ...prev,
        { user: userMessage, bot: data.response },
      ]);
    } catch (error) {
      console.error("Error:", error);
      setMessages((prev) => [
        ...prev,
        {
          user: userMessage,
          bot: "Something went wrong. Please try again later.",
        },
      ]);
    }
  };

  return (
    <div className="flex flex-col p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-md">
      <div className="overflow-y-auto h-64 mb-4">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2">
            <p className="text-blue-600 font-semibold">You: {msg.user}</p>
            <p className="text-gray-800">Bot: {msg.bot}</p>
          </div>
        ))}
      </div>
      <div className="flex">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="flex-1 p-2 border rounded-l-md"
          placeholder="Ask me anything..."
        />
        <button
          onClick={handleSend}
          className="p-2 bg-blue-600 text-white rounded-r-md"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
