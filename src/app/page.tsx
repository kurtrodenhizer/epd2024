import "./globals.css";
import Clients from "./ui/clients/clients";
import About from "./ui/about/about";

import Heronew from "./ui/hero/heronew";

import ServicesNew from "./ui/services/servicesNew";
import Contact from "./ui/contact/contact";

import { CompanySlider } from "./ui/clients/CompanySlider";
import ClientsNew from "./ui/clients/ClientsNew";

export default function Home() {
  return (
    <>
      <Heronew></Heronew>

      <main>
        
        <ClientsNew></ClientsNew>
        {/* <CompanySlider></CompanySlider> */}
        {/* <Clients></Clients> */}
        <About></About>
        <ServicesNew></ServicesNew>
        <Contact></Contact>
      </main>
    </>
  );
}
