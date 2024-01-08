import Advertise from "@/components/Advertise";
import Clients from "@/components/Clients";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import LastestProjects from "@/components/LastestProjects";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <section className="w-100">
      <Hero className="w-3/4" />
      <Intro />
      <SelectedWorks />
      <Advertise />
      <LastestProjects />
      {/* <Clients /> */}
    </section>
  );
}
