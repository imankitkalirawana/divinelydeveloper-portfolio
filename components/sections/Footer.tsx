import { Avatar, Button, Link } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col font-ppneuemachinaregular pb-24">
        <div className="flex gap-2 text-2xl items-center">
          <Avatar src="/divinelydeveloper.jpg" />
          <h1 className="font-ppneuemachinaregular">Bhuneshvar</h1>
        </div>
        <div className="flex mt-12 justify-between">
          <div className="text-base flex flex-col">
            <span>divinelydeveloper@gmail.com</span>
            <span>Jhajjar, Haryana, India</span>
          </div>
          <div className="flex gap-2">
            <Button
              variant="bordered"
              className="border-white border-1"
              radius="full"
              as={Link}
              href="https://github.com/imankitkalirawana"
              target="_blank"
            >
              GitHub
            </Button>
            <Button
              variant="bordered"
              className="border-white border-1"
              radius="full"
              as={Link}
              href="https://www.linkedin.com/in/bhuneshvar/"
              target="_blank"
            >
              LinkedIn
            </Button>
            <Button
              variant="bordered"
              className="border-white border-1"
              radius="full"
              as={Link}
              href="https://www.instagram.com/divinelydeveloper/"
              target="_blank"
            >
              Instagram
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
