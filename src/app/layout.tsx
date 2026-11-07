import type { Metadata, Viewport } from "next";
import { Playfair_Display, Cormorant_Garamond, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
  weight: ["500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1.0,
  themeColor: "#F8F6F0",
};

export const metadata: Metadata = {
  title: "Gurupavan B R — Modern Ledger | Broadsheet Edition",
  description:
    "Official professional portfolio and candidate folio for Gurupavan B R. Commerce & Data Analytics, Voya Financial Reconciliation Associate, Avenue Supermarts cashier tenure, and BCU honors graduate.",
  keywords: [
    "Gurupavan B R",
    "Portfolio",
    "Data Analytics",
    "Voya Financial",
    "Commerce",
    "Finance",
    "Reconciliation",
    "Bengaluru",
  ],
  authors: [{ name: "Gurupavan B R" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${playfair.variable} ${cormorant.variable} ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-surface text-primary antialiased selection:bg-secondary selection:text-white min-h-screen flex flex-col font-sans text-sm">
        {children}
      </body>
    </html>
  );
}
