// components/shared/AboutSection.js
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className={`bg-teal dark:bg-gray-900`}>
        <div
          className={`gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6`}
        >
          <div className={`grid grid-cols-2 gap-4 mt-8`}>
            <img
              className={`w-full rounded-lg`}
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png"
              alt="office content 1"
            />
            {/* <Image
              src="/deposit1.jpg"
              // src="/whitelogo.png"
              width={200}
              height={100}
              alt="ePD Logo"
              className={styles.logo}
              className={`w-full rounded-lg`}

            /> */}

            <img
              className={`mt-4 w-full lg:mt-10 rounded-lg`}
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png"
              alt="office content 2"
            />
          </div>
          <div
            className={`font-light mx-auto max-w-lg md:max-w-2xl text-white sm:text-lg dark:text-gray-400
            
            px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16`}
          >
            <h2
              className={`mb-4 text-center lg:text-left text-4xl tracking-tight font-extrabold dark:text-white`}
            >
              About Us
            </h2>
            <p className={`mb-4`}>
              We help businesses adapt to the ever-changing digital landscape.
              <br></br>
              <br></br>
              We specialize in providing cost-effective solutions that help
              businesses stay ahead of the curve and adapt to the latest digital
              trends and technologies. With our competitive pricing and proven
              track record, ePD is the ideal partner for businesses looking to
              thrive in the digital age.
              <br></br>
              <br></br>
              Contact us today to learn more about how we can help you achieve
              success.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
