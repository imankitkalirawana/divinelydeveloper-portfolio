"use client";
import { calculateDays, humanReadableDate } from "@/functions/utility";
import { Project as ProjectProps } from "@/lib/interface";
import { Icon } from "@iconify/react/dist/iconify.js";
import { motion } from "framer-motion";
import {
  Button,
  Chip,
  cn,
  Divider,
  Progress,
  Tooltip,
} from "@nextui-org/react";
import Link from "next/link";
import Thumbnail from "./thumbnail";
import { isOnce } from "@/lib/utils";

interface Props {
  project: ProjectProps;
}

const statusColorMap = {
  completed: "bg-success",
  "on-hold": "bg-warning",
  "in-progress": "bg-warning",
  upcoming: "bg-secondary",
};

export default function Project({ project }: Props) {
  let totalDays = calculateDays(project?.startdate, project?.enddate);
  let daysPassed = calculateDays(project?.startdate, new Date().toISOString());
  if (project?.status === "completed") {
    daysPassed = totalDays;
  } else if (project?.status === "on-hold") {
    daysPassed = 13;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 200 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }}
        className="max-w-7xl  mx-auto p-4 sm:p-8 md:p-12"
      >
        <div className="flex flex-col">
          <h1 className="text-[clamp(1rem,7vw,11.5rem)] font-pp-migra italic text-secondary leading-none flex justify-center items-center gap-4 font-extrabold">
            {project?.title}
          </h1>
          <p className=" text-default-600 text-center text-[clamp(1rem,1.5vw,2rem)] mt-8">
            {project?.tagline}
          </p>
        </div>
        <Divider className="bg-default-500 my-12" />
        <div className="flex justify-between gap-12 flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:mr-[10%]">
            <div className="mb-12">
              <h3 className="text-lg">Overview</h3>
              <p className="text-default-600 mt-4 text-justify">
                {project?.description}
              </p>
            </div>
            <div className="flex gap-4">
              {project?.github && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 80,
                  }}
                  viewport={{ once: isOnce }}
                >
                  <Button
                    as={Link}
                    size="lg"
                    color="primary"
                    variant="flat"
                    href={`${project?.github}`}
                    endContent={
                      <Icon icon="tabler:arrow-up-right" fontSize={20} />
                    }
                    target="_blank"
                  >
                    Source
                  </Button>
                </motion.div>
              )}
              {project?.previewlink && (
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{
                    duration: 0.1,
                    delay: 0.9,
                    type: "spring",
                    stiffness: 80,
                  }}
                  viewport={{ once: isOnce }}
                >
                  <Button
                    as={Link}
                    variant={project?.github ? "bordered" : "flat"}
                    color={project?.github ? "default" : "primary"}
                    size="lg"
                    href={`${project?.previewlink}`}
                    endContent={
                      <Icon icon="tabler:arrow-up-right" fontSize={20} />
                    }
                    target="_blank"
                  >
                    Preview
                  </Button>
                </motion.div>
              )}
            </div>
          </div>
          <div className="sm:p-16 flex flex-col gap-12 pt-0">
            {project?.role && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
                viewport={{ once: isOnce }}
              >
                <h4>ROLE</h4>
                <p className="text-default-600">{project?.role}</p>
              </motion.div>
            )}

            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.3,
                delay: 0.5,
                type: "spring",
                stiffness: 80,
              }}
              viewport={{ once: isOnce }}
            >
              <h4>TECHNOLOGIES</h4>
              <p className="text-default-600">
                {project?.technologies
                  .map((tech) => {
                    const parts = tech.split("-").pop() || "";
                    return parts.charAt(0).toUpperCase() + parts.slice(1);
                  })
                  .join(", ")}
              </p>
            </motion.div>
            {project?.client && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.7,
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ once: isOnce }}
              >
                <h4>CLIENT</h4>
                <p className="text-default-600">{project?.client}</p>
              </motion.div>
            )}

            {(project?.status === "in-progress" ||
              project?.status === "completed" ||
              project?.status === "on-hold") && (
              <motion.div
                initial={{ opacity: 0, x: 100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.3,
                  delay: 0.9,
                  type: "spring",
                  stiffness: 80,
                }}
                viewport={{ once: isOnce }}
              >
                <h4>TIMELINE</h4>
                <p className="text-default-600">
                  {humanReadableDate(project?.startdate)}
                  {project?.status === "completed"
                    ? ` - ${humanReadableDate(project?.enddate)}`
                    : project?.status === "in-progress"
                      ? " - Present"
                      : " - On Hold"}
                </p>
              </motion.div>
            )}
            {Math.floor((daysPassed / totalDays) * 100) > 0 &&
              Math.floor((daysPassed / totalDays) * 100) <= 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0.5,
                    type: "spring",
                    stiffness: 80,
                  }}
                  viewport={{ once: isOnce }}
                >
                  <Progress
                    label={<h4 className="text-base">PROGRESS</h4>}
                    size="sm"
                    value={Math.floor((daysPassed / totalDays) * 100)}
                    maxValue={100}
                    color={
                      project?.status === "completed" ? "success" : "warning"
                    }
                    showValueLabel={true}
                    className="max-w-96"
                  />
                </motion.div>
              )}
          </div>
        </div>
      </motion.div>
      <motion.div
        className="max-w-6xl py-14 mx-auto"
        initial={{ opacity: 0, y: 200 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.5 }}
        viewport={{ once: isOnce }}
      >
        <Thumbnail src={project?.thumbnail.src} />
      </motion.div>
    </>
  );
}
