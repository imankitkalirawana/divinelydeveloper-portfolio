"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Button, cn } from "@nextui-org/react";
import Link from "next/link";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

interface Props {
  session: any;
}

const Navbar = ({ session }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const EXCLUDED_PATHS = ["/auth", "/contact", "/dashboard", "/socials"];
  const isExcluded = EXCLUDED_PATHS.some((path) => pathname.includes(path));

  if (isExcluded) {
    return null;
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <motion.div
        className="bg-transparent  top-0 md:bg-background scroll-smooth w-full fixed z-[20]"
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.5,
          delay: 0.5,
          type: "spring",
          stiffness: 100,
        }}
      >
        <div
          className={cn(
            "flex bg-background font-pp-neue-machina max-w-7xl mx-auto px-4 justify-between text-[22px]",
          )}
        >
          <motion.div
            className={`relative flex flex-col p-4 bg-default md:bg-transparent rounded-3xl md:flex-row justify-between items-center w-full`}
            initial={false}
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { backgroundColor: "#27252d" },
              closed: { backgroundColor: "#27252d00" },
            }}
          >
            <div className="flex justify-between w-full">
              <Link href={"/"} className="flex gap-2 items-center">
                <Avatar src="/divinelydeveloper.jpg" />
                <h1>Bhuneshvar</h1>
              </Link>
              <Button
                className="md:hidden relative flex flex-col"
                isIconOnly
                variant="light"
                size="lg"
                onPress={handleToggle}
              >
                <Icon
                  icon={isOpen ? "material-symbols:close" : "quill:hamburger"}
                  fontSize={30}
                />
              </Button>
            </div>
            <ul className="md:gap-4 md:flex hidden gap-8 text-lg">
              <li>
                <Link
                  href={"/"}
                  className="hover:underline hover:text-secondary"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href={"/about"}
                  className="hover:underline hover:text-secondary"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href={"/work"}
                  className="hover:underline hover:text-secondary"
                >
                  Work
                </Link>
              </li>
              <li>
                <Link
                  href={"/socials"}
                  className="hover:underline hover:text-secondary"
                >
                  Socials
                </Link>
              </li>
              <li>
                <Link
                  href={"/contact"}
                  className="hover:underline hover:text-secondary"
                >
                  Contact
                </Link>
              </li>
              {session ? (
                <li>
                  <span
                    onClick={() => signOut()}
                    className="hover:underline hover:text-secondary"
                  >
                    Logout
                  </span>
                </li>
              ) : null}
            </ul>
            <AnimatePresence>
              {isOpen && (
                <motion.ul
                  className="md:gap-4 md:flex flex overflow-hidden flex-col my-8 md:flex-row md:my-0 gap-8 text-xl md:text-lg"
                  initial={{ height: 0 }}
                  animate={{ height: "auto" }}
                  transition={{ duration: 0.5 }}
                  // hide transition
                  exit={{ height: 0 }}
                >
                  <li>
                    <Link
                      href={"/"}
                      className="hover:underline hover:text-secondary"
                    >
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/about"}
                      className="hover:underline hover:text-secondary"
                    >
                      About
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/work"}
                      className="hover:underline hover:text-secondary"
                    >
                      Work
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/#services"}
                      className="hover:underline hover:text-secondary"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/contact"}
                      className="hover:underline hover:text-secondary"
                    >
                      Contact
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default Navbar;
