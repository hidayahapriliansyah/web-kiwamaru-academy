// app/kontak/page.tsx
import Hero from "./components/hero";
import ContactInfo from "./components/contact-info";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white w-full">
      {/* HERO */}
      <Hero />
      {/* CONTACT INFO */}
      <ContactInfo />
    </main>
  );
}
