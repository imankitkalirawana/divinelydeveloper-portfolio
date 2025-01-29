"use client";

import React from "react";
import { Avatar, Badge, Spinner } from "@nextui-org/react";
import { Icon } from "@iconify/react";
import { cn } from "@nextui-org/react";
import ReactMarkdown from "react-markdown";

export type MessageCardProps = React.HTMLAttributes<HTMLDivElement> & {
  avatar?: string;
  message?: React.ReactNode;
  messageClassName?: string;
  role?: "user" | "model" | "system";
  isLoading?: boolean;
};

const MessageCard = React.forwardRef<HTMLDivElement, MessageCardProps>(
  (
    {
      avatar,
      message,
      className,
      messageClassName,
      role,
      isLoading = true,
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
            <Avatar size="sm" src={avatar} />
          </Badge>
        </div>
        <div className="flex flex-col gap-4">
          <div
            className={cn(
              "relative w-full rounded-medium bg-content2 px-4 py-2 text-default-600",
            )}
          >
            <div ref={messageRef} className={"text-small"}>
              {isLoading && role === "model" ? (
                <div className="flex gap-1 items-center">
                  <Icon icon="mynaui:atom" width="18" />
                  <p>Thinking...</p>
                </div>
              ) : (
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
                    strong: ({ node, ...props }) => (
                      <strong {...props} className="text-default-800" />
                    ),
                    p: ({ node, ...props }) => (
                      <p
                        {...props}
                        className={role === "model" ? "mb-2" : ""}
                      />
                    ),
                  }}
                >
                  {message as string}
                </ReactMarkdown>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  },
);

export default MessageCard;

MessageCard.displayName = "MessageCard";
