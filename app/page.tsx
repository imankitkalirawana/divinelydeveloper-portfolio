import React from "react";
import BackgroundGradient from "@/components/components/BackgroundGradient";
import Banner from "@/components/sections/Banner";
import Commitment from "@/components/sections/Commitment";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import HowIWork from "@/components/sections/HowIWork";
import MovingText from "@/components/sections/MovingText";
import Navbar from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import Showreel from "@/components/sections/Showreel";
import Testimonial from "@/components/sections/Testimonial";
import WhatIDo from "@/components/sections/WhatIDo";
import SmoothScroll from "@/components/smooth-scroll";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <div className="select-none">
          <BackgroundGradient />

          <div className="max-w-7xl mx-auto p-8">
            <Banner />
            <Showreel />
          </div>
          <WhatIDo />
          <Projects />
          <Commitment />
          <MovingText />
          <HowIWork />
          <Testimonial />
          <Contact />
          <div className="max-w-7xl mx-auto px-8">
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}
