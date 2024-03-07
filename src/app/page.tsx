import "./globals.css";

import Hero from "./ui/hero/Hero";
import Services from "./ui/services/Services";
import Clients from "./ui/clients/Clients";
import ContacCta from "./ui/contact/contacCta";
import About from "./ui/about/About";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <main>
        <Clients></Clients>
        <About></About>
        <Services></Services>
        <ContacCta></ContacCta>
      </main>
    </>
  );
}
