"use client";
import React from "react";
import Image from "next/image";

const ServicesPage = () => {
  const servicesData = [
    {
      service: "faris",
      title: "FARIS - File Asset Resource Intelligence System",
      paragraph:
        "     FARIS allows users to find, select, and organize slides from approved master sets. Features include:",
      features: [
        "Easy location of slides from master sets",
        "Prevents modification of approved content",
        "Syncs master slides from the server to the user",
        "Allows for presentation sharing",
        "Manages video and animation files",
        "Ability to monitor user activity",
        "Security System",
        "Runs when offline",
      ],
      image: false,
    },
    {
      service: "reportGeneration",
      title: "Report Generation",
      paragraph:
        "eProcess Development validates, stores, and protects your company ‘ s most valuable information making it easily accessible and readily available for users.",
      features: [
        "Google Analytics data",
        "Google AdWords data",
        "Social Media engagement and analytics",
        "Lead Generation",
        "SEO performance",
      ],
      image: true,
      imageSrc: "/services/report-generation2.jpg",
      imgAltTag: "Digital Report displayed on tablet device",
    },
    {
      service: "dataManagement",
      title: "Data Management",
      paragraph:
        " eProcess Development manages your marketing and website efforts and our reporting ensures your KPIs are being met over time. By overseeing your campaign performance we can make optimizations as needed to get you the best results possible.",
      features: [
        "Oversee the flow of information from initial setup throughout entire lifecycle",
        "Pivot tables for report generation",
        "Enterprise software management ",
        "Product management",
        "Visitor management",
        "Price quotation management",
        "E-mail contact management",
      ],
      image: true,
      imageSrc: "/services/data-management.gif",
      imgAltTag: "Screenshots of Data Management examples",
    },
    {
      service: "fileManagement",
      title: "File Management",
      paragraph:
        "eProcess Development structures your very important files efficiently to allow for quick and easy access to your most important documents.",
      features: [
        "Numerous report options",
        "Databases that allow for easy record location",
        "Social media engagement and analytics",
        "Folder, document and media management of directories and sub-directories",
        "File Protection",
      ],
      image: true,
      imageSrc: "/services/filemanagement2.jpg",
      imgAltTag: "Digital File structure, organization and management visual",
    },
    {
      service: "eLearning",
      title: "eLearning",
      paragraph:
        "Through the use of state-of-the-art technology eProcess Development partners with your business to provide updated material and offers flexible learning schedules for your employees.",
      features: [
        "Numerous report options",
        "Databases that allow for easy record location",
        "Social media engagement and analytics",
        "Folder, document and media management of directories and sub-directories",
        "File Protection",
      ],
      image: true,
      imageSrc: "/services/eLearning.jpg",
      imgAltTag: "Example of eLearning product simulation",
    },
  ];

  const servicesJsx = servicesData.map((service, index) => (
    <>
      <div className="mx-auto grid max-w-2xl grid-cols-1 place-content-center  items-center  gap-x-10  gap-y-10 md:max-w-3xl lg:max-w-none lg:grid-cols-2 lg:gap-x-24 lg:gap-y-32 ">
        <div
          className={`
        ${index % 2 === 0 && `lg:order-2`}
         place-items-center text-left 
       `}
        >
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight  text-gray-700 md:text-4xl  md:leading-tight">
            {service.title}
          </h2>

          <p className="mx-auto  mb-2 text-gray-600  md:text-lg">
            {service.paragraph}
          </p>

          <div className="text-left">
            <ul className=" ml-10 list-disc text-gray-700 marker:text-teal md:text-lg">
              {service.features.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative z-10 mx-auto w-11/12 lg:w-full   ">
          {service.image ? (
            <Image
              alt={`${service.title} image`}
              src={service.imageSrc!}
              width={600}
              height={600}
              className="relative 
                  z-10
                  mx-auto
                  h-full
                  w-full
                   rounded
                  "
            />
          ) : (
            <div className="relative z-10 aspect-video">
              <iframe
                className=" h-full w-full rounded-lg"
                src="https://www.youtube.com/embed/GQllIAJ3aRw?si=5AQL-2TlmGTlvkC4"
                width="100%"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              ></iframe>
            </div>
          )}

          <span
            className="absolute left-[-3%] top-[-4%] z-0 block h-[95%] w-full  overflow-x-hidden rounded 
                  bg-blue-600 
                  "
            aria-hidden="true"
          ></span>

          <span
            className="absolute left-[3%] top-[5%] z-0 block h-full w-full overflow-x-hidden rounded bg-blue-100
                  drop-shadow-2xl
                  "
            aria-hidden="true"
          ></span>
        </div>
      </div>

      {index !== servicesData.length - 1 && (
        <div
          className="
mx-auto
w-10/12
border-t 
border-dashed 

border-gray-300
lg:hidden
"
        ></div>
      )}
    </>
  ));

  return (
    <>
      <section className="mx-auto flex flex-col space-y-16 px-4 pb-32 pt-5 md:space-y-24 lg:max-w-7xl lg:space-y-32 lg:pt-10">
        {servicesJsx}
      </section>
    </>
  );
};

export default ServicesPage;
