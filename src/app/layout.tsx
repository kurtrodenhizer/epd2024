import type { Metadata } from "next";
import "./globals.css";

import { poppins } from "@/app/ui/fonts";
import Navigation from "./ui/navbar/navigation";
import Footer from "./ui/footer/Footer";
import Script from "next/script";

export const metadata: Metadata = {
  title: "eProcess Development",
  description:
    "ePD specializes in eLearning, Data and File Management, and Slide Asset Management designed to improve sales, education, business and marketing processes",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-8GVXX7YDD2"
        ></Script>
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8GVXX7YDD2');
          `}
        </Script>
        <Script id="mcjs">
          {`
            !function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/13e3af7234d6382b4047b4bbe/6c2bc79956f33e7c61a041566.js")
          `}

        </Script>
       
      </head>
      <body className={`${poppins.className} `}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
