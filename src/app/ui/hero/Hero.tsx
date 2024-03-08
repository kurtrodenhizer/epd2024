import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div
        className="grid h-[70vh] grid-cols-1 items-center 
      "
      >
        <Image
          alt="eProcess Development Hero Image - Employee at Computer"
          src="/hero/ePDBanner-og.jpg"
          fill
          quality={100}
          style={{
            zIndex: "-100",
          }}
          className="relative object-cover object-left blur-none saturate-150 md:m-[-5px] md:object-center  md:blur-[2px] lg:object-right xl:blur-none "
        />

        <div className="text-center text-white xl:text-left ">
          <section className="mx-auto mb-20 lg:px-5 lg:pl-16 xl:max-w-screen-2xl">
            <h1
              className={`mb-5 text-4xl font-bold md:text-6xl  2xl:text-7xl  `}
            >
              Effective Solutions <br /> Measurable Results
            </h1>
            <h4 className="mx-auto mb-3 max-w-xl text-2xl  font-light xl:mx-0">
              Specializing in Data Management, eLearning, Report Services, and
              File Management
            </h4>

            <Link href="/contact">
              <button
                className="text-md hover:bg-hoverteal2    mb-2   mt-4 rounded-full bg-teal px-5  py-2.5 font-semibold text-gray-900 
              focus:bg-[#ffffff]
              focus:outline-none
              "
              >
                Contact Us
              </button>
            </Link>
          </section>
        </div>
      </div>
    </>
  );
};

export default Hero;
