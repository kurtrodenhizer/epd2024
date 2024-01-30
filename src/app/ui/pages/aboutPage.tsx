import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <>
      {/* <div className="lg:py-32   py-20  md:mx-auto flex flex-col lg:flex-row lg:space-x-10 items-center md:justify-center bg-gray-100 w-full h-screen  md:h-auto"> */}
      <section className="bg-gray-100 w-full pt-5 pb-20 lg:py-20   md:h-auto relative">
        <div className="  md:mx-auto flex flex-col lg:flex-row lg:space-x-20 items-center md:justify-center  w-full z-10 relative  ">
          {/* image */}
          <div>
          
          </div>
          <div className="mb-4 mt-2 text-center opacity-90 z-10">
            <div className="relative block">
              <Image
                alt="Kurt Rodenhizer Founder of ePD Headshot"
                src="/Kurt2.png"
                height={150}
                width={150}
                quality={100}
           
                className="mx-auto object-cover rounded-full h-40 w-40 lg:w-80 lg:h-80 z-10 relative drop-shadow-xl contrast-125 brightness-105 "
              />

              <span
                className="block absolute w-full h-[95%] left-2 top-[.75rem]  rounded-full  bg-blue-600 z-0 
                  overflow-x-hidden 
                  "
                aria-hidden="true"
              ></span>

              <span
                className="block absolute w-full h-full top-0 rounded-full bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden z-0
                  "
                aria-hidden="true"
              ></span>
            </div>
  
          </div>

          <div className="text-justify flex-shrink">
            <h1 className="text-3xl text-gray-600 text-center lg:text-justify font-semibold mb-1">
              Kurt Rodenhizer
            </h1>
            <p className="text-xl  font-light  text-teal   text-center lg:text-justify ">
              Founder/Owner of ePD
            </p>

            <p className="max-w-lg px-3 md:px-0 md:max-w-2xl py-4 font-light text-sm dark:text-gray-400 mx-auto text-gray-600">
              Kurt Rodenhizer, MS, MBA, the ePD owner and founder, is a former
              Business Development Program Manager for Dräger Medical Systems
              and Senior Product Manager for Siemens Medical Solutions. He was
              also an Adjunct Professor for the Computer Science Department at
              Endicott College in Beverly, MA.
              <br></br>
              <br></br>
              While working in corporate marketing, Kurt launched several
              products, participated in a number of market research studies and
              developed numerous marketing plans. He used his strength with
              database systems to generate several cost and time savings
              policies and procedures.
              <br></br>
              <br></br>
              Kurt used his background in education (Masters of Education and
              former teacher) to implement numerous effective training programs.
            </p>
          </div>

  

  
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute bottom-0 z-0 "
        >
       

          <path
            fill="white"

            d="M0,96L80,122.7C160,149,320,203,480,202.7C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>

     
        </svg>
      </section>
    </>
  );
};

export default AboutPage;
