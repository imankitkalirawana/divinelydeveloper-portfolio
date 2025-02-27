import React from "react";
import BackgroundGradient from "@/components/components/BackgroundGradient";
import Banner from "@/components/sections/banner";
import Commitment from "@/components/sections/commit";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import HowIWork from "@/components/sections/how-i-work";
import Showreel from "@/components/sections/showreel";
import WhatIDo from "@/components/sections/what-i-do";
import ProjectProvider from "@/components/sections/projects";
import Skills from "@/components/sections/skills";
import EducationProvider from "@/components/sections/education";

export default function Home() {
  return (
    <>
      {/* <SmoothScroll> */}
      <div className="select-none">
        <BackgroundGradient />
        <div className="max-w-7xl overflow-hidden mx-auto p-4 md:p-8">
          <Banner />
          <Showreel />
        </div>
        <WhatIDo />
        <Commitment />
        <ProjectProvider />
        <Skills />
        <HowIWork />
        <EducationProvider />
        <Contact />
        <div className="max-w-7xl mx-auto px-8">
          <Footer />
        </div>
      </div>
      {/* </SmoothScroll> */}
    </>
  );
}
