"use client";
import React, { useEffect, useState } from "react";
import Grid from "../animata/background/grid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";
import { Testimonial as TestimonialInterface } from "@/lib/interface";
import { Avatar } from "@nextui-org/react";
import { isCaching } from "@/lib/config";

interface Props {
  testimonials: TestimonialInterface[];
}

export default function TestimonialProvider() {
  const [testimonials, setTestimonials] = useState<TestimonialInterface[]>([]);

  useEffect(() => {
    const fetchTestimonials = async () => {
      const res = await fetch(`/api/testimonials`, {
        cache: isCaching ? "default" : "no-cache",
      });
      if (res.ok) {
        const testimonials = await res.json();
        setTestimonials(testimonials);
      }
    };
    fetchTestimonials();
  }, []);

  return (
    <>
      <Testimonial testimonials={testimonials} />
    </>
  );
}

const Testimonial = ({ testimonials }: Props) => {
  const [ref1, inView1] = useInView();
  const [ref2, inView2] = useInView();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  return (
    <>
      <Grid
        size={100}
        className="mt-36 pt-20 pb-24 px-4 overflow-hidden md:px-12"
      >
        <div className="text-[50px] font-extrabold leading-[50px] md:text-[90px] flex flex-col items-center md:leading-[90px] text-center">
          <div>What My</div>
          <div className="flex gap-2">
            <span className="font-extrabold italic font-pp-migra text-secondary -rotate-12 block">
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
              <Card card={testimonials[0]} />
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
              <Card card={testimonials[1]} />
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
              <Card card={testimonials[2]} />
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
              <Card card={testimonials[3]} />
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

const Card = ({
  card,
  className,
}: {
  card: TestimonialInterface;
  className?: string;
}) => {
  return (
    <div
      key={card?._id}
      className={cn(
        "flex gap-4 rounded-3xl md:w-[400px] p-8 aspect-square items-start bg-default",
        className,
      )}
    >
      <div className="flex flex-col">
        <div className="text-[28px] font-extrabold">{card?.title}</div>
        <div className="text-[15px] mt-4 ">{card?.comment}</div>
        <div className="mt-8 flex gap-2 items-center text-[20px]">
          <Avatar src={card?.src} />
          <span className="font-bold">{card?.name}</span>
        </div>
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
      "Working with Divinely Developer (Bhuneshvar) was a fantastic experience. Bhuneshvar understood our vision perfectly and turned it into a stunning and functional website that truly represents our clinic. His professionalism and expertise were evident throughout the project. We highly recommend him to anyone in need of a skilled developer.",
    name: "Shailung Polyclinic",
  },
  {
    id: 2,
    title: "Good Quality work!",
    description:
      "We're very pleased with the website Bhuneshvar developed. The design is modern, aligns perfectly with our brand, and is easy to navigate. Bhuneshvar quickly understood our needs and delivered exactly what we wanted. Since launch, we've seen increased engagement and positive feedback. Highly recommended!",
    name: "BRO Audio",
  },
  {
    id: 3,
    title: "Top Notch!",
    description:
      "As a startup, we needed a developer who could not only bring our vision to life but also guide us with valuable insights. Bhuneshvar exceeded our expectations in every way. He provided exceptional web development services and helped us create a platform that our users love. We highly recommend Bhuneshvar to anyone looking to enhance their online presence.",
    name: "FOD Living",
  },
  {
    id: 4,
    title: "So Expert!",
    description:
      "As a growing institution, we needed a developer who could bring our vision to life and provide valuable guidance along the way. Bhuneshvar exceeded our expectations in every aspect. He delivered top-notch web development services and helped us create a user-friendly platform that our students and staff love. We highly recommend Bhuneshvar to anyone looking to enhance their online presence.",
    name: "Halahi",
  },
];
