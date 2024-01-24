"use client";
import { useParams } from "next/navigation";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import Advertise from "@/components/Advertise";
import Gallery from "@/components/Gallery";
import { useQuery } from "@apollo/client";
import { graphqlClient } from "@/lib/graphql-client";
import { PROJECT } from "@/graphQl/query";

import { React, useState, useEffect } from "react";
import { GraphQLClient, gql } from "graphql-request";

const client = new GraphQLClient(
  "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clracxbkk130q01w7x431qrgi/master",
  {
    headers: {
      // Authorization: `Bearer ${HYGRAPH_PERMANENTAUTH_TOKEN}`,
    },
  }
);

const ProjectsSinglePage = () => {
  const [project, setProject] = useState("");
  const [userDetails, setUserDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [primaryCTA, setPrimaryCta] = useState({});
  const [secondaryCTA, setSecondaryCTA] = useState({});

  const { id } = useParams();
  console.log("slug", id);

  const getUserDetailByGraphQLRequestAPICall = async () => {
    try {
      setIsLoading(true);
      const variables = { id: id };
      // const response = await client.request(POJECTS_SLIDERS);
      const response = await client.request(PROJECT, {
        id: id,
      });

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

  useEffect(() => {
    console.log("project", project.project);

    project &&
      setPrimaryCta({
        title: project.project.descriptionTitle,
        description: project.project.description,
        image: project.project.descriptionThumbnail.url,
      });

    project &&
      setSecondaryCTA({
        title: project.project.featuresTitle,
        description: project.project.featuresDescription,
        image: project.project.featuresThumbnail.url,
      });
  }, [project]);

  return (
    project && (
      <div>
        <Hero data={project.project} className="w-full md:w-3/4" hasNav={false} />
        <Cta data={Object.keys(primaryCTA).length > 0 ? primaryCTA : {}} />
        <Gallery data={project.project.projectsGallery} />
        {/*   <Advertise data={data.home.abouts} />
      <Gallery />*/}
        <Cta data={Object.keys(secondaryCTA).length > 0 ? secondaryCTA : {}} />
      </div>
    )
  );
};

export default ProjectsSinglePage;
