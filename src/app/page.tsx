import "./globals.css";
import Clients from "./ui/clients/clients";
import About from "./ui/about/about";

import Heronew from "./ui/hero/heronew";

import ServicesNew from "./ui/services/servicesNew";
import Contact from "./ui/contact/contact";

import ClientsNew from "./ui/clients/ClientsNew";

import About2 from "./ui/about/about2";
import { About3 } from "./ui/about/about3";

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
        <Contact></Contact>
      </main>
    </>
  );
}
