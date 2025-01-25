import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KiwiQ Mission Control",
  description: "AI-powered marketing intelligence platform",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${inter.className} min-h-screen bg-neutral-900 text-neutral-100`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
