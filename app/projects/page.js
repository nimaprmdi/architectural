import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import React from "react";
import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA, POJECTS_SLIDERS } from "@/graphQl/query";

const ProjectsPage = async () => {
  // ------
  let projectsData = await graphqlClient.request(POJECTS_SLIDERS);
  // ------
  let homeData = await graphqlClient.request(Home_DATA, {
    slug: "home-page",
  });
  // ------

  // ------

  return (
    <>
      <Hero data={homeData.home.projects} className="w-full md:w-3/4" />
      <Gallery data={projectsData} hasCategory />
    </>
  );
};

export default ProjectsPage;
