import React from "react";
import Image from "next/image";
import { About3 } from "../about/about3";

const AboutPage = () => {
  return (
    <>
      {/* <div className="lg:py-32   py-20  md:mx-auto flex flex-col lg:flex-row lg:space-x-10 items-center md:justify-center bg-gray-100 w-full h-screen  md:h-auto"> */}
      <section className="bg-gray-100 w-full pt-5 pb-20 lg:py-20   md:h-auto relative">
        {/* <About3></About3> */}
        <div className="  md:mx-auto flex flex-col lg:flex-row lg:space-x-20 items-center md:justify-center  w-full z-10 relative  ">
          {/* image */}
          <div></div>
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


      <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">


          
          <h1 className="text-4xl font-bold leading text-center sm:text-5xl">
            Our team
          </h1>
          <p className="max-w-2xl text-center dark:text-gray-400">
            At a assumenda quas cum earum ut itaque commodi saepe rem aspernatur
            quam natus quis nihil quod, hic explicabo doloribus magnam neque,
            exercitationem eius 
          </p>


          <div className="  md:mx-auto flex flex-col lg:flex-row lg:space-x-20 items-center md:justify-center  w-full z-10 relative  ">
          {/* image */}
          <div></div>
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
              {/* Kurt Rodenhizer, MS, MBA, the ePD owner and founder, is a former
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
              former teacher) to implement numerous effective training programs. */}

              Kurt Rodenhizer, MS, MBA, is the founder and owner of eProcess Development (ePD). With a rich background in corporate marketing and product management at prominent companies such as Dräger Medical Systems and Siemens Medical Solutions, Kurt brings a wealth of experience to ePD. His expertise includes launching products, conducting market research, and developing marketing strategies. Additionally, Kurt's proficiency in database systems has enabled him to create efficient cost-saving policies and procedures. Leveraging his background in education, including a Masters of Education and experience as a teacher, Kurt has implemented effective training programs within ePD.
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



          <div className="flex flex-row flex-wrap justify-center">
            <div className="flex flex-col justify-center m-8 text-center relative">
              <div className="relative block mb-4">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/team/rich2.png"
                  height={400}
                  width={400}
                  quality={100}
                  className="mx-auto object-cover rounded-full h-40 w-40 z-10 relative drop-shadow-xl contrast-125 brightness-105 "
                />
                {/* <span
                  className="block absolute w-full h-[95%] left-2 top-[.75rem]  rounded-full  bg-blue-600 z-0 
                  overflow-x-hidden 
                  "
                  aria-hidden="true"
                ></span> */}

                <span
                  className="block absolute w-full h-full top-0 rounded-full bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden z-0
                  "
                  aria-hidden="true"
                ></span>
              </div>

              <p className="text-xl font-semibold leadi">Rich Lovejoy</p>
              <p className="dark:text-gray-400 text-teal">
                Software Project Lead
              </p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <div className="relative block mb-4">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/team/ian2.png"
                  height={400}
                  width={400}
                  quality={100}
                  className="mx-auto object-cover rounded-full h-40 w-40 z-10 relative drop-shadow-xl contrast-125 brightness-105 "
                />
                {/* <span
                  className="block absolute w-full h-[95%] left-2 top-[.75rem]  rounded-full  bg-blue-600 z-0 
                  overflow-x-hidden 
                  "
                  aria-hidden="true"
                ></span> */}

                <span
                  className="block absolute w-full h-full top-0 rounded-full bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden z-0
                  "
                  aria-hidden="true"
                ></span>
              </div>
              <p className="text-xl font-semibold ">Ian Delairre</p>
              <p className="dark:text-gray-400 text-teal">Back-end Developer</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center">
              <div className="relative block mb-4">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/team/karl2.png"
                  height={400}
                  width={400}
                  quality={100}
                  className="mx-auto object-cover rounded-full h-40 w-40 z-10 relative drop-shadow-xl brightness-150 "
                />
                                <span
                  className="block absolute w-full h-full top-0 rounded-full bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden z-0
                  "
                  aria-hidden="true"
                ></span>
              </div>
              <p className="text-xl font-semibold leadi">Karl Miller </p>
              <p className="dark:text-gray-400 text-teal">Back-end Developer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center">
              <div className="relative block mb-4">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/team/carli2.png"
                  height={400}
                  width={400}
                  quality={100}
                  className="mx-auto object-cover rounded-full h-40 w-40 z-10 relative drop-shadow-xl contrast-125 brightness-105 "
                />

                <span
                  className="block absolute w-full h-full top-0 rounded-full bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden z-0
                  "
                  aria-hidden="true"
                ></span>
              </div>
              <p className="text-xl font-semibold leading">Carli Smith</p>
              <p className="dark:text-gray-400 text-teal">
                Front-end Developer
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutPage;
