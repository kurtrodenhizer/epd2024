import "./globals.css";

import Hero from "./ui/hero/Hero";
import Services from "./ui/services/Services";
import ClientsSection from "./ui/clients/ClientsSection";
import ContacCta from "./ui/contact/contacCta";
import AboutSection from "./ui/about/AboutSection";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <main>
        <ClientsSection></ClientsSection>
        <AboutSection></AboutSection>
        <Services></Services>
        <ContacCta></ContacCta>
      </main>
    </>
  );
}
