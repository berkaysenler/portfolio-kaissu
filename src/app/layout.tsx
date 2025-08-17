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

export const metadata: Metadata = {
  title: "Berkay Senler | Software Engineer Portfolio",
  description: "Graduate Software Engineer specializing in modern web technologies. View my projects, skills, and experience in full-stack development.",
  keywords: "software engineer, web developer, React, TypeScript, Next.js, portfolio",
  authors: [{ name: "Berkay Senler" }],
  creator: "Berkay Senler",
  publisher: "Berkay Senler",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://berkaysenler.dev",
    title: "Berkay Senler | Software Engineer Portfolio",
    description: "Graduate Software Engineer specializing in modern web technologies. View my projects, skills, and experience in full-stack development.",
    siteName: "Berkay Senler Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Berkay Senler | Software Engineer Portfolio",
    description: "Graduate Software Engineer specializing in modern web technologies. View my projects, skills, and experience in full-stack development.",
    creator: "@berkaysenler",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
