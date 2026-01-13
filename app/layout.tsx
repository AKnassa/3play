import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "3Play Impact | University Accessibility Calculator",
  description:
    "Understand your university's accessibility investment in under 5 minutes. Know exactly what compliance costs, who benefits, and your timeline—without talking to sales.",
  keywords: [
    "accessibility",
    "university",
    "captioning",
    "compliance",
    "Title II",
    "ADA",
    "WCAG",
  ],
  openGraph: {
    title: "3Play Impact | University Accessibility Calculator",
    description:
      "Get your personalized accessibility impact report in under 5 minutes.",
    type: "website",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
