import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@icco/react-common/ThemeProvider";
import { WebVitals } from "@icco/react-common/WebVitals";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timeclimbers.com"),
  title: {
    default: "TimeClimbers — Independent app studio",
    template: "%s · TimeClimbers",
  },
  description:
    "TimeClimbers is a small, senior app studio building exceptional web and mobile products for ambitious teams.",
  openGraph: {
    title: "TimeClimbers — Independent app studio",
    description:
      "We design, build, and ship web and mobile products for ambitious teams.",
    url: "https://timeclimbers.com",
    siteName: "TimeClimbers",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TimeClimbers — Independent app studio",
    description:
      "We design, build, and ship web and mobile products for ambitious teams.",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased font-sans bg-base-100 text-base-content">
        <ThemeProvider>
          <WebVitals analyticsPath="/analytics/timeclimbers" />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
