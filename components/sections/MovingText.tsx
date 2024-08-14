"use client";
import React from "react";
import Marquee from "../magicui/marquee";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

const MovingText = () => {
  const [marqueeRef, inView] = useInView();

  return (
    <>
      <motion.section
        className="relative mt-36 -mb-36"
        ref={marqueeRef}
        initial={{ scale: 0, y: 100 }}
        animate={inView ? { scale: 1, y: 0 } : { scale: 0, y: 100 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true }}
        // initial="hidden"
        // whileInView="visible"
        // variants={{
        //   hidden: { scale: 0, y: 100 },
        //   visible: { scale: 1, y: 0 },
        // }}
      >
        <Marquee
          pauseOnHover={false}
          className="[--duration:10s] text-[100px] flex items-center leading-[100px] text-default uppercase font-ppneuemigraitalicbold"
          repeat={5}
        >
          <div className="hover:text-primary">Animation</div>
          <Icon
            fontSize={70}
            icon="emojione-monotone:eight-spoked-asterisk"
            className="text-secondary mb-4"
          />
          <div className="hover:text-primary">UX/UI</div>
          <Icon
            fontSize={70}
            icon="emojione-monotone:eight-spoked-asterisk"
            className="text-secondary mb-4"
          />
        </Marquee>
        <Marquee
          pauseOnHover={false}
          reverse
          className="[--duration:10s] text-[100px] flex items-center leading-[100px] text-default uppercase font-ppneuemigraitalicbold"
          repeat={5}
        >
          <div className="hover:text-primary">NEXTJS</div>
          <Icon
            fontSize={70}
            icon="emojione-monotone:eight-spoked-asterisk"
            className="text-secondary mb-4"
          />
          <div className="hover:text-primary">Framer</div>
          <Icon
            fontSize={70}
            icon="emojione-monotone:eight-spoked-asterisk"
            className="text-secondary mb-4"
          />
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
      </motion.section>
    </>
  );
};

export default MovingText;
