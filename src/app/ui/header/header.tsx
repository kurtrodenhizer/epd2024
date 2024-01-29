"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Header = () => {
  const pathname = usePathname();

  const headerData = [
    {
      page: "about",
      title: "About Us",
      paragraph:
        "ePd was founded on the basis of modernizing business practices",
      link: "/about",
    },
    {
      page: "services",
      title: "Services",
      paragraph:
        "We offer a wide range of digital solutions to help your business thrive",
      link: "/services",
    },
    {
      page: "references",
      title: "References",
      paragraph: "Here's what our clients had to say:",
      link: "/references",
    },
  ];

  const content = headerData
    .filter((section) => section.link === pathname)
    .map((section, index) => (
      <>
        <div
          // className=" w-full h-[15vh] relative bg-gray-900  ">
          className={
            `
            ${section.page === "references" && "bg-gray-900"}
            ${section.page === "about" && "bg-gray-100"}

      w-full  relative py-2`}
        >
          <div className="flex flex-col place-items-center h-full pt-6 justify-start text-center  w-full z-20 mx-auto  sm:mx-auto sm:max-w-lg md:max-w-2xl">
            <h1
              key={index}
              // className="text-4xl font-bold mb-3 text-gray-400">
              className={`${section.page === "references" && "text-white"}
               text-4xl font-bold mb-3 text-gray-600`}
            >
              {section.title}
            </h1>
            <p className="text-gray-500 px-2 md:px-0">{section.paragraph}</p>
            <div className={`text-center `}>
         
              <span className={`inline-block w-40 h-[2.5px] rounded-full bg-teal`}></span>
     
              </div>
          </div>
        </div>
      </>
    ));

  return (
    <>
      {/* <div className=" w-full h-[15vh] relative bg-gray-900  "> */}
      {content}
      {/* <Image
          alt="Mountains"
          src="/headers/triangle.jpg"
          fill
          className="object-fit object-cover object-center      z-10 opacity-10  </>
"
        /> */}

      {/* <div className="absolute inset-x-0 bottom-0 ">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white "
            preserveAspectRatio="none"
          >
            <path
       
            d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div> */}
     
     
    </>
  );
};

export default Header;
