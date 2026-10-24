
import Hero from "@/components/Hero";
import EventHighlights from "@/components/EventHighlights";
import Themes from "@/components/Themes";
import Speakers from "@/components/Speakers";
import Programme from "@/components/Programme";
import RegistrationCTA from "@/components/RegistrationCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <EventHighlights />
      <Themes />
      <Speakers />
      <Programme />
      <RegistrationCTA />
    </>
  );
}
