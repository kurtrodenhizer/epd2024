"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import styles from "./navbar.module.css";

import React from "react";
import { usePathname } from "next/navigation";

import { useScrollPosition } from "@/app/hooks/hooks";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  // useEffect(() => {
  //   const animatedNavbar = document.getElementById("animated-navbar");

  //   const handleScroll = () => {
  //     // If window.scrollY > 0 (that means the user has scrolled down) we add className .bg-white to the navbar
  //     if (window.scrollY > 0) {
  //       animatedNavbar.classList.add("bg-white");
  //     } else {
  //       // If window.scrollY = 0 (that means the navbar is at the top of the page) we remove className .bg-white from the navbar
  //       animatedNavbar.classList.remove("bg-white");
  //     }
  //   };

  //   // Add scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Cleanup the event listener on component unmount
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  function classNames(...classes: string[]): string {
    return classes.filter(Boolean).join(" ");
  }

  const scrollPosition = useScrollPosition();
  const pathname = usePathname();

  return (
    <>
      <nav
        // id="animated-navbar"
        // className="z-10 fixed top-0 flex-no-wrap flex w-full items-center justify-between py-2 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"

        // className="p-4 sticky top-0 w-full shadow-md "
        className={classNames(
          scrollPosition > 0 ||
            pathname === "/about" ||
            pathname === "/services" ||
            pathname == "/references" ||
            pathname == "/contact" ||
            pathname == "/privacy"
            ? "shadow bg-white "
            : "shadow-none  text-white",

          "sticky top-0 z-50 transition-shadow transition-text w-full py-4"
          // "sticky top-0 z-20 transition-shadow transition-text w-full px-4 py-3"
        )}
      >
        {/* <div className=" w-11/12  sticky  mx-auto flex justify-around items-center"> */}
        <div className="  px-6 sticky  mx-auto flex justify-between items-center">

          {/* <div className="w-full  sticky   flex justify-around items-center"> */}

          <Link
            href="/"
            // onClick={() => setIsOpen(isOpen === false)}
          >
            <Image
              // src="/whitelogo.png"
              // src="/bluelogo.png"
              // scrollPosition > 0 || pathname === "/about" || pathname === "/services" || pathname == "/references" ? "shadow bg-white " : "shadow-none  text-white",

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
              // width={scrollPosition > 0 ? 150 : 200}
              width={175}
              height={200}
              // height={scrollPosition > 0 ? 150 : 200}
              alt="ePD Logo"
            />
          </Link>

          <div className="hidden   space-between md:flex flex-grow justify-center  text-sm  space-x-4 mr-7 ">
            {/* <div className="  flex flex-col text-center md:flex-row md:space-x-4 md:flex-grow justify-center text-gray-500 text-sm ml-5"> */}

            <Link
              href="/about"
              className={` duration-200 transition-all relative ${
                pathname === "/about"
                  ? "text-teal   after:bottom-[-3px] after:left-0 after:absolute after:w-full after:h-[2px] after:bg-teal after:transition-all after:duration-200"
                  : styles.linkWithBar
              }`}
            >
              About
            </Link>
            <Link
              href="/services"
              className={`
          
            duration-200 transition-all relative
            ${
              pathname === "/services"
                ? "text-teal   after:bottom-[-3px] after:left-0 after:absolute after:w-full after:h-[2px] after:bg-teal after:transition-all after:duration-200"
                : styles.linkWithBar
            }`}
            >
              Services
            </Link>
            <Link
              href="/references"
              className={`
          
            duration-200 transition-all relative
            ${
              pathname === "/references"
                ? "text-teal   after:bottom-[-3px] after:left-0 after:absolute after:w-full after:h-[2px] after:bg-teal after:transition-all after:duration-200"
                : styles.linkWithBar
            }`}
            >
              References
            </Link>
          </div>
          <Link href="/contact">
       

            <button
              type="button"
              className=" hidden md:flex flex-grow justify-center px-6 py-1.5 text-md font-medium text-white focus:outline-none bg-blue-600 rounded-full  hover:bg-blue-500 focus:font-semibold focus:border-blue-500 focus:ring "
            >
              Contact
            </button>
          </Link>

          <div className="md:hidden flex items-center space-x-4">
            {/* <Link href="/contact">
        
              <button
                type="button"
                className=" px-4 py-1.5 text-md font-medium text-white focus:outline-none bg-blue-600 rounded-full   hover:bg-blue-500 focus:font-semibold focus:border-blue-500 focus:ring "
              >
                Contact
              </button>
            </Link> */}

            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-900 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
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
          {(ref) => (
            <div
              className="md:hidden"
              id="mobile-menu"
              // className={classNames(
              //   scrollPosition > 0 ? "shadow bg-white " : "shadow-none  text-white",
              //   "sticky top-0 z-20 transition-shadow transition-text w-full p-4"
              // )}
            >
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/about"
                  className="hover:bg-gray-700 hover:text-white focus:text-teal block px-3 py-2 rounded-md text-center font-medium"
                  // className={styles.linkWithBar}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  About
                </Link>

                <Link
                  href="/services"
                  className="hover:bg-gray-700 hover:text-white focus:text-teal block px-3 py-2 rounded-md text-center font-medium"
                  // className={styles.linkWithBar}
                  onClick={() => setIsOpen(!isOpen)}
                >
                  Services
                </Link>

                <Link
                  href="/references"
                  className="hover:bg-gray-700 hover:text-white focus:text-teal  block px-3 py-2 rounded-md text-center font-medium"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  References
                </Link>

                <Link 
                href="/contact" 
                className="mx-auto block flex"
                onClick={() => setIsOpen(!isOpen)}

                >
                  {/* <button className="md:hidden bg-blue-500 text-white px-4 py-2 rounded">
              Contact
            </button> */}
                  <button
                    type="button"
                    className=" px-6 py-1.5 text-md font-medium text-white focus:outline-none bg-blue-600 rounded-full mx-auto  hover:bg-blue-500 focus:font-semibold focus:border-blue-500 focus:ring "
                  >
                    Contact
                  </button>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </>
  );
};

export default Navigation;
