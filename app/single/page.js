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
<<<<<<< HEAD
      <Hero className="w-full md:w-3/4" />
      <Cta />
      <Advertise />
=======
      <Hero data={data.home.projects} />
      <Cta data={data.home.abouts} />
      <Advertise data={data.home.abouts} />
>>>>>>> e627c5800d24a27c0aef72b3e2642b027960ea8b
      <Gallery />
      <Cta data={data.home.abouts} />
    </>
  );
};

export default SinglePage;
