"use client";
import React from "react";
import Marquee from "../magicui/marquee";
import WorkButton from "../animata/button/work-button";
import { useRouter } from "next/navigation";

const Contact = () => {
  const router = useRouter();
  return (
    <>
      <Marquee pauseOnHover={false} className="[--duration:20s] mt-48">
        <div className="text-[100px] font-extrabold leading-[100px] md:text-[200px] md:leading-[200px] after:content-['•'] after:text-[80px] gap-4 flex items-center uppercase after:text-secondary">
          Looking to{" "}
          <span className="text-primary font-pp-migra italic mr-4">
            collaborate?
          </span>{" "}
        </div>
      </Marquee>
      <div className="flex flex-col md:flex-row mb-4 gap-2 justify-between items-center max-w-7xl mx-auto p-8">
        <p className="text-[15px] sm:text-xl self-start md:text-[18px] md:max-w-[50%]">
          Got an idea to bring to life?
          <br />
          Let&apos;s create something amazing together!
        </p>
        <WorkButton
          onClick={() => {
            router.push("/contact");
          }}
          className="w-full mt-4 md:w-fit"
        >
          Let&apos;s Talk
        </WorkButton>
      </div>
      <hr className="border-default my-4 border-1 max-w-7xl mx-auto px-8" />
    </>
  );
};

export default Contact;
