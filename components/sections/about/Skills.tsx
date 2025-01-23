"use client";
import Marquee from "@/components/magicui/marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { Image } from "@nextui-org/react";
import { AnimatedBeamMain } from "./AnimatedBeams";

const Skills = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // const y = useTransform(scrollYProgress, [-0.3, 1.2], ["50%", "-100%"]);
  const y = useTransform(
    scrollYProgress,
    [-0.3, 1.2],
    [isMobile ? "200%" : "100%", isMobile ? "30%" : "-35%"],
  );
  const backdrop = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px) brightness(1)", "blur(10px) brightness(0.5)"],
  );

  return (
    <>
      <section
        id="skills"
        className="relative h-[300vh] w-full"
        ref={targetRef}
      >
        <div className="sticky top-0 flex h-screen items-start pb-8 overflow-hidden">
          <motion.div
            style={{ filter: backdrop }}
            className="absolute -z-10 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          >
            <div className="md:text-[90px] font-extrabold text-[50px] leading-[50px] md:leading-[90px] text-center">
              My Great
            </div>
            <Marquee pauseOnHover={false} className="[--duration:20s]">
              <div className="md:text-[200px] uppercase md:leading-[200px] text-[100px] leading-[100px] after:content-['•'] font-extrabold italic font-pp-migra text-primary after:text-secondary">
                Skills
              </div>
            </Marquee>
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>

          <motion.div
            className="flex flex-wrap w-full gap-24 p-4 md:p-12"
            style={{ y }}
          >
            {/* {skills.slice(0, 5).map((skill) => (
              <SkillCard skill={skill} />
            ))} */}
            <AnimatedBeamMain />
          </motion.div>
        </div>
      </section>
    </>
  );
};

interface SkillsType {
  id: number;
  title: string;
  description: string;
  icon: string;
}

const SkillCard = ({ skill }: { skill: SkillsType }) => {
  return (
    <div key={skill.id} className="p-8 relative">
      <Image
        className="rounded-full aspect-square w-[200px] p-4 bg-primary"
        src={"/logo.png"}
        width={200}
        height={200}
      />
      <h3 className="text-[28px] mt-4">{skill.title}</h3>
    </div>
  );
};

const skills: SkillsType[] = [
  {
    id: 1,
    title: "NEXT.JS",
    description:
      "Next.js is a React framework that enables server-side rendering and static site generation for React applications.",
    icon: "/nextjs.svg",
  },
  {
    id: 2,
    title: "TAILWIND CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    icon: "/tailwindcss.svg",
  },
  {
    id: 3,
    title: "FRAMER MOTION",
    description:
      "Framer Motion is a production-ready motion library for React.",
    icon: "/framer-motion",
  },
];

export default Skills;
