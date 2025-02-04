// import mailchimp from "@mailchimp/mailchimp_marketing";

// mailchimp.setConfig({
//   apiKey: process.env.MAILCHIMP_API_KEY,
//   server: process.env.MAILCHIMP_API_SERVER,
// });

// export async function POST(request: Request) {
//   const { email } = await request.json();

//   if (!email) {
//     return new Response(JSON.stringify({ error: "Email is required" }), { status: 400 });
//   }

//   try {
//     const res = await mailchimp.lists.addListMember(
//       process.env.MAILCHIMP_AUDIENCE_ID!,
//       { email_address: email, status: "subscribed" }
//     );

//     return new Response(JSON.stringify({ res }));
//   } catch (error: any) {
//     console.error("Error adding email to Mailchimp:", error.response ? error.response.text : error.message);
//     return new Response(JSON.stringify({ error: "Failed to add email to Mailchimp" }), { status: 500 });
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