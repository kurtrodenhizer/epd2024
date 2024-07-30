import React from "react";
import Image from "next/image";
import ClientsSection from "../clients/ClientsSection";
import Link from "next/link";

const AboutPage1 = () => {
  return (
    <>
      <section className=" relative mb-5     w-full bg-gray-100 md:h-auto">
        <div className="relative  z-10 w-full">
          <div className="container mx-auto flex flex-col items-center justify-center space-y-20 p-4 sm:p-10  ">
            <div className="flex flex-wrap">
              <div className="mb-12 w-full shrink-0 grow-0 basis-auto lg:mb-0 lg:w-5/12">
                <div className="flex lg:py-12">
                  <Image
                    src="/about/statistics1-1.jpg"
                    alt="employee at work"
                    width={600}
                    height={600}
                    quality={100}
                    className="z-[20] w-full rounded-lg shadow-lg lg:ml-[50px] dark:shadow-black/20"
                  />
                </div>
              </div>
              <div className="z-10 w-full shrink-0 grow-0 basis-auto lg:w-7/12">
                <div className="bg-primary flex h-full items-center rounded-lg bg-blue-600 p-6 text-center text-white lg:pl-12 lg:text-left">
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
                    <Link href="/contact" className="mt-2  w-auto w-full">
                      <button
                        type="button"
                        className="rounded-full  border-2 border-neutral-50 px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-100 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:font-semibold focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200"
                        data-te-ripple-init
                        data-te-ripple-color="light"
                      >
                        Contact Us Today
                      </button>
                    </Link>
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

        <div className="relative w-full bg-white pb-14 pt-16 text-gray-700   ">
          <div>
            <h1 className="leading mb-4 text-center text-4xl font-bold sm:text-5xl">
              Meet the Team
            </h1>
            <p className="mx-auto max-w-2xl text-center dark:text-gray-400">
              ePD&apos;s dedicated team of experts
            </p>
          </div>

          <div className="z-10 mx-auto grid max-w-7xl grid-cols-1 justify-between pt-4 md:grid-cols-2 lg:grid-cols-5">
            <div className="relative z-10 m-8 mx-auto flex flex-col justify-center text-center">
              <div className="relative mx-auto mb-4 block h-[9rem] w-[9rem]">
                <Image
                  alt="Kurt Rodenhizer Founder of ePD Headshot"
                  src="/team/Kurt.png"
                  fill
                  quality={100}
                  className="absolute z-10 mx-auto rounded-full object-cover brightness-105 contrast-125 drop-shadow-xl "
                />

                <span
                  className="absolute top-0 z-0 z-0 block h-full w-full overflow-x-hidden rounded-full
                  bg-blue-100 
                  "
                  aria-hidden="true"
                ></span>
              </div>

              <p className="leading text-xl font-semibold">Kurt Rodenhizer</p>
              <p className="text-teal dark:text-gray-400">Founder/Owner</p>
            </div>

            <div className="relative z-10 m-8 mx-auto flex flex-col justify-center text-center">
              <div className="relative mx-auto mb-4 block h-[9rem] w-[9rem]">
                <Image
                  alt="Rich Lovejoy Headshot"
                  src="/team/Rich.png"
                  fill
                  quality={100}
                  className="absolute z-10 mx-auto rounded-full object-cover brightness-105 contrast-125 drop-shadow-xl "
                />

                <span
                  className="absolute top-0 z-0 z-0 block h-full w-full overflow-x-hidden rounded-full
                  bg-blue-100 
                  "
                  aria-hidden="true"
                ></span>
              </div>

              <p className="leading text-xl font-semibold">Rich Lovejoy</p>
              <p className="text-teal dark:text-gray-400">
                Software Project Lead
              </p>
            </div>
            <div className="z-10 m-8 mx-auto flex flex-col justify-center text-center">
              <div className="relative mx-auto mb-4 block h-[9rem] w-[9rem]">
                <Image
                  alt="Ian Delairre Headshot"
                  src="/team/Ian.png"
                  fill
                  quality={100}
                  className="absolute z-10 mx-auto rounded-full object-cover brightness-105 contrast-125 drop-shadow-xl "
                />

                <span
                  className="absolute top-0 z-0 z-0 block h-full w-full overflow-x-hidden rounded-full
                  bg-blue-100 
                  "
                  aria-hidden="true"
                ></span>
              </div>
              <p className="text-xl font-semibold ">Ian Delairre</p>
              <p className="text-teal dark:text-gray-400">Back-end Developer</p>
            </div>

            <div className="z-10 m-8 mx-auto flex flex-col justify-center text-center">
              <div className="relative mx-auto mb-4 block h-[9rem] w-[9rem]">
                <Image
                  alt="Karl Miller Headshot"
                  src="/team/Karl.png"
                  fill
                  quality={100}
                  className="absolute z-10 mx-auto rounded-full object-cover brightness-150 contrast-125 drop-shadow-xl "
                />
                <span
                  className="absolute top-0 z-0 z-0 block h-full w-full overflow-x-hidden rounded-full
                  bg-blue-100 
                  "
                  aria-hidden="true"
                ></span>
              </div>
              <p className="leading text-xl font-semibold">Karl Miller </p>
              <p className="text-teal dark:text-gray-400">Back-end Developer</p>
            </div>
            <div className="align-self: center z-10 m-8 mx-auto flex flex-col justify-center text-center">
              <div className="relative mx-auto mb-4 block h-[9rem] w-[9rem]">
                <Image
                  alt="Carli Smith Headshot"
                  src="/team/Carli.png"
                  fill
                  quality={100}
                  className="absolute z-10 mx-auto rounded-full object-cover brightness-105 contrast-125 drop-shadow-xl "
                />

                <span
                  className="absolute top-0 z-0 z-0 block h-full w-full overflow-x-hidden rounded-full
                  bg-blue-100 
                  "
                  aria-hidden="true"
                ></span>
              </div>
              <p className="leading text-xl font-semibold ">Carli Smith</p>
              <p className="text-teal dark:text-gray-400">
                Front-end Developer
              </p>
            </div>
          </div>
        </div>
      </section>

      <ClientsSection></ClientsSection>

      <div className=" relative z-0 mt-5 h-[10rem] ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute  bottom-[-20%] z-0   xl:bottom-[-70%] "
        >
          <path
            fill="#f3f4f5"
            fillOpacity="1"
            d="M0,128L60,138.7C120,149,240,171,360,170.7C480,171,600,149,720,144C840,139,960,149,1080,160C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="  z-0 bg-gray-100 ">
        <section className=" z-10  pb-20 dark:bg-gray-900  ">
          <div className="container z-10 mx-auto flex flex-col items-center px-4 py-12 text-center lg:pt-2 ">
            <h2 className="z-10 mx-auto max-w-2xl text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
              Let&apos;s Work{" "}
              <span className="text-blue-500 text-teal">together.</span>
            </h2>
            <p className="z-10 mt-6 max-w-4xl text-center text-gray-500 dark:text-gray-300">
              Tell us about your project and we&apos;ll arrange a free
              consultation call to discuss how we can help.
            </p>
            <Link href="/contact" className="mt-6 inline-flex w-full sm:w-auto">
              <button
                aria-label="Link to Contact Page"
                className="inline-flex w-full items-center justify-center rounded-lg bg-blue-600 px-6 py-2 text-white duration-300 hover:bg-blue-500 focus:font-semibold focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Contact Us
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage1;
