"use client";
import React from "react";
import Image from "next/image";

const ServicesPage2 = () => {
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
    },
  ];

  const servicesJsx = servicesData.map((service, index) => (
    <>
      <div className="grid items-center place-content-center mx-auto grid-cols-1  lg:grid-cols-2  gap-y-10  lg:gap-y-32 gap-x-10 lg:gap-x-24 max-w-2xl md:max-w-3xl lg:max-w-none ">
        <div
          className={`
        ${index % 2 === 0 && `lg:order-2`}
         text-left place-items-center 
       `}
        >
          <h2 className="mb-4 text-2xl font-extrabold tracking-tight  text-black md:leading-tight  md:text-4xl">
            {service.title}
          </h2>

          <p className="mb-2  text-gray-600 mx-auto  md:text-lg">
            {service.paragraph}
          </p>

          <div className="text-left">
            <ul className=" marker:text-teal list-disc ml-10 text-gray-700 md:text-lg">
              {service.features.map((bullet, index) => (
                <li key={index}>{bullet}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative w-11/12 lg:w-full mx-auto z-10   ">
          {service.image ? (
            <Image
              alt="File Management"
              src={service.imageSrc}
              width={600}
              height={600}
              className="mx-auto 
                  relative
                  z-10
                  h-full
                  w-full
                   rounded
                  "
            />
          ) : (
            <div className="aspect-video relative z-10">
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
            className="block absolute w-full h-[95%] top-[-4%] left-[-3%] rounded  bg-blue-600 z-0 
                  overflow-x-hidden 
                  "
            aria-hidden="true"
          ></span>

          {/* <span
            className="block absolute w-[105%] h-[105%] top-[-2%] left-[-2%]  bg-blue-300 z-0 
                  overflow-x-hidden
                  "
            aria-hidden="true"
          ></span> */}

          <span
            className="block absolute w-full h-full top-[5%] left-[3%] rounded bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden
                  "
            aria-hidden="true"
          ></span>
        </div>
      </div>

      {index !== servicesData.length - 1 && (
        <div
          className="
lg:hidden
border-dashed
border-t 
border-gray-300 

w-10/12
mx-auto
"
        ></div>
      )}
    </>
  ));

  return (
    <>
      <section className="px-4 pt-10 pb-32 mx-auto lg:max-w-7xl flex flex-col  space-y-16 md:space-y-24 lg:space-y-32">
        {servicesJsx}

        {/* file management  */}
        {/* <div
          className="grid items-center place-content-center mx-auto grid-cols-1   
          
          lg:grid-cols-2 
          gap-y-10 
          lg:gap-y-32 
          gap-x-10 
          lg:gap-x-24
        
        max-w-2xl
        
        md:max-w-3xl
        lg:max-w-none
        "
        >
          <div className="order-none lg:order-2 text-left place-items-center ">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight  text-black md:leading-tight  md:text-4xl">
              File Management
            </h2>
            <p className="mb-2  text-gray-600 mx-auto  md:text-lg">
              eProcess Development structures your very important files
              efficiently to allow for quick and easy access to your most
              important documents.
            </p>

            <div className="  text-left  ">
              <ul
                className="
            marker:text-teal 
            list-disc 
           
            ml-10
            text-gray-700
            
            md:text-lg
            "
              >
                <li>Numerous report options</li>
                <li>Databases that allow for easy record location</li>
                <li>Social media engagement and analytics</li>
                <li>
                  Folder, document, and media management of directories and
                  subdirectories
                </li>
                <li>File Protection</li>
              </ul>
            </div>
          </div>

          <div className="relative w-11/12 lg:w-full mx-auto z-10">
            <Image
              alt="File Management"
              src="/services/filemanagement2.jpg"
              width={600}
              height={600}
              className="mx-auto 
              relative
              z-10
              h-full
              w-full
              "
            />

            <span
              className="block absolute w-full h-full top-[5%] left-[5%]  bg-pink-500 z-0 
              overflow-x-hidden
              "
              aria-hidden="true"
            ></span>
          </div>
        </div> */}
      </section>
    </>
  );
};

export default ServicesPage2;
