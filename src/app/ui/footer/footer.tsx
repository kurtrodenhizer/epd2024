"use client";
import React from "react";
import styles from "./footer.module.css";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <div className={styles.footer__background}>
        <div className={`${styles.footer__allcontent} ${styles.width}`}>
          <div className={styles.footer__container}>
            <div className={`${styles.footer__column} ${styles.footer__logo}`}>
              <a href="#">
                <Image
                  src="/whitelogo.png"
                  width={200}
                  height={100}
                  alt="ePD Logo"
                  className={styles.logo}
                />
              </a>
            </div>
            <div className={`${styles.footer__column} ${styles.links}`}>
              <ul className={styles.footer__links}>
                <li className={styles.nav_li}>
                  <a className={styles["bottom-with-bar"]} href="#">
                    About
                  </a>
                </li>
                <li className={styles.nav_li}>
                  <a className={styles["bottom-with-bar"]} href="#">
                    Services
                  </a>
                </li>
                <li className={styles.nav_li}>
                  <a className={styles["bottom-with-bar"]} href="#">
                    Testimonials
                  </a>
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
              <a href="tel:7189102898">
                <div className={styles.footer__text}>(781)910-2898</div>
              </a>
              <br />
              <div className={styles.footer__contact}>EMAIL</div>
              <a href="mailto:kurt@eprocessdevelopment.com">
                <div className={styles.footer__text}>
                  kurt@eprocessdevelopment.com
                </div>
              </a>
              <br />
              <div className={styles.footer__contact}>SOCIAL</div>
              <div className={styles.footer__social}>
                <a href="https://www.facebook.com/" target="_blank">
                  <FaFacebookF />
                  {/* <i className="fab fa-facebook"></i> */}
                </a>
                <a href="https://www.linkedin.com/" target="_blank">
                  <FaLinkedinIn />
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a href="https://twitter.com/" target="_blank">
                  <BsTwitterX />
                  {/* <i className="fab fa-twitter"></i> */}
                </a>
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
