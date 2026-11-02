
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import WelcomeLoader from "../components/WelcomeLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "U.P. Kirana Seva Samiti Balika Vidyalaya | Kanpur",
  description:
    "Official school website of U.P. Kirana Seva Samiti Balika Vidyalaya, Tatya Tope Nagar, Kanpur.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen`}
      >
        <WelcomeLoader>
          <Navbar />
          {children}
        </WelcomeLoader>
      </body>
    </html>
  );
}
