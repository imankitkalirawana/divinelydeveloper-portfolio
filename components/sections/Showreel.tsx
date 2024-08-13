import React from "react";
import WorkButton from "../animata/button/work-button";
import { MeteoconsStar, PhStarFourFill } from "../components/icons";

const Showreel = () => {
  return (
    <>
      <div className="flex flex-col">
        <div className="flex mb-12 justify-between items-center">
          <p className="text-[22px] md:max-w-[50%] font-ppneuemachinaregular">
            We are Design Agency Specialized in Illustrations, UI/UX Design and
            Motion Graphic Based in Indonesia
          </p>
          <WorkButton />
        </div>
        <div className="bg-white text-black rounded-3xl flex flex-col p-8">
          <div className="flex justify-between items-start">
            <div className="flex flex-col text-[80px] leading-[80px]">
              <span>My Nice</span>
              <span className="text-[#32bcd6] relative font-ppneuemigraitalicbold -rotate-3">
                <MeteoconsStar
                  className="text-primary absolute left-[30%] -top-[60%]"
                  fontSize={80}
                />
                Showreels
              </span>
            </div>
            <div className="md:max-w-[50%] relative">
              <p className="font-ppneuemachinaregular text-xl text-[#3b3b3b]">
                Our team is expert in developing designs and animations that can
                help you showcase and represent your business.
              </p>
              <PhStarFourFill
                className="text-primary absolute left-10 top-[100%]"
                fontSize={50}
              />
            </div>
          </div>
          <video
            className="w-full rounded-3xl mt-8"
            src="/showreel.mp4"
            controls={false}
            autoPlay={true}
            loop
            muted
            playsInline
          ></video>
        </div>
      </div>
    </>
  );
};

export default Showreel;
