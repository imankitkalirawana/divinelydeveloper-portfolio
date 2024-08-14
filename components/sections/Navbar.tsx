"use client";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex scroll-smooth font-ppneuemachinaregular max-w-7xl mx-auto p-8 justify-between text-[22px]">
        <div className="flex gap-2 items-center">
          <Avatar src="/divinelydeveloper.jpg" />
          <h1>Bhuneshvar</h1>
        </div>
        <ul className="gap-4 hidden md:flex text-lg">
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
              href={"#projects"}
              className="hover:underline hover:text-secondary"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href={"#services"}
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
      </div>
    </>
  );
};

export default Navbar;
