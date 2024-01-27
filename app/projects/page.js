"use client";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import React, { useEffect, useState } from "react";
import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA, POJECTS_SLIDERS } from "@/graphQl/query";

const ProjectsPage = async () => {
  const [homeData, setHomeData] = useState({});
  const [projectsData, setProjectsData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let projectsData = await graphqlClient.request(POJECTS_SLIDERS);

      let homeData = await graphqlClient.request(Home_DATA, {
        slug: "home-page",
      });

      const projectSlides = projectsData.projects.map((project) => {
        return {
          url: project.projectsGallery[0].url,
          title: project.projectTitle,
          category: project.category,
          id: project.id,
          gallery: JSON.stringify(project.projectsGallery),
        };
      });

      setProjectsData(projectSlides);
      setHomeData(homeData);
    };

    fetchData();
  }, []);

  return (
    <>
      {Object.keys(homeData).length > 0 && Object.keys(projectsData).length > 0 ? (
        <>
          <Hero data={homeData.home.projects} className="w-full md:w-3/4" />
          <Gallery data={projectsData} hasCategory={true} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default ProjectsPage;
