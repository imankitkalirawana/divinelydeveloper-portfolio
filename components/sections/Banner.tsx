"use client";
import React from "react";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { MeteoconsStar } from "../components/icons";

const colors = ["#da68c5", "#35afc6", "#d68991"];

const Banner = () => {
  const [color, setColor] = React.useState(colors[0]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="flex flex-col mt-24 md:mt-0 justify-between items-start md:items-center md:pb-52 pb-24 text-[70px] leading-[70px] md:text-[110px] md:leading-[110px]">
        <div className="mt-12">
          <span
            className="relative before:content-['✦'] before:absolute before:text-primary before:left-[70%] before:-top-14 before:text-7xl before:-rotate-12"
            style={{ color: color }}
          >
            DESIGN
          </span>
        </div>
        <div className="flex items-center">
          <Icon
            icon="gravity-ui:code"
            color="#ec6ed5"
            className="hidden md:block"
          />
          <span className="font-ppneuemigraitalicbold">DEVELOP</span>
        </div>
        <div className="relative flex items-center">
          <MeteoconsStar
            className="text-primary absolute -left-5 -top-5"
            fontSize={50}
          />
          DEPLOY
          <Icon icon="noto:rocket" />
          <span>
            <Image
              src="/holographic-wire.svg"
              alt="holographic-wire"
              width={200}
              height={200}
              className="absolute left-[-50%] top-0 select-none"
            />
          </span>
        </div>
      </div>
    </>
  );
};

export default Banner;
