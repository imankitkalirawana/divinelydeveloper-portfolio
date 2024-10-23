import Project from "@/components/sections/project/project";
import { getProject } from "@/functions/get";
import { Project as ProjectProps } from "@/lib/interface";

interface Props {
  params: {
    slug: string;
  };
  project: ProjectProps;
}

export default async function Page({ params }: Props) {
  const project = await getProject(params.slug);
  return (
    <>
      <Project project={project} />
    </>
  );
}
