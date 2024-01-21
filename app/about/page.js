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

  return (
    <>
      <Hero data={data.home.projects} />
      <Cta data={data.home.abouts} />
      <Advertise data={data.home.abouts} />
      <Cta data={data.home.abouts} />
    </>
  );
};

export default AboutPage;
