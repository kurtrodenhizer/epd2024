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
          // src="/hero/ePDBanner-og.jpg"
          src="/hero/ePDBanner-resized.jpg"
          fill
          quality={100}
          style={{
            zIndex: "-100",
          }}
          className="relative border-hidden object-cover object-left blur-none saturate-150 md:m-[-5px] md:object-center  md:blur-[2px] xl:object-right xl:blur-none "
        />

        <div className="text-center text-white xl:text-left ">
          <section className="mx-auto mb-20 lg:px-5 xl:max-w-screen-2xl xl:pl-16">
            <h1
              className={`mb-5  text-3xl  font-bold sm:text-6xl  2xl:text-7xl  `}
            >
              Effective Solutions <br /> Measurable Results
            </h1>

            <p className="mx-auto mb-3 px-4  text-xl font-light sm:max-w-xl sm:text-2xl md:px-0  xl:mx-0">
              Specializing in Data Management, eLearning, Report Services, and
              File Management
            </p>

            <Link href="/contact">
              <button
                className="text-md mb-2    mt-4   rounded-full bg-teal px-5 py-2.5  font-semibold text-gray-900 hover:bg-hoverteal2 
              focus:bg-[#ffffff]
              focus:outline-none
              "
                aria-label="Link to Contact Page"
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
