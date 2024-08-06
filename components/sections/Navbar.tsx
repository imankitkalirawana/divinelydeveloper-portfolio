import { Avatar } from "@nextui-org/react";
import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex font-ppneuemachinaregular justify-between text-[22px]">
        <div className="flex gap-2 items-center">
          <Avatar src="/divinelydeveloper.jpg" />
          <h1>Bhuneshvar</h1>
        </div>
        <ul className="flex gap-4">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Skills</li>
          <li>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
