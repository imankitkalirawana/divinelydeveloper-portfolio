"use client";
import React from "react";
import Marquee from "@/components/magicui/marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Project, Project as ProjectType } from "@/lib/interface";
import { isCaching, PLACEHOLDERS } from "@/lib/config";
import { Icon } from "@iconify/react/dist/iconify.js";
import {
  Card,
  CardBody,
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Image,
} from "@nextui-org/react";
import { link } from "fs";

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
            <div className="md:text-[90px] font-extrabold text-[50px] leading-[50px] md:leading-[90px] text-center">
              My Great
            </div>
            <Marquee pauseOnHover={false} className="[--duration:20s]">
              <div className="md:text-[200px] md:leading-[200px] text-[100px] leading-[100px] after:content-['•'] font-extrabold italic font-pp-migra text-primary after:text-secondary">
                WORK
              </div>
            </Marquee>
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>

          <motion.div
            className="mt-12 grid max-w-[96rem] px-4 md:px-8 lg:px-12 mx-auto w-full gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
            style={{ y }}
          >
            {projects.slice(0, 12).map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

const ProjectCard = ({ project }: { project: ProjectType }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  return (
    <Card
      isHoverable
      isPressable
      className="backdrop-blur-md hover:bg-default-200/30"
      // onPress={() => {
      //   window.open(project.url, "_blank");
      // }}
      // onContextMenu={(e) => {
      //   e.preventDefault();
      //   window.open(`/${link._id}/edit`, "_blank");
      // }}
    >
      <CardBody className="gap-2">
        <div className="w-full">
          <Image
            isBlurred
            isLoading={isLoading}
            src={isError ? PLACEHOLDERS.image : project.thumbnail.src}
            onLoad={() => {
              setIsLoading(false);
            }}
            onError={() => {
              setIsError(true);
            }}
            loading="lazy"
            alt={project.title}
            className="mb-4 aspect-video w-full bg-default-200 object-cover"
            width={600}
            classNames={{
              wrapper: "aspect-video",
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <div className="flex flex-col">
            <h3>{project.title}</h3>
            <p className="line-clamp-1" title={project.description}>
              {project.description}
            </p>
          </div>
          <div>
            <Dropdown aria-label="Options" placement="top-end">
              <DropdownTrigger>
                <Button variant="flat" size="sm" isIconOnly>
                  <Icon icon="tabler:dots-vertical" width={16} />
                </Button>
              </DropdownTrigger>
              <DropdownMenu>
                <DropdownItem key="view" target="_BLANK" href={project._id}>
                  View
                </DropdownItem>
                <DropdownItem key="edit" href={`/${project._id}/edit`}>
                  Edit
                </DropdownItem>
                <DropdownItem
                  key="delete"
                  className="text-danger"
                  color="danger"
                >
                  Delete
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
