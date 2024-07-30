import "./globals.css";

import Hero from "./ui/hero/Hero";
import ClientsSection from "./ui/clients/ClientsSection";
import AboutSection from "./ui/about/AboutSection";
import Services from "./ui/services/Services";
import ContacCta from "./ui/contact/contacCta";

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
