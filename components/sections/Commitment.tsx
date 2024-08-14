"use client";
import React from "react";
import Marquee from "../magicui/marquee";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

const Commitment = () => {
  const [marqueeRef, inView] = useInView();

  return (
    <>
      <section className="relative mt-36">
        <video
          src={"/project-6.mp4"}
          autoPlay
          loop
          muted
          className="object-cover w-[100%] pointer-events-none"
          playsInline
        />
        <h3 className="font-ppneuemachinaregular text-[28px] md:text-[34px] px-8 md:px-24 mt-12">
          Commitment to the highest quality production standards, a broad
          expertise, and a genuine strive to help our clients have secured us
          strategic cooperation with market-leading companies in many sectors
          and regions.
        </h3>
      </section>
    </>
  );
};

export default Commitment;
