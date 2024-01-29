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
      {/* 
        <div className="relative bg-blue-500">
          <div className="absolute inset-x-0 bottom-0">
            <svg
              viewBox="0 0 224 12"
              fill="currentColor"
              className="w-full -mb-1 text-white"
              preserveAspectRatio="none"
            >
              <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
            </svg>
          </div>
          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
              <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
                <br className="hidden md:block" />

                <span className="relative inline-block px-2">
                  <div className="absolute inset-0 transform -skew-x-12 bg-teal" />
                  <span className="relative text-black">lazy dog</span>
                </span>
              </h2>
              <p className="mb-6 text-base text-indigo-100 md:text-lg">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae. explicabo. Sed ut perspiciatis unde omnis.
              </p>
              <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
                <input
                  placeholder="Email"
                  required
                  type="text"
                  className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
                />
                <a
                  href="/"
                  className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
                >
                  Subscribe
                </a>
              </form>
              <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque.
              </p>
              <a
                href="/"
                aria-label="Scroll down"
                className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="currentColor"
                >
                  <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
                </svg>
              </a>
            </div>
          </div>
        </div> */}
      {/* </div> */}

      {/* header  */}
      {/* <div className="relative bg-deep-purple-accent-400">
        <div className="absolute inset-x-0 bottom-0">
          <svg
            viewBox="0 0 224 12"
            fill="currentColor"
            className="w-full -mb-1 text-white"
            preserveAspectRatio="none"
          >
            <path d="M0,0 C48.8902582,6.27314026 86.2235915,9.40971039 112,9.40971039 C137.776408,9.40971039 175.109742,6.27314026 224,0 L224,12.0441132 L0,12.0441132 L0,0 Z" />
          </svg>
        </div>
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="relative max-w-2xl sm:mx-auto sm:max-w-xl md:max-w-2xl sm:text-center">
            <h2 className="mb-6 font-sans text-3xl font-bold tracking-tight text-white sm:text-4xl sm:leading-none">
              The quick, brown fox
              <br className="hidden md:block" />
              jumps over a{" "}
              <span className="relative inline-block px-2">
                <div className="absolute inset-0 transform -skew-x-12 bg-teal-accent-400" />
                <span className="relative text-teal-900">lazy dog</span>
              </span>
            </h2>
            <p className="mb-6 text-base text-indigo-100 md:text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae. explicabo. Sed ut perspiciatis unde omnis.
            </p>
            <form className="flex flex-col items-center w-full mb-4 md:flex-row md:px-16">
              <input
                placeholder="Email"
                required
                type="text"
                className="flex-grow w-full h-12 px-4 mb-3 text-white transition duration-200 border-2 border-transparent rounded appearance-none md:mr-2 md:mb-0 bg-deep-purple-900 focus:border-teal-accent-700 focus:outline-none focus:shadow-outline"
              />
              <a
                href="/"
                className="inline-flex items-center justify-center w-full h-12 px-6 font-semibold tracking-wide text-teal-900 transition duration-200 rounded shadow-md md:w-auto hover:text-deep-purple-900 bg-teal-accent-400 hover:bg-teal-accent-700 focus:shadow-outline focus:outline-none"
              >
                Subscribe
              </a>
            </form>
            <p className="max-w-md mb-10 text-xs tracking-wide text-indigo-100 sm:text-sm sm:mx-auto md:mb-16">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque.
            </p>
            <a
              href="/"
              aria-label="Scroll down"
              className="flex items-center justify-center w-10 h-10 mx-auto text-white duration-300 transform border border-gray-400 rounded-full hover:text-teal-accent-400 hover:border-teal-accent-400 hover:shadow hover:scale-110"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="12"
                height="12"
                viewBox="0 0 12 12"
                fill="currentColor"
              >
                <path d="M10.293,3.293,6,7.586,1.707,3.293A1,1,0,0,0,.293,4.707l5,5a1,1,0,0,0,1.414,0l5-5a1,1,0,1,0-1.414-1.414Z" />
              </svg>
            </a>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Header;
