import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";
import Link from "next/link";
import styles2 from "../navbar/navbar.module.css";
import { FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareFacebook } from "react-icons/fa6";

const FooterNew = () => {
  return (
    <>
      <div className="border-t mt-auto bg-white">
        <div
          className="
 px-4 pt-10 w-full mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-8 lg:px-8   "
        >
          <div className="md:flex-row flex items-center mb-8 flex-col space-y-7 md:space-y-0">
            <Link
              href="/"
              aria-label="Go home"
              title="eProcess logo"
              className=""
            >
              <Image
                src="/bluelogocs3.png"
                width={200}
                height={100}
                alt="ePD Logo"
                // className={styles.logo}
              />
            </Link>

            {/* <div className=" md:flex  md:flex-grow justify-center text-sm space-x-4 "> */}
            <div className=" flex flex-col text-center md:flex-row md:space-x-4 md:flex-grow justify-center text-sm">
              <Link href="/about" className={`${styles2.linkWithBar} block `}>
                About
              </Link>
              <Link
                href="/services"
                className={`${styles2.linkWithBar} block  `}
              >
                Services
              </Link>
              <Link
                href="/references"
                className={`${styles2.linkWithBar} block `}
              >
                References
              </Link>
            </div>

            <div className="space-y-2 text-sm text-center flex-col justify-center content-center items-center mt-0 ">
              <p className="text-base font-bold tracking-wide text-gray-900">
                Kurt Rodenhizer
              </p>
              <div className="flex md:justify-start justify-center">
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
              <div className="flex md:justify-start justify-center">
                <p className="mr-1 text-gray-800">Email:</p>

                <Link
                  href="mailto:info@lorem.mail"
                  aria-label="Our email"
                  title="Our email"
                  className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-teal"
                >
                  kurt@eprocessdevelopment.com
                </Link>
              </div>
              <div>
                <div className="flex md:justify-start justify-center">
                  <p className="mr-1 text-gray-800">Location:</p>
                  <p className="mr-1 text-gray-800 transition-colors duration-300 hover:text-teal">
                    Beverly, MA 01915
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-center sm:justify-between pt-5 pb-5 border-t flex-col sm:flex-row">
            <p className="text-sm text-gray-600">
              © Copyright 2024. All rights reserved.
            </p>
            <div className="flex justify-center items-center mt-4  space-x-4 sm:mt-0">
              <Link
                href="https://www.facebook.com/eprocessdevelopment/"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-teal"
              >
                <FaSquareFacebook />
              </Link>

              <Link
                href="https://www.linkedin.com/company/eprocess-development"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-teal"
              >
                <FaLinkedinIn />
              </Link>

              <Link
                href="https://x.com/krodenhizer?s=20"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-teal"
              >
                <FaXTwitter />
              </Link>

              <Link
                href="https://x.com/krodenhizer?s=20"
                target="_blank"
                className="text-gray-500 transition-colors duration-300 hover:text-teal"
              ></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FooterNew;
