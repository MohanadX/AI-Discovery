import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { SiteFooter } from "@/components/layout/SiteFooter";
import { QueryProvider } from "@/components/providers/QueryProvider";
import { GoUpButton } from "@/components/go-up-button";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "AI Discovery — Find the Best AI Tools",
    template: "%s | AI Discovery",
  },
  description:
    "Discover, compare, and evaluate the best AI tools, models, and products. A curated public directory for AI builders and enthusiasts.",
  keywords: ["AI tools", "artificial intelligence", "AI directory", "LLM", "machine learning"],
  themeColor: "#000000",
  openGraph: {
    type: "website",
    title: "AI Discovery",
    description: "Find the best AI tools in one place.",
    siteName: "AI Discovery",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full`}
    >
      <body
        className="flex min-h-full flex-col antialiased"
        style={{ backgroundColor: "var(--color-background)", color: "var(--color-foreground)" }}
      >
        <QueryProvider>
          <SiteHeader />
          <main className="flex flex-1 flex-col">{children}</main>
          <GoUpButton />
          <SiteFooter />
        </QueryProvider>
      </body>
    </html>
  );
}
