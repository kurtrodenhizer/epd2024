import React from "react";
import Image from "next/image";
import styles from "./clients.module.css";

const ClientsNew = () => {
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
      {/* <div key={index}>hello {logo.company}</div> */}
      <div className="flex items-start justify-center max-w-none grayscale hover:grayscale-0">
        <Image
          src={logo.logo}
          width={175}
          height={150}
          // layout="responsive"
          alt="Abiomed Logo"
          className="max-w-none object-contain"
          style={{ aspectRatio: "3/2" }}
        />
      </div>
    </>
  ));

  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-2 h-[20vh]  ">
        <div className="flex flex-col items-center overflow-hidden justify-center ">
          {/* <h1
            className={` text-center text-xl tracking-tight font-bold text-gray-700 mt-3 mb-1 `}
            className={`text-2xl  text-teal text-center justify-self-start py-5`}
          >
            Trusted Clients
          </h1>
          <span
            className={`inline-block w-32 h-[2px] rounded-full bg-teal mb-3`}
          ></span> */}

          {/* <span className="flex w-10/12 items-center">
            <span className="h-[2px] w-[80%] flex-1 bg-teal"></span>
            <span className="pl-6">Trusted Clients</span>
          </span> */}
          <h1 className="mt-5  text-sm lg:text-md font-bold tracking-wide text-center text-gray-800 uppercase">
            We’re proud to have played a part in these amazing journeys.
          </h1>

          <div className="flex overflow-hidden group space-x-32  ">
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

          {/* view our testimonials  */}
          {/* <div className="mt-2 mb-4 text-sm text-center text-gray-500">
        
          <a
            href="#"
            className="inline-flex items-center justify-center text-primary text-teal"
          >
             View Our testimonials
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="inline w-3 h-3 ml-1"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div> */}
        </div>
      </section>
    </>
  );
};

export default ClientsNew;
