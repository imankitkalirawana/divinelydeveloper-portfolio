"use client";
import React from "react";
import WorkButton from "../animata/button/work-button";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";
import { useRouter } from "next/navigation";

const Showreel = () => {
  const [ref, inView] = useInView();
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 100 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            stiffness: 100,
            type: "spring",
          }}
        >
          <hr className="border-default my-4 border-1" />
          <div className="flex flex-col md:flex-row mb-12 justify-between items-center">
            <p className="text-[20px] md:text-[22px] md:max-w-[50%] font-ppneuemachinaregular">
              We are Design Agency Specialized in Illustrations, UI/UX Design
              and Motion Graphic Based in Indonesia
            </p>
            <WorkButton
              className="w-full mt-4 md:w-fit"
              onClick={() => {
                router.push("/contact");
              }}
            />
          </div>
        </motion.div>
        <motion.div
          className="bg-white text-black rounded-3xl flex flex-col p-6 md:p-8"
          ref={ref}
          initial={{ opacity: 0, y: 100 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-col text-[60px] leading-[60px] md:text-[80px] md:leading-[80px]">
              <span>My Nice</span>
              <span className="text-[#32bcd6] relative font-ppneuemigraitalicbold -rotate-3">
                <img
                  src="/sparkle.svg"
                  width={70}
                  className="absolute left-[50%] translate-x-[-50%] top-[-10%] rotate-45"
                />
                Showreels
              </span>
            </div>
            <div className="md:max-w-[50%] relative">
              <p className="font-ppneuemachinaregular mt-8 relative text-sm md:text-lg text-[#3b3b3b]">
                Our team is expert in developing designs and animations that can
                help you showcase and represent your business.
                <img
                  src="/sparkle-filled.svg"
                  width={70}
                  className="absolute -left-[15%] top-[50%] hidden md:block -rotate-6"
                />
              </p>
              {/* <PhStarFourFill
                className="text-primary absolute left-10 top-[100%]"
                fontSize={50}
              /> */}
            </div>
          </div>
          <video
            className="w-full rounded-3xl mt-8 pointer-events-none"
            src="/showreel.mp4"
            controls={false}
            autoPlay={true}
            loop
            muted
            playsInline
          ></video>
        </motion.div>
      </div>
    </>
  );
};

export default Showreel;
