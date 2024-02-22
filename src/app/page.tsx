import "./globals.css";
import Clients from "./ui/clients/clients";
import About from "./ui/about/about";

import Heronew from "./ui/hero/heronew";

import ServicesNew from "./ui/services/servicesNew";
import Contact from "./ui/contact/contact";

import ClientsNew from "./ui/clients/ClientsNew";

import About2 from "./ui/about/about2";
import { About3 } from "./ui/about/about3";
import Contact2 from "./ui/contact/contact2";
import ContacCta from "./ui/contact/contacCta";
import ContactNew from "./ui/contact/contactNew";

export default function Home() {
  return (
    <>
      <Heronew></Heronew>

      <main>
        
        <ClientsNew></ClientsNew>
        {/* <CompanySlider></CompanySlider> */}
        {/* <Clients></Clients> */}
        {/* <About></About> */}
        {/* <About2></About2> */}
        <About3></About3>
        <ServicesNew></ServicesNew>
        {/* <Contact></Contact> */}

        {/* <Contact2></Contact2> */}
        <ContacCta></ContacCta>
        {/* <ContactNew></ContactNew> */}
      </main>
    </>
  );
}
