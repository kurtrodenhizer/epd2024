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
        // "ePd was founded on the basis of modernizing business practices",
        "Empowering your business with bespoke digital solutions",
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
      <div
        key={index}
        className={`
            ${section.page === "references" && "bg-gray-900"}
            ${section.page === "about" && "bg-gray-100"}

      relative  w-full py-2`}
      >
        <div className="z-20 mx-auto flex h-full w-full flex-col place-items-center  justify-start pt-6 text-center  sm:mx-auto sm:max-w-lg md:max-w-2xl">
          <h1
            className={`${section.page === "references" && "text-white"}
               mb-3 text-4xl font-bold text-gray-700`}
          >
            {section.title}
          </h1>
          <p className="px-2 text-gray-500 md:px-0">{section.paragraph}</p>
          <div className={`text-center `}>
            <span
              className={`inline-block h-[2.5px] w-40 rounded-full bg-teal`}
            ></span>
          </div>
        </div>
      </div>
    ));

  return <>{content}</>;
};

export default Header;
