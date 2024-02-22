// components/shared/AboutSection.js
import React from "react";
import styles from "./about.module.css";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className={`bg-gray-100`}>
        <div
          // className={`gap-8 items-center  px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 py-20 lg:px-6`}
          className={`gap-8 items-center px-4 mx-auto max-w-screen-xl  py-10 lg:px-6`}

          // className={`gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6`}
        >
          {/* <div className="hidden w-3/4  h-[60vh] bg-gray-100  lg:block lg:absolute" /> */}

          <div className="mt-10 lg:mt-20 lg:flex lg:items-center lg:justify-center">
            {/* <img
                className="object-cover object-center w-full lg:w-[32rem] rounded-lg h-96"
                src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
                alt=""
              /> */}
            {/* <img
              className="object-cover object-center w-full lg:w-[42rem] rounded-lg h-90"
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt=""
            /> */}

            <Image
              className={`w-full rounded-lg relative z-10 shadow-xl  `}
              // src="/office-long-2.png"
              src="/about/deposit1.jpg"
              alt="office content 1"
              width={500}
              height={500}
              quality={100}
            />

            {/* <div className="mt-8 lg:px-10 lg:mt-0">
              <h1 className="text-2xl font-semibold text-gray-800 dark:text-white ">
                About Us
              </h1>
              <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                We help businesses adapt to the ever-changing digital landscape.
                <br></br>
                <br></br>
                We specialize in providing cost-effective solutions that help
                businesses stay ahead of the curve and adapt to the latest
                digital trends and technologies. With our competitive pricing
                and proven track record, ePD is the ideal partner for businesses
                looking to thrive in the digital age.
                <br></br>
                <br></br>
                Contact us today to learn more about how we can help you achieve
                success.
              </p>
              <h3 className="mt-6 text-lg font-medium text-blue-500">
                Ronik Ederson
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Marketing Manager at Stech
              </p>
            </div> */}


            {/* <div
            className={`font-light text-justify mx-auto max-w-lg md:max-w-2xl t sm:text-lg 
            
            px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16`}
          >
            <h2
              className={`mb-4 text-center  lg:text-left text-4xl tracking-tight font-extrabold dark:text-white`}
            >
              About Us
            </h2>
            <p className={` text-gray-600`}>
              We help businesses adapt to the ever-changing digital landscape.
        
              We specialize in providing cost-effective solutions that help
              businesses stay ahead of the curve and adapt to the latest digital
              trends and technologies. With our competitive pricing and proven
              track record, ePD is the ideal partner for businesses looking to
              thrive in the digital age.
            
              Contact us today to learn more about how we can help you achieve
              success.
            </p>
          </div>  */}

          <div className="mt-8 lg:pl-10 lg:mt-0">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-white ">
                  About Us
                </h1>
                <p className="max-w-lg mt-6 text-gray-500 dark:text-gray-400">
                   
                </p>
                <h3 className="mt-6 text-lg font-medium text-blue-500">
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Marketing Manager 
                </p>
              </div>


          </div>

          {/* <div className={`grid grid-cols-2 gap-4 relative`}>
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

            </div>

            <div className="relative">
              <Image
                className={`mt-4 w-full lg:mt-10 rounded-lg z-10 relative shadow-xl`}
       
                alt="office content 2"
                src="/about/code.jpg"
                width={600}
                height={600}
                quality={100}
              />
       
            </div>
          </div>

          <div
            className={`font-light text-justify mx-auto max-w-lg md:max-w-2xl t sm:text-lg 
            
            px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16`}
          >
            <h2
              className={`mb-4 text-center  lg:text-left text-4xl tracking-tight font-extrabold dark:text-white`}
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
          </div> */}
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
