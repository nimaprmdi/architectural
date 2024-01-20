import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import React from "react";
import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA } from "@/graphQl/query";
const ProjectsPage = async () => {
  // API Call Here
  let data = await graphqlClient.request(Home_DATA, {
    slug: "home-page",
  });

  return (
    <>
      <Hero data={data.home.projects} className="w-full md:w-3/4" />
      <Gallery hasCategory />
    </>
  );
};

export default ProjectsPage;
