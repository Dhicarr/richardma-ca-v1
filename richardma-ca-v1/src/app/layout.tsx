import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import "./Css/animation.css";
import GoogleAnalytics from "./GoogleAnalytics";

const raleway = Raleway({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Richard Ma",
  description: "Personal Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleAnalytics GA_TRACKING_ID={process.env.GA_TRACKING_ID as string} />
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
