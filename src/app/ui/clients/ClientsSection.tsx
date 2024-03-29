import React from "react";
import Image from "next/image";

const ClientsSection = () => {
  const logos = [
    { company: "Abiomed", logo: "/logos/newlogos/abiomed3.png" },
    { company: "Drager", logo: "/logos/newlogos/drager4.png" },
    { company: "Smart Source", logo: "/logos/newlogos/ss4.png" },
    {
      company: "Families for Depression Awareness",
      logo: "/logos/newlogos/ffda3.png",
    },
  ];

  const slidingLogos = logos.map((logo, index) => (
    <>
      <div className=" relative mx-auto h-[70%] w-40 items-start  justify-center grayscale hover:grayscale-0 ">
        <Image
          src={logo.logo}
          fill
          alt={`${logo.company} logo`}
          className="
          mx-auto
          h-full
          w-full
          object-contain
          "
        />
      </div>
    </>
  ));

  return (
    <>
      <section className="h-[20vh] bg-white py-2 dark:bg-gray-700">
        <div className="flex h-full flex-col items-center justify-center overflow-hidden pt-1">
          <h1 className="lg:text-md text-center text-sm font-bold uppercase tracking-wide text-gray-800">
            Our Trusted clients
          </h1>

          <div className="group flex h-[65%] w-full space-x-32 overflow-hidden">
            <div className="group-hover:paused flex animate-loop-scroll items-center space-x-32">
              {slidingLogos}
            </div>
            <div className="group-hover:paused flex animate-loop-scroll items-center space-x-32">
              {slidingLogos}
            </div>
            <div className="group-hover:paused flex animate-loop-scroll items-center space-x-32">
              {slidingLogos}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsSection;
