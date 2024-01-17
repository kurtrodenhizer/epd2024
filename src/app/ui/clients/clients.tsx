import React from "react";
import styles from "./clients.module.css";
import Image from "next/image";

const Clients = () => {
  return (
    <>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8  mx-auto max-w-screen-xl px-4">
          {/* <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 dark:text-white md:text-4xl">
            You’ll be in good company
          </h2> */}
          <h1 className={`${styles.clients__header} ${styles.title}`}>
            Trusted Clients
          </h1>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8 text-gray-500 sm:gap-12 md:gap-16 lg:gap-20 dark:text-gray-400 bg-orange justify-items-center">
            <div class="flex items-center justify-center">
              <Image
                src="/logos/abiomed.png"
                width={200}
                height={100}
                alt="ePD Logo"
                className={styles.client__logo}
              />
            </div>

            <div class="flex items-center justify-center">
              <Image
                src="/logos/drager.png"
                width={200}
                height={100}
                alt="ePD Logo"
                className={styles.client__logo}
              />
            </div>

            <div class="flex items-center justify-center">
              <Image
                src="/logos/ss.png"
                width={200}
                height={100}
                alt="ePD Logo"
                className={styles.client__logo}
              />
            </div>

            <div class="flex items-center justify-center">
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

      {/* <div>
        <section className="px-4 py-24 mx-auto max-w-7xl">
          <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase">We’re proud to have played a part in these amazing journeys.</h1>
          <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
            <div className="flex items-center justify-center">
              <img src="/logos/todoist.svg" alt="Todoist Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/slack-icon.svg" alt="Slack Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/typeform.svg" alt="Typeform Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/algolia.svg" alt="Algolia Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/postcss.svg" alt="Postcss Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/tailwindcss.svg" alt="TailwindCSS Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/discord.svg" alt="Discord Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/vimeo.svg" alt="Vimeo Logo" className="block object-contain h-12" />
            </div>
          </div>
        </section>
       
        Design
        Code
        Copy Code
        Update Component Width
      </div> */}

      {/* <section className="px-4 py-24 mx-auto max-w-7xl bg-white ">
          <h1 className="mb-12 text-sm font-bold tracking-wide text-center text-gray-800 uppercase">We’re proud to have played a part in these amazing journeys.</h1>
          <div className="grid grid-cols-2 gap-10 text-center lg:grid-cols-8">
            <div className="flex items-center justify-center">
              <img src="/logos/todoist.svg" alt="Todoist Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/slack-icon.svg" alt="Slack Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/typeform.svg" alt="Typeform Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/algolia.svg" alt="Algolia Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/postcss.svg" alt="Postcss Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/tailwindcss.svg" alt="TailwindCSS Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/discord.svg" alt="Discord Logo" className="block object-contain h-12" />
            </div>
            <div className="flex items-center justify-center">
              <img src="/logos/vimeo.svg" alt="Vimeo Logo" className="block object-contain h-12" />
            </div>
          </div>
        </section> */}
    </>
  );
};

export default Clients;
