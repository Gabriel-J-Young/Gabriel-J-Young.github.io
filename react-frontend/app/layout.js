import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./navbar.module.css"

import TopNav from "./ui/topnav";

import localFont from 'next/font/local';
import React from "react";

const casFont = localFont({src: './ui/fonts/Cascadia-Mono-PL-SemiLight-350.otf'});


export const metadata = {
  title: "Gabriel Young's Portfolio",
  description: "Gabriel Young's Portfolio description",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={casFont.className}>
        <TopNav className={styles['nav-bar']} />
        {children}
        </body>
    </html>
  );
}
