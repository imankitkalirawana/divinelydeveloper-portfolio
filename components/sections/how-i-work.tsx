"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useInView } from "react-hook-inview";

const HowIWork = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  // const y = useTransform(scrollYProgress, [-0.37, 1.3], ["50%", "-100%"]);
  const y = useTransform(scrollYProgress, [-0.3, 1.2], ["60%", "-90%"]);
  // const y = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [isMobile ? "150%" : "50%", "-100%"],
  // );

  return (
    <>
      <section
        ref={targetRef}
        className="relative md:h-[300vh] mt-56 md:mt-24 px-4 md:px-12"
      >
        <div className="md:sticky top-0 flex flex-col md:flex-row md:h-screen items-start justify-end pb-8 md:overflow-hidden">
          <div className="md:text-[90px] text-[50px] leading-[50px] mb-24 md:mb-0 md:absolute top-[50%] md:translate-y-[-50%] left-0 md:leading-[90px] text-center md:text-start">
            <div className="relative font-extrabold">
              <span>My Skills</span>
              <img
                src="/sparkle.svg"
                width={70}
                className="absolute left-[15%] top-[-10%] rotate-45"
              />
            </div>
            <div className="flex w-full justify-center md:justify-start relative gap-2">
              <span className="font-extrabold italic font-pp-migra text-secondary -rotate-[9deg] block">
                Roadmap?
              </span>
              <img
                src="/sparkle-filled.svg"
                width={70}
                className="absolute left-[80%] top-[0%] -rotate-6"
              />
            </div>
            <p className="md:text-base text-2xl md:max-w-96 mt-8 text-start ">
              I believe in a structured and goal-oriented approach to mastering
              skills, creating impactful projects, and building a strong
              foundation for professional growth.
            </p>
          </div>

          <motion.div
            style={isMobile ? { x: 0 } : { y }}
            className="flex flex-col gap-28 md:w-[50%]"
          >
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </motion.div>
          <img
            src="/bg-grid.png"
            alt=""
            width={200}
            className="absolute left-[20%] bottom-0 -z-10"
          />
        </div>
      </section>
    </>
  );
};

type CardType = {
  title: React.ReactNode;
  id: number;
  description: string;
};

const Card = ({ card }: { card: CardType }) => {
  const [ref, inView] = useInView();
  return (
    <motion.div
      key={card.id}
      className="flex flex-col md:flex-row gap-4 items-start"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 100 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div className="bg-primary text-[40px] md:text-[35px] p-4 rounded-[50%] -skew-x-12 font-extrabold italic font-pp-migra">
        0{card.id}
      </div>
      <div className="flex flex-col">
        <div className="text-[50px] leading-[55px] md:text-[60px] md:leading-[70px]">
          {card.title}
        </div>
        <div className="text-lg md:text-[16px] mt-4 md:mt-10  md:max-w-md">
          {card.description}
        </div>
      </div>
    </motion.div>
  );
};

const cards: CardType[] = [
  {
    title: (
      <div>
        Self <br />
        <span className="text-primary font-extrabold italic font-pp-migra">
          Assessment
        </span>
      </div>
    ),
    id: 1,
    description:
      "Reflecting on my skills, strengths, and areas for growth to align with the role and company I aim to join.",
  },
  {
    title: (
      <div>
        Skill
        <br />
        <span className="text-primary font-extrabold italic font-pp-migra">
          Exploration
        </span>
      </div>
    ),
    id: 2,
    description:
      "Researching and enhancing technical and problem-solving skills to meet industry demands and expectations.",
  },
  {
    title: (
      <div>
        Planning and
        <br />
        <span className="text-primary font-extrabold italic font-pp-migra">
          Preparation
        </span>
      </div>
    ),
    id: 3,
    description:
      "Setting clear goals and creating a structured timeline for building projects, preparing for interviews, and networking.",
  },
  {
    title: (
      <div>
        Project
        <br />
        <span className="text-primary font-extrabold italic font-pp-migra">
          Execution
        </span>
      </div>
    ),
    id: 4,
    description:
      "Developing impactful and well-documented projects that showcase my technical expertise and creativity.",
  },
  {
    title: (
      <div>
        Feedback
        <br />
        <span className="text-primary font-extrabold italic font-pp-migra">
          Integration!
        </span>
      </div>
    ),
    id: 5,
    description:
      "Actively seeking and incorporating constructive feedback to refine my skills and projects.",
  },
  {
    title: (
      <div>
        Job
        <br />
        <span className="text-primary font-extrabold italic font-pp-migra">
          Ready!
        </span>
      </div>
    ),
    id: 6,
    description:
      "With refined skills, real-world projects, and a proactive attitude, I am ready to contribute and grow with a dynamic team!",
  },
];

export default HowIWork;
