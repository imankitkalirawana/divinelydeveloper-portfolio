"use client";
import React, { useEffect, useState } from "react";
import Grid from "../animata/background/grid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";

const Testimonial = () => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <Grid size={100} className="mt-36 pt-20 px-4 overflow-hidden md:px-12">
        <div className="text-[50px] leading-[50px] md:text-[90px] flex flex-col items-center md:leading-[90px] text-center">
          <div>What My</div>
          <div className="flex gap-2">
            <span className="font-ppneuemigraitalicbold text-secondary -rotate-12 block">
              Clientsss
            </span>
            <span>Say?</span>
          </div>
        </div>
        <div className="flex gap-24 md:gap-16 mt-12 flex-col items-center">
          <div
            className="flex flex-col md:flex-row gap-28 md:gap-16"
            ref={ref1}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              animate={
                inView1
                  ? { opacity: 1, y: 0, rotate: isMobile ? -3 : -6 }
                  : { opacity: 0, y: 50, rotate: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card card={cards[0]} />
              <Tape className="top-[0%] translate-y-[-45%] right-0 translate-x-[20%] rotate-[25deg]" />
              <Tape className="bottom-[0%] translate-y-[50%] left-0 translate-x-[-35%] rotate-[25deg]" />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              animate={
                inView1
                  ? { opacity: 1, y: 0, rotate: isMobile ? 3 : 6 }
                  : { opacity: 0, y: 50, rotate: 0 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card card={cards[1]} />
              <Tape className="top-[0%] translate-y-[-50%] left-[50%] translate-x-[-50%] rotate-[13deg]" />
              <Tape className="bottom-[0%] translate-y-[45%] left-0 translate-x-[-15%] rotate-[13deg]" />
            </motion.div>
          </div>
          <div
            className="flex flex-col md:flex-row gap-24 md:gap-16"
            ref={ref2}
          >
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 100, rotate: 6 }}
              animate={
                inView2
                  ? { opacity: 1, y: 0, rotate: 0 }
                  : { opacity: 0, y: 50, rotate: 6 }
              }
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Card card={cards[2]} />
              <Tape className="top-[0%] translate-y-[-45%] right-0 translate-x-[20%] rotate-[30deg]" />
              <Tape className="bottom-[0%] translate-y-[50%] left-0 translate-x-[-35%] rotate-[30deg]" />
            </motion.div>
            <motion.div
              className="relative"
              initial={{ opacity: 0, y: 100, rotate: 0 }}
              animate={
                inView2
                  ? { opacity: 1, y: 0, rotate: isMobile ? 6 : -8 }
                  : { opacity: 0, y: 50, rotate: 0 }
              }
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Card card={cards[3]} />
              <Tape className="top-[0%] translate-y-[-50%] left-[50%] translate-x-[-50%] rotate-[0deg]" />
              <Tape className="bottom-[0%] translate-y-[55%] left-0 translate-x-[-15%] rotate-[0deg]" />
            </motion.div>
          </div>
        </div>
      </Grid>
    </>
  );
};

const Tape = ({ className }: { className?: string }) => {
  return (
    <img
      src="/tape.png"
      alt=""
      width={250}
      className={cn("absolute", className)}
    />
  );
};

const Card = ({ card, className }: { card: CardType; className?: string }) => {
  return (
    <div
      key={card.id}
      className={cn(
        "flex gap-4 rounded-3xl md:w-[400px] p-8 aspect-square items-start bg-default",
        className,
      )}
    >
      <div className="flex flex-col">
        <div className="text-[28px]">{card.title}</div>
        <div className="text-[15px] mt-4 font-ppneuemachinaregular">
          {card.description}
        </div>
        <div className="mt-8 text-[20px]">{card.name}</div>
      </div>
    </div>
  );
};

type CardType = {
  id: number;
  title: string;
  description: string;
  name: string;
};

const cards: CardType[] = [
  {
    id: 1,
    title: "Great Services!",
    description:
      "I recently had the pleasure of working with Plainthing Studio on a branding project for my company. From start to finish, the team at Plainthing was professional, responsive, and incredibly talented. They listened to my vision and brought it to life in a way that exceeded my expectations. The end result was a stunning and cohesive brand that perfectly captured the essence of my business.",
    name: "MH Ventures",
  },
  {
    id: 2,
    title: "Good Quality work!",
    description:
      "Plainthing Studio completely transformed the user experience on our website. Their team of UI/UX designers took the time to understand our business and create a design that was not only visually appealing, but also intuitive and easy to navigate. We've seen a significant increase in website traffic and conversions since the redesign, and we couldn't be happier with the results. Thank you, Plainthing Studio!",
    name: "Sliksafe",
  },
  {
    id: 3,
    title: "Top Notch!",
    description:
      "As a startup, we were looking for a design agency that could not only bring our vision to life, but also offer valuable insights and suggestions. Plainthing Studio exceeded our expectations in every way. They provided top-notch UI/UX design services and helped us create a product that our users love. We highly recommend Plainthing Studio to anyone looking to improve their online presence.",
    name: "Wapel HR",
  },
  {
    id: 4,
    title: "So Expert!",
    description:
      "As a startup, we were looking for a design agency that could not only bring our vision to life, but also offer valuable insights and suggestions. Plainthing Studio exceeded our expectations in every way. They provided top-notch UI/UX design services and helped us create a product that our users love. We highly recommend Plainthing Studio to anyone looking to improve their online presence.",
    name: "Halahi",
  },
];

export default Testimonial;
