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
      </head>
      <body className={`${poppins.className} `}>
        <Navigation></Navigation>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
