import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ryan Clark Creates | Books, Records, Art & Photography",
  description: "Author, record label founder, and visual artist. Explore books from Ghost Writer Press, vinyl from Hookworm Records, and original artwork.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased bg-neutral-950 text-neutral-100`}
      >
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
