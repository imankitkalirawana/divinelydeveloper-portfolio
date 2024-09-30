import { transporter } from "@/utils/nodemailer";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    return NextResponse.json({ message: "Hello World" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    await transporter.sendMail({
      from: {
        name: `${data.name} from Divinely Developer Portfolio`,
        address: data.email || "unknown@divinely.dev",
      },
      to: process.env.EMAIL || "contact@divinely.dev",
      subject: `New message from ${data.name}`,
      text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
    });
    return NextResponse.json({ message: "Message sent successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
