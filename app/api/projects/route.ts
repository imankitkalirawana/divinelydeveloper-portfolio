import { NextResponse } from "next/server";
import Project from "@/models/Project";
import { connectDB } from "@/lib/db";
import { auth } from "@/auth";

export const GET = auth(async function GET() {
  try {
    await connectDB();
    const projects = await Project.find();
    return NextResponse.json(projects);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});

export const POST = auth(async function POST(request: any) {
  try {
    if (request.auth?.user?.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const data = await request.json();
    if (!data.title) {
      return NextResponse.json(
        { message: "Please enter project title" },
        { status: 400 },
      );
    }
    const project = new Project(data);
    await connectDB();
    await project.save();
    return NextResponse.json({
      project,
      message: "Project added successfully",
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});
