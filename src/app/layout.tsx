import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono, Open_Sans } from "next/font/google";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { site } from "@/content/site";
import { getSiteUrl } from "@/lib/site-url";
import { themeInitScript } from "@/lib/theme";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

// Wordmark only: matches the lettering of the Tevonax logo.
const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: "800",
  display: "swap",
});

const title = `${site.name} | Software Company`;

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: { default: title, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "Tevonax",
    "software company",
    "web development",
    "mobile app development",
    "custom software",
    "UI/UX design",
  ],
  authors: [{ name: site.name }],
  creator: site.name,
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title,
    description: site.description,
    url: "/",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  colorScheme: "light dark",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    // suppressHydrationWarning: the inline script sets data-theme/class before React hydrates.
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${jetbrainsMono.variable} ${openSans.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="flex min-h-full flex-col bg-canvas font-sans text-ink antialiased">
        <a
          href="#main"
          className="sr-only z-[60] bg-ink text-sm font-medium text-canvas focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:px-5 focus:py-3"
        >
          Skip to content
        </a>
        <Header />
        <main id="main" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
