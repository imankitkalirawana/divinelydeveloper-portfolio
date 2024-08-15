"use client";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Avatar, Button } from "@nextui-org/react";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex scroll-smooth font-ppneuemachinaregular max-w-7xl mx-auto px-4 justify-between text-[22px]">
        <motion.div
          className={`relative flex flex-col p-4 bg-default md:bg-transparent rounded-3xl md:flex-row justify-between items-center w-full`}
          // change background when isOpen
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
              <Link href={"/"} className="hover:underline hover:text-secondary">
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
                href={"/#projects"}
                className="hover:underline hover:text-secondary"
              >
                Projects
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
                    href={"/#projects"}
                    className="hover:underline hover:text-secondary"
                  >
                    Projects
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
    </>
  );
};

export default Navbar;
