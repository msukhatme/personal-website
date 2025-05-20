"use client";

import type { Metadata } from 'next';
import { Inter, EB_Garamond } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const ebGaramond = EB_Garamond({
  subsets: ['latin'],
  variable: '--font-eb-garamond',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-gotham',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  // Common classes for main, includes vertical padding and flex properties
  const commonMainClasses = "py-8 flex-grow flex flex-col";
  // Classes for containing content on non-home pages
  const containedMainClasses = "container mx-auto px-6 sm:px-8 md:px-12 lg:px-16";
  // Background for home page
  const homePageBackgroundClasses = "bg-[url('/images/campus.jpg')] bg-cover bg-center bg-no-repeat px-0";

  return (
    <html lang="en" className={`${ebGaramond.variable} ${inter.variable}`}>
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="bg-uchicago-dark-gray text-uchicago-light-greystone selection:bg-uchicago-maroon selection:text-white flex flex-col min-h-screen">
        <Navbar />
        <main
          className={`${commonMainClasses} ${
            isHomePage ? homePageBackgroundClasses : containedMainClasses
          }`}
        >
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
