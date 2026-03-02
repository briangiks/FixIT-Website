import { Hero } from "../components/Hero";
import { ServiceSlideshow } from "../components/ServiceSlideshow";
import { Experience } from "../components/Experience";
import { Testimonials } from "../components/Testimonials";

export function Home() {
  return (
    <>
      <Hero />
      <ServiceSlideshow />
      <Experience />
      <Testimonials />
    </>
  );
}
