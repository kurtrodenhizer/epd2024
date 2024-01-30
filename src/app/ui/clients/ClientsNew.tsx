import React from "react";
import Image from "next/image";
import styles from "./clients.module.css";

const ClientsNew = () => {
  const logos = [
    { company: "Abiomed", logo: "/logos/abiomed.png" },
    { company: "Drager", logo: "/logos/drager.png" },
    { company: "Smart Source", logo: "/logos/ss.png" },
    { company: "Families for Depression Awareness", logo: "/logos/ffda.png" },
  ];

  const slidingLogos = logos.map((logo, index) => (
    <>
      {/* <div key={index}>hello {logo.company}</div> */}
      <div className="flex items-center justify-center max-w-none">
        <Image
          src={logo.logo}
          width={150}
          height={150}
          alt="Abiomed Logo"
          className={`${
            logo.company === "Families for Depression Awareness" &&
            styles["client__logo--ff"]
          } max-w-none`}
        />
      </div>
    </>
  ));

  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-6">
        <div className="flex overflow-hidden group space-x-32 ">
          <div className="flex space-x-32 animate-loop-scroll group-hover:paused">
            {slidingLogos}
          </div>

          <div className="flex space-x-32 animate-loop-scroll group-hover:paused">
            {slidingLogos}
          </div>

          <div className="flex space-x-32 animate-loop-scroll group-hover:paused">
            {slidingLogos}
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsNew;
