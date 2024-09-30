"use client";
import React from "react";

const Commitment = () => {
  return (
    <>
      <section className="relative mt-36">
        <video
          src={"/project-6.mp4"}
          autoPlay
          loop
          muted
          className="object-cover w-[100%] pointer-events-none"
          playsInline
        />
        <h3 className="font-ppneuemachinaregular text-[28px] md:text-[34px] px-8 md:px-24 mt-12">
          Driven by a passion for excellence and a commitment to innovation, I
          deliver customized web solutions while fostering strong partnerships
          with clients across diverse industries.
        </h3>
      </section>
    </>
  );
};

export default Commitment;
