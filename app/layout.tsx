import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/sections/Navbar";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Divinely Developer",
  description: "Divinely Developer (Bhuneshvar) is a full-stack developer.",
  metadataBase: new URL("https://divinelydeveloper.me"),
  openGraph: {
    title: "Divinely Developer",
    description: "Full-stack development by Bhuneshvar.",
    images: "/og-image.png",
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
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
