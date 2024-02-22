import React from "react";
import Image from "next/image";
import Clients from "../clients/clients";
import ClientsNew from "../clients/ClientsNew";
import Contact from "../contact/contact";

const AboutPage2 = () => {
  return (
    <>
      <section className=" w-full bg-gray-100     md:h-auto relative mb-5">
        <div className="w-full  relative z-10">
          <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-20 sm:p-10  ">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                <div className="flex lg:py-12">
             
                            <Image
                    src="/statistics1-1.jpg"
                    alt="office content 1"
                  width={600}
                  height={600}
                quality={100}
                className="w-full rounded-lg shadow-lg dark:shadow-black/20 lg:ml-[50px] z-[20]"
                // style={{
                //   filter: "sepia(100%) hue-rotate(180deg) saturate(200%)",
                // }}
              />
                </div>
              </div>
              <div className="w-full shrink-0 grow-0 basis-auto lg:w-7/12 z-10">
                <div className="flex h-full bg-blue-600 items-center rounded-lg bg-primary p-6 text-center text-white lg:pl-12 lg:text-left">
                  <div className="lg:pl-12">
                    <h2 className="mb-6 text-3xl font-bold">WHAT WE DO</h2>
                    <p className="mb-6 pb-2 lg:pb-0">
                      eProcess Development (ePD) is a dynamic team of
                      programmers, artists, and database specialists dedicated
                      to delivering cutting-edge business efficiency solutions.
                      With a wealth of experience and expertise, our team
                      collaborates closely to tailor solutions that meet the
                      unique needs of each client.
                      <br></br>
                      <br></br>
                      With a commitment to innovation, expertise, and client
                      satisfaction, eProcess Development is your trusted partner
                      for driving business growth and efficiency.
                    </p>
                    <button
                      type="button"
                      className="rounded-full border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Contact Us Today
                    </button>
                  </div>
                </div>
              </div>
            </div>
            {/* our team header */}

            {/* kurt section */}
            {/* <div className=" md:mx-auto flex flex-col lg:flex-row lg:space-x-20 items-center md:justify-center  w-full z-10 relative  ">
                <div></div>
                <div className="mb-4 mt-2 text-center opacity-90 z-10">
                  <div className="relative block flex-shrink-0 h-[18rem] w-[18rem] ">
                    <Image
                      alt="Kurt Rodenhizer Founder of ePD Headshot"
                      src="/Kurt2.png"
                      fill
                      quality={100}
                      className="mx-auto object-cover rounded-full absolute drop-shadow-xl contrast-125 brightness-105 z-10 "
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
            
                     With a rich background in corporate marketing and product management at prominent companies such as Dräger Medical Systems and Siemens Medical Solutions, Kurt brings a wealth of experience to ePD. His expertise includes launching products, conducting market research, and developing marketing strategies.
                     <br></br>
                    <br></br>
                      Additionally, Kurt's proficiency in database systems has enabled him to create efficient cost-saving policies and procedures. Leveraging his background in education, including a Masters of Education and experience as a teacher, Kurt has implemented effective training programs within ePD.
                  </p>
                </div>
              </div> */}
          </div>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
            className="absolute bottom-[-1%]   z-0 "
          >
            <path
              fill="white"
              d="M0,96L80,122.7C160,149,320,203,480,202.7C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

        {/* team photos */}
        {/* <div className="flex flex-row flex-wrap justify-between 2xl:max-w-6xl mx-auto "> */}

        <div className="w-full bg-white relative pt-16 pb-16  ">
          <div>
            <h1 className="text-4xl font-bold leading text-center sm:text-5xl mb-4">
              Meet the Team
            </h1>
            <p className="max-w-2xl text-center dark:text-gray-400 mx-auto">
              ePD&apos;s dedicated team of experts
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 justify-between max-w-7xl mx-auto z-10 pt-4">
            <div className="flex flex-col justify-center m-8 text-center relative mx-auto z-10">
              <div className="relative block mx-auto mb-4 h-[9rem] w-[9rem]">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/Kurt2.png"
                  //   height={400}
                  //   width={400}
                  fill
                  quality={100}
                  //   className="mx-auto object-cover rounded-full h-40 w-40 z-10 relative drop-shadow-xl contrast-125 brightness-105 "
                  className="mx-auto object-cover rounded-full absolute drop-shadow-xl contrast-125 brightness-105 z-10 "
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

              <p className="text-xl font-semibold leading">Kurt Rodenhizer</p>
              <p className="dark:text-gray-400 text-teal">Founder/Owner</p>
            </div>

            <div className="flex flex-col justify-center m-8 text-center relative mx-auto z-10">
              <div className="relative block mx-auto mb-4 h-[9rem] w-[9rem]">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/team/rich2.png"
                  //   height={400}
                  //   width={400}
                  fill
                  quality={100}
                  //   className="mx-auto object-cover rounded-full h-40 w-40 z-10 relative drop-shadow-xl contrast-125 brightness-105 "
                  className="mx-auto object-cover rounded-full absolute drop-shadow-xl contrast-125 brightness-105 z-10 "
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

              <p className="text-xl font-semibold leading">Rich Lovejoy</p>
              <p className="dark:text-gray-400 text-teal">
                Software Project Lead
              </p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center mx-auto z-10">
              <div className="relative block mx-auto mb-4 h-[9rem] w-[9rem]">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/team/ian2.png"
                  fill
                  quality={100}
                  //   className="mx-auto object-cover rounded-full h-40 w-40 z-10 relative drop-shadow-xl contrast-125 brightness-105 "
                  className="mx-auto object-cover rounded-full absolute drop-shadow-xl contrast-125 brightness-105 z-10 "
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

            <div className="flex flex-col justify-center m-8 text-center mx-auto z-10">
              <div className="relative block mx-auto mb-4 h-[9rem] w-[9rem]">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/team/karl2.png"
                  fill
                  quality={100}
                  //   className="mx-auto object-cover rounded-full h-40 w-40 z-10 relative drop-shadow-xl contrast-125 brightness-105 "
                  className="mx-auto object-cover rounded-full absolute drop-shadow-xl contrast-125 brightness-150 z-10 "
                />
                <span
                  className="block absolute w-full h-full top-0 rounded-full bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden z-0
                  "
                  aria-hidden="true"
                ></span>
              </div>
              <p className="text-xl font-semibold leading">Karl Miller </p>
              <p className="dark:text-gray-400 text-teal">Back-end Developer</p>
            </div>
            <div className="flex flex-col justify-center m-8 text-center mx-auto z-10 align-self: center">
              <div className="relative block mx-auto mb-4 h-[9rem] w-[9rem]">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/team/carli2.png"
                  fill
                  quality={100}
                  //   className="mx-auto object-cover rounded-full h-40 w-40 z-10 relative drop-shadow-xl contrast-125 brightness-105 "
                  className="mx-auto object-cover rounded-full absolute drop-shadow-xl contrast-125 brightness-105 z-10 "
                />

                <span
                  className="block absolute w-full h-full top-0 rounded-full bg-blue-100 z-0 drop-shadow-2xl
                  overflow-x-hidden z-0
                  "
                  aria-hidden="true"
                ></span>
              </div>
              <p className="text-xl font-semibold leading ">Carli Smith</p>
              <p className="dark:text-gray-400 text-teal">
                Front-end Developer
              </p>
            </div>
          </div>
        </div>

        {/* Wave thing */}
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute top-0 bottom-0 h-[60vh]  z-0 "
        >
          <path
            fill="white"
            d="M0,96L80,122.7C160,149,320,203,480,202.7C640,203,800,149,960,133.3C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg> */}
      </section>
      {/* <Clients></Clients> */}

   

      <ClientsNew></ClientsNew>

      <div className=" mt-5 relative h-[10rem] z-0 ">
    

        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute  bottom-0 xl:bottom-[-30%]   z-0 "
        >
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,160L60,181.3C120,203,240,245,360,250.7C480,256,600,224,720,186.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg> */}


        {/* <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        className="absolute  bottom-0 xl:bottom-[-30%]   z-0 "
        >
          
          <path fill="#f3f4f5" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,208C640,213,800,171,960,160C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
          
        </svg> */}


        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        className="absolute  bottom-[-20%] xl:bottom-[-70%]   z-0 "

        >
          
          <path fill="#f3f4f5" fill-opacity="1" d="M0,128L60,138.7C120,149,240,171,360,170.7C480,171,600,149,720,144C840,139,960,149,1080,160C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
      </div>

      <div className="  z-0 bg-gray-100 ">

<section className=" dark:bg-gray-900  z-10 pb-20  ">
  <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center z-10 lg:pt-2 ">
    <h2 className="max-w-2xl mx-auto text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white z-10">
      Let&apos;s Work{" "}
      <span className="text-blue-500 text-teal">together.</span>
    </h2>
    <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300 z-10">
    Tell us about your project and we&apos;ll arrange a free
              consultation call to discuss how we can help.
    </p>
    <div className="inline-flex w-full mt-6 sm:w-auto">
      <button
        className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80"
      >
        Contact Us Today
      </button>
    </div>
  </div>
</section>
</div>
      {/* <Contact></Contact> */}
    </>
  );
};

export default AboutPage2;
