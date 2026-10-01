import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { BUSINESS, FULL_ADDRESS, SITE_URL } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const title = "Bicho Mimado | Pet Shop em Vitória da Conquista";
const description =
  "Rações, medicamentos, acessórios e produtos para cães e gatos em Vitória da Conquista. Entre em contato com a Bicho Mimado pelo WhatsApp.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description,
  applicationName: BUSINESS.name,
  keywords: [
    "pet shop Vitória da Conquista",
    "ração Vitória da Conquista",
    "delivery de ração",
    "medicamentos veterinários",
    "acessórios para cães e gatos",
    "Bicho Mimado",
    "Boa Vista Vitória da Conquista",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "/",
    siteName: BUSINESS.fullName,
    title,
    description,
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Bicho Mimado — Pet Shop em Vitória da Conquista" }],
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: ["/og.png"],
  },
  robots: { index: true, follow: true },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: "#0879b6",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "PetStore",
  name: BUSINESS.fullName,
  url: SITE_URL,
  image: `${SITE_URL}/og.png`,
  telephone: BUSINESS.phoneE164,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.street,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.state,
    postalCode: BUSINESS.zip,
    addressCountry: "BR",
  },
  areaServed: `${BUSINESS.city} - ${BUSINESS.state}`,
  sameAs: [BUSINESS.instagramUrl],
  hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(FULL_ADDRESS)}`,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Marca o documento como "com JS" antes da pintura, para as animações de entrada não piscarem */}
        <script dangerouslySetInnerHTML={{ __html: "document.documentElement.classList.add('js')" }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
