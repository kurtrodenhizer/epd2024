import React from "react";
import styles from "./clients.module.css";
import Image from "next/image";

const Clients = () => {
  return (
    <>
      <section className="bg-white dark:bg-gray-900 py-6 ">
        <div className="  mx-auto max-w-screen-xl px-4">
          {/* <h2 className="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            You’ll be in good company
          </h2> */}
          <h1 className={`text-xl  text-gray-600 text-center `}>
            Trusted Clients
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 text-gray-500 sm:gap-12 md:gap-16 lg:gap-20 dark:text-gray-400 bg-orange justify-items-center">
            <div className="flex items-center justify-center">
              <Image
                src="/logos/abiomed.png"
                width={200}
                height={100}
                alt="ePD Logo"
                className={styles.client__logo}
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/logos/drager.png"
                width={200}
                height={100}
                alt="ePD Logo"
                className={styles.client__logo}
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/logos/ss.png"
                width={200}
                height={100}
                alt="ePD Logo"
                className={styles.client__logo}
              />
            </div>

            <div className="flex items-center justify-center">
              <Image
                src="/logos/ffda.png"
                width={200}
                height={100}
                alt="ePD Logo"
                className={`${styles.client__logo} ${styles["client__logo--ff"]}`}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Clients;
