import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@next/env";
// import { config } from "dotenv";
// config();

import Link from "next/link";
import { redirect } from "next/navigation";
import { userInfoStore } from "@/store/store";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header className="px-6 py-3 bg-gradient-to-t from-zinc-50 to-zinc-100">
          <nav className="flex items-center justify-between mx-auto max-w-[1000px] gap-6 *:flex *:items-center *:gap-4">
            <div>
              <Link href="/">Dashboard</Link>
              <Link href="/settings">Settings</Link>
            </div>
            <div>
              <a href="/">Source</a>
              <a href="/">About</a>
            </div>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
