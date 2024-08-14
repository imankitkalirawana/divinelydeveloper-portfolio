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
  const y = useTransform(
    scrollYProgress,
    [-0.4, 1.3],
    [isMobile ? "150%" : "50%", "-100%"],
  );
  // const y = useTransform(
  //   scrollYProgress,
  //   [0, 1],
  //   [isMobile ? "150%" : "50%", "-100%"],
  // );

  return (
    <>
      <section
        ref={targetRef}
        className="relative md:h-[300vh] mt-56 md:mt-0 px-4 md:px-12"
      >
        <div className="md:sticky top-0 flex flex-col md:flex-row md:h-screen items-start justify-end pb-8 md:overflow-hidden">
          <div className="md:text-[90px] text-[50px] leading-[50px] mb-24 md:mb-0 md:absolute top-[50%] md:translate-y-[-50%] left-0 md:leading-[90px] text-center md:text-start">
            <div className="relative">
              <span>How I</span>
              <img
                src="/sparkle.svg"
                width={70}
                className="absolute left-[15%] top-[-10%] rotate-45"
              />
            </div>
            <div className="flex w-full justify-center md:justify-start relative gap-2">
              <span className="font-ppneuemigraitalicbold text-secondary -rotate-12 block">
                Work?
              </span>
              <img
                src="/sparkle-filled.svg"
                width={70}
                className="absolute left-[60%] top-[0%] -rotate-6"
              />
            </div>
            <p className="md:text-base text-2xl md:max-w-96 mt-8 text-start font-ppneuemachinaregular">
              Some of the proses that usually we use when we have a project with
              our client
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
      <div className="bg-primary text-[40px] md:text-[35px] p-4 rounded-[50%] -skew-x-12 font-ppneuemigraitalicbold">
        0{card.id}
      </div>
      <div className="flex flex-col">
        <div className="text-[50px] leading-[55px] md:text-[60px] md:leading-[70px]">
          {card.title}
        </div>
        <div className="text-lg md:text-[16px] mt-4 md:mt-10 font-ppneuemachinaregular md:max-w-md">
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
        Discussion <br />
        <span className="text-primary font-ppneuemigraitalicbold">With Me</span>
      </div>
    ),
    id: 1,
    description:
      "Understand the client's business, goals, and challenges for building relationships.",
  },
  {
    title: (
      <div>
        Ideation
        <br />
        <span className="text-primary font-ppneuemigraitalicbold">
          & Brainstorm
        </span>
      </div>
    ),
    id: 2,
    description:
      "Gather ideas and create the first concept for the future product. Its crucial but still having fun!",
  },
  {
    title: (
      <div>
        Creating
        <br />
        <span className="text-primary font-ppneuemigraitalicbold">
          a Timeline
        </span>
      </div>
    ),
    id: 3,
    description:
      "After we understand the brief and everything, we decided to give you an estimated timeline for the project",
  },
  {
    title: (
      <div>
        Start
        <br />
        <span className="text-primary font-ppneuemigraitalicbold">
          Developing
        </span>
      </div>
    ),
    id: 4,
    description:
      "We start to visualize the design from our idea and brainstorming, based on our timeline",
  },
  {
    title: (
      <div>
        Feedback
        <br />
        <span className="text-primary font-ppneuemigraitalicbold">Loop!</span>
      </div>
    ),
    id: 5,
    description:
      "You can give me a feedback or insight while we working on it, collaboration is a key!",
  },
  {
    title: (
      <div>
        Job
        <br />
        <span className="text-primary font-ppneuemigraitalicbold">Finish!</span>
      </div>
    ),
    id: 6,
    description:
      "Finish it everything and deliver the best thing for you and your company!",
  },
];

export default HowIWork;
