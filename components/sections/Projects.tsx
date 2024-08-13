"use client";
import Marquee from "@/components/magicui/marquee";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

interface ProjectType {
  id: string;
  title: string;
  thumbnail: string;
  description: string;
}

export function Projects() {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const y = useTransform(scrollYProgress, [-0.3, 1.2], ["50%", "-100%"]);
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
            <div className="text-[90px] leading-[90px] text-center">
              My Great
            </div>
            <Marquee pauseOnHover={false} className="[--duration:20s]">
              <div className="text-[200px] leading-[200px] after:content-['•'] font-ppneuemigraitalicbold text-primary after:text-secondary">
                WORK
              </div>
            </Marquee>
          </motion.div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>

          <motion.div className="flex flex-col gap-24 p-12" style={{ y }}>
            {projects.slice(0, 5).map((project, index) => (
              <ProjectCard project={project} index={index} key={project.id} />
            ))}
          </motion.div>
        </div>
      </section>
      <section>
        <video
          src={"/project-6.mp4"}
          autoPlay
          loop
          muted
          className="object-cover w-[100%]"
        />
        <h3 className="font-ppneuemachinaregular text-[34px] px-24 mt-12">
          Commitment to the highest quality production standards, a broad
          expertise, and a genuine strive to help our clients have secured us
          strategic cooperation with market-leading companies in many sectors
          and regions.
        </h3>
      </section>

      <section className="relative mt-36 -mb-36">
        <Marquee
          pauseOnHover={false}
          className="[--duration:10s] text-[100px] flex items-center leading-[100px] text-default uppercase font-ppneuemigraitalicbold"
          repeat={5}
        >
          <div className="hover:text-primary">Animation</div>
          <Icon
            fontSize={70}
            icon="emojione-monotone:eight-spoked-asterisk"
            className="text-secondary mb-4"
          />
          <div className="hover:text-primary">UX/UI</div>
          <Icon
            fontSize={70}
            icon="emojione-monotone:eight-spoked-asterisk"
            className="text-secondary mb-4"
          />
        </Marquee>
        <Marquee
          pauseOnHover={false}
          reverse
          className="[--duration:10s] text-[100px] flex items-center leading-[100px] text-default uppercase font-ppneuemigraitalicbold"
          repeat={5}
        >
          <div className="hover:text-primary">NEXTJS</div>
          <Icon
            fontSize={70}
            icon="emojione-monotone:eight-spoked-asterisk"
            className="text-secondary mb-4"
          />
          <div className="hover:text-primary">Framer</div>
          <Icon
            fontSize={70}
            icon="emojione-monotone:eight-spoked-asterisk"
            className="text-secondary mb-4"
          />
        </Marquee>
        <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white dark:from-background"></div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white dark:from-background"></div>
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
  return (
    <div
      className={`flex flex-col items-${
        (index + 1) % 2 === 0 ? "end" : "start"
      } w-full`}
    >
      {project.thumbnail.includes(".mp4") ? (
        <video
          src={project.thumbnail}
          autoPlay
          loop
          muted
          className="object-cover w-[50%] rounded-3xl"
        />
      ) : (
        <img
          src={project.thumbnail}
          alt={project.title}
          className="object-cover w-[50%] rounded-3xl"
        />
      )}
    </div>
  );
};

const projects = [
  {
    id: "1",
    title: "Project 1",
    thumbnail: "/project-1.mp4",
    description: "This is a project description",
  },
  {
    id: "2",
    title: "Project 2",
    thumbnail: "/project-2.mp4",
    description: "This is a project description",
  },
  {
    id: "3",
    title: "Project 3",
    thumbnail: "/project-3.mp4",
    description: "This is a project description",
  },
  {
    id: "4",
    title: "Project 4",
    thumbnail: "/project-4.mp4",
    description: "This is a project description",
  },
  {
    id: "5",
    title: "Project 5",
    thumbnail: "/project-5.jpg",
    description: "This is a project description",
  },
];
