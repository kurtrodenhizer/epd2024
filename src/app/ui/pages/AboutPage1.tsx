import React from "react";
import Image from "next/image";
import ClientsSection from "../clients/ClientsSection";
import Link from "next/link";

const AboutPage1 = () => {
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
        <div className="w-full bg-white relative pt-16 pb-14  ">
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
                  fill
                  quality={100}
                  className="mx-auto object-cover rounded-full absolute drop-shadow-xl contrast-125 brightness-105 z-10 "
                />

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
                  fill
                  quality={100}
                  className="mx-auto object-cover rounded-full absolute drop-shadow-xl contrast-125 brightness-105 z-10 "
                />

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
                  className="mx-auto object-cover rounded-full absolute drop-shadow-xl contrast-125 brightness-105 z-10 "
                />

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
      </section>

      <ClientsSection></ClientsSection>

      <div className=" mt-5 relative h-[10rem] z-0 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute  bottom-[-20%] xl:bottom-[-70%]   z-0 "
        >
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,128L60,138.7C120,149,240,171,360,170.7C480,171,600,149,720,144C840,139,960,149,1080,160C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
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
            <Link href="/contact" className="inline-flex w-full mt-6 sm:w-auto">
                <button className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                  Contact Us Today
                </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage1;
