import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import React from "react";
import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA, POJECTS_SLIDERS } from "@/graphQl/query";

const ProjectsPage = async () => {
  // STATE
  let projects = [];

  // API
  let projectsData = await graphqlClient.request(POJECTS_SLIDERS);

  let homeData = await graphqlClient.request(Home_DATA, {
    slug: "home-page",
  });

  // const projectSlides = projectsData.projects.map((project) => {
  //   return {
  //     url: project.projectsGallery[0].url,
  //     id: project.id,
  //     title: project.projectTitle,
  //     category: project.category,
  //   };
  // });

  const projectSlides = projectsData.projects.map((project) => {
    return {
      url: project.projectsGallery[0].url,
      title: project.projectTitle,
      category: project.category,
      id: project.id,
      gallery: JSON.stringify(project.projectsGallery),
    };
  });

  return (
    <>
      <Hero data={homeData.home.projects} className="w-full md:w-3/4" />
      <Gallery data={projectSlides} hasCategory={true} />
    </>
  );
};

export default ProjectsPage;
