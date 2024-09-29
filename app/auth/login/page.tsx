import React from "react";
import { auth } from "@/auth";
import SignIn from "@/components/auth/signIn";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (session) {
    redirect("/dashboard");
  }
  return (
    <>
      <>
        <SignIn />
      </>
    </>
  );
}
