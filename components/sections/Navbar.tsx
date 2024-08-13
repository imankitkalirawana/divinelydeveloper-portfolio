"use client";
import { Avatar } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex scroll-smooth font-ppneuemachinaregular justify-between text-[22px]">
        <div className="flex gap-2 items-center">
          <Avatar src="/divinelydeveloper.jpg" />
          <h1>Bhuneshvar</h1>
        </div>
        <ul className="gap-4 hidden md:flex">
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"#about"}>About</Link>
          </li>
          <li>
            <Link href={"#projects"}>Projects</Link>
          </li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
