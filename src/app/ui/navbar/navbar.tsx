"use client";
// import React from 'react'
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {
  const [menuDisplay, setMenuDisplay] = useState(false);

  function showMobileMenu() {
    setMenuDisplay((prev) => !prev);
  }


  

  


  console.log(menuDisplay);
  return (
    <div className={styles.navbgContainer}>
    <div className={styles.navContainer}>
      <Link href="/" className={styles.logo}>
        <Image
          src="/whitelogo.png"
          width={200}
          height={100}
          alt="ePD Logo"
          className={styles.logo}
        />
      </Link>
      <nav className={styles.navBar}>
        {/* <nav style={{display:"block"}} className={menuDisplay ? ["styles.navBar", "styles.active"] : styles.navBar}> */}
        {/* <nav className={styles.navBar}> */}

        <ul className={styles.nav__ul}>
          <li className={styles.nav__li}>
            <Link href="/about" className={styles.linkWithBar}>
              About
            </Link>
            {/* <a href="#" class="link-with-bar">About</a> */}
          </li>

          <li className={styles.nav__li}>
            <Link href="/services" className={styles.linkWithBar}>
              Services
            </Link>
            {/* <a href="#" class="link-with-bar">About</a> */}
          </li>

          <li className={styles.nav__li}>
            <Link href="/references" className={styles.linkWithBar}>
              References
            </Link>
            {/* <a href="#" class="link-with-bar">About</a> */}
          </li>

          <li className={styles.nav__liCtcbtn}>
            <button>Contact</button>
          </li>
        </ul>
      </nav>

      {/* mobile nav bar  */}

      <ul
        className={`${styles.mobileNav} ${menuDisplay ? styles.active : ""}`}
        onClick={showMobileMenu}
      >
        <div className={styles.mobileLinkContainer}>
          <li className={`${styles.nav__li}`}>
            <Link href="#" className={styles.linkWithBar}>
              About
            </Link>
          </li>

          <li className={styles.nav__li}>
            <Link href="#" className={styles.linkWithBar}>
              Services
            </Link>
          </li>

          <li className>
            <Link href="#" className={styles.linkWithBar}>
              References
            </Link>
          </li>





          {/* <li>TEST</li> */}

          <li className={styles.nav__liCtcbtn}>
            {/* <button>Contact</button> */}
          </li>
        </div>
      </ul>

      <button
        type="button"
        // style={{marginRight:"2em"}}
        className={` ${styles.navBtn} py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 sm:md:mr-2`}
      >
        Contact
      </button>

      {/* <button className={styles.dsktopbtn}>Contact</button> */}

      <div className={styles.nav__toggle} onClick={showMobileMenu}>
        <GiHamburgerMenu />
      </div>

      {/* <Image
       src="/whitelogo.png"
       width={300}
       height={300}
       alt="ePD Logo"
       className="rounded-full w-96 h-96"
     /> */}
    </div>
    </div>
  );
};

export default Navbar;
