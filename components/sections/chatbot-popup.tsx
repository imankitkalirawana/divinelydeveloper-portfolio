"use client";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Tooltip,
  useDisclosure,
} from "@nextui-org/react";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Chatbot from "./chatbot";
import PromptInputWithBottomActions from "./chatbot/prompt-input-with-bottom-actions";
import { AnimatePresence, delay, motion } from "framer-motion";
import Link from "next/link";

export default function ChatbotPopup() {
  const pathname = usePathname();
  const chatBot = useDisclosure();
  const EXCLUDED_PATHS = ["/auth", "/dashboard", "/chatbot"];
  const isExcluded = EXCLUDED_PATHS.some((path) => pathname.includes(path));
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  if (isExcluded) {
    return null;
  }

  const variants = {
    enter: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut",
      },
    },
    exit: {
      y: 100,
      opacity: 0,
      transition: {
        duration: 0.2,
        ease: "easeIn",
      },
    },
  };

  return (
    <>
      <div className="fixed z-[20] right-5 bottom-5">
        <Button
          isIconOnly
          color="secondary"
          variant="flat"
          size="lg"
          className="backdrop-blur-md"
          onPress={chatBot.onOpenChange}
        >
          <Icon
            icon={
              chatBot.isOpen ? "lets-icons:close-round" : "lets-icons:chat-fill"
            }
            width="24"
            height="24"
          />
        </Button>
      </div>
      <Modal
        isOpen={chatBot.isOpen}
        onOpenChange={chatBot.onOpenChange}
        className="fixed right-0"
        scrollBehavior="inside"
        backdrop="transparent"
        motionProps={variants}
        // placement="bottom"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Ask Bhuneshvar
              </ModalHeader>
              <ModalBody className="px-2 min-h-[50vh]">
                <Chatbot />
              </ModalBody>
              <ModalFooter className="px-2 pb-2">
                <PromptInputWithBottomActions />
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
