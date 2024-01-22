"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import Image from "next/image";
import styles from "./navbar.module.css";

const Navnew = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const [navbarOpen, setNavbarOpen] = React.useState(false);

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* <div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </div>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
      <li><a>Item 1</a></li>
      <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    */}

      <nav className="p-4">
        <div className="w-11/12   mx-auto flex justify-between items-center">

          {/* <div className="text-white text-xl font-bold">Your Logo</div> */}

          <Link 
          href="/"
          // onClick={() => setIsOpen(isOpen === false)}

          >
            <Image
              src="/whitelogo.png"
              width={200}
              height={100}
              alt="ePD Logo"
              // className={styles.logo}
            />
          </Link>

          <div className="hidden md:flex flex-grow justify-center space-x-4">
            <Link href="/about" className={styles.linkWithBar}>
              About
            </Link>
            <Link href="/services" className={styles.linkWithBar}>
              Services
            </Link>
            <Link href="/references" className={styles.linkWithBar}>
              References
            </Link>
          </div>

          <button className="hidden md:block bg-blue-500 text-white px-4 py-2 rounded">
            Contact
          </button>

          {/* <button
            type="button"
            className={` hidden md:block py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 sm:md:mr-2`}
          >
            Contact
          </button> */}

          <div className="md:hidden flex items-center space-x-4">
            <button className="md:hidden bg-blue-500 text-white px-4 py-2 rounded">
              Contact
            </button>

            {/* <button
              type="button"
              className={`py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 sm:md:mr-2`}
            >
              Contact
            </button> */}
            {/* <button onClick={toggleMenu} className="text-white">
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                ></path>
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            )}
          </button>  */}

            {/* {isMenuOpen && (
              <div className="md:hidden fixed top-20 left-0 w-full h-full bg-gray-800 bg-opacity-75 flex items-center justify-center">
                <div className="text-white text-xl font-bold"></div>
                <div className="text-white text-xl font-bold">
                  <Link href="/about" className={styles.linkWithBar}>
                    About
                  </Link>
                  <Link href="/services" className={styles.linkWithBar}>
                    Services
                  </Link>
                  <Link href="/references" className={styles.linkWithBar}>
                    References
                  </Link>
                </div>
              </div>
            )} */}

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
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link
                  href="/about"
                  className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-center font-medium"
                  // className={styles.linkWithBar}
                  onClick={() => setIsOpen(!isOpen)}

                >
                  About
                </Link>

                <Link href="/services"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-center font-medium"
                // className={styles.linkWithBar}
                onClick={() => setIsOpen(!isOpen)}

                >
                  Services
                </Link>

                <Link href="/references"
                className="hover:bg-gray-700 text-white block px-3 py-2 rounded-md text-center font-medium"
                onClick={() => setIsOpen(!isOpen)}
                >
                  References
                </Link>

              </div>
            </div>
          )}
        </Transition>
      </nav>

      
    </>
  );
};

export default Navnew;
