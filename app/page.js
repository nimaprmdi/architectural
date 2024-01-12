import Advertise from "@/components/Advertise";
import Hero from "@/components/Hero";
import Cta from "@/components/Cta";
import LastestProjects from "@/components/LastestProjects";
import SelectedWorks from "@/components/SelectedWorks";
import { graphqlClient } from "@/lib/graphql-client";
import { HOME_PROJECTS } from "@/graphQl/query";

export default async function Home() {
  let data = await graphqlClient.request(HOME_PROJECTS, {
    slug: "home-page",
  });

  return (
    <section className="w-100">
      <Hero data={data.home.projects} className="w-3/4" />
      <Cta />
      <SelectedWorks />
      <Advertise />
      <LastestProjects />
      {/* <Clients /> */}
    </section>
  );
}
