import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/sections/Navbar";
import { auth } from "@/auth";

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
      <body className="font-ppneuemachinabold bg-background text-foreground">
        <Providers>
          <Navbar session={session} />
          <main className="mt-24">{children}</main>
        </Providers>
      </body>
    </html>
  );
}
