"use client";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import Gallery from "@/components/Gallery";
import { useParams } from "next/navigation";
import { graphqlClient } from "@/lib/graphql-client";
import { PROJECT } from "@/graphQl/query";
import { React, useState, useEffect } from "react";

const ProjectsSinglePage = () => {
  // States
  const [project, setProject] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [primaryCTA, setPrimaryCta] = useState({});
  const [secondaryCTA, setSecondaryCTA] = useState({});

  // Params
  const { id } = useParams();

  /*------------------------------------*\
    # Request From a client component
  \*------------------------------------*/
  const getUserDetailByGraphQLRequestAPICall = async () => {
    try {
      setIsLoading(true);
      const variables = { id: id };
      // const response = await client.request(POJECTS_SLIDERS);

      const response = await graphqlClient.request(PROJECT, variables);
      setProject(response);

      if (response?.nextUser) {
        setUserDetails(response.nextUser);
      }
    } catch (err) {
      console.log("ERROR FROM GRAPHQL-REQUEST API CALL", err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUserDetailByGraphQLRequestAPICall();

    return () => {};
  }, []);

  /*------------------------------------*\
    # Handle Projects CTA components
  \*------------------------------------*/
  useEffect(() => {
    // CTA Object
    project &&
      setPrimaryCta({
        title: project.project.descriptionTitle,
        description: project.project.description,
        image: project.project.descriptionThumbnail.url,
      });

    // CTA Second Object
    project &&
      setSecondaryCTA({
        title: project.project.featuresTitle,
        description: project.project.featuresDescription,
        image: project.project.featuresThumbnail.url,
      });
  }, [project]);

  return (
    project && (
      <>
        <Hero data={project.project} className="w-full md:w-3/4" hasNav={false} />
        <Cta data={Object.keys(primaryCTA).length > 0 ? primaryCTA : {}} />
        <Gallery data={project.project.projectsGallery} />
        <Cta data={Object.keys(secondaryCTA).length > 0 ? secondaryCTA : {}} />
      </>
    )
  );
};

export default ProjectsSinglePage;
