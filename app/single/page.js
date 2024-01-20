import Advertise from "@/components/Advertise";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import React from "react";

const SinglePage = () => {
  return (
    <>
      <Hero className="w-full md:w-3/4" />
      <Cta />
      <Advertise />
      <Gallery />
      <Cta />
    </>
  );
};

export default SinglePage;
