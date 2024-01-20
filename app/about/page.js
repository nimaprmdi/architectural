import Advertise from "@/components/Advertise";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import React from "react";

const AboutPage = () => {
  return (
    <>
      <Hero className="w-full md:w-3/4" />
      <Cta />
      <Advertise />
      <Cta />
    </>
  );
};

export default AboutPage;
