// import { type NextRequest, NextResponse } from "next/server";
// import axios from "axios";

// import nodemailer from "nodemailer";
// import Mail from "nodemailer/lib/mailer";

// export async function POST(request: NextRequest) {
//   const { email, name, message } = await request.json();

//   const transport = nodemailer.createTransport({
//     service: "gmail",
//     /* 
//       setting service as 'gmail' is same as providing these setings:
//       host: "smtp.gmail.com",
//       port: 465,
//       secure: true
//       If you want to use a different email provider other than gmail, you need to provide these manually.
//       Or you can go use these well known services and their settings at
//       https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
//   */
//     auth: {
//       user: process.env.MY_EMAIL,
//       pass: process.env.MY_PASSWORD,
//     },
//   });

//   const mailOptions: Mail.Options = {
//     from: process.env.MY_EMAIL,
//     to: process.env.MY_EMAIL,
//     cc: "carli.t.smith1@gmail.com",
//     // cc: email, (uncomment this line if you want to send a copy to the sender)
//     subject: `Message from ${name} (${email})`,
//     // text: message,
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
//     return NextResponse.json({ message: "Email sent" });
//   } catch (err) {
//     return NextResponse.json({ error: err }, { status: 500 });
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
  const { email, name, message } = await request.json();

  // Mailchimp API configuration
  const mailchimpAPIKey = process.env.MAILCHIMP_API_KEY;
  const mailchimpAudienceId = process.env.MAILCHIMP_AUDIENCE_ID;
  const mailchimpServerPrefix = process.env.MAILCHIMP_SERVER_PREFIX; // This is the first part of your API key (e.g., us1)

  const mailchimpUrl = `https://${mailchimpServerPrefix}.api.mailchimp.com/3.0/lists/${mailchimpAudienceId}/members`;

  // Add user to Mailchimp Audience
  try {
    await axios.post(
      mailchimpUrl,
      {
        email_address: email,
        status: "subscribed", // "subscribed" to add them to the list
        merge_fields: {
          FNAME: name,
        },
      },
      {
        headers: {
          Authorization: `apikey ${mailchimpAPIKey}`,
        },
      }
    );
  } catch (err) {
    return NextResponse.json({ error: "Error adding to Mailchimp" }, { status: 500 });
  }

  // Nodemailer email notification setup
  const transport = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });

  const mailOptions: Mail.Options = {
    from: process.env.MY_EMAIL,
    to: process.env.MY_EMAIL,
    cc: "carli.t.smith1@gmail.com",
    subject: `Message from ${name} (${email})`,
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
    return NextResponse.json({ message: "Email sent and user added to Mailchimp" });
  } catch (err) {
    return NextResponse.json({ error: "Error sending email" }, { status: 500 });
  }
}
