import React from "react";
import Image from "next/image";

const ServicesPage = () => {
  return (
    <>
      <section className="px-4 py-24 mx-auto lg:max-w-7xl  ">
        {/* FARIS */}
        <div className="grid items-center place-content-center mx-auto grid-cols-1 mb-24 lg:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          {/* text */}
          <div className="flex flex-col place-items-center text-center lg:text-left">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-black md:leading-tight md:text-4xl">
              FARIS - File Asset Resource Intelligence System
            </h2>
            <p className="mb-5 text-base text-gray-600  md:text-lg">
              FARIS allows users to find, select, and organize slides from
              approved master sets. Features include:
            </p>
            <div className="flex flex-col lg:ml-10 text-left">
              <div className="flex w-100 justify-content  ">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  Easy location of slides from master sets
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  Prevents modification of approved content
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  Syncs master slides from the server to the user
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  Allows for presentation sharing
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  Less wasted time creating unnecessary presentations
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  Manages video and animation files
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  Cross platform compatibility for PCs, Macs and mobile devices
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">
                  Ability to monitor user activity
                </p>
              </div>
              <div className="flex items-start">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">Security system</p>
              </div>
              <div className="flex items-start">
                <svg
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
                >
                  <path
                    fill-rule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <p className="text-gray-700">Runs when offline</p>
              </div>
            </div>
          </div>

          <div className="aspect-video ">
            <iframe
              className=" h-full w-full rounded-lg"
              src="https://www.youtube.com/embed/GQllIAJ3aRw?si=5AQL-2TlmGTlvkC4"
              width="100%"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
            ></iframe>
          </div>
        </div>

        {/* Report Generation */}
        <div className="grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Report Generation
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              eProcess Development manages your marketing and website efforts
              and our reporting ensures your KPIs are being met over time. By
              overseeing your campaign performance we can make optimizations as
              needed to get you the best results possible.
            </p>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">Google Analytics data</p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">Google AdWords data</p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Social media engagement and analytics
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">lead generation</p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">SEO performance</p>
            </div>
          </div>

          <Image
              alt="Report Generation"
              src="/services/report-generation.jpg"
              width={600}
              height={600}
              className="mx-auto"
            />

          {/* <div className="w-full h-full py-48 bg-gray-200">
            <Image
              alt="Report Generation"
              src="/services/report-generation.jpg"
              width={600}
              height={600}
            />
          </div> */}
        </div>

        {/* grid flex-col-reverse items-center grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24 */}
        {/* Data Management  */}
        <div className="grid items-center grid-cols-1 mt-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              Data Management
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              eProcess Development validates, stores, and protects your
              company's most valuable information making it easily accessible
              and readily available for users.
            </p>
            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Easy location of slides from master sets
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Oversee the flow of information from initial setup throughout
                its entire lifecycle
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Oversee the flow of information from initial setup throughout
                its entire lifecycle
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Pivot tables for report generation
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Enterprise software management
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">Product management</p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">Clinical site management</p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">Visitor management</p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Price quotation management
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">E-mail contact management</p>
            </div>
          </div>

          <Image
              alt="Data Management"
              src="/services/data-management.gif"
              width={600}
              height={600}
              className="mx-auto"

            />


          {/* <div className="w-full h-full py-48 bg-gray-200 bg-orange relative">
         
          </div> */}
        </div>

        {/* File Management   */}
        <div className="grid flex-col-reverse items-center mt-24 grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div className="order-none md:order-2">
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              File Management
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              eProcess Development structures your very important files
              efficiently to allow for quick and easy access to your most
              important documents.
            </p>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">Numerous report options</p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Databases that allow for easy record location
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Social media engagement and analytics
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Folder, document, and media management of directories and
                subdirectories
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">File protection</p>
            </div>
          </div>

          <Image
              alt="File Management"
              src="/services/file-management.jpg"
              width={600}
              height={600}
              className="mx-auto"
            />


          
        </div>

        {/*  eLearning */}
        <div className="grid items-center grid-cols-1 mt-24 md:grid-cols-2 gap-y-10 md:gap-y-32 gap-x-10 md:gap-x-24">
          <div>
            <h2 className="mb-4 text-2xl font-extrabold tracking-tight text-center text-black md:leading-tight sm:text-left md:text-4xl">
              eLearning
            </h2>
            <p className="mb-5 text-base text-center text-gray-600 sm:text-left md:text-lg">
              Through the use of state-of-the-art technology eProcess
              Development partners with your business to provide updated
              material and offers flexible learning schedules for your
              employees.
            </p>
            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Uses 3D animations and device simulations to maximize the
                learning experience with interactive design
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Allows employers and users alike to track course progress
              </p>
            </div>

            <div className="flex items-start">
              <svg
                viewBox="0 0 20 20"
                fill="currentColor"
                className="flex-none w-5 h-5 mt-1 mr-2 text-primary"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                ></path>
              </svg>
              <p className="text-gray-700">
                Reduces need to purchase and ship demo equipment
              </p>
            </div>
          </div>

          <Image
              alt="elarning"
              src="/services/eLearning.jpg"
              width={700}
              height={700}
              className="mx-auto"
            />

          
        </div>
      </section>
    </>
  );
};

export default ServicesPage;
