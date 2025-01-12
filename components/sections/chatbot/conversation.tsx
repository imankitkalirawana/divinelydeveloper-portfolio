"use client";
import React from "react";
import { useSelector } from "react-redux";

import MessageCard from "./message-card";
import { ChatHistory } from "@/lib/interface";

export default function Conversation() {
  const history: ChatHistory[] = useSelector((state: any) => state.chat);

  return (
    <div className="flex flex-col gap-4 px-1">
      {history.map(
        ({ role, parts }, index) =>
          role !== "system" && (
            <MessageCard
              key={index}
              attempts={index === 1 ? 2 : 1}
              avatar={
                role === "model"
                  ? "/divinelydeveloper.jpg"
                  : // @ts-ignore
                    role === "user "
                    ? "https://nextuipro.nyc3.cdn.digitaloceanspaces.com/components-images/avatar_ai.png"
                    : "https://d2u8k2ocievbld.cloudfront.net/memojis/male/6.png"
              }
              className={role === "user" ? "self-end flex-row-reverse" : ""}
              currentAttempt={index === 1 ? 2 : 1}
              message={parts[0].text}
              messageClassName={
                role === "user" ? "bg-content3 text-content3-foreground" : ""
              }
              showFeedback={role === "model"}
            />
          ),
      )}
    </div>
  );
}
