import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Al-Nahian Hasan - Web Developer ",
  description: "Web Developer Based on Bangladesh",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="bg-black font-Product_Sans text-white overflow-clip">
          {children}
        </div>
      </body>
    </html>
  );
}
