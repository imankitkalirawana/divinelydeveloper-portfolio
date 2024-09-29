import Banner from "@/components/sections/about/Banner";
import Skills from "@/components/sections/about/Skills";
import Stats from "@/components/sections/about/Stats";
import Commitment from "@/components/sections/Commitment";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <Banner />
      <Commitment />
      <Stats />
      <Skills />
      <Contact />
      <div className="max-w-7xl mx-auto px-8">
        <Footer />
      </div>
    </>
  );
};

export default Page;
