import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
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
  weight: ["400", "500", "700"],
});

const SEO_CONFIG = {
  title: "Belício Cardoso — Engenheiro de Software | Arquiteto de Sistemas",
  description:
    "24 anos de experiência em Engenharia de Software. Especialista em Fullstack, NestJS, DevOps e Observabilidade. Criador de My Time Trace e FinDomini.",
  keywords: [
    "Engenheiro de Software",
    "Fullstack Developer",
    "NestJS Expert",
    "DevOps",
    "Arquiteto de Sistemas",
    "Belício Cardoso",
    "Belício Batista Cardoso",
    "Bahia",
  ],
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL || "https://belicio.bcardoso.nom.br",
};

export const metadata: Metadata = {
  title: SEO_CONFIG.title,
  description: SEO_CONFIG.description,
  keywords: SEO_CONFIG.keywords,
  authors: [{ name: "Belício Batista Cardoso" }],
  creator: "Belício Batista Cardoso",
  metadataBase: new URL(SEO_CONFIG.baseUrl),
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: SEO_CONFIG.baseUrl,
    siteName: "Belício Cardoso — Software Engineer",
    title: "Belício Cardoso — Arquiteto de Soluções",
    description: SEO_CONFIG.description,
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Belício Cardoso — 24 Anos de Engenharia de Software",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Belício Cardoso — Engenheiro de Software",
    description: "24 anos transformando código em impacto de negócio",
    images: ["/og-image.png"],
    creator: "@beliciocardoso",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: SEO_CONFIG.baseUrl,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt-BR"
      className={`${inter.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#020617" />
      </head>
      <body className="min-h-screen flex flex-col">
        <a href="#main-content" className="skip-link">
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  );
}
