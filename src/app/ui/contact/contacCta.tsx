import Link from "next/link";
import React from "react";

const ContacCta = () => {
  return (
    <>
      <div className=" relative h-[10rem] z-0  bg-gray-900">
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
        <section className=" dark:bg-gray-900  z-10 pb-20 ">
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center z-10 lg:pt-2 ">
            <h2 className="max-w-2xl mx-auto text-3xl md:text-4xl font-semibold tracking-tight text-gray-800 xl:text-5xl dark:text-white z-10">
              Let&apos;s work{" "}
              <span className="text-blue-500 text-teal">together</span>
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

export default ContacCta;
