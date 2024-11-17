import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import "@next/env";
import { Toaster } from "sonner";

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

const funnelDisplay = localFont({
  src: "./fonts/FunnelDisplayRegular.ttf",
  variable: "--font-funnel-display",
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nezerac",
  description: "AI Supply Chain App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${funnelDisplay.variable} antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
