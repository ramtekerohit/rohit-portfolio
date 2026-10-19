import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  "http://localhost:3000";

export const metadata: Metadata = {

  metadataBase: new URL("https://YOUR-DEPLOYED-DOMAIN.vercel.app"),

  alternates: {
    canonical: "/",
  },

  title: {
    default: "Rohit Ramteke | Frontend Developer",
    template: "%s | Rohit Ramteke",
  },

  description:
    "Explore Rohit Ramteke's portfolio featuring responsive web development, React, Next.js, UI implementation, and modern frontend projects.",

  applicationName: "Rohit Ramteke Portfolio",

  authors: [
    {
      name: "Rohit Ramteke",
    },
  ],

  creator: "Rohit Ramteke",

  keywords: [
    "Rohit Ramteke",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "Responsive Web Development",
    "Freelance Web Developer",
    "Portfolio",
  ],

  openGraph: {
    title: "Rohit Ramteke | Frontend Developer",
    description:
      "Discover my web development projects, frontend skills, and services for building responsive websites.",
    siteName: "Rohit Ramteke Portfolio",
    type: "website",
    locale: "en_IN",
  },

  twitter: {
    card: "summary_large_image",
    title: "Rohit Ramteke | Frontend Developer",
    description:
      "Explore my portfolio, projects, and frontend development services.",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
