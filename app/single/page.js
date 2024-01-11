import Advertise from "@/components/Advertise";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import React from "react";

const SinglePage = () => {
  return (
    <>
      <Hero />
      <Cta />
      <Advertise />
      <Gallery />
      <Cta />
    </>
  );
};

export default SinglePage;
