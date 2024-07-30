import React from "react";
import {
  FaFolderOpen,
  FaUserCog,
  FaSlideshare,
  FaChalkboardTeacher,
  FaGlobe,
  FaShareAlt,
  FaShieldAlt,
  FaFileAlt,
  FaBell,
} from "react-icons/fa";

const Farisbenefits = () => {
  const featuresData = [
    {
      title: "Master File Management",
      paragraph:
        "Sync master slides from server to users, preventing modification of approved content and creating a central hub for users to find and share brand assets.",
      icon: FaFolderOpen,
    },
    {
      title: "Tailored User Experience",
      paragraph:
        "Users can customize their view with favorites, recently viewed, recently shared, recently created, and other bespoke categories.",
      icon: FaUserCog,
    },
    {
      title: "Dynamic Presentations",
      paragraph:
        "Create engaging presentations using pre-approved brand templates and a custom sketch markup tool.",
      icon: FaSlideshare,
    },
    {
      title: "Interactive Training Hub",
      paragraph:
        "Seamlessly integrate with Learning Management Systems to certify users on FARIS usage.",
      icon: FaChalkboardTeacher,
    },
    {
      title: "Global Language Support",
      paragraph:
        "Multilingual and regional support ensures accessibility and usability for global teams.",
      icon: FaGlobe,
    },
    {
      title: "Secure Content Sharing",
      paragraph:
        "Safely share and publish brand-approved content internally and externally through secure links or restricted portals.",
      icon: FaShareAlt,
    },
    {
      title: "Advanced Security Measures",
      paragraph:
        "Protect your digital assets with robust security features, including MFA and SSO integration.",
      icon: FaShieldAlt,
    },
    {
      title: "Versatile Asset Support",
      paragraph:
        "Manage and store various asset types, including images, videos, documents, and more.",
      icon: FaFileAlt,
    },
    {
      title: "Smart Notifications and Access",
      paragraph:
        "Receive push notifications, enjoy cross-device compatibility, offline access, and downloadable content.",
      icon: FaBell,
    }
  ];

  const featuresSection = featuresData.map((feature, index) => {
    const IconComponent = feature.icon;

    return (
      <>
      

        <div  key={index} className="space-y-3">
          <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
        
            <IconComponent className="h-6 w-6" />
           
          </span>
          <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
            {feature.title}
          </h1>
          <p className="text-gray-500 dark:text-gray-300">
              {feature.paragraph}
          </p>
          {/* <a
            href="#"
            className="-mx-1 inline-flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
          >
            <span className="mx-1">read more</span>
            <svg
              className="mx-1 h-4 w-4 rtl:-scale-x-100"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a> */}
        </div>
      </>
    );
  });

  return (
    <>
      <section className="bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 py-10">
          <h1 className="capitalizera text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">
            {/* explore our <br /> awesome{" "} */}

            Discover FARIS {" "}
            <span className="underline decoration-blue-500">Features</span>
          </h1>
          <p className="mt-4 text-gray-500 xl:mt-6 dark:text-gray-300">
          Streamline Your Workflows with These Powerful Capabilities
          </p>
          <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 xl:mt-12 xl:grid-cols-3 xl:gap-16">
        {featuresSection}

            {/* <div className="space-y-3">
              <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                </svg>

                <FaFolderOpen className="h-6 w-6" />
              </span>
              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                Copy &amp; paste components
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
     

                <FaUserCog className="h-6 w-6" />
              </span>
              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                Zero Configuration
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                New Components Every month
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                elegant Dark Mode
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                Easy to customiztions
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div>
            <div className="space-y-3">
              <span className="inline-block rounded-full bg-blue-100 p-3 text-blue-500 dark:bg-blue-500 dark:text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                  />
                </svg>
              </span>
              <h1 className="text-xl font-semibold capitalize text-gray-700 dark:text-white">
                Simple &amp; clean designs
              </h1>
              <p className="text-gray-500 dark:text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Provident ab nulla quod dignissimos vel non corrupti doloribus
                voluptatum eveniet
              </p>
              <a
                href="#"
                className="-mx-1 inline-flex transform items-center text-sm capitalize text-blue-500 transition-colors duration-300 hover:text-blue-600 hover:underline dark:text-blue-400 dark:hover:text-blue-500"
              >
                <span className="mx-1">read more</span>
                <svg
                  className="mx-1 h-4 w-4 rtl:-scale-x-100"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default Farisbenefits;
