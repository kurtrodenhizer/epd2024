"use client";
import { useState, useRef } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import styles from "./navbar.module.css";

import React from "react";
import { usePathname } from "next/navigation";

import { useScrollPosition } from "@/app/hooks/hooks";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  const pathname = usePathname();

  const divRef = useRef();

  return (
    <>
      <nav
        className={classNames(
          scrollPosition > 0 ||
            pathname === "/about" ||
            pathname === "/services" ||
            pathname == "/references" ||
            pathname == "/contact" ||
            pathname == "/privacy"
            ? "bg-white shadow "
            : "text-white  shadow-none",

          "transition-text sticky top-0 z-50 w-full py-4 transition-shadow",
        )}
      >
        <div className=" sticky mx-auto flex  items-center justify-between px-6 2xl:w-11/12">
          <div className="w-[200px]">
            <Link href="/">
              <Image
                src={
                  scrollPosition > 0 ||
                  pathname === "/about" ||
                  pathname === "/services" ||
                  pathname == "/references" ||
                  pathname == "/contact" ||
                  pathname == "/privacy"
                    ? "/bluelogocs3.png"
                    : "/whitelogocs3.png"
                }
                width={175}
                height={200}
                alt="ePD Logo"
              />
            </Link>
          </div>
          <div
            className="space-between   hidden flex-grow justify-center    space-x-6  text-sm md:flex "
            // className=" mr-[43px]    hidden  w-[200px] justify-center space-x-6 text-center text-sm  md:flex lg:space-x-8  "
            // className="   flex justify-center  hidden  space-x-4 lg:space-x-8  mr-[28px]   text-sm  md:flex text-center  "

            // className="    hidden flex-grow justify-around   text-sm  md:flex lg:space-x-6 "
          >
            {/* <div 
            className=" hidden md:flex justify-between  text-sm  w-[200px] mr-[3rem] "
            > */}

            <Link
              href="/about"
              className={` relative  ml-[24px] transition-all duration-200  ${
                pathname === "/about"
                  ? "text-teal   after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:bg-teal after:transition-all after:duration-200"
                  : styles.linkWithBar
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`
          
            relative transition-all  duration-200
            ${
              pathname === "/services"
                ? "text-teal   after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:bg-teal after:transition-all after:duration-200"
                : styles.linkWithBar
            }`}
            >
              Services
            </Link>
            <Link
              href="/references"
              className={`
          
            relative  transition-all   duration-200
            ${
              pathname === "/references"
                ? "text-teal   after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:bg-teal after:transition-all after:duration-200"
                : styles.linkWithBar
            }`}
            >
              <p className=" ">References</p>
            </Link>

            {/* </div> */}

            {/* <Link href="/contact" aria-label="Contact Page">
            <button
              onClick={(e) => e.currentTarget.blur()}
              aria-label="Contact"
              type="button"
              // className="text-md mb-2 mt-4 rounded-full bg-blue-600  px-5   py-2.5 font-semibold  text-white  hover:bg-blue-900"
              // className="text-md mb-2 mt-4 rounded-full bg-blue-600  px-5   py-2.5 text-white  duration-300   hover:bg-blue-500 focus:font-semibold focus:font-semibold focus:ring focus:ring-blue-300 focus:ring-opacity-80  md:flex
              // "
              // className=" text-md   hidden flex-grow justify-center rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500 focus:border-blue-500 focus:font-semibold  focus:font-semibold  focus:ring-blue-300  focus:ring-opacity-80 md:flex "

              className=" text-md mx-auto hidden  rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500 focus:border-blue-500  focus:font-semibold focus:outline-none focus:ring md:flex "
              // className=" text-md mb-2 me-2 mt-4 self-center rounded-full border  border-blue-400 bg-blue-600 px-10 px-8 py-2.5 py-3 font-medium text-white hover:bg-blue-500  focus:border-blue-500 focus:font-semibold focus:outline-none focus:ring "
            >
              Contact
            </button>
          </Link> */}
          </div>

          <Link href="/contact" aria-label="Contact Page" className="w-[200px]">
            <button
              onClick={(e) => e.currentTarget.blur()}
              aria-label="Contact"
              type="button"
              // className="text-md mb-2 mt-4 rounded-full bg-blue-600  px-5   py-2.5 font-semibold  text-white  hover:bg-blue-900"
              // className="text-md mb-2 mt-4 rounded-full bg-blue-600  px-5   py-2.5 text-white  duration-300   hover:bg-blue-500 focus:font-semibold focus:font-semibold focus:ring focus:ring-blue-300 focus:ring-opacity-80  md:flex
              // "
              // className=" text-md   hidden flex-grow justify-center rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500 focus:border-blue-500 focus:font-semibold  focus:font-semibold  focus:ring-blue-300  focus:ring-opacity-80 md:flex "

              className=" text-md ml-auto hidden  rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500 focus:border-blue-500  focus:font-semibold focus:outline-none focus:ring md:flex "
              // className=" text-md mb-2 me-2 mt-4 self-center rounded-full border  border-blue-400 bg-blue-600 px-10 px-8 py-2.5 py-3 font-medium text-white hover:bg-blue-500  focus:border-blue-500 focus:font-semibold focus:outline-none focus:ring "
            >
              Contact
            </button>
          </Link>

          <div className="flex items-center space-x-4 md:hidden">
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="inline-flex items-center justify-center rounded-md bg-gray-900 p-2 text-gray-400 hover:bg-gray-800 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {/* {(divRef) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={divRef} className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
                <Link
                  href="/about"
                  className="block rounded-md px-3 py-2 text-center font-medium hover:bg-gray-700 hover:text-white focus:text-teal"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="block rounded-md px-3 py-2 text-center font-medium hover:bg-gray-700 hover:text-white focus:text-teal"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Services
                </Link>

                <Link
                  href="/references"
                  className="block rounded-md px-3  py-2 text-center font-medium hover:bg-gray-700 hover:text-white focus:text-teal"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  References
                </Link>

                <Link
                  href="/contact"
                  className="mx-auto block flex"
                  onClick={() => setIsOpen(!isOpen)}
                  aria-label="Contact Page"
                >
                  <button
                    type="button"
                    className=" text-md mx-auto rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500  focus:border-blue-500 focus:font-semibold focus:outline-none focus:ring "
                    // className=" text-md   hidden flex-grow justify-center rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500 focus:border-blue-500 focus:font-semibold  focus:font-semibold  focus:ring-blue-300  focus:ring-opacity-80 md:flex "
                    // aria-label="Contact Page"
                  >
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          )} */}

          <div className="md:hidden" id="mobile-menu">
            <div className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
              <Link
                href="/about"
                className="block rounded-md px-3 py-2 text-center font-medium hover:bg-gray-700 hover:text-white focus:text-teal"
                onClick={() => setIsOpen(!isOpen)}
              >
                About
              </Link>

              <Link
                href="/services"
                className="block rounded-md px-3 py-2 text-center font-medium hover:bg-gray-700 hover:text-white focus:text-teal"
                onClick={() => setIsOpen(!isOpen)}
              >
                Services
              </Link>

              <Link
                href="/references"
                className="block rounded-md px-3  py-2 text-center font-medium hover:bg-gray-700 hover:text-white focus:text-teal"
                onClick={() => setIsOpen(!isOpen)}
              >
                References
              </Link>

              <Link
                href="/contact"
                className="mx-auto block flex"
                onClick={() => setIsOpen(!isOpen)}
                aria-label="Contact Page"
              >
                <button
                  type="button"
                  className=" text-md mx-auto rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500  focus:border-blue-500 focus:font-semibold focus:outline-none focus:ring "
                  // className=" text-md   hidden flex-grow justify-center rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500 focus:border-blue-500 focus:font-semibold  focus:font-semibold  focus:ring-blue-300  focus:ring-opacity-80 md:flex "
                  // aria-label="Contact Page"
                >
                  Contact
                </button>
              </Link>
            </div>
          </div>
        </Transition>
      </nav>
    </>
  );
};

export default Navigation;
