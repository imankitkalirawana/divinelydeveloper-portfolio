"use client";
import React, { useState } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

const colors = ["#da68c5", "#35afc6", "#d68991"];

const Banner = () => {
  const [color, setColor] = React.useState(colors[0]);
  React.useEffect(() => {
    const interval = setInterval(() => {
      setColor(colors[Math.floor(Math.random() * colors.length)]);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const [ref] = useInView();

  const [isOnce] = useState(true);

  return (
    <>
      <div
        ref={ref}
        className="flex flex-col font-extrabold mt-24 md:mt-0 justify-between items-center md:items-center md:pb-52 pb-24 text-[70px] leading-[70px] md:text-[110px] md:leading-[110px]"
      >
        <div className="mt-12 relative">
          <motion.img
            src="/sparkle-filled.svg"
            width={70}
            className="absolute animate-sparkle left-[60%] translate-x-[-50%] top-[-45%]"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 2, rotate: 0 },
              visible: { opacity: 1, scale: 1, rotate: -30 },
            }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: isOnce }}
          />
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            className="text-xl italic font-pp-migra"
          >
            I CAN
          </motion.div>
          <motion.div
            style={{ color: color }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.5 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: isOnce }}
          >
            DESIGN
          </motion.div>
        </div>
        <div className="flex relative items-center">
          <motion.svg
            viewBox={"0 0 16 16"}
            width="1em"
            height="1em"
            xmlns="http://www.w3.org/2000/svg"
            // shake animation
            initial="hidden"
            viewport={{ once: isOnce }}
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: {
                opacity: 1,
                scale: 1,
              },
            }}
            transition={{ duration: 1 }}
            className={"hidden md:block"}
          >
            <motion.path
              d="M10.218 3.216a.75.75 0 0 0-1.436-.431l-3 10a.75.75 0 0 0 1.436.43zM4.53 4.97a.75.75 0 0 1 0 1.06L2.56 8l1.97 1.97a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 0 1 0-1.06l2.5-2.5a.75.75 0 0 1 1.06 0m6.94 6.06a.75.75 0 0 1 0-1.06L13.44 8l-1.97-1.97a.75.75 0 0 1 1.06-1.06l2.5 2.5a.75.75 0 0 1 0 1.06l-2.5 2.5a.75.75 0 0 1-1.06 0"
              stroke="currentColor"
              fill={"currentColor"}
              strokeWidth="0.5"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: isOnce }}
              variants={{
                hidden: {
                  pathLength: 0,
                  stroke: "#fff",
                  fill: "#fff",
                },
                visible: {
                  pathLength: 1,
                  stroke: "#ec6fd5",
                  fill: "#ec6fd5",
                },
              }}
              transition={{ duration: 3, delay: 1 }}
            />
          </motion.svg>

          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.5 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            viewport={{ once: isOnce }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.1,
            }}
          >
            DEVELOP
          </motion.div>
        </div>
        <div className="relative flex items-center">
          <motion.img
            src="/sparkle.svg"
            width={70}
            className="absolute left-[-30%] animate-sparkle translate-x-[-50%] top-[-150%]"
            alt=""
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 2, rotate: 0 },
              visible: { opacity: 1, scale: 1, rotate: -30 },
            }}
            transition={{ duration: 1, type: "spring", stiffness: 100 }}
            viewport={{ once: isOnce }}
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, y: 50, scale: 0.5 },
              visible: { opacity: 1, y: 0, scale: 1 },
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }}
            className="flex"
            viewport={{ once: isOnce }}
          >
            DEPLOY
          </motion.div>
          <motion.div
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { y: 100, x: -100, opacity: 0 },
              visible: { y: 0, x: 0, opacity: 1 },
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.4,
            }}
            viewport={{ once: isOnce }}
            className="animate-rocket"
          >
            <Icon icon="noto:rocket" />
          </motion.div>
          <motion.img
            src="/holographic-wire.svg"
            alt="holographic-wire"
            width={200}
            height={200}
            className="absolute animate-float-y left-[-50%] mix-blend-lighten top-0 select-none"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: { opacity: 0, scale: 0.5 },
              visible: { opacity: 1, scale: 1 },
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 100,
              delay: 0.5,
            }}
            viewport={{ once: isOnce }}
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
