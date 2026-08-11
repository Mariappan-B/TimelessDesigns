import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const instrument = Instrument_Serif({
  weight: "400",
  variable: "--font-instrument",
  subsets: ["latin"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://timeless.example.com"),
  title: {
    default: "Timeless Design — Objects that never needed redesign",
    template: "%s — Timeless Design",
  },
  description:
    "A digital archive of everyday objects whose designs have remained essentially unchanged. An exhibition of functional permanence.",
  keywords: [
    "design",
    "industrial design",
    "archive",
    "timeless objects",
    "product design",
    "material culture",
  ],
  openGraph: {
    title: "Timeless Design",
    description: "Objects that never needed redesign.",
    siteName: "Timeless Design",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0a",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${instrument.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ink text-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-coal focus:px-4 focus:py-2 focus:text-paper focus:outline focus:outline-brass"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
        <div className="grain" aria-hidden="true" />
      </body>
    </html>
  );
}
