import React from "react";
import BackgroundGradient from "@/components/components/BackgroundGradient";
import Banner from "@/components/sections/banner";
import Commitment from "@/components/sections/commit";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import HowIWork from "@/components/sections/how-i-work";
import MovingText from "@/components/sections/moving-text";
import Showreel from "@/components/sections/showreel";
import WhatIDo from "@/components/sections/what-i-do";
import SmoothScroll from "@/components/smooth-scroll";
import ProjectProvider from "@/components/sections/projects";
import TestimonialProvider from "@/components/sections/testimonial";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <div className="select-none">
          <BackgroundGradient />
          <div className="max-w-7xl mx-auto p-4 md:p-8">
            <Banner />
            <Showreel />
          </div>
          <WhatIDo />
          <ProjectProvider />
          <Commitment />
          <MovingText />
          <HowIWork />
          <TestimonialProvider />
          <Contact />
          <div className="max-w-7xl mx-auto px-8">
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}
