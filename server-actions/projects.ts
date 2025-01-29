"use server";

import Project from "@/models/Project";
import { connectDB } from "@/lib/db";

export default async function getAllProjects() {
  try {
    await connectDB();
    const projects = await Project.find();
    return projects;
  } catch (error) {
    throw new Error("Failed to fetch projects");
  }
}
