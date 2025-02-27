import React from "react";
import { getProjects } from "@/functions/get";
import { Project } from "@/lib/interface";
import Projects from "@/components/dashboard/projects/projects";

export default async function Page() {
  const projects: Project[] = await getProjects();
  return (
    <>
      <Projects projects={projects} />
    </>
  );
}
