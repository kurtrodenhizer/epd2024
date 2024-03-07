
import React from "react";
import Image from "next/image";
import Link from "next/link";

const AboutSection = () => {
  return (
    <section className="py-32 bg-gray-100">
      <div className="container mx-auto text-center lg:text-left ">
        <div className="flex grid items-center grid-cols-1 lg:grid-cols-2 ">
          <div className="relative  h-96   lg:h-[120%] lg:w-[110%] lg:order ">
            <Image
              src="/about/deposit1.jpg"
              alt="person working at desk"
              fill
              quality={100}
              className=" rounded-lg shadow-lg object-cover "
              style={{
                filter: "sepia(100%) hue-rotate(180deg) saturate(200%)",
              }}
            />
          </div>
          <div className="mb-12 lg:mb-0">
            <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-ml-">
              <h2 className=" text-3xl font-bold text-gray-800">About Us</h2>
              <p className="mb-8 mt-2 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                We help businesses adapt to the ever-changing digital landscape.
              </p>
              <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                We specialize in providing cost-effective solutions that help
                businesses stay ahead of the curve and adapt to the latest
                digital trends and technologies. With our competitive pricing
                and proven track record, ePD is the ideal partner for businesses
                looking to thrive in the digital age.
              </p>
              <Link href="/contact">
                <button className="py-2.5 mt-8  px-5 me-2  mb-2 text-md font-medium text-white focus:outline-none bg-teal rounded-full border border-teal  hover:bg-hoverteal focus:font-semibold focus:border-blue-500">
                  Learn More
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