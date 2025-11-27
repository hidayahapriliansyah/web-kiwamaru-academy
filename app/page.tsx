import Navbar from "./components/navbar";
import Hero from "./components/hero";
import Program from "./components/program";
import About from "./components/about";
import FaqAccordion from "./components/faq";
import CTAClosing from "./components/cta-closing";
import Footer from "./components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex flex-col justify-center">
        <Hero />
        <Program />
        <About />
        <FaqAccordion />
        <CTAClosing />
        <Footer />
      </main>
    </>
  );
}
