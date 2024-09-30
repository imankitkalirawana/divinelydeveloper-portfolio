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
import { Project, Testimonial as TestimonialInterface } from "@/lib/interface";
import { getProjects, getTestimonials } from "@/functions/get";

export default async function Home() {
  const projects: Project[] = await getProjects();
  const testimonials: TestimonialInterface[] = await getTestimonials();
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
          <Projects projects={projects} />
          <Commitment />
          <MovingText />
          <HowIWork />
          <Testimonial testimonials={testimonials} />
          <Contact />
          <div className="max-w-7xl mx-auto px-8">
            <Footer />
          </div>
        </div>
      </SmoothScroll>
    </>
  );
}
