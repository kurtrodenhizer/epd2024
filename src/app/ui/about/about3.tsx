import React from 'react'
import Image from "next/image";
import Link from 'next/link';

export const About3 = () => {
  return (
    <>


        {/* Section: Design Block */}
        {/* <section className="py-32 bg-gray-100">
          
          <div className="container mx-auto text-center lg:text-left xl:px-32">
            <div className="flex grid items-center lg:grid-cols-2 ">
              <div className="mb-12 lg:mb-0">
                <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14">
                  <h2 className="mb-8 text-3xl font-bold">Enjoy the moment</h2>
                  <p className="mb-8 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
                    soluta corporis voluptate ab error quam dolores doloremque,
                    quae consectetur.
                  </p>
                  <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
                    <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best team
                    </p>
                    <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best quality
                    </p>
                    <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      Best experience
                    </p>
                  </div>
                  <p className="mb-0 text-neutral-500 dark:text-neutral-300">
                    In ac turpis justo. Vivamus auctor quam vitae odio feugiat
                    pulvinar. Sed semper ligula sed lorem tincidunt dignissim. Nam
                    sed cursus lectus. Proin non rutrum magna. Proin gravida,
                    justo et imperdiet tristique, turpis nisi viverra est, nec
                    posuere ex arcu sit amet erat. Sed a dictum sem. Duis pretium
                    condimentum nulla, ut aliquet erat auctor sed. Aenean
                    facilisis neque id ligula maximus scelerisque. Nunc sed velit
                    rhoncus, interdum dolor at, lacinia lacus. Proin eleifend
                    viverra posuere. Ut commodo risus lacus, ac scelerisque quam
                    aliquam dictum. Etiam dignissim pulvinar eros eget auctor.
                    Quisque congue turpis quis libero ullamcorper imperdiet.
                    Vivamus a orci maximus, dignissim ligula a, congue dui. Morbi
                    et lectus sit amet neque luctus viverra.
                  </p>
                </div>
              </div>
              <div>
                <img src="https://mdbcdn.b-cdn.net/img/new/ecommerce/vertical/117.jpg" className="w-full rounded-lg shadow-lg dark:shadow-black/20" alt="image" />
              </div>
            </div>
          </div>
    
        </section> */}
    <section className="py-32 bg-gray-100">
  {/* Jumbotron */}
  <div className="container mx-auto text-center lg:text-left ">
    <div className="flex grid items-center grid-cols-1 lg:grid-cols-2 ">
      <div
      className='relative  h-96   lg:h-[120%] lg:w-[110%] lg:order '>
       <Image
          
              src="/about/deposit1.jpg"
              alt="office content 1"
              fill
            //   width={600}
            //   height={600}
              quality={100}
              className=" rounded-lg shadow-lg object-cover " 
              style={{ filter: 'sepia(100%) hue-rotate(180deg) saturate(200%)' }}

            />
      </div>
      <div className="mb-12 lg:mb-0">
        <div className="relative z-[1] block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] backdrop-blur-[30px] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-ml-">
          <h2 className=" text-3xl font-bold text-gray-800">About Us</h2>
          <p className="mb-8 mt-2 pb-2 text-neutral-500 dark:text-neutral-300 lg:pb-0">
          We help businesses adapt to the ever-changing digital landscape.

          </p>

          {/* <div className="mx-auto mb-8 flex flex-col md:flex-row md:justify-around lg:justify-between">
            <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Best team
            </p>
            <p className="mx-auto mb-4 flex items-center md:mx-0 md:mb-2 lg:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Best quality
            </p>
            <p className="mx-auto mb-2 flex items-center md:mx-0 lg:mb-0">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="mr-2 h-5 w-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Best experience
            </p>
          </div> */}


          <p className="mb-0 text-neutral-500 dark:text-neutral-300">
          We specialize in providing cost-effective solutions that help
              businesses stay ahead of the curve and adapt to the latest digital
              trends and technologies. With our competitive pricing and proven
              track record, ePD is the ideal partner for businesses looking to
              thrive in the digital age.
              
    
             
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
  {/* Jumbotron */}
</section>
      

    </>
)}
