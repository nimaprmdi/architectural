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
<<<<<<< HEAD
      <Hero className="w-full md:w-3/4" />
      <Cta />
      <Advertise />
      <Cta />
=======
      <Hero data={data.home.projects} />
      <Cta data={data.home.abouts} />
      <Advertise data={data.home.abouts} />
      <Cta data={data.home.abouts} />
>>>>>>> e627c5800d24a27c0aef72b3e2642b027960ea8b
    </>
  );
};

export default AboutPage;
