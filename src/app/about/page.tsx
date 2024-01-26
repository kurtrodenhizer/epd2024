import References from "../ui/references/references";
import Image from "next/image";
import { Abel } from "next/font/google";

import AboutPage from "../ui/pages/aboutPage";
import About from "../ui/about/about";
import Header from "../ui/header/header";

export default function Page() {
  return (
    <>
    <Header></Header>
    {/* <About></About> */}
    <AboutPage></AboutPage>
    
    </>
  );
}
