import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import Chatbot from "@/components/chatbot";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Việt Nam Đổi Mới 2018–NAY",
  description: "Thành tựu Đổi mới Việt Nam giai đoạn 2018 đến nay",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="vi">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-red-50 via-amber-50 to-yellow-50 min-h-screen`}
      >
        <Navbar />
        {children}
        <Chatbot />

        <Footer />
      </body>
    </html>
  );
}
