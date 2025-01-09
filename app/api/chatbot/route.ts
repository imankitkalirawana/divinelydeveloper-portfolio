import { auth } from "@/auth";
import fs from "fs/promises";
import { NextResponse } from "next/server";

const aboutMeFilePath = "./utils/about-me.json";

export const POST = auth(async function POST(request: any) {
  try {
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 500 });
  }
});
