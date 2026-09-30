import type { Metadata } from "next";
import { serif, sans } from "@/lib/fonts";
import { site } from "@/data/site";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { JsonLd, localBusinessSchema, organizationSchema } from "@/lib/structured-data";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.spaceframearchitects.in"),
  title: {
    default: `${site.name} | Architecture & Design Studio in Indore`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "architects in Indore",
    "architecture firm in Indore",
    "residential architects Indore",
    "commercial architects Indore",
    "architects in Bhopal",
    "architects in Ujjain",
    "interior architecture Indore",
    "architectural design Madhya Pradesh",
  ],
  openGraph: {
    title: `${site.name} | Architecture & Design Studio in Indore`,
    description: site.description,
    url: "/",
    siteName: site.name,
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Architecture & Design Studio in Indore`,
    description: site.description,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" className={`${serif.variable} ${sans.variable}`}>
      <body className="bg-ivory text-charcoal antialiased">
        <JsonLd data={organizationSchema()} />
        <JsonLd data={localBusinessSchema()} />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-charcoal focus:text-ivory focus:px-4 focus:py-2 text-eyebrow text-xs"
        >
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
