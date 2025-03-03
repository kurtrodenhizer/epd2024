
"use client";
import React, { useEffect } from 'react';

import { FC } from "react";
import { useForm } from "react-hook-form";
import { sendEmail } from "@/app/utils/send-email";
import Image from 'next/image';

export type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactPage2: FC = () => {

    useEffect(() => {
        const script1 = document.createElement('script');
        script1.src = '//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js';
        script1.async = true;
        document.body.appendChild(script1);
    
        const script2 = document.createElement('script');
        script2.innerHTML = `(function($) {window.fnames = new Array(); window.ftypes = new Array();fnames[1]='FNAME';ftypes[1]='text';fnames[2]='LNAME';ftypes[2]='text';fnames[6]='COMPANY';ftypes[6]='text';fnames[0]='EMAIL';ftypes[0]='email';fnames[3]='ADDRESS';ftypes[3]='address';fnames[4]='PHONE';ftypes[4]='phone';fnames[5]='BIRTHDAY';ftypes[5]='birthday';}(jQuery));var $mcj = jQuery.noConflict(true);`;
        document.body.appendChild(script2);
    
        return () => {
          document.body.removeChild(script1);
          document.body.removeChild(script2);
        };
      }, []);

  return (
   <div id="mc_embed_shell">
      <link href="//cdn-images.mailchimp.com/embedcode/classic-061523.css" rel="stylesheet" type="text/css" />
      <style type="text/css">
        {`
          #mc_embed_signup{background:#fff; clear:left; font:14px Helvetica,Arial,sans-serif; width: 600px;}
        `}
      </style>
      <div id="mc_embed_signup">
        <form
          action="https://eprocessdevelopment.us22.list-manage.com/subscribe/post?u=13e3af7234d6382b4047b4bbe&amp;id=4e2f13fb23&amp;f_id=0084d7e1f0"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
        >
          <div id="mc_embed_signup_scroll">
            <h2>Subscribe</h2>
            <div className="indicates-required">
              <span className="asterisk">*</span> indicates required
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-FNAME">First Name </label>
              <input type="text" name="FNAME" className="text" id="mce-FNAME" defaultValue="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-LNAME">Last Name </label>
              <input type="text" name="LNAME" className="text" id="mce-LNAME" defaultValue="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-COMPANY">Company </label>
              <input type="text" name="COMPANY" className="text" id="mce-COMPANY" defaultValue="" />
            </div>
            <div className="mc-field-group">
              <label htmlFor="mce-EMAIL">
                Email Address <span className="asterisk">*</span>
              </label>
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required defaultValue="" />
            </div>
            <div id="mce-responses" className="clear foot">
              <div className="response" id="mce-error-response" style={{ display: 'none' }}></div>
              <div className="response" id="mce-success-response" style={{ display: 'none' }}></div>
            </div>
            <div aria-hidden="true" style={{ position: 'absolute', left: '-5000px' }}>
              <input type="text" name="b_13e3af7234d6382b4047b4bbe_4e2f13fb23" tabIndex="-1" defaultValue="" />
            </div>
            <div className="optionalParent">
              <div className="clear foot">
                <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
                <p style={{ margin: '0px auto' }}>
                  <a href="http://eepurl.com/i1RDeI" title="Mailchimp - email marketing made easy and fun">
                    <span style={{ display: 'inline-block', backgroundColor: 'transparent', borderRadius: '4px' }}>
                      {/* <Image
                        className="refferal_badge"
                        src="https://digitalasset.intuit.com/render/content/dam/intuit/mc-fe/en_us/images/intuit-mc-rewards-text-dark.svg"
                        alt="Intuit Mailchimp"
                        style={{ width: '220px', height: '40px', display: 'flex', padding: '2px 0px', justifyContent: 'center', alignItems: 'center' }}
                      /> */}
                    </span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>


     
    
  );
};

export default ContactPage2;

