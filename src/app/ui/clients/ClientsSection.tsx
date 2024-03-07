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
      <div className=" w-40 h-[70%] mx-auto items-start justify-center  grayscale hover:grayscale-0 relative ">
        <Image
          src={logo.logo}
          fill
          alt={`${logo.company} logo`}
          className="
          h-full
          w-full
          mx-auto
          object-contain
          "
        />
      </div>
    </>
  ));

  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-2 h-[20vh]">
        <div className="flex pt-1 flex-col justify-center items-center overflow-hidden h-full">
          <h1 className="text-sm lg:text-md font-bold tracking-wide text-center text-gray-800 uppercase">
            Our Trusted clients
          </h1>

          <div className="flex h-[65%] w-full overflow-hidden group space-x-32">
            <div className="flex items-center space-x-32 animate-loop-scroll group-hover:paused">
              {slidingLogos}
            </div>
            <div className="flex items-center space-x-32 animate-loop-scroll group-hover:paused">
              {slidingLogos}
            </div>
            <div className="flex items-center space-x-32 animate-loop-scroll group-hover:paused">
              {slidingLogos}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ClientsSection;
