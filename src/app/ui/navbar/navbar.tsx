'use client'
// import React from 'react'
import styles from "./navbar.module.css";
import Link from "next/link";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";

const Navbar = () => {

  const [menuDisplay, setMenuDisplay] = useState(false)

  function showMobileMenu(){
    setMenuDisplay((prev) => !prev);
  }

  console.log(menuDisplay)
  return (
    <div className={styles.navContainer}>
      <Link href="#"
      className={styles.logo}
      >
        <Image
          src="/whitelogo.png"
          width={200}
          height={100}
          alt="ePD Logo"
          className={styles.logo}
        />
      </Link>
      <nav className={styles.navBar} >

      {/* <nav style={{display:"block"}} className={menuDisplay ? ["styles.navBar", "styles.active"] : styles.navBar}> */}
      {/* <nav className={styles.navBar}> */}

        <ul className={styles.nav__ul}>
          <li className={styles.nav__li}>
            <Link href="#" className={styles.linkWithBar}>
              About
            </Link>
            {/* <a href="#" class="link-with-bar">About</a> */}
          </li>

          <li className={styles.nav__li}>
            <Link href="#" className={styles.linkWithBar}>
              Services
            </Link>
            {/* <a href="#" class="link-with-bar">About</a> */}
          </li>

          <li className={styles.nav__li}>
            <Link href="#" className={styles.linkWithBar}>
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

       
          <li className={styles.nav__li}>
            <Link href="#" className={styles.linkWithBar}>
              About
            </Link>
          </li>

          <li className={styles.nav__li}>
            <Link href="#" className={styles.linkWithBar}>
              Services
            </Link>
          </li>

          <li className={styles.nav__li}>
            <Link href="#" className={styles.linkWithBar}>
              References
            </Link>
          </li>

          <li className={styles.nav__liCtcbtn}>
            <button>Contact</button>
          </li>
          </div>
        </ul>
     


      <button className={styles.dsktopbtn}>Contact</button>

     
           <div className={styles.nav__toggle} onClick={showMobileMenu}>
           <GiHamburgerMenu/>
        </div>

        {/* <Image
       src="/whitelogo.png"
       width={300}
       height={300}
       alt="ePD Logo"
       className="rounded-full w-96 h-96"
     /> */}
    
    </div>
  );
};

export default Navbar;
