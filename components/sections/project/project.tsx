import { calculateDays, humanReadableDate } from "@/functions/utility";
import { Project as ProjectProps } from "@/lib/interface";
import { Icon } from "@iconify/react/dist/iconify.js";
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
  let totalDays = calculateDays(project.startdate, project.enddate);
  let daysPassed = calculateDays(project.startdate, new Date().toISOString());
  if (project.status === "completed") {
    daysPassed = totalDays;
  } else if (project.status === "on-hold") {
    daysPassed = 13;
  }

  return (
    <>
      <div className="max-w-7xl font-ppneuemachinaregular mx-auto p-4 sm:p-8 md:p-12">
        <div className="flex flex-col">
          <h1 className="text-4xl flex items-center gap-4 font-ppneuemachinabold sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className=" text-default-600 text-xl sm:text-2xl mt-8">
            {project.tagline}
          </p>
        </div>
        <Divider className="bg-default-500 my-12" />
        <div className="flex justify-between gap-12 flex-col sm:flex-row">
          <div className="sm:w-1/2 sm:mr-[10%]">
            <div className="mb-12">
              <h3>Overview</h3>
              <p className="text-default-600 mt-4">{project.description}</p>
            </div>
            <div className="flex gap-4">
              {project.github && (
                <Button
                  as={Link}
                  size="lg"
                  color="primary"
                  variant="flat"
                  href={`${project.github}`}
                  endContent={
                    <Icon icon="tabler:arrow-up-right" fontSize={20} />
                  }
                  target="_blank"
                >
                  Source
                </Button>
              )}
              {project.previewlink && (
                <Button
                  as={Link}
                  variant={project.github ? "bordered" : "flat"}
                  color={project.github ? "default" : "primary"}
                  size="lg"
                  href={`${project.previewlink}`}
                  endContent={
                    <Icon icon="tabler:arrow-up-right" fontSize={20} />
                  }
                  target="_blank"
                >
                  Preview
                </Button>
              )}
            </div>
          </div>
          <div className="sm:p-16 flex flex-col gap-12 pt-0">
            {project.role && (
              <div>
                <h4>ROLE</h4>
                <p className="text-default-600">{project.role}</p>
              </div>
            )}

            <div>
              <h4>TOOLS</h4>
              <p className="text-default-600">
                {project.technologies
                  .map((tech) => {
                    const parts = tech.split("-").pop() || "";
                    return parts.charAt(0).toUpperCase() + parts.slice(1);
                  })
                  .join(", ")}
              </p>
            </div>
            {project.client && (
              <div>
                <h4>CLIENT</h4>
                <p className="text-default-600">{project.client}</p>
              </div>
            )}

            {(project.status === "in-progress" ||
              project.status === "completed" ||
              project.status === "on-hold") && (
              <div>
                <h4>TIMELINE</h4>
                <p className="text-default-600">
                  {humanReadableDate(project.startdate)}
                  {project.status === "completed"
                    ? ` - ${humanReadableDate(project.enddate)}`
                    : project.status === "in-progress"
                      ? " - Present"
                      : " - On Hold"}
                </p>
              </div>
            )}
            {Math.floor((daysPassed / totalDays) * 100) > 0 &&
              Math.floor((daysPassed / totalDays) * 100) <= 100 && (
                <div>
                  <Progress
                    label={<h4 className="text-base">PROGRESS</h4>}
                    size="sm"
                    value={Math.floor((daysPassed / totalDays) * 100)}
                    maxValue={100}
                    color={
                      project.status === "completed" ? "success" : "warning"
                    }
                    showValueLabel={true}
                    className="max-w-96"
                  />
                </div>
              )}
          </div>
        </div>
      </div>
      <div className="max-w-6xl py-14 mx-auto">
        <Thumbnail src={project.thumbnail.src} />
      </div>
    </>
  );
}
