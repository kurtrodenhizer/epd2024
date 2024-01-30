import React from "react";
import styles from "./clients.module.css";
import Image from "next/image";

import { CompanySlider } from "./CompanySlider";

const Clients = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-6 ">
        {/* <div className="  mx-auto max-w-screen-xl px-4 "> */}
        <div className="  ">

          {/* <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            You’ll be in good company
          </h2> */}
          <h1 className={`text-xl  text-gray-600 text-center `}>
            Trusted Clients
          </h1>


          {/* wrapper */}
          <div className="flex overflow-hidden group  ">

          {/* logos1 */}
          <div 
          
          // className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 text-gray-500 sm:gap-12 md:gap-16 lg:gap-20 dark:text-gray-400 bg-orange justify-items-center animate-loop-scroll  group-hover:paused"
          
          // className="grid grid-cols-8 gap-20 w-full bg-red animate-loop-scroll  group-hover:paused"
          className="flex space-x-16 animate-loop-scroll group-hover:paused"

          // style={{animationPlayState:"paused"}}
          >
            <div className="flex items-center justify-center max-w-none">
              <Image
                src="/logos/abiomed.png"
                width={200}
                height={100}
                alt="Abiomed Logo"
                className="max-w-none"
              />
            </div>

            <div className="flex items-center justify-center max-w-none">
              <Image
                src="/logos/drager.png"
                width={200}
                height={100}
                alt="Drager Logo"
                className={styles.client__logo}
              />
            </div>

            <div className="flex items-center justify-center max-w-none">
              <Image
                src="/logos/ss.png"
                width={200}
                height={100}
                alt="Smart Source Logo"
                className={styles.client__logo}
              />
            </div>

            <div className="flex items-center justify-center max-w-none">
              <Image
                src="/logos/ffda.png"
                width={200}
                height={100}
                alt="Families for Depression Awareness Logo"
                className={`${styles.client__logo} ${styles["client__logo--ff"]}`}
              />
            </div>

      
          </div>


          {/* logos2 */}
          <div 
          className="flex space-x-16 animate-loop-scroll group-hover:paused"
          aria-hidden="true"
          >
            <div className="flex items-center justify-center max-w-none">
              <Image
                src="/logos/abiomed.png"
                width={200}
                height={100}
                alt="Abiomed Logo"
                className="max-w-none"
              />
            </div>

            <div className="flex items-center justify-center max-w-none">
              <Image
                src="/logos/drager.png"
                width={200}
                height={100}
                alt="Drager Logo"
                className={styles.client__logo}
              />
            </div>

            <div className="flex items-center justify-center max-w-none">
              <Image
                src="/logos/ss.png"
                width={200}
                height={100}
                alt="Smart Source Logo"
                className={styles.client__logo}
              />
            </div>

            <div className="flex items-center justify-center max-w-none">
              <Image
                src="/logos/ffda.png"
                width={200}
                height={100}
                alt="Families for Depression Awareness Logo"
                className={`${styles.client__logo} ${styles["client__logo--ff"]}`}
              />
            </div>

      
          </div>


          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
