"use client";

import React, { useState } from "react";
import { Button, Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { cn } from "@nextui-org/react";

import PromptInput from "./prompt-input";
import { useDispatch } from "react-redux";
import {
  addMessage,
  updateLastMessage,
} from "@/store/slices/chat-history-slice";

export default function Component() {
  const dispatch = useDispatch();
  const [prompt, setPrompt] = React.useState<string>("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSend = async () => {
    if (!prompt.trim()) return;

    const userMessage = prompt.trim();
    dispatch(addMessage({ role: "user", parts: [{ text: userMessage }] }));
    setPrompt("");
    setIsLoading(true);

    // Add a loading placeholder message
    dispatch(
      addMessage({
        role: "model",
        parts: [{ text: "..." }],
      }),
    );

    try {
      const response = await fetch("/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      dispatch(updateLastMessage({ text: data.response }));
    } catch (error) {
      dispatch(
        updateLastMessage({
          text: "Sorry, I'm having trouble responding right now. Please try again.",
        }),
      );
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
    <div className="flex w-full mx-auto max-w-5xl flex-col gap-4">
      <form className="flex w-full flex-col items-start rounded-medium bg-default-100/80 transition-colors hover:bg-default-50/70 backdrop-blur-lg">
        <PromptInput
          classNames={{
            inputWrapper: "!bg-transparent shadow-none",
            innerWrapper: "relative",
            input: "pt-1 pl-2 pb-6 !pr-10 text-medium",
          }}
          onKeyDown={handleKeyPress}
          endContent={
            <div className="flex items-end gap-2">
              <Tooltip showArrow content="Send message">
                <Button
                  isIconOnly
                  color={!prompt ? "default" : "primary"}
                  isDisabled={!prompt || isLoading}
                  radius="lg"
                  size="sm"
                  variant="solid"
                  onClick={handleSend}
                >
                  <Icon
                    className={cn(
                      "[&>path]:stroke-[2px]",
                      !prompt ? "text-default-600" : "text-primary-foreground",
                    )}
                    icon="solar:arrow-up-linear"
                    width={20}
                  />
                </Button>
              </Tooltip>
            </div>
          }
          minRows={3}
          radius="lg"
          value={prompt}
          variant="flat"
          onValueChange={setPrompt}
        />
      </form>
    </div>
  );
}
