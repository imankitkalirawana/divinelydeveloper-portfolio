import { NextResponse } from "next/server";
import { connectDB } from "@/lib/db";
import { auth } from "@/auth";
import Testimonial from "@/models/Testimonial";

export async function GET(_request: Request, context: any) {
  try {
    await connectDB();
    const testimonial = await Testimonial.findById(context.params.id);
    if (!testimonial) {
      return NextResponse.json(
        { message: "Testimonial not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(testimonial);
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
    let testimonial = await Testimonial.findById(context.params.id);
    if (!testimonial) {
      return NextResponse.json(
        { message: "Testimonial not found" },
        { status: 404 },
      );
    }
    testimonial = await Testimonial.findByIdAndUpdate(context.params.id, data, {
      new: true,
    });
    if (!testimonial) {
      return NextResponse.json(
        { message: "Testimonial not found" },
        { status: 404 },
      );
    }
    return NextResponse.json(testimonial);
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});
