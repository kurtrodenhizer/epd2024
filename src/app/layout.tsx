import type { Metadata } from "next";
import "./globals.css";

import { poppins } from "@/app/ui/fonts";
import Navigation from "./ui/navbar/navigation";
import FooterNew from "./ui/footer/footerNew";
import FooterNew2 from "./ui/footer/footerNew2";

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
      <body className={`${poppins.className} `}>
        <Navigation></Navigation>

        {children}

        <FooterNew></FooterNew>
        {/* <FooterNew2></FooterNew2> */}
      </body>
    </html>
  );
}
