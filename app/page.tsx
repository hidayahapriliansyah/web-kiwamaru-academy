import Hero from "./components/hero";
import Program from "./components/program";
import About from "./components/about";
import FaqAccordion from "./components/faq";
import CTAClosing from "./components/cta-closing";

export default function Home() {
  return (
    <>
        <Hero />
        <Program />
        <About />
        <FaqAccordion />
        <CTAClosing />
    </>
  );
}
