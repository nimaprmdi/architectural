import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import React from "react";
import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA } from "@/graphQl/query";
<<<<<<< HEAD
const ProjectsPage = async () => {
  // API Call Here
=======

const ProjectsPage = async () => {
>>>>>>> e627c5800d24a27c0aef72b3e2642b027960ea8b
  let data = await graphqlClient.request(Home_DATA, {
    slug: "home-page",
  });

  return (
    <>
<<<<<<< HEAD
      <Hero data={data.home.projects} className="w-full md:w-3/4" />
      <Gallery hasCategory />
=======
      <Hero data={data.home.projects} className="w-3/4" />
      <Gallery />
>>>>>>> e627c5800d24a27c0aef72b3e2642b027960ea8b
    </>
  );
};

export default ProjectsPage;
