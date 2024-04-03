import Link from "next/link";
import React from "react";

const ContacCta = () => {
  return (
    <>
      <div className=" relative z-0 h-[10rem]  bg-gray-900">
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
        <section className=" z-10  pb-20 dark:bg-gray-900 ">
          <div className="container z-10 mx-auto flex flex-col items-center px-4 py-12 text-center lg:pt-2 ">
            <h2 className="z-10 mx-auto max-w-2xl text-3xl font-semibold tracking-tight text-gray-800 md:text-4xl xl:text-5xl dark:text-white">
              Let&apos;s work <span className=" text-blue-600">together</span>
            </h2>
            <p className="z-10 mt-6 max-w-4xl text-center text-gray-900 dark:text-gray-300">
              Tell us about your project and we&apos;ll arrange a free
              consultation call to discuss how we can help.
            </p>

            <Link href="/contact" className="mt-6 inline-flex w-full sm:w-auto">
              <button
                aria-label="Link to Contact Page"
                className="inline-flex w-full items-center justify-center rounded-lg  bg-blue-600 px-6 py-2 text-white duration-300 hover:bg-blue-500 focus:font-semibold focus:ring focus:ring-blue-300 focus:ring-opacity-80"
              >
                Contact Us Today
              </button>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContacCta;
