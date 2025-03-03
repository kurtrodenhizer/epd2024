// "use client";
// import React, { useEffect } from 'react';

// import { FC } from "react";
// import { useForm } from "react-hook-form";
// import { sendEmail } from "@/app/utils/send-email";
// import Image from 'next/image';

// export type FormData = {
//   name: string;
//   email: string;
//   message: string;
// };

// const ContactPage2: FC = () => {

//     useEffect(() => {
//         const script1 = document.createElement('script');
//         script1.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
//         script1.async = true;
//         document.body.appendChild(script1);

//         const script2 = document.createElement('script');
//         script2.innerHTML = `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='COMPANY';ftypes[6]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`;
//         document.body.appendChild(script2);

//         return () => {
//           document.body.removeChild(script1);
//           document.body.removeChild(script2);
//         };
//       }, []);

//   return (
//    <div id="mc_embed_shell">
//       <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
//       <style type="text/css">
//         {`
//           #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
//         `}
//       </style>
//       <div id="mc_embed_signup">
//         <form
//           action="https://eprocessdevelopment.us22.list-manage.com/subscribe/post?u=13e3af7234d6382b4047b4bbe&amp;id=4e2f13fb23&amp;f_id=0084d7e1f0"
//           method="post"
//           id="mc-embedded-subscribe-form"
//           name="mc-embedded-subscribe-form"
//           className="validate"
//           target="_blank"
//         >
//           <div id="mc_embed_signup_scroll">
//             <h2>Subscribe</h2>
//             <div className="indicates-required">
//               <span className="asterisk">*</span> indicates required
//             </div>
//             <div className="mc-field-group">
//               <label htmlFor="mce-FNAME">First Name </label>
//               <input type="text" name="FNAME" className="text" id="mce-FNAME" defaultValue="" />
//             </div>
//             <div className="mc-field-group">
//               <label htmlFor="mce-LNAME">Last Name </label>
//               <input type="text" name="LNAME" className="text" id="mce-LNAME" defaultValue="" />
//             </div>
//             <div className="mc-field-group">
//               <label htmlFor="mce-COMPANY">Company </label>
//               <input type="text" name="COMPANY" className="text" id="mce-COMPANY" defaultValue="" />
//             </div>
//             <div className="mc-field-group">
//               <label htmlFor="mce-EMAIL">
//                 Email Address <span className="asterisk">*</span>
//               </label>
//               <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required defaultValue="" />
//             </div>
//             <div id="mce-responses" className="clear foot">
//               <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
//               <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
//             </div>
//             <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
//               <input type="text" name="b_13e3af7234d6382b4047b4bbe_4e2f13fb23" tabIndex="-1" defaultValue="" />
//             </div>
//             <div className="optionalParent">
//               <div className="clear foot">
//                 <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
//                 <p style={{ margin: '0px auto' }}>
//                   <a href="http://eepurl.com/i1RDeI" title="Mailchimp - email marketing made easy and fun">
//                     <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
//                       {/* <Image
//                         className="refferal_badge"
//                         src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
//                         alt="Intuit Mailchimp"
//                         style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }}
//                       /> */}
//                     </span>
//                   </a>
//                 </p>
//               </div>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>

//   );
// };

// export default ContactPage2;

