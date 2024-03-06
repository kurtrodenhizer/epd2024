import React from "react";
import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="h-[70vh] grid grid-cols-1 items-center  ">
        <Image
          alt="eProcess Development - Employee at Computer"
          src="/hero/ePDBanner-og.jpg"
          fill
          quality={100}
          style={{
            zIndex: "-100",
          }}
          className="object-left md:object-center blur-none md:blur-sm xl:blur-none lg:object-right object-cover saturate-150  "
        />

        <div className="text-white text-center xl:text-left ">
          <section className="mx-auto xl:max-w-screen-2xl mb-20 lg:px-5 lg:pl-16">
            <h1
              className={`font-bold text-4xl mb-5 md:text-6xl  2xl:text-7xl  `}
            >
              Effective Solutions <br /> Measurable Results
            </h1>
            <h4 className="font-light mb-3 mx-auto xl:mx-0  text-2xl max-w-xl">
              Specializing in Data Management, eLearning, Report Services, and
              File Management
            </h4>

            <Link href="/contact">
              <button className="py-2.5 mt-4  px-5 me-2  mb-2 text-md font-medium text-white focus:outline-none bg-teal rounded-full border border-teal  hover:bg-hoverteal focus:font-semibold focus:border-blue-500">
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
