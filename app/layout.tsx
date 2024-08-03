"use client";

import { Inter } from "next/font/google";
import Script from "next/script";
import Head from "next/head"
import { useEffect } from 'react'
import AOS from "aos"

import 'aos/dist/aos.css'
import "/public/globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  useEffect(() => {
    AOS.init({
      once: true
    })
  })

  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Script src="https://unpkg.com/@lottiefiles/lottie-player@latest/dist/lottie-player.js" />
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
