// Import the necessary types from next-seo
import type { NextSeoProps } from "next-seo";

// Import the required styles and components
import "./globals.css";
import Head from "next/head";
import Favicon from "../assets/logos/airbnb_logo.svg";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Define metadata using NextSeoProps
export const metadata: NextSeoProps = {
  title: "Airbnb Clone",
  description: "Created by Nikhil",
  openGraph: {
    type: "website",
    url: "https://your-website-url.com",
    site_name: "Your Site Name",
    images: [
      {
        url: "https://your-website-url.com/og-image.jpg",
        alt: "Og Image Alt",
      },
    ],
  },
};

// Define the layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Use the Head component from next/head */}
      <Head>
        {/* Set the favicon */}
        <link rel="icon" href={Favicon} type="image/svg+xml" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body>
        {/* Navbar */}
        <Navbar />
        {children}
        {/* Footer */}
        <Footer />
      </body>
    </div>
  );
}
