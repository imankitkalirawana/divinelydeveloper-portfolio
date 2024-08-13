import React from "react";
import Marquee from "../magicui/marquee";
import WorkButton from "../animata/button/work-button";
import { Divider } from "@nextui-org/react";

const Contact = () => {
  return (
    <>
      <Marquee pauseOnHover={false} className="[--duration:20s] mt-48">
        <div className="text-[200px] leading-[200px] after:content-['•'] after:text-[80px] gap-4 flex items-center uppercase after:text-secondary">
          Have a{" "}
          <span className="text-primary font-ppneuemigraitalicbold mr-4">
            great
          </span>{" "}
          project?
        </div>
      </Marquee>
      <div className="flex mb-4 justify-between items-center max-w-7xl mx-auto p-8">
        <p className="text-[18px] md:max-w-[50%] font-ppneuemachinaregular">
          Have a project in mind?
          <br />
          Let&apos;s work together!
        </p>
        <WorkButton />
      </div>
      <hr className="border-default my-4 border-1 max-w-7xl mx-auto px-8" />
    </>
  );
};

export default Contact;
