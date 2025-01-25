"use client";
import { cn } from "@/lib/utils";
import { Button } from "@nextui-org/react";

export default function WorkButton({
  className,
  onClick,
  isLoading,
  children = "Let's Talk",
}: {
  className?: string;
  onClick?: () => void;
  isLoading?: boolean;
  children?: React.ReactNode;
}) {
  return (
    <Button
      isLoading={isLoading}
      className={cn(
        "group relative overflow-hidden rounded-full bg-gradient-to-r from-[#dd32da] to-[#7618e3] px-8 py-6 text-base",
        className,
      )}
      onClick={() => {
        onClick?.();
      }}
      fullWidth
    >
      <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
      <span>{children}</span>
    </Button>
  );
}