"use client";
import React, { useEffect } from "react";

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";
import Image from "next/image";
import Script from "next/script";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage2: FC = () => {
  // useEffect(() => {
  //     const script1 = document.createElement('script');
  //     script1.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
  //     script1.async = true;
  //     document.body.appendChild(script1);

  //     const script2 = document.createElement('script');
  //     script2.innerHTML = `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='COMPANY';ftypes[6]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`;
  //     document.body.appendChild(script2);

  //     return () => {
  //       document.body.removeChild(script1);
  //       document.body.removeChild(script2);
  //     };
  //   }, []);

  useEffect(() => {
    const script1 = document.createElement("script");
    script1.src = "https://code.jquery.com/jquery-3.6.0.min.js";
    script1.async = true;
    script1.onload = () => {
      const script2 = document.createElement("script");
      script2.innerHTML = `(function($) {
            window.fnames = new Array();
            window.ftypes = new Array();
            fnames[1]='FNAME';ftypes[1]='text';
            fnames[2]='LNAME';ftypes[2]='text';
            fnames[6]='COMPANY';ftypes[6]='text';
            fnames[0]='EMAIL';ftypes[0]='email';
            fnames[3]='ADDRESS';ftypes[3]='address';
            fnames[4]='PHONE';ftypes[4]='phone';
            fnames[5]='BIRTHDAY';ftypes[5]='birthday';
          }(jQuery));
          var $mcj = jQuery.noConflict(true);`;

      document.body.appendChild(script2);
    };

    document.body.appendChild(script1);

    return () => {
      document.body.removeChild(script1);
    };
  }, []);

  return (
    <>
      <Script
        src="https://code.jquery.com/jquery-3.6.0.min.js"
        strategy="beforeInteractive"
      />

      <section className="z-10 h-full min-h-[maxContent]  w-full bg-gray-100   md:py-20 ">
        <div className="mx-auto grid max-w-6xl grid-cols-1 px-6 md:grid-cols-2 md:divide-x lg:px-8 ">
          <div className="py-6 md:px-6 md:py-0">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pb-4 pt-2">
              Fill in the form to start a conversation
            </p>
            <div className="space-y-4">
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 text-teal sm:mr-6"
                >
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
                </svg>
                <span>1-781-910-2898</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 text-teal sm:mr-6"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
                <span>kurt@eprocessdevelopment.com</span>
              </p>
              <p className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="mr-2 h-5 w-5 text-teal sm:mr-6"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span>Beverly, MA</span>
              </p>
            </div>
          </div>

          <div id="mc_embed_shell">
            {/* <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" /> */}
            {/* <style type="text/css"> */}
            {/* {`
          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
        `} */}
            {/* </style> */}
            <div id="mc_embed_signup">
              <form
                action="https://eprocessdevelopment.us22.list-manage.com/subscribe/post?u=13e3af7234d6382b4047b4bbe&amp;id=4e2f13fb23&amp;f_id=0084d7e1f0"
                method="post"
                id="mc-embedded-subscribe-form"
                name="mc-embedded-subscribe-form"
                //   className="validate"
                target="_blank"
                className=" validate flex flex-col space-y-6 py-6 md:px-6 md:py-0"
                //   className="flex flex-col space-y-6 py-6 md:px-6 md:py-0"
              >
                {/* <div id="mc_embed_signup_scroll"
                
                > */}
                  {/* <h2>Subscribe</h2> */}
                  <div className="indicates-required">
                    {/* <span className="asterisk">*</span> indicates required */}
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-FNAME">First Name </label>
                    <input
                      type="text"
                      name="FNAME"
                      id="mce-FNAME"
                      defaultValue=""
                      //   className="text"
                      className="focus:ri focus:ri block w-full rounded-md px-4 py-3 shadow-sm focus:ring dark:bg-gray-800"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-LNAME">Last Name </label>
                    <input
                      type="text"
                      name="LNAME"
                      id="mce-LNAME"
                      defaultValue=""
                      //   className="text"
                      className="focus:ri focus:ri block w-full rounded-md px-4 py-3 shadow-sm focus:ring dark:bg-gray-800"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-COMPANY">Company </label>
                    <input
                      type="text"
                      name="COMPANY"
                    //   className="text"
                      id="mce-COMPANY"
                      defaultValue=""
                      className="focus:ri focus:ri block w-full rounded-md px-4 py-3 shadow-sm focus:ring dark:bg-gray-800"
                    />
                  </div>
                  <div className="mc-field-group">
                    <label htmlFor="mce-EMAIL">
                      Email Address <span className="asterisk">*</span>
                    </label>
                    <input
                      type="email"
                      name="EMAIL"
                    //   className="required email"
                      id="mce-EMAIL"
                      required
                      defaultValue=""
                      className="focus:ri focus:ri block w-full rounded-md px-4 py-3 shadow-sm focus:ring dark:bg-gray-800"

                    />
                  </div>
                  <div id="mce-responses" className="clear foot">
                    <div
                      className="response"
                      id="mce-error-response"
                      style={{ display: "none" }}
                    ></div>
                    <div
                      className="response"
                      id="mce-success-response"
                      style={{ display: "none" }}
                    ></div>
                  </div>
                  <div
                    aria-hidden="true"
                    style={{ position: "absolute", left: "-5000px" }}
                  >
                    <input
                      type="text"
                      name="b_13e3af7234d6382b4047b4bbe_4e2f13fb23"
                      tabIndex={-1}
                      //   tabIndex="-1"
                      defaultValue=""
                    />
                  </div>
                  <div className="optionalParent">
                    <div className="clear foot">
                      <input
                        type="submit"
                        name="subscribe"
                        id="mc-embedded-subscribe"
                        // className="button"
                        className=" text-md mb-2 me-2 mt-4 self-center rounded-full border  border-blue-400 bg-blue-600 px-10 px-8 py-2.5 py-3 font-medium text-white hover:bg-blue-500  focus:border-blue-500 focus:font-semibold focus:outline-none focus:ring "
                        value="Subscribe"
                      />

                      <p style={{ margin: "0px auto" }}>
                        <a
                          href="http://eepurl.com/i1RDeI"
                          title="Mailchimp - email marketing made easy and fun"
                        >
                          <span
                            style={{
                              display: "inline-block",
                              backgroundColor: "transparent",
                              borderRadius: "4px",
                            }}
                          >
                            {/* <Image
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }}
                      /> */}
                          </span>
                        </a>
                      </p>
                    {/* </div> */}
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactPage2;
