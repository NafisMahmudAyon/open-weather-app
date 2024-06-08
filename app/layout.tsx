import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppinsR = Poppins({ weight: "400", style: "normal", subsets: ["latin"] });

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
      <body className={`${poppinsR.className} bg-zinc-200 dark:bg-gray-800 dark:text-gray-200 transition-all duration-300 ease-in-out`} >{children}</body>
    </html>
  );
}
