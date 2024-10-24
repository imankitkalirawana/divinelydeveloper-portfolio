"use client";
import React from "react";
import Marquee from "@/components/magicui/marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Project, Project as ProjectType } from "@/lib/interface";
import Image from "next/image";
import { isImage } from "@/functions/utility";
import { getProjects } from "@/functions/get";
import { isCaching } from "@/lib/config";

interface Props {
  projects: ProjectType[];
}

export default function ProjectProvider() {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const res = await fetch(`/api/projects`, {
        cache: isCaching ? "default" : "no-cache",
      });
      if (res.ok) {
        const projects = await res.json();
        setProjects(projects);
      }
    };
    fetchProjects();
  }, []);
  return (
    <>
      <Projects projects={projects} />
    </>
  );
}

function Projects({ projects }: Props) {
  // sort project by priority
  projects.sort((a, b) => a.priority - b.priority);
  const targetRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: targetRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const y = useTransform(
    scrollYProgress,
    [-0.3, 1.2],
    [isMobile ? "60%" : "50%", "-90%"],
  );
  const backdrop = useTransform(
    scrollYProgress,
    [0, 1],
    ["blur(0px) brightness(1)", "blur(10px) brightness(0.5)"],
  );

  return (
    <>
      <section
        id="projects"
        className="relative h-[300vh] w-full"
        ref={targetRef}
      >
        <div className="sticky top-0 flex h-screen items-start pb-8 overflow-hidden">
          <motion.div
            style={{ filter: backdrop }}
            className="absolute -z-10 top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%]"
          >
            <div className="md:text-[90px] text-[50px] leading-[50px] md:leading-[90px] text-center">
              My Great
            </div>
            <Marquee pauseOnHover={false} className="[--duration:20s]">
              <div className="md:text-[200px] md:leading-[200px] text-[100px] leading-[100px] after:content-['•'] font-ppneuemigraitalicbold text-primary after:text-secondary">
                WORK
              </div>
            </Marquee>
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>

          <motion.div
            className="flex flex-col gap-24 w-full p-4 md:p-12"
            style={{ y }}
          >
            {projects.slice(0, 5).map((project, index) => (
              <ProjectCard project={project} index={index} key={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

const ProjectCard = ({
  project,
  index,
}: {
  project: ProjectType;
  index: number;
}) => {
  const [hasError, setHasError] = useState(false);
  return (
    <div
      className={`flex flex-col items-${
        (index + 1) % 2 === 0 ? "end" : "start"
      } w-full`}
      // href={project.}
    >
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl flex w-full md:w-[50%]">
        {isImage(project.thumbnail.src) ? (
          <Image
            alt={project.title}
            className="absolute top-0 w-full object-cover"
            width={400}
            height={400}
            src={hasError ? "/project.jpg" : `${project.thumbnail.src}`}
            onError={() => !hasError && setHasError(true)}
          />
        ) : (
          <video
            autoPlay
            loop
            muted
            className="object-cover w-full pointer-events-none"
            playsInline
            width={400}
            height={400}
            controls={false}
            preload="auto"
            src={hasError ? "/showreel.mp4" : `${project.thumbnail.src}`}
            onError={() => !hasError && setHasError(true)}
          />
        )}
      </div>
    </div>
  );
};
