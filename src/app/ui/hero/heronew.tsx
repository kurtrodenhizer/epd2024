import React from "react";
import styles from "./heronew.module.css";
import { lexend, poppins } from "../fonts";
import Image from "next/image";
import Link from "next/link";

const Heronew = () => {
  return (
    <>
      <div className="h-[68vh] grid grid-cols-1 items-center  ">
        <Image
          alt="eProcess Development - Employee at Computer"
          src="/hero/ePDBanner-og.jpg"
          // src="/hero/ePDBanner-resized.jpg"

          // responsive
          fill
          // placeholder="blur"
          // blurDataURL=""
          //   sizes="(min-width: 808px) 50vw, 100vw"
          quality={100}
          style={{
            // objectFit: "cover", // cover, contain, none
            zIndex: "-100",
            // objectPosition:"right"
          }}
          className="object-left md:object-center blur-none md:blur-sm xl:blur-none lg:object-right object-cover saturate-150  "
        />
        {/* <div
         style={{
          position: 'fixed',
          bottom: 190,
          width: '100%',
          height: '40%',
          zIndex: 2,
          background: 'rgba(255, 255, 255, 0) linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.8) 80%) repeat scroll 0 0',
        }}
        >

        </div> */}
        <div className="text-white text-center xl:text-left ">
          {/* <section className="text-center w-10/12 lg:text-left text-white mx-auto mb-10"> */}
          <section className="mx-auto xl:max-w-screen-xl mb-20 lg:px-5   ">
            <h1
              className={`font-bold text-4xl mb-5 md:text-6xl  ${poppins.className} `}
            >
              Effective Solutions <br /> Measurable Results
            </h1>
            {/* <h4 className="font-light mb-3 md:mx-auto lg:ml-0 max-w-3xl md:max-w-xl text-2xl "> */}
            <h4 className="font-light mb-3 mx-auto xl:mx-0  text-2xl max-w-xl">
              Specializing in Data Management, eLearning, Report Services, and
              File Management
            </h4>

            {/* <button
              type="button"
              className="py-2.5 mt-4  px-5 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-teal rounded-full border border-teal hover:bg-gray-100 hover:bg-hoverteal  focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 focus:mt-1"

              className="py-2.5 mt-4  px-5 me-2 mb-2 text-md font-medium text-white focus:outline-none bg-teal rounded-full border border-teal  hover:bg-hoverteal focus:font-semibold focus:border-blue-500"
            >
              Contact Us
            </button> */}

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

export default Heronew;
