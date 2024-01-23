import Advertise from "@/components/Advertise";
import Gallery from "@/components/Gallery";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import React from "react";

import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA } from "@/graphQl/query";

const SinglePage = async () => {
  let data = await graphqlClient.request(Home_DATA, {
    slug: "home-page",
  });

  return (
    <>
      <Hero data={data.home.projects} className="w-full md:w-3/4" />
      <Cta data={data.home.abouts} />
      <Advertise data={data.home.abouts} />
      <Gallery />
      <Cta data={data.home.abouts} />
    </>
  );
};

export default SinglePage;
