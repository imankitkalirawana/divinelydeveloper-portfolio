"use client";
import { isImage } from "@/functions/utility";
import { Project } from "@/lib/interface";
import {
  Badge,
  Chip,
  ChipProps,
  cn,
  Image as NextImage,
  Skeleton,
  Tooltip,
} from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface Props {
  projects: Project[];
}

const statusColorMap = {
  completed: "bg-success",
  "on-hold": "bg-danger",
  "in-progress": "bg-warning",
  upcoming: "bg-secondary",
};

const tooltipColorMap = {
  completed: "success",
  "on-hold": "danger",
  "in-progress": "warning",
  upcoming: "secondary",
};

export default function Projects({ projects }: Props) {
  return (
    <>
      <div className="max-w-7xl mx-auto p-4 sm:p-8 md:p-12">
        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project._id} project={project} />
          ))}
        </div>
      </div>
    </>
  );
}

function ProjectCard({ project }: { project: Project }) {
  const [hasError, setHasError] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="flex flex-col group gap-4"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
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

        <Tooltip
          isOpen={isOpen}
          className="capitalize font-ppneuemachinaregular"
          content={project.status.split("-").join(" ")}
          placement="left"
          color={tooltipColorMap[project.status] as any}
        >
          <span
            className={cn(
              "absolute right-5 top-5 size-2 rounded-full",
              project.status === "in-progress" && "animate-ping",
              statusColorMap[project.status],
            )}
          ></span>
        </Tooltip>

        <h3 className="absolute left-1/2 top-1/2 text-3xl opacity-0 group-hover:opacity-100 transition-all whitespace-nowrap -translate-x-1/2 -translate-y-1/2 text-white">
          <span>{project.title}</span>
        </h3>
      </div>

      <div className="flex font-ppneuemachinaregular flex-col gap-2">
        <div></div>
      </div>
    </Link>
  );
}
