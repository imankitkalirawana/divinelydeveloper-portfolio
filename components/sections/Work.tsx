"use client";
import { MeteoconsStar, PhStarFourFill } from "@/components/components/icons";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";

const Work = () => {
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

  const x = useTransform(scrollYProgress, [0, 1.32], ["52%", "-150%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh]">
      <div className="sticky top-0 flex h-screen items-end pb-8 overflow-hidden">
        <div className="text-[90px] absolute top-0 left-[50%] translate-x-[-50%] leading-[90px] text-center mt-20">
          <MeteoconsStar
            className="text-primary absolute -left-24 top-[40%]"
            fontSize={70}
          />
          <PhStarFourFill
            className="text-primary absolute left-[110%] top-[0%]"
            fontSize={50}
          />
          <div>What I</div>
          <div className="flex gap-2">
            <span className="font-ppneuemigraitalicbold text-secondary -rotate-12 block">
              Realllly
            </span>
            <span>Do?</span>
          </div>
        </div>
        <img src="/shape-2.svg" className="absolute -bottom-36" alt="" />

        <motion.div style={{ x }} className="flex gap-8 w-[700vw]">
          {cards.map((card) => (
            <Card card={card} key={card.id} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }: { card: CardType }) => {
  return (
    <div
      key={card.id}
      className="group rounded-[30px] p-8 bg-[#2a272ea9] backdrop-blur-sm relative h-[400px] w-[450px] overflow-hidden"
    >
      <img src={card.url} width={150} />
      <h3 className="text-[32px] mt-4">{card.title}</h3>
      <p className=" font-ppneuemachinaregular mt-4 text-[16px]">
        {card.description}
      </p>
    </div>
  );
};

export default Work;

type CardType = {
  url: string;
  title: string;
  id: number;
  icon: string;
  description: string;
};

const cards: CardType[] = [
  {
    url: "/work-1.svg",
    title: "Title 1",
    id: 1,
    icon: "lucide:shapes",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    url: "/work-2.svg",
    title: "Title 2",
    id: 2,
    icon: "lucide:shapes",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    url: "/work-3.svg",
    title: "Title 3",
    id: 3,
    icon: "lucide:shapes",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    url: "/work-4.svg",
    title: "Title 4",
    id: 4,
    icon: "lucide:shapes",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
  {
    url: "/work-5.svg",
    title: "Title 5",
    id: 5,
    icon: "lucide:shapes",
    description:
      "lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
  },
];
