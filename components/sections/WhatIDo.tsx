"use client";
import { isOnce } from "@/lib/utils";
import { motion, useTransform, useScroll } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const WhatIDo = () => {
  return (
    <div>
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const x = useTransform(
    scrollYProgress,
    [0, 1.32],
    [isMobile ? "16%" : "52%", "-150%"],
  );

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-end pb-8 overflow-hidden">
        <div className="absolute top-0 left-[50%] translate-x-[-50%] text-[60px] leading-[60px] md:text-[80px] md:leading-[80px] text-center mt-20">
          <img
            src="/sparkle.svg"
            width={70}
            className="text-primary absolute -left-[12%] md:-left-[30%] top-[40%]"
          />
          <img
            src="/sparkle-filled.svg"
            width={70}
            className="text-primary absolute left-[90%] md:left-[110%] top-[0%]"
          />
          <div>What I</div>
          <div className="flex gap-2">
            <span className="font-ppneuemigraitalicbold text-secondary -rotate-12 block">
              Realllly
            </span>
            <span>Do?</span>
          </div>
        </div>
        <img src="/shape-2.svg" className="absolute md:-bottom-36" alt="" />
        <motion.div style={{ x }} className="flex gap-8 w-[700vw] mb-12">
          {cards.slice(0, 5).map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  };
  return (
    <div
      key={card.id}
      className="group rounded-[30px] p-4 md:p-8 bg-[#2a272e70] backdrop-blur-xl relative w-[300px] h-[300px] md:h-[400px] md:w-[450px] overflow-hidden"
    >
      <motion.img
        src={card.url}
        className="size-24 md:size-36"
        initial="hidden"
        whileInView="visible"
        variants={{
          hidden: { opacity: 0, scale: 0 },
          visible: { opacity: 1, scale: 1 },
        }}
        transition={{
          duration: 0.5,
          stiffness: 100,
          type: "spring",
        }}
        viewport={{ once: isOnce }}
      />
      <motion.h3
        className="text-[24px] leading-[24px] md:leading-[28px] md:text-[28px] mt-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        transition={{ delay: 1 }}
        viewport={{ once: isOnce }}
      >
        {card.title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={item}
            style={{ display: "inline-block", paddingRight: "15px" }}
            viewport={{ once: isOnce }}
          >
            {word === "" ? <span>&nbsp;</span> : word}
          </motion.span>
        ))}
      </motion.h3>
      <motion.p
        className="font-ppneuemachinaregular mt-4 text-[14px] md:text-base"
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.03,
            },
          },
        }}
        initial="hidden"
        whileInView="show"
        transition={{ duration: 0.5 }}
        viewport={{ once: isOnce }}
      >
        {card.description.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={item}
            style={{ display: "inline-block", paddingRight: "15px" }}
            viewport={{ once: isOnce }}
          >
            {word === "" ? <span>&nbsp;</span> : word}
          </motion.span>
        ))}
      </motion.p>
    </div>
  );
};

export default WhatIDo;

type CardType = {
  url: string;
  title: string;
  id: number;
  icon: string;
  description: string;
};

const cards: CardType[] = [
  {
    url: "/work-2.svg",
    title: "Web Development",
    id: 1,
    icon: "lucide:shapes",
    description:
      "I create responsive websites that allow the user to experience your website in the best and most appropriate way suited to the device they are using.",
  },
  {
    url: "/work-1.svg",
    title: "UX/UI Design",
    id: 2,
    icon: "lucide:shapes",
    description:
      "Website Design? User Interface Design? User Experience Design? I love doing that for you.",
  },
  {
    url: "/work-4.svg",
    title: "Animations & Designs",
    id: 3,
    icon: "lucide:shapes",
    description:
      "Boring websites? Not on my watch. I create animations to make your website more interactive.",
  },
  {
    url: "/work-3.svg",
    title: "Database Management",
    id: 4,
    icon: "lucide:shapes",
    description:
      "Storage and management of data is crucial. I can help you with that.",
  },
  {
    url: "/work-5.svg",
    title: "Deployment & Maintenance",
    id: 5,
    icon: "lucide:shapes",
    description: "Don't worry about the technical stuff. I got you covered.",
  },
  {
    url: "/work-6.svg",
    title: "Title 6",
    id: 6,
    icon: "lucide:shapes",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
