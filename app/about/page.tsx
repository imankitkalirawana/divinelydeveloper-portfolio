import Banner from "@/components/sections/about/Banner";
import Skills from "@/components/sections/about/Skills";
import Stats from "@/components/sections/about/Stats";
import Commitment from "@/components/sections/commit";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Navbar from "@/components/sections/navbar";
import React from "react";

const Page = () => {
  return (
    <>
      <Banner />
      <Commitment />
      <Stats />
      <Skills />
      <Contact />
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <Footer />
      </div>
    </>
  );
};

export default Page;
