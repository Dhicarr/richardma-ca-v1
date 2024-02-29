import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./Css/globals.css";
import "./Css/animation.css";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"

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
      <Analytics/>
      <SpeedInsights/>
      <body className={raleway.className}>{children}</body>
    </html>
  );
}
