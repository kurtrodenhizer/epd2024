import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="bg-gray-100 py-32">
      <div className="container mx-auto text-center lg:text-left ">
        <div className="flex grid grid-cols-1 items-center lg:grid-cols-2 ">
          <div className="lg:order  relative   h-96 lg:h-[120%] lg:w-[110%] ">
            <Image
              src="/about/deposit1.jpg"
              alt="person working at desk"
              fill
              quality={100}
              className=" object-c over 
              rounded-lg shadow-lg "
              style={{
                filter: "sepia(100%) hue-rotate(180deg) saturate(200%)",
              }}
            />
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="lg:-ml- relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] md:px-12 dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20">
              <h2 className=" text-3xl font-bold text-gray-800">About Us</h2>
              <p className="mb-8 mt-2 pb-2 text-neutral-500 lg:pb-0 dark:text-neutral-300">
                We help businesses adapt to the ever-changing digital landscape.
              </p>
              <p className="mb-0 mb-3 text-neutral-500 dark:text-neutral-300">
                We specialize in providing cost-effective solutions that help
                businesses stay ahead of the curve and adapt to the latest
                digital trends and technologies. With our competitive pricing
                and proven track record, ePD is the ideal partner for businesses
                looking to thrive in the digital age.
              </p>
              <Link href="/about" className="">
                {/* <button className="text-md mb-2  me-2 mt-8  rounded-full border border-teal bg-teal px-5 py-2.5 font-medium text-white hover:bg-hoverteal  focus:border-blue-500 focus:font-semibold focus:outline-none">
                  Learn More
                </button> */}
                <button
                  className="text-md mb-2 mt-4 rounded-full bg-blue-600  px-5   py-2.5 text-white  duration-300   hover:bg-blue-500 focus:font-semibold focus:font-semibold focus:ring focus:ring-blue-300 focus:ring-opacity-80
                  "
                  // className="inline-flex w-full items-center justify-center rounded-lg  bg-blue-600 px-6 py-2 text-white duration-300 hover:bg-blue-500 focus:font-semibold focus:ring focus:ring-blue-300 focus:ring-opacity-80"

                  aria-label="Link to About Page"
                >
                  Learn More About Us
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
