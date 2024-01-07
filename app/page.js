import Hero from "@/components/Hero";
import Intro from "@/components/Intro";

export default function Home() {
  return (
    <section className="w-100">
      <Hero className="w-3/4" />
      <Intro />
    </section>
  );
}
