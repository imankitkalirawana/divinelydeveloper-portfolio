"use client";
import React, { useEffect, useState } from "react";
import Grid from "../animata/background/grid";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useInView } from "react-hook-inview";
import { Tooltip } from "@nextui-org/react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface Props {
  education: EducationType[];
}

export default function EducationProvider() {
  return (
    <>
      <Education education={education} />
    </>
  );
}

const Education = ({ education }: Props) => {
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
        <div className="text-[50px] text-secondary font-extrabold leading-[50px] md:text-[90px] flex flex-col items-center md:leading-[80px] text-center">
          <div>Experience</div>
          <span className="font-extrabold italic text-white font-pp-migra -rotate-[20deg] block">
            &
          </span>
          <div className="flex gap-2">
            <span>Education</span>
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
              whileHover={{
                rotate: 0,
              }}
            >
              <Card card={education[0]} />
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
              whileHover={{
                rotate: 0,
              }}
            >
              <Card card={education[1]} />
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
              whileHover={{
                rotate: 0,
              }}
            >
              <Card card={education[2]} />
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
              whileHover={{
                rotate: 0,
              }}
            >
              <Card card={education[3]} />
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
  card: EducationType;
  className?: string;
}) => {
  return (
    <div
      key={card?._id}
      className={cn(
        "flex gap-4 rounded-3xl flex-col justify-between md:w-[400px] p-8 aspect-square items-start bg-default",
        className,
      )}
    >
      <div className="flex justify-between flex-col">
        <div className="text-[28px] font-extrabold">{card?.title}</div>
        <ul className="text-[15px] mt-4 flex flex-col gap-1">
          {Object.entries(card?.details || {}).map(([key, value]) => (
            <li key={key} className="flex gap-2 items-center">
              <Icon
                icon={IconMap[key].icon}
                className="text-secondary"
                fontSize={20}
              />
              <Tooltip
                placement="right"
                delay={1000}
                color="secondary"
                content={IconMap[key].tooltip}
                showArrow
              >
                <span>{value}</span>
              </Tooltip>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex gap-2 items-center text-[20px]">
        <span className="font-bold">{card?.institution}</span>
      </div>
    </div>
  );
};

const IconMap: Record<string, Record<string, string>> = {
  cgpa: {
    icon: "solar:star-circle-bold",
    tooltip: "CGPA",
  },
  startTime: {
    icon: "solar:calendar-add-bold",
    tooltip: "Start Time",
  },
  endTime: {
    icon: "solar:calendar-mark-bold",
    tooltip: "End Time",
  },
  duration: {
    icon: "solar:sort-by-time-bold",
    tooltip: "Duration",
  },
  location: {
    icon: "solar:map-point-bold",
    tooltip: "Location",
  },
  board: {
    icon: "solar:book-bookmark-bold",
    tooltip: "Board",
  },
};

type EducationType = {
  _id: string;
  title: string;
  description?: string;
  institution?: string;
  details?: {
    cgpa?: string;
    startTime?: string;
    endTime?: string;
    duration?: string;
    location?: string;
    board?: string;
  };
};

const education: EducationType[] = [
  {
    _id: "1",
    title: "Xth",
    institution: "Adarsh Sr. Sec. School",
    details: {
      cgpa: "8.4",
      startTime: "April, 2018",
      endTime: "March, 2019",
      duration: "1 year",
      location: "Jhajjar, Haryana",
      board: "CBSE",
    },
  },
  {
    _id: "2",
    title: "XIIth",
    institution: "Adarsh Sr. Sec. School",
    details: {
      cgpa: "8.1",
      startTime: "April, 2020",
      endTime: "March, 2021",
      duration: "1 year",
      location: "Jhajjar, Haryana",
      board: "CBSE",
    },
  },
  {
    _id: "3",
    title: "B.Tech",
    institution: "Lovely Professional University",
    details: {
      startTime: "August, 2022",
      endTime: "July, 2026",
      duration: "4 years",
      location: "Phagwara, Punjab",
    },
  },
  {
    _id: "4",
    title: "Freelancing",
    details: {
      startTime: "April 2024",
      endTime: "Present",
      location: "Remote (Part-time)",
    },
  },
];
