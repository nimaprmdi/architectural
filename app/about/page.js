import Advertise from "@/components/Advertise";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import React from "react";

import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA } from "@/graphQl/query";

const AboutPage = async () => {
  let data = await graphqlClient.request(Home_DATA, {
    slug: "home-page",
  });

  const ctaData = {
    title: data && data.home.abouts[0].descriptionTitle,
    description: data && data.home.abouts[0].description,
    image: data && data.home.abouts[0].descriptionThumbnail.url,
  };

  const secondaryCTA = {
    title: data.home.abouts[0].locationTitle,
    description: data.home.abouts[0].locationDescription,
    image: data.home.abouts[0].locationThumbnail.url,
  };

  return (
    <>
      <Hero data={data.home.projects} className="w-full md:w-3/4" />
      <Cta data={ctaData} />
      <Advertise data={data.home.abouts} />
      <Cta data={secondaryCTA} />
    </>
  );
};

export default AboutPage;
