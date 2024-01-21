import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import React from "react";
import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA } from "@/graphQl/query";

const ProjectsPage = async () => {
  let data = await graphqlClient.request(Home_DATA, {
    slug: "home-page",
  });

  return (
    <>
      <Hero data={data.home.projects} className="w-3/4" />
      <Gallery />
    </>
  );
};

export default ProjectsPage;
