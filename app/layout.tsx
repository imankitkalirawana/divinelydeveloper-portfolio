import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/sections/Navbar";

export const metadata: Metadata = {
  title: "Divinely Developer",
  description: "Divinely Developer (Bhuneshvar) is a full-stack developer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="font-ppneuemachinabold bg-background text-foreground">
        <Providers>
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  );
}
