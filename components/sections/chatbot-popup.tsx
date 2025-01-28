"use client";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Chatbot from "./chatbot";
import PromptInputWithBottomActions from "./chatbot/prompt-input-with-bottom-actions";
import { AnimatePresence, delay, motion } from "framer-motion";

export default function ChatbotPopup() {
  const pathname = usePathname();
  const chatBot = useDisclosure();
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

  const variants = {
    enter: {
      opacity: 1,
      height: "75%",
      width: "390px",
      right: "64px",
      bottom: "64px",
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      height: 0,
      width: "0px",
      right: "16px",
      bottom: "16px",
      transition: {
        duration: 0.5,
        delay: 0.2,
      },
    },
  };

  return (
    <>
      <AnimatePresence>
        <motion.div
          className={cn(
            "fixed max-w-sm z-[19] flex rounded-3xl overflow-hidden",
          )}
          variants={variants}
          initial="exit"
          animate={chatBot.isOpen ? "enter" : "exit"}
          exit="exit"
        >
          <div className="w-full p-4 py-8 overflow-y-scroll h-full bg-default-50 backdrop-blur-lg">
            <Chatbot />
            <PromptInputWithBottomActions />
          </div>
        </motion.div>
      </AnimatePresence>

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
      {/* <Modal
        isOpen={chatBot.isOpen}
        onOpenChange={chatBot.onOpenChange}
        className="fixed right-0"
        scrollBehavior="inside"
        backdrop="blur"
        motionProps={{
          variants: {
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
          },
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Modal Title
              </ModalHeader>
              <ModalBody>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam pulvinar risus non risus hendrerit venenatis.
                  Pellentesque sit amet hendrerit risus, sed porttitor quam.
                </p>
                <p>
                  Magna exercitation reprehenderit magna aute tempor cupidatat
                  consequat elit dolor adipisicing. Mollit dolor eiusmod sunt ex
                  incididunt cillum quis. Velit duis sit officia eiusmod Lorem
                  aliqua enim laboris do dolor eiusmod. Et mollit incididunt
                  nisi consectetur esse laborum eiusmod pariatur proident Lorem
                  eiusmod et. Culpa deserunt nostrud ad veniam.
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={onClose}>
                  Action
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal> */}
    </>
  );
}
