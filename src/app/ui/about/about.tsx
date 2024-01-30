// components/shared/AboutSection.js
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className={`bg-gray-100`}>
        <div
          className={`gap-8 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 py-20 lg:px-6`}

          // className={`gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6`}
        >
          <div className={`grid grid-cols-2 gap-4 relative`}>
            <div className="relative">
              <Image
                className={`w-full rounded-lg relative z-10 shadow-xl  `}
                // src="/office-long-2.png"
                src="/about/computer.jpg"
                alt="office content 1"
                width={600}
                height={600}
                quality={100}
              />

              {/* <span
                className="block absolute w-full h-[95%] top-[-5%] left-[-5%] rounded  bg-blue-600 z-0 
                  overflow-x-hidden 
                  "
                aria-hidden="true"
              ></span> */}
              {/* <span
                className="block absolute w-full h-full top-5 left-5 rounded bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden z-0
                  "
                aria-hidden="true"
              ></span> */}
            </div>

            <div className="relative">
              <Image
                className={`mt-4 w-full lg:mt-10 rounded-lg z-10 relative shadow-xl`}
                // src="/office-long-2.png"

                // src="/office-long-1.png"
                alt="office content 2"
                src="/about/code.jpg"
                width={600}
                height={600}
                quality={100}
              />
              {/* 
              <span
                className="block absolute w-full h-full top- left-5 rounded bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden z-0
                  "
                aria-hidden="true"
              ></span> */}
            </div>
          </div>

          <div
            className={`font-light text-justify mx-auto max-w-lg md:max-w-2xl t sm:text-lg 
            
            px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16`}
          >
            <h2
              className={`mb-4 text-center lg:text-left text-4xl tracking-tight font-extrabold dark:text-white`}
            >
              About Us
            </h2>
            <p className={` text-gray-600`}>
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

        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#28d1b4"
            fill-opacity="1"
            d="M0,224L80,218.7C160,213,320,203,480,170.7C640,139,800,85,960,53.3C1120,21,1280,11,1360,5.3L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg> */}
      </section>
    </>
  );
};

export default About;
