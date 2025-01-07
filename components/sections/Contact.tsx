"use client";
import React from "react";
import Marquee from "../magicui/marquee";
import WorkButton from "../animata/button/work-button";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Contact = () => {
  const router = useRouter();
  return (
    <>
      <Marquee pauseOnHover={false} className="[--duration:20s] mt-48">
        <div className="text-[100px] leading-[100px] md:text-[200px] md:leading-[200px] after:content-['•'] after:text-[80px] gap-4 flex items-center uppercase after:text-secondary">
          Have a{" "}
          <span className="text-primary font-ppneuemigraitalicbold mr-4">
            great
          </span>{" "}
          project?
        </div>
      </Marquee>
      <div className="flex flex-col md:flex-row mb-4 justify-between items-center max-w-7xl mx-auto p-8">
        <p className="text-xl self-start md:text-[18px] md:max-w-[50%] font-ppneuemachinaregular">
          Have a project in mind?
          <br />
          Let&apos;s work together!
        </p>
        <Link href={"/contact"}>
          <WorkButton className="w-full mt-4 md:w-fit" />
        </Link>
      </div>
      <hr className="border-default my-4 border-1 max-w-7xl mx-auto px-8" />
    </>
  );
};

export default Contact;
