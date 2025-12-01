import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "LPK Kiwamaru Academy",
  description: "Lembaga Pelatihan Kerja Kiwamaru Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${interTight.variable} antialiased`}
      >
        <Navbar />
        <main className="flex flex-col justify-center">
         {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
