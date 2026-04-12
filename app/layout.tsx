import type { Metadata } from "next";
import {
  Inter,
  Space_Grotesk,
  Poppins,
  Noto_Serif,
  Source_Serif_4,
} from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { CustomCursor } from "@/components/custom-cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  weight: ["500", "600", "700"],
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  variable: "--font-noto-serif",
  subsets: ["latin"],
});

const sourceSerif4 = Source_Serif_4({
  variable: "--font-source-serif-4",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "The Kinetic Curator | Priyanshu Singh",
  description: "High-End Editorial Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${poppins.variable} ${notoSerif.variable} ${sourceSerif4.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-surface text-on-surface relative cursor-none">
        <CustomCursor />
        <div className="grain-overlay"></div>
        <main className="relative z-10 flex-1 flex flex-col">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
