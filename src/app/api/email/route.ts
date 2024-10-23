// import { type NextRequest, NextResponse } from "next/server";
// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";
// import mailchimp from "@mailchimp/mailchimp_marketing";

// // Configure Mailchimp
// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_API_KEY,
//   server: process.env.MAILCHIMP_API_SERVER, // e.g. us22
// });

// export async function POST(request: NextRequest) {
//   const { email, name, message } = await request.json();

//   // Validate email input
//   if (!email) {
//     return NextResponse.json({ error: "Email is required" }, { status: 400 });
//   }

//   // Configure nodemailer
//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.MY_EMAIL,
//       pass: process.env.MY_PASSWORD,
//     },
//   });

//   const mailOptions: Mail.Options = {
//     from: process.env.MY_EMAIL,
//     to: process.env.MY_EMAIL,
//     cc: "carli.t.smith1@gmail.com",
//     subject: `Message from ${name} (${email})`,
//     text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
//   };

//   // Function to send email
//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email sent");
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   // Function to add email to Mailchimp
//   const addToMailchimp = async (email: string) => {
//     try {
//       const audienceId = process.env.MAILCHIMP_AUDIENCE_ID!;
//       const res = await mailchimp.lists.addListMember(audienceId, {
//         email_address: email,
//         status: "subscribed",
//       });
//       return res;
//     } catch (error: any) {
//       console.error("Error adding email to Mailchimp:", error.response ? error.response.text : error.message);
//       throw new Error("Failed to add email to Mailchimp");
//     }
//   };

//   try {
//     await sendMailPromise(); // Send the email
//     await addToMailchimp(email); // Add email to Mailchimp audience
//     return NextResponse.json({ message: "Email sent and added to Mailchimp" });
//   } catch (err) {
//     return NextResponse.json({ error: err.message }, { status: 500 });
//   }
// }


import { type NextRequest, NextResponse } from "next/server";

import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  const transport = nodemailer.createTransport({
    service: "gmail",
    /* 
      setting service as 'gmail' is same as providing these setings:
      host: "smtp.gmail.com",
      port: 465,
      secure: true
      If you want to use a different email provider other than gmail, you need to provide these manually.
      Or you can go use these well known services and their settings at
      https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
  */
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    cc: "carli.t.smith1@gmail.com",
    // cc: email, (uncomment this line if you want to send a copy to the sender)
    subject: `Message from ${name} (${email})`,
    // text: message,
    text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
  };

  const sendMailPromise = () =>
    new Promise<string>((resolve, reject) => {
      transport.sendMail(mailOptions, function (err) {
        if (!err) {
          resolve("Email sent");
        } else {
          reject(err.message);
        }
      });
    });


  try {
    await sendMailPromise();

    return NextResponse.json({ message: "Email sent" });
  } catch (err) {
    return NextResponse.json({ error: err }, { status: 500 });
  }
}

// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";
// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

// export async function POST(request: NextRequest) {
//   const { email, name, message } = await request.json();

//   // Mailchimp API configuration
//   const mailchimpAPIKey = process.env.MAILCHIMP_API_KEY;
//   const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;
//   const DC = mailchimpAPIKey.split('-')[1]; // Data Center based on your API key


//   const mailchimpUrl = `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

//   // Add user to Mailchimp Audience
//   try {
//     await axios.post(
//       mailchimpUrl,
//       {
//         email_address: email,
//         status: "subscribed", // "subscribed" to add them to the list
//         merge_fields: {
//           FNAME: name,
//         },
//       },
//       {
//         headers: {
//           Authorization: `apikey ${mailchimpAPIKey}`,
//         },
//       }
//     );
//   } catch (err) {
//     return NextResponse.json({ error: "Error adding to Mailchimp" }, { status: 500 });
//   }

//   // Nodemailer email notification setup
//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.MY_EMAIL,
//       pass: process.env.MY_PASSWORD,
//     },
//   });

//   const mailOptions: Mail.Options = {
//     from: process.env.MY_EMAIL,
//     to: process.env.MY_EMAIL,
//     cc: "carli.t.smith1@gmail.com",
//     subject: `Message from ${name} (${email})`,
//     text: `Name: ${name} \nEmail: ${email} \nMessage: ${message}`,
//   };

//   const sendMailPromise = () =>
//     new Promise<string>((resolve, reject) => {
//       transport.sendMail(mailOptions, function (err) {
//         if (!err) {
//           resolve("Email sent");
//         } else {
//           reject(err.message);
//         }
//       });
//     });

//   try {
//     await sendMailPromise();
//     return NextResponse.json({ message: "Email sent and user added to Mailchimp" });
//   } catch (err) {
//     return NextResponse.json({ error: "Error sending email" }, { status: 500 });
//   }
// }




