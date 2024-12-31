import "@/css/globals.css";
import "swiper/css";
import "swiper/css/autoplay";

import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

import type { Metadata } from "next";
import { Nunito_Sans } from "next/font/google";
import { builder } from "@builder.io/sdk";
import { ScrollToTopButton } from "@/components/layout/scroll-up-button";
import { RenderBuilderContent } from "@/components/builder";

const nunitoSans = Nunito_Sans({
  variable: "--font-nunito-sans",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800", "1000"],
});

export const metadata: Metadata = {
  title: "Africa 2030 e.V",
  description: "Official website of the Africa2030 Association",
  keywords: [
    "africa",
    "2030",
    "unicef",
    "germany",
    "sustainable goals",
    "17",
    "end poverty",
    "promote education",
    "protect children",
    "children",
    "child",
    "boys",
    "girls",
    "environment",
  ],
};

builder.init(process.env.NEXT_PUBLIC_BUILDER_API_KEY!);

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const footer = await builder.get("footer");

  return (
    <html lang="en">
      <body className={`${nunitoSans.className} antialiased`}>
        {children}
        <ScrollToTopButton />
        {footer && <RenderBuilderContent content={footer} model="footer" />}
      </body>
    </html>
  );
}
