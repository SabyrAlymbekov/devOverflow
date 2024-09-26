import type { Metadata } from "next";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import {
  ClerkProvider,
} from '@clerk/nextjs'
import "./globals.css";
import React from "react";
import { ThemeProvider } from "@/context/ThemeContext";

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-inter'
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-spaceGrotesk'
});

export const metadata: Metadata = {
  title: "DevLimits",
  description: "A community driven platform for asking and answering programming questions. Get Help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
  icons: {
    icon: '/assets/images/site-logo.png'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html lang="en">
        <body className={`${inter.variable} ${spaceGrotesk.variable}`}>
        <ClerkProvider appearance={
            {
              elements: {
                formButtonPrimary: 'primary-gradient',
                footerActionLink: 'primary-text-gradient hover:text-primary-500',
              }
            }
          }>
            <ThemeProvider>
              {children}
            </ThemeProvider>
          </ClerkProvider>
        </body>
      </html>
  );
}
