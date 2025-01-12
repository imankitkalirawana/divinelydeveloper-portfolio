"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ChatbotPopup() {
  const pathname = usePathname();
  const EXCLUDED_PATHS = ["/auth", "/dashboard", "/chatbot"];
  const isExcluded = EXCLUDED_PATHS.some((path) => pathname.includes(path));

  if (isExcluded) {
    return null;
  }
  return (
    <div className="fixed right-5 bottom-5">
      <Button isIconOnly as={Link} href="/chatbot">
        <Icon icon="lets-icons:chat-fill" width="24" height="24" />
      </Button>
    </div>
  );
}
