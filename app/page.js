import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import SelectedWorks from "@/components/SelectedWorks";

export default function Home() {
  return (
    <section className="w-100">
      <Hero className="w-3/4" />
      <Intro />
      <SelectedWorks />
    </section>
  );
}
