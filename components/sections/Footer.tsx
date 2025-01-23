import { Avatar, Button, Link } from "@nextui-org/react";
import React from "react";

const Footer = () => {
  return (
    <>
      <div className="flex flex-col font-pp-neue-machina pb-24">
        <div className="flex gap-2 text-2xl items-center">
          <Avatar src="/divinelydeveloper.jpg" />
          <h1>Bhuneshvar</h1>
        </div>
        <div className="flex flex-col md:flex-row mt-12 justify-between">
          <div className="text-base flex flex-col">
            <a href="mailto:contact@divinely.dev" className="hover:underline">
              contact@divinely.dev
            </a>
            <a
              href="https://maps.app.goo.gl/n9jVUFYdAEW5xTDX6"
              className="hover:underline"
              target="_blank"
            >
              Gurugram, Haryana, India
            </a>
          </div>
          <div className="flex mt-8 md:mt-0 flex-col md:flex-row gap-2">
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
              href="https://www.linkedin.com/in/divinelydeveloper/"
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
