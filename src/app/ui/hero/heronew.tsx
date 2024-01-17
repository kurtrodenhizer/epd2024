import React from "react";
import styles from "./heronew.module.css";
import { lexend, poppins } from "../fonts";
import Image from "next/image";

const Heronew = () => {
  return (
    <>
      <div className="h-[68vh] grid grid-cols-1 items-center ">
        <Image
          alt="Mountains"
          src="/ePDBanner_1.jpg"
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
          className="object-left md:object-center lg:object-right object-cover "
        />
        <div>
          <section className="text-center w-10/12 lg:text-left text-white mx-auto mb-10">
            <h1 
            className={`font-bold text-4xl mb-5 md:text-6xl ${poppins.className} `}>
              Effective Solutions <br /> Measurable Results
            </h1>
            <h4 className="font-light mb-3 md:mx-auto lg:ml-0 max-w-3xl md:max-w-xl text-2xl ">
              Specializing in Data Management, eLearning, Report Services, and
              File Management
            </h4>

            <button
              type="button"
              className="py-2.5 mt-4 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
            >
              Contact Us
            </button>
          </section>
        </div>
      </div>
    </>
  );
};

export default Heronew;
