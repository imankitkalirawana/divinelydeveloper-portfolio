import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { auth } from "@/auth";
import Social from "@/models/Social";

export async function GET(_request: Request, context: any) {
  try {
    await connectDB();
    const social = await Social.findById(context.params.id);
    if (!social) {
      return NextResponse.json(
        { message: "Social not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(social);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

export const PUT = auth(async function PUT(request: any, context: any) {
  try {
    if (request.auth?.user?.role !== "admin") {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }
    const data = await request.json();
    await connectDB();
    let social = await Social.findById(context.params.id);
    if (!social) {
      return NextResponse.json(
        { message: "Social not found" },
        { status: 404 },
      );
    }
    social = await Social.findByIdAndUpdate(context.params.id, data, {
      new: true,
    });
    if (!social) {
      return NextResponse.json(
        { message: "Social not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(social);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});
