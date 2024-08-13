import React from "react";
import Marquee from "../magicui/marquee";

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
    </>
  );
};

export default Contact;
