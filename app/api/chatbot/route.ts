import { auth } from "@/auth";
import { NextResponse } from "next/server";
import { generateResponse } from "@/utils/chatbot";

export const POST = auth(async function POST(request: any) {
  try {
    const { message } = await request.json();

    const response = await generateResponse(message);
    console.debug(response);
    return NextResponse.json({ response });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: error }, { status: 500 });
  }
});
