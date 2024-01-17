"use client";
import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <div className={styles.footer__background}>
        <div className={`${styles.footer__allcontent} ${styles.width}`}>
          <div className={styles.footer__container}>
            <div className={`${styles.footer__column} ${styles.footer__logo}`}>
              <Link href="#">
                <Image
                  src="/whitelogo.png"
                  width={200}
                  height={100}
                  alt="ePD Logo"
                  className={styles.logo}
                />
              </Link>
            </div>
            <div className={`${styles.footer__column} ${styles.links}`}>
              <ul className={styles.footer__links}>
                <li className={styles.nav_li}>
                  <Link className={styles["bottom-with-bar"]} href="#">
                    About
                  </Link>
                </li>
                <li className={styles.nav_li}>
                  <Link className={styles["bottom-with-bar"]} href="#">
                    Services
                  </Link>
                </li>
                <li className={styles.nav_li}>
                  <Link className={styles["bottom-with-bar"]} href="#">
                    References
                  </Link>
                </li>
              </ul>
            </div>
            <div
              className={`${styles.footer__column} ${styles.footer__contact2}`}
            >
              <div className={styles.footer__contact}>Kurt Rodenhizer</div>
              <div className={styles.footer__text}>Beverly, MA 01915</div>
              <br />
              <div className={styles.footer__contact}>PHONE</div>
              <Link href="tel:7189102898">
                <div className={styles.footer__text}>(781)910-2898</div>
              </Link>
              <br />
              <div className={styles.footer__contact}>EMAIL</div>
              <Link href="mailto:kurt@eprocessdevelopment.com">
                <div className={styles.footer__text}>
                  kurt@eprocessdevelopment.com
                </div>
              </Link>
              <br />
              <div className={styles.footer__contact}>SOCIAL</div>
              <div className={styles.footer__social}>
                <Link href="https://www.facebook.com/" target="_blank">
                  <FaFacebookF />
                  {/* <i className="fab fa-facebook"></i> */}
                </Link>
                <Link href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedinIn />
                  <i className="fab fa-linkedin-in"></i>
                </Link>
                <Link href="https://twitter.com/" target="_blank">
                  <BsTwitterX />
                  {/* <i className="fab fa-twitter"></i> */}
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* copyright section */}
        <div className={styles.copyright}>
          <i id="cr" className="fa-regular fa-copyright"></i>
          <p>2022 by eProcess Development</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
