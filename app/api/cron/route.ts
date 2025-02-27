import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { connectDB } from "@/lib/db";
import { Project as ProjectProps } from "@/lib/interface";

export const POST = async function POST(request: Request) {
  const currentDate = new Date();

  // Ensure the request is authorized
  if (
    request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  try {
    await connectDB(); // Connect to the database
    const projects = await Project.find();

    for (const project of projects) {
      const startDate = new Date(project.startdate);
      const endDate = new Date(project.enddate);

      let newStatus: ProjectProps["status"];
      if (project.status === "on-hold") {
        continue;
      }
      if (currentDate < startDate) {
        newStatus = "upcoming";
      } else if (currentDate > endDate) {
        newStatus = "completed";
      } else {
        newStatus = "in-progress";
      }

      if (project.status !== newStatus) {
        project.status = newStatus;
        await project.save();
      }
    }
    return NextResponse.json({ message: "Status updated successfully" });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
};
