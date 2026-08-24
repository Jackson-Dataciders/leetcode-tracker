import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LeetCode Tracker",
  description: "Track your progress through 365 curated LeetCode problems.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-mocha-base text-mocha-text min-h-screen">
        <main className="max-w-4xl mx-auto px-4 py-8">{children}</main>
      </body>
    </html>
  );
}
