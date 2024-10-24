"use client";

import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "sonner";
import NextTopLoader from "nextjs-toploader";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <NextUIProvider>
      <SessionProvider>
        {children}
        <NextTopLoader
          height={3}
          showSpinner={false}
          shadow="false"
          easing="ease"
          color="hsl(var(--nextui-primary))"
        />
        <Toaster theme={"dark"} richColors closeButton />
      </SessionProvider>
    </NextUIProvider>
  );
}
