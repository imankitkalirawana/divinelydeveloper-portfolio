"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const HowIWork = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [-0.37, 1.3], ["50%", "-100%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] px-12">
        <div className="sticky top-0 flex h-screen items-start justify-end pb-8 overflow-hidden">
          <div className="text-[90px] absolute top-[50%] translate-y-[-50%] left-0 leading-[90px] text-start">
            <div className="relative">
              <span>How I</span>
              <img
                src="/sparkle.svg"
                width={70}
                className="absolute left-[15%] top-[-10%] rotate-45"
              />
            </div>
            <div className="flex relative gap-2">
              <span className="font-ppneuemigraitalicbold text-secondary -rotate-12 block">
                Work?
              </span>
              <img
                src="/sparkle-filled.svg"
                width={70}
                className="absolute left-[60%] top-[0%] -rotate-6"
              />
            </div>
            <p className="text-base max-w-96 mt-8 text-start font-ppneuemachinaregular">
              Some of the proses that usually we use when we have a project with
              our client
            </p>
          </div>

          <motion.div style={{ y }} className="flex flex-col gap-28 w-[50%]">
            {cards.map((card) => (
              <Card card={card} key={card.id} />
            ))}
          </motion.div>
          <img
            src="/bg-grid.png"
            alt=""
            width={200}
            className="absolute left-[20%] bottom-0"
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
  return (
    <div key={card.id} className="flex gap-4 items-start">
      <div className="bg-primary text-[35px] p-2 rounded-[50%] -skew-x-12 font-ppneuemigraitalicbold">
        0{card.id}
      </div>
      <div className="flex flex-col">
        <div className="text-[60px] leading-[70px]">{card.title}</div>
        <div className="text-[16px] mt-10 font-ppneuemachinaregular max-w-md">
          {card.description}
        </div>
      </div>
    </div>
  );
};

const cards: CardType[] = [
  {
    title: (
      <div>
        Discussion <br />
        <span className="text-primary font-ppneuemigraitalicbold">With Us</span>
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
      "You can give us a feedback or insight while we working on it, collaboration is a key!",
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
