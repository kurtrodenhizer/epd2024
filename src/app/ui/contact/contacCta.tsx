import React from "react";

const ContacCta = () => {
  return (
    <>
      {/* <div className=" pt-5 relative h-[8rem] z-0 bg-gray-900">
     

        <svg 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 320"
        className="absolute   lg:bottom-[-70%]  2xl:bottom-[-105%]  z-0 "

        >
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,192L80,181.3C160,171,320,149,480,144C640,139,800,149,960,154.7C1120,160,1280,160,1360,160L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div> */}
      <div className=" relative h-[10rem] z-0  bg-gray-900">
        {/* <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="absolute  bottom-0 xl:bottom-[-30%]   z-0 "
    >
      <path
        fill="#f3f4f5"
        fill-opacity="1"
        d="M0,160L60,181.3C120,203,240,245,360,250.7C480,256,600,224,720,186.7C840,149,960,107,1080,106.7C1200,107,1320,149,1380,170.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg> */}

        {/* <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 1440 320"
    className="absolute  bottom-0 xl:bottom-[-30%]   z-0 "
    >
      
      <path fill="#f3f4f5" fill-opacity="1" d="M0,96L80,122.7C160,149,320,203,480,208C640,213,800,171,960,160C1120,149,1280,171,1360,181.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path>
      
    </svg> */}

        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="absolute  bottom-[-20%] xl:bottom-[-70%]   z-0 "
        >
          <path
            fill="#f3f4f5"
            fill-opacity="1"
            d="M0,128L60,138.7C120,149,240,171,360,170.7C480,171,600,149,720,144C840,139,960,149,1080,160C1200,171,1320,181,1380,186.7L1440,192L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div className="  z-0 bg-gray-100 ">
        <section className=" dark:bg-gray-900  z-10 pb-20 ">
          <div className="container flex flex-col items-center px-4 py-12 mx-auto text-center z-10 lg:pt-2 ">
            <h2 className="max-w-2xl mx-auto text-3xl md:text-4xl font-semibold tracking-tight text-gray-800 xl:text-5xl dark:text-white z-10">
              Let&apos;s work{" "}
              <span className="text-blue-500 text-teal">together</span>
            </h2>
            <p className="max-w-4xl mt-6 text-center text-gray-500 dark:text-gray-300 z-10">
              Tell us about your project and we&apos;ll arrange a free
              consultation call to discuss how we can help.
            </p>
            <div className="inline-flex w-full mt-6 sm:w-auto z-10">
              <button className="inline-flex items-center justify-center w-full px-6 py-2 text-white duration-300 bg-blue-600 rounded-lg hover:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Contact Us Today
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ContacCta;
