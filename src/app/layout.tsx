import type { Metadata, Viewport } from "next";
import { Barlow, Inter } from "next/font/google";
import "./globals.css";


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Gleisbau MV",
  description:
  "Die GBMV GmbH ist Ihr zuverlässiger Partner für Gleisbau, Tiefbau und Infrastrukturprojekte in Mecklenburg-Vorpommern. Von Weichenbau bis Entwässerung – wir realisieren Bauprojekte mit höchster Präzision und Effizienz.",
  keywords:
  "Gleisbau MV, GBMV, Gleisbau Mecklenburg-Vorpommern, Weichenbau, Kranschienenbau, Schienenauswechslung, Tiefbau, Bahnbau, Infrastrukturprojekte, Entwässerung, Bahnübergang, Bahnsteigbau, Rangierwege",
  icons: {
    icon: "/favicon.ico",
  },
  metadataBase: new URL("https://gleisbau-mv.de"),
  robots: "index, follow", 
  openGraph: {
    title: "Gleisbau MV | Gleis- und Tiefbau für nachhaltige Infrastruktur",
    description:
    "Professioneller Gleis- und Weichenbau, Kranschienenbau, Tiefbau, Entwässerung und mehr – GBMV GmbH ist Ihr Spezialist für Infrastrukturprojekte.",
    images: "/assets/img/hero.jpg", 
    siteName: "Gleisbau MV",
    url: "https://www.schlosserei-grawe.de",
    type: "website",
  },
  twitter: {
    card: "summary_large_image", 
    title: "Gleisbau MV | Gleisbau mit Erfahrung und Präzision",
    description:
    "Von der Schienenauswechslung bis zum Bahnsteigbau – GBMV bietet Gleisbauarbeiten auf höchstem Niveau in MV.",
      images: "/assets/img/hero.jpg", 
  },
};

export const viewport: Viewport = {
  themeColor: "orange",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${barlow.variable} antialiased dark:bg-primary bg-white overflow-x-hidden`}
      >
          {children}
      </body>
    </html>
  );
}
