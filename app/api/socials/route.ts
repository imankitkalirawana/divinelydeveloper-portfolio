import { NextResponse } from "next/server";
import Social from "@/models/Social";
import { connectDB } from "@/lib/db";
import { auth } from "@/auth";

export const GET = auth(async function GET() {
  try {
    await connectDB();
    const socials = await Social.find();
    return NextResponse.json(socials);
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

    const social = new Social(data);
    await connectDB();
    await social.save();
    return NextResponse.json({
      social,
      message: "Social added successfully",
    });
  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
});
