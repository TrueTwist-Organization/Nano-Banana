import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Nano Banana | Premium AI Prompt Library",
  description: "Discover, learn, and be inspired by the world's most creative AI prompt library. High-quality 3D art, cinematic portraits, and professional tutorials.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className={`${inter.className} min-h-screen flex flex-col bg-background text-foreground selection:bg-banana selection:text-black`}>
        <div className="noise" />
        {/* Scroll Progress Bar */}
        <div className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-banana via-yellow-500 to-orange-500 z-[60]" />
        
        <Navbar />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}


