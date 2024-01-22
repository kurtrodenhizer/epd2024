import "./globals.css";
import Image from "next/image";
import Clients from "./ui/clients/clients";
import About from "./ui/about/about";
import Services from "./ui/services/services";
import Navbar from "./ui/navbar/navbar";
import Hero from "./ui/hero/hero";

import Heronew from "./ui/hero/heronew";

import References from "./ui/references/references";

import Altheros from "./ui/hero/altheros/altheros";
import ServicesNew from "./ui/services/servicesNew";
import Contact from "./ui/contact/contact";

export default function Home() {
  return (
    <>
      {/* <Hero></Hero> */}
      {/* <div className="hero_test">
        <Hero></Hero>
        
      </div> */}
      <Heronew></Heronew>

      {/* <Altheros></Altheros> */}

      <main>
        <Clients></Clients>
        <About></About>
        {/* <Services></Services>  */}
        <ServicesNew></ServicesNew>
        <Contact></Contact>
        {/* <References></References> */}
      </main>
    </>
  );
}
