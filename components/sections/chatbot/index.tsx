"use client";
import { cn, ScrollShadow } from "@nextui-org/react";
import Conversation from "./conversation";

const Chatbot = () => {
  return (
    <div
      className={cn(
        "flex relative max-w-5xl mx-auto h-full w-full flex-col gap-8",
      )}
    >
      <ScrollShadow className={cn("flex pb-60 h-full flex-col")}>
        <Conversation />
      </ScrollShadow>
    </div>
  );
};

export default Chatbot;
