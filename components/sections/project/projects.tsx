"use client";
import { isImage } from "@/functions/utility";
import { Project } from "@/lib/interface";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Chip, cn, Skeleton } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { isOnce } from "@/lib/utils";

interface Props {
  projects: Project[];
}

const statusColorMap = {
  completed: "bg-success",
  "on-hold": "bg-warning",
  "in-progress": "bg-warning",
  upcoming: "bg-secondary",
};

const tooltipColorMap = {
  completed: "success",
  "on-hold": "warning",
  "in-progress": "warning",
  upcoming: "secondary",
};

export default function Projects({ projects }: Props) {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const y = useTransform(scrollYProgress, [0, 1.5], ["2%", "-5%"]);
  return (
    <>
      <div
        ref={targetRef}
        className="max-w-7xl relative mx-auto p-4 sm:p-8 md:p-12"
      >
        <motion.div style={{ y }} className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => (
            <ProjectCard
              key={project._id}
              cardIndex={index}
              project={project}
            />
          ))}
        </motion.div>
      </div>
    </>
  );
}

function ProjectCard({
  project,
  cardIndex,
}: {
  project: Project;
  cardIndex: number;
}) {
  const [hasError, setHasError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <motion.div
      className="group relative rounded-3xl overflow-hidden"
      initial={{
        opacity: 0,
        y: 100,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
        delay: cardIndex < 6 ? cardIndex * 0.1 : 0.3,
      }}
      viewport={{ once: isOnce }}
    >
      <Link
        href={`/work/${project.slug}`}
        className="flex flex-col group gap-4"
      >
        <div className="relative w-full h-fit">
          {isImage(project.thumbnail.src) ? (
            <Image
              src={project.thumbnail.src}
              objectFit="cover"
              alt={project.title}
              className="object-cover bg-default group-hover:opacity-30 transition-all aspect-video rounded-3xl w-full pointer-events-none"
              width={400}
              height={400}
            />
          ) : (
            <div className="relative w-full">
              {!videoLoaded && (
                <Skeleton className="object-cover before:!duration-1000 bg-default group-hover:opacity-30 transition-all aspect-video rounded-3xl w-full pointer-events-none"></Skeleton>
              )}

              {!hasError && (
                <video
                  autoPlay
                  loop
                  muted
                  className={cn(
                    "object-cover bg-default group-hover:opacity-30 transition-all aspect-video rounded-3xl w-full pointer-events-none",
                    videoLoaded ? "flex" : "hidden",
                  )}
                  playsInline
                  width={400}
                  height={400}
                  controls={false}
                  preload="auto"
                  src={project.thumbnail.src}
                  onError={() => {
                    setHasError(true); // Trigger fallback if an error occurs
                    setVideoLoaded(true); // Hide loading state if an error occurs
                  }}
                  onLoadedData={() => setVideoLoaded(true)} // Video successfully loaded
                />
              )}

              {hasError && (
                <Image
                  src="/project.gif" // Fallback image
                  objectFit="cover"
                  alt={project.title}
                  className="object-cover bg-default group-hover:opacity-30 transition-all aspect-video rounded-3xl w-full pointer-events-none"
                  width={400}
                  height={400}
                />
              )}
            </div>
          )}

          {/* <Tooltip
          isOpen={isOpen}
          className="capitalize pt-2 !z-10 "
          content={project.status.split("-").join(" ")}
          placement="left"
          color={tooltipColorMap[project.status] as any}
          classNames={{
            content: "z-10",
          }}
        > */}
          <span
            className={cn(
              "absolute right-5 top-5 size-2 rounded-full",
              project.status === "in-progress" && "animate-ping",
              statusColorMap[project.status],
            )}
          ></span>
          {/* </Tooltip> */}

          <h3 className="absolute left-1/2 top-1/2 text-3xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap -translate-x-1/2 -translate-y-1/2 text-white">
            <span>{project.title}</span>
          </h3>
        </div>

        <div className="flex flex-col  gap-2">
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <Chip
                key={tech}
                // size="sm"
                className="capitalize"
                startContent={<Icon icon={tech} className="mx-1" />}
              >
                {tech.split("-").pop()}
              </Chip>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
