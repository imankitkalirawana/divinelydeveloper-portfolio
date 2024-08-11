import BackgroundGradient from "@/components/components/BackgroundGradient";
import Banner from "@/components/sections/Banner";
import Navbar from "@/components/sections/Navbar";
import Projects from "@/components/sections/Projects";
import Showreel from "@/components/sections/Showreel";
import Work from "@/components/sections/Work";
import { Divider } from "@nextui-org/react";

export default function Home() {
  return (
    <>
      <div className="select-none">
        <BackgroundGradient />
        <div className="max-w-7xl mx-auto p-8">
          <Navbar />
          <Banner />
          <Divider className="mb-12" />
          <Showreel />
        </div>
        <Work />
        <Projects />
      </div>
    </>
  );
}
