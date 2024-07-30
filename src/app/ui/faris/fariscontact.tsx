import React from "react";

const Fariscontact = () => {
  return (
    <>
      <div className="container mx-auto px-4 py-16 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-2xl font-semibold tracking-tight text-gray-800 xl:text-3xl dark:text-white">
          {/* Join us and get the update from anywhere */}
          Contact us now to request a demo and see FARIS in action.
        </h2>
        <div className="mt-8 lg:mt-0">
          <div className="flex flex-col space-y-3 sm:-mx-2 sm:flex-row sm:space-y-0">
            <input
              id="email"
              type="text"
              className="rounded-lg border border-gray-200 bg-white px-4 py-2 text-gray-700 focus:border-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40 sm:mx-2 dark:border-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:focus:border-blue-400"
              placeholder="Email Address"
            />
            <button className="fo transform rounded-lg bg-blue-600 px-6 py-2 text-sm capitalize tracking-wide text-white transition-colors duration-300 hover:bg-blue-500 focus:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80 sm:mx-2">
              Submit
            </button>
          </div>
          {/* <p className="mt-3 text-sm text-gray-500 dark:text-gray-300">
            Attention! Offer expires in 30 days. Make sure not to miss this
            opportunity
          </p> */}
        </div>
      </div>
    </>
  );
};

export default Fariscontact;
