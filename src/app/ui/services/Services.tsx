import React from "react";

import { FaChartBar } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";
import { FaGraduationCap } from "react-icons/fa";
import Link from "next/link";

const Services = () => {
  return (
    <>
      <section className="bg-gray-900 text-white lg:py-10">
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
          <div className="mx-auto max-w-lg text-center">
            <h2 className="text-3xl font-bold sm:text-4xl">Services</h2>

            <p className="mt-4 text-gray-300">
              Our team has the expertise and experience to create custom
              solutions that help our clients succeed in today&apos;s digital
              world
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal hover:border-opacity-10 hover:shadow-teal/10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 text-teal"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h2 className="mt-4 text-xl font-bold text-white">FARIS</h2>

              <p className="mt-1 text-sm text-gray-300">
                FARIS (File Asset Resource Intelligence System) allows users to
                find, select and organize slides from approved master sets.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal hover:border-opacity-10 hover:shadow-teal/10">
              <FaChartBar className="h-10 w-10 text-teal" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Report Generation
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                ePD converts data from spreadsheets into data-rich reports. We
                specialize in pivot table development.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal hover:border-opacity-10 hover:shadow-teal/10">
              <FaDatabase className="h-10 w-10 text-teal" />

              <h2 className="mt-4 text-xl font-bold text-white">
                Data Management
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                ePD validates, stores, and protects your company&apos;s most
                valuable information, making it easily accessible and readily
                available for users.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal hover:border-opacity-10 hover:shadow-teal/10">
              <FaFolderOpen className="h-10 w-10 text-teal" />

              <h2 className="mt-4 text-xl font-bold text-white">
                File Management
              </h2>

              <p className="mt-1 text-sm text-gray-300">
                ePD has created several methods for managing and presenting
                files using Web-based directories.
              </p>
            </div>

            <div className="block rounded-xl border border-gray-800 p-8 shadow-xl transition hover:border-teal hover:border-opacity-10 hover:shadow-teal/10">
              <FaGraduationCap className="h-10 w-10 text-teal" />
              <h2 className="mt-4 text-xl font-bold text-white">eLearning</h2>

              <p className="mt-1 text-sm text-gray-300">
                ePD converts content to online systems and mobile devices. We
                specialize in animations and device simulations.
              </p>
            </div>

            <div className="block   flex  items-center justify-center p-8 transition hover:border-pink-500/10 hover:shadow-pink-500/10">
              {/* 
              <Link
                href="/services"
                className="inline-block rounded bg-teal px-12 py-3 text-sm font-medium text-white transition hover:bg-hoverteal focus:outline-none focus:ring focus:ring-yellow-400"
              >
                Learn More
              </Link> */}

              <Link href="/services">
                {/* <button className="text-md mb-2 me-2 mt-4 rounded-full  border border-teal bg-teal p-8 px-12 py-2.5 font-medium text-white hover:bg-hoverteal  focus:border-blue-500 focus:font-semibold focus:outline-none focus:ring ">
                  Learn More
                </button> */}

                <button
                  className="text-md hover:bg-hoverteal2    mb-2   mt-4 rounded-full bg-teal p-8 px-12 py-2.5  py-2.5 font-semibold text-gray-900 
                  focus:bg-[#ffffff]
                  focus:outline-none
              "
                  aria-label="Link to Services Page"
                >
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
