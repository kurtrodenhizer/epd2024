"use client";
import { useState } from "react";
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

          <div className="space-between   mr-7 hidden flex-grow justify-center  space-x-4  text-sm md:flex ">
            <Link
              href="/about"
              className={` relative transition-all duration-200 ${
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
          
            relative transition-all duration-200
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
          
            relative transition-all duration-200
            ${
              pathname === "/references"
                ? "text-teal   after:absolute after:bottom-[-3px] after:left-0 after:h-[2px] after:w-full after:bg-teal after:transition-all after:duration-200"
                : styles.linkWithBar
            }`}
            >
              References
            </Link>
          </div>
          <Link href="/contact">
            <button
              aria-label="Contact"
              type="button"
              className=" text-md hidden flex-grow justify-center rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500 focus:border-blue-500  focus:font-semibold focus:outline-none focus:ring md:flex "
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
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="space-y-1 px-2 pb-3 pt-2 sm:px-3">
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
                >
                  <button
                    type="button"
                    className=" text-md mx-auto rounded-full bg-blue-600 px-6 py-1.5 font-medium text-white hover:bg-blue-500  focus:border-blue-500 focus:font-semibold focus:outline-none focus:ring "
                    aria-label="Contact"
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
