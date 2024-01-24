import Advertise from "@/components/Advertise";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import LastestProjects from "@/components/LastestProjects";
import SelectedWorks from "@/components/SelectedWorks";

//
import { graphqlClient } from "@/lib/graphql-client";
import { Home_DATA } from "@/graphQl/query";

export default async function Home() {
  let data = await graphqlClient.request(Home_DATA, {
    slug: "home-page",
  });

  const ctaData = {
    title: data && data.home.abouts[0].descriptionTitle,
    description: data && data.home.abouts[0].description,
    image: data && data.home.abouts[0].descriptionThumbnail.url,
  };

  return (
    <section className="w-100">
      <Hero data={data.home.projects} className="w-full md:w-3/4" />
      <Cta data={ctaData} />
      <SelectedWorks data={data.home.projects} />
      <Advertise data={data.home.abouts} />
      <LastestProjects data={data.home.projects} />
      {/* <Clients /> */}
    </section>
  );
}
