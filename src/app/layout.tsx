import type { Metadata } from "next";
import { Geist, Geist_Mono ,Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const poppins=Poppins({
  variable: "--font-poppins",
  weight:["200","400","600"],
  subsets:["latin"]
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Abhrant Singh",
  description: "Portfolio website - Abhrant Singh",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
