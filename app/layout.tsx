import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/sections/navbar";
import { auth } from "@/auth";
import ChatbotPopup from "@/components/sections/chatbot-popup";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Bhuneshvar - Divinely Developer",
  description:
    "Divinely Developer (Bhuneshvar) is a full-stack developer. He is a software engineer, web developer, and designer, proficient in JavaScript, TypeScript, React, Node.js, Next.js, and MongoDB.",
  category: "Software Development",
  keywords: [
    "software",
    "development",
    "full-stack",
    "web",
    "design",
    "developer",
    "ankit kalirawana",
    "devocode",
    "divinely developer",
    "bhuneshvar",
    "kalirawana",
    "nextjs",
    "react",
    "nodejs",
    "mongodb",
    "typescript",
    "javascript",
  ],
  metadataBase: new URL("https://divinely.dev"),
  openGraph: {
    title: "Divinely Developer",
    description: "Full-stack development by Bhuneshvar.",
    images: "/opengraph-image.png",
  },
  twitter: {
    card: "summary_large_image",
    images: "/twitter-image.png",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en" className="dark">
      <body className="font-pp-neue-machina bg-background text-foreground">
        <Providers>
          <Navbar session={session} />
          <ChatbotPopup />
          <main className="mt-24">{children}</main>
        </Providers>
        <Script
          src="https://cloud.umami.is/script.js"
          data-website-id={process.env.UMAMI_WEBSITE_ID as string}
          strategy="lazyOnload"
        />
      </body>
    </html>
  );
}
