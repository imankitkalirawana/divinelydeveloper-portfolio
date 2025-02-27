"use client";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";

import MessageCard from "./message-card";
import { ChatHistory } from "@/lib/interface";

export default function Conversation() {
  const history: ChatHistory[] = useSelector((state: any) => state.chat);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [history]);

  return (
    <div className="flex flex-col gap-4 px-1">
      {history.map(
        ({ role, parts }, index) =>
          role !== "system" && (
            <MessageCard
              key={index}
              avatar={
                role === "model"
                  ? "/divinelydeveloper.jpg"
                  : // @ts-ignore
                    role === "user "
                    ? "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
                    : "https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
              }
              className={role === "user" ? "self-end flex-row-reverse" : ""}
              message={parts[0].text}
              messageClassName={
                role === "user" ? "bg-content3 text-content3-foreground" : ""
              }
              role={role}
              isLoading={parts[0].text === "..."}
            />
          ),
      )}
      <p className="px-2 text-[11px] text-center text-default-600">
        This bot can make mistakes. Consider checking important information.
      </p>
      <div ref={messagesEndRef} />
    </div>
  );
}
