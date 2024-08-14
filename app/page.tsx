import BackgroundGradient from "@/components/components/BackgroundGradient";
import Banner from "@/components/sections/Banner";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import HowIWork from "@/components/sections/HowIWork";
import Navbar from "@/components/sections/Navbar";
import { Projects } from "@/components/sections/Projects";
import Showreel from "@/components/sections/Showreel";
import Testimonial from "@/components/sections/Testimonial";
import Work from "@/components/sections/Work";
import SmoothScroll from "@/components/smooth-scroll";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <SmoothScroll>
        <div className="select-none">
          <BackgroundGradient />

          <div className="max-w-7xl mx-auto p-8">
            <Navbar />
            <Banner />
            <hr className="border-default my-4 border-1" />
            <Showreel />
          </div>
          <Work />
          <Projects />
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
