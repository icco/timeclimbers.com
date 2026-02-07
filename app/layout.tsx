import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TimeClimbers - Web & Mobile App Development",
  description: "Building exceptional web and mobile applications for businesses of all sizes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
