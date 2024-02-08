import type { Metadata } from "next";
import { Source_Sans_3, Raleway } from "next/font/google";
import "./globals.css";


const ss3 = Source_Sans_3({ subsets: ['latin'] })
const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Richard Ma",
  description: "Generated with Next.JS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
