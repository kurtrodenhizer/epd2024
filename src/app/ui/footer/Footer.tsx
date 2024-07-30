import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <div 
      className="border-t bg-white"
      >
        <div className="mx-auto w-11/12 px-4 pt-10">
          <div className="mb-8 flex flex-col items-center justify-between space-y-7 text-gray-700 lg:flex-row lg:space-y-0">
            <Link href="/" aria-label="Go home" title="eProcess logo">
              <Image
                src="/logos/epdLogos/bluelogocs3.png"
                width={200}
                height={100}
                alt="ePD Logo"
              />
            </Link>

            <div className=" xl:space-x-66 flex  flex-col  text-center text-xl lg:flex-row lg:space-x-32  lg:space-y-0 lg:text-left lg:text-xs 2xl:space-x-72 ">
              <div className=" mt-0 hidden  flex-col content-center   items-center justify-center space-y-5 lg:block  ">
                <p className="text-base font-bold tracking-wide  ">
                  Explore
                </p>
                <Link
                  href="/about"
                  className={` block transition-colors duration-300  hover:text-teal `}
                >
                  About
                </Link>
                <Link
                  href="/services"
                  className={` block transition-colors duration-300  hover:text-teal `}
                >
                  Services
                </Link>

                <Link
                  href="/references"
                  className={`block transition-colors duration-300  hover:text-teal`}
                >
                  References
                </Link>
              </div>

              <div className="mt-0 hidden  flex-col   items-center justify-center space-y-5 lg:block  ">
                <p className="text-base font-bold tracking-wide ">
                  Company
                </p>
                <Link
                  href="/contact"
                  className={` block  transition-colors duration-300  hover:text-teal`}
                >
                  Contact
                </Link>
                <Link
                  href="/privacy"
                  className={` block transition-colors duration-300  hover:text-teal  `}
                >
                  Privacy
                </Link>
              </div>

              <div className="mt-0 flex-col  content-center items-center justify-center space-y-7 lg:space-y-5  ">
                <p className="text-xl font-bold tracking-wide   lg:text-base">
                  Kurt Rodenhizer
                </p>
                <div className="flex justify-center lg:justify-start">
                  <p className="mr-1 text-gray-800">Phone:</p>
                  <Link
                    href="tel:781-910-2898"
                    aria-label="Our phone"
                    title="Our phone"
                    className="transition-colors duration-300  hover:text-teal"
                  >
                    1-781-910-2898
                  </Link>
                </div>
                <div className="flex flex-wrap justify-center lg:justify-start">
                  <p className="mr-1 text-gray-800">Email:</p>

                  <Link
                    href="mailto:info@lorem.mail"
                    aria-label="Our email"
                    title="Our email"
                    className="text-deep-purple-accent-400 transition-colors duration-300 hover:text-teal"
                  >
                    kurt@eprocessdevelopment.com
                  </Link>
                </div>
                <div>
                  <div className="flex justify-center lg:justify-start">
                    <p className="mr-1 text-gray-800">Location:</p>
                    <p className="mr-1 text-gray-800 transition-colors duration-300 hover:text-teal">
                      Beverly, MA 01915
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center border-t pb-5 pt-5 sm:flex-row sm:justify-between">
            <p className="text-sm text-gray-600">
              © Copyright 2024. All rights reserved.
            </p>
            <div className="mt-4 flex items-center justify-center  space-x-4 sm:mt-0">
              <Link
                href="https://www.facebook.com/eprocessdevelopment/"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-teal"
                aria-label="Facebook Link"
              >
                <FaSquareFacebook />
              </Link>

              <Link
                href="https://www.linkedin.com/company/eprocess-development"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-teal"
                aria-label="LinkedIn Link"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://x.com/krodenhizer?s=20"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-teal"
                aria-label="Twitter Link"
              >
                <FaXTwitter />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
