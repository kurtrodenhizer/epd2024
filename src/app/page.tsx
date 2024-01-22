import "./globals.css";
import Clients from "./ui/clients/clients";
import About from "./ui/about/about";


import Heronew from "./ui/hero/heronew";

import References from "./ui/references/references";

import ServicesNew from "./ui/services/servicesNew";
import Contact from "./ui/contact/contact";

export default function Home() {
  return (
    <>
  
      <Heronew></Heronew>


      <main>
        <Clients></Clients>
        <About></About>
        <ServicesNew></ServicesNew>
        <Contact></Contact>
      </main>
    </>
  );
}
