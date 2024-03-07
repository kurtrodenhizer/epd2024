"use client";
import React from "react";
import { usePathname } from "next/navigation";

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
    {
      page: "contact",
      title: "Contact",
      paragraph: "Here's what our clients had to say:",
      link: "/contact",
    },
  ];

  const content = headerData
    .filter((section) => section.link === pathname)
    .map((section, index) => (
      <>
        <div
          className={`
            ${section.page === "references" && "bg-gray-900"}
            ${section.page === "about" && "bg-gray-100"}

      w-full  relative py-2`}
        >
          <div className="flex flex-col place-items-center h-full pt-6 justify-start text-center  w-full z-20 mx-auto  sm:mx-auto sm:max-w-lg md:max-w-2xl">
            <h1
              key={index}
              className={`${section.page === "references" && "text-white"}
               text-4xl font-bold mb-3 text-gray-600`}
            >
              {section.title}
            </h1>
            <p className="text-gray-500 px-2 md:px-0">{section.paragraph}</p>
            <div className={`text-center `}>
              <span
                className={`inline-block w-40 h-[2.5px] rounded-full bg-teal`}
              ></span>
            </div>
          </div>
        </div>
      </>
    ));

  return <>{content}</>;
};

export default Header;
