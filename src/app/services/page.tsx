import References from "../ui/references/references";
import ServicesPage from "../ui/pages/services";
import ServicesPage2 from "../ui/pages/servicesPage2";
import Header from "../ui/header/header";
import Head from "next/head";

export default function Page() {
  return (
    <>
      <Header />
      <ServicesPage2></ServicesPage2>
      {/* <ServicesPage></ServicesPage> */}
    </>
  );
}
