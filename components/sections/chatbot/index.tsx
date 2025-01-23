"use client";
import WorkButton from "@/components/animata/button/work-button";
import { cn, Tabs, Tab, ScrollShadow } from "@nextui-org/react";
import { useState } from "react";
import PromptInputWithBottomActions from "./prompt-input-with-bottom-actions";
import Conversation from "./conversation";

const Chatbot = () => {
  const [messages, setMessages] = useState<{ user: string; bot: string }[]>([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = input.trim();
    setMessages((prev) => [...prev, { user: userMessage, bot: "" }]);
    setInput("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].bot = data.response;
        return newMessages;
      });
    } catch (error) {
      setMessages((prev) => {
        const newMessages = [...prev];
        newMessages[newMessages.length - 1].bot =
          "Sorry, I'm having trouble responding right now. Please try again.";
        return newMessages;
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    // <div className="flex  flex-col p-4 bg-gray-100 rounded-lg shadow-md w-full max-w-md">
    //   <div className="overflow-y-auto h-64 mb-4">
    //     {messages.map((msg, index) => (
    //       <div key={index} className="mb-4">
    //         <div className="flex flex-col space-y-2">
    //           <div className="bg-blue-100 p-2 rounded-lg self-end">
    //             <p className="text-blue-800">{msg.user}</p>
    //           </div>
    //           {msg.bot && (
    //             <div className="bg-white p-2 rounded-lg self-start">
    //               <p
    //                 className="text-gray-800"
    //                 dangerouslySetInnerHTML={{ __html: msg.bot }}
    //               />
    //             </div>
    //           )}
    //         </div>
    //       </div>
    //     ))}
    //     {isLoading && <div className="text-gray-500 italic">Thinking...</div>}
    //   </div>
    //   <div className="flex">
    //     <input
    //       type="text"
    //       value={input}
    //       onChange={(e) => setInput(e.target.value)}
    //       onKeyPress={handleKeyPress}
    //       className="flex-1 p-2 border rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-400"
    //       placeholder="Ask me anything..."
    //       disabled={isLoading}
    //     />
    //     <WorkButton
    //       onClick={handleSend}
    //       className="p-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700 disabled:bg-blue-300"
    //     >
    //       Send
    //     </WorkButton>
    //   </div>
    // </div>
    <div
      className={cn(
        "flex relative px-4  max-w-5xl mx-auto h-full w-full flex-col gap-8",
      )}
    >
      <ScrollShadow className={cn("flex pb-60 h-full flex-col")}>
        <Conversation />
      </ScrollShadow>
      <div className="flex flex-col gap-2">
        <PromptInputWithBottomActions />
      </div>
    </div>
  );
};

export default Chatbot;
