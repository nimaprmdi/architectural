"use client";
import Advertise from "@/components/Advertise";
import Cta from "@/components/Cta";
import Hero from "@/components/Hero";
import React, { useEffect, useState } from "react";

import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA } from "@/graphQl/query";

const AboutPage = async () => {
  const [homeData, setHomeData] = useState({});
  const [ctaData, setCtaData] = useState({});
  const [secondaryCTA, setSecondaryCta] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      let data = await graphqlClient.request(Home_DATA, {
        slug: "home-page",
      });

      const ctaData = {
        title: data && data.home.abouts[0].descriptionTitle,
        description: data && data.home.abouts[0].description,
        image: data && data.home.abouts[0].descriptionThumbnail.url,
      };

      const secondaryCTA = {
        title: data.home.abouts[0].locationTitle,
        description: data.home.abouts[0].locationDescription,
        image: data.home.abouts[0].locationThumbnail.url,
      };

      setHomeData(data);
      setCtaData(ctaData);
      setSecondaryCta(secondaryCTA);
    };

    fetchData();
  }, []);

  return (
    <>
      {homeData &&
      ctaData &&
      secondaryCTA &&
      Object.keys(homeData).length > 0 &&
      Object.keys(ctaData).length > 0 &&
      Object.keys(secondaryCTA).length > 0 ? (
        <>
          <Hero data={homeData.home.projects} className="w-full md:w-3/4" />
          <Cta data={ctaData} />
          <Advertise data={homeData.home.abouts} />
          <Cta data={secondaryCTA} />
        </>
      ) : (
        <></>
      )}
    </>
  );
};

export default AboutPage;
