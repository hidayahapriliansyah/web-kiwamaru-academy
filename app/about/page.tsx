import { AboutKiwamaru } from "./components/about";
import ClosingSection from "./components/closing";
import AboutHero from "./components/hero";
import { LegalitySection } from "./components/legality";
import ProfilPendiri from "./components/profil-pendiri";

// app/about/page.jsx
export default function AboutPage() {
  return (
    <> 
      <AboutHero />
      <AboutKiwamaru />
      <LegalitySection />
      <ProfilPendiri />
      <ClosingSection />
    </>
  );
}
