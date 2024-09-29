import { NextResponse } from "next/server";
import Testimonial from "@/models/Testimonial";
import { connectDB } from "@/lib/db";
import { auth } from "@/auth";

export const GET = auth(async function GET() {
  try {
    await connectDB();
    const testimonials = await Testimonial.find();
    return NextResponse.json(testimonials);
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

    const testimonial = new Testimonial(data);
    await connectDB();
    await testimonial.save();
    return NextResponse.json({
      testimonial,
      message: "Testimonial added successfully",
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});
