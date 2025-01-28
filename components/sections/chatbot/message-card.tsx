"use client";

import React from "react";
import { Avatar, Badge } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { cn } from "@nextui-org/react";
import ReactMarkdown from "react-markdown";

export type MessageCardProps = React.HTMLAttributes<HTMLDivElement> & {
  avatar?: string;
  showFeedback?: boolean;
  message?: React.ReactNode;
  currentAttempt?: number;
  status?: "success" | "failed";
  attempts?: number;
  messageClassName?: string;
  onAttemptChange?: (attempt: number) => void;
  onMessageCopy?: (content: string | string[]) => void;
  onFeedback?: (feedback: "like" | "dislike") => void;
  onAttemptFeedback?: (feedback: "like" | "dislike" | "same") => void;
};

const MessageCard = React.forwardRef<HTMLDivElement, MessageCardProps>(
  (
    {
      avatar,
      message,
      showFeedback,
      attempts = 1,
      currentAttempt = 1,
      status,
      onMessageCopy,
      onAttemptChange,
      onFeedback,
      onAttemptFeedback,
      className,
      messageClassName,
      ...props
    },
    ref,
  ) => {
    const messageRef = React.useRef<HTMLDivElement>(null);

    return (
      <div
        {...props}
        ref={ref}
        className={cn("flex flex-col sm:flex-row gap-3", className)}
      >
        <div className="relative">
          <Badge
            isOneChar
            color="danger"
            content={
              <Icon
                className="text-background"
                icon="gravity-ui:circle-exclamation-fill"
              />
            }
            placement="bottom-right"
            shape="circle"
            isInvisible
          >
            <Avatar src={avatar} />
          </Badge>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "relative w-full rounded-medium bg-content2 px-4 py-3 text-default-600",
            )}
          >
            <div ref={messageRef} className={"text-small"}>
              <ReactMarkdown
                components={{
                  a: ({ node, ...props }) => (
                    <a
                      {...props}
                      className="text-primary underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    />
                  ),
                }}
              >
                {message as string}
              </ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default MessageCard;

MessageCard.displayName = "MessageCard";
