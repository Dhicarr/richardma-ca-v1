import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "./Css/animation.css";

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
