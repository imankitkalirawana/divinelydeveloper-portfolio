"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";
import axios from "axios";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

export default function ChatbotPopup() {
  const pathname = usePathname();
  const EXCLUDED_PATHS = ["/auth", "/dashboard", "/chatbot"];
  const isExcluded = EXCLUDED_PATHS.some((path) => pathname.includes(path));

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await axios.get("http://localhost:3000/api");
        console.log(res.data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAPI();
  }, []);

  if (isExcluded) {
    return null;
  }
  return (
    <div className="fixed z-[19] right-5 bottom-5">
      <Button isIconOnly as={Link} size="lg" href="/chatbot">
        <Icon icon="lets-icons:chat-fill" width="24" height="24" />
      </Button>
    </div>
  );
}
