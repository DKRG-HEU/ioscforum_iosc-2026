import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import EventHighlights from "@/components/EventHighlights";
import Themes from "@/components/Themes";
import Speakers from "@/components/Speakers";
import Programme from "@/components/Programme";
import RegistrationCTA from "@/components/RegistrationCTA";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-hidden bg-white text-slate-900">
      <Navbar />
      <Hero />
      <EventHighlights />
      <Themes />
      <Speakers />
      <Programme />
      <RegistrationCTA />
      <Footer />
    </main>
  );
}
