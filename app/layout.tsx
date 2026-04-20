import type { Metadata } from "next";
import { Comfortaa } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Oropra — CRM no-code pour concessions automobiles",
  description:
    "Oropra simplifie le quotidien des équipes en concession : clients, opportunités, stock, communications réunis dans un outil simple, adaptable et accompagné.",
  openGraph: {
    title: "Oropra — CRM no-code pour concessions automobiles",
    description:
      "Oropra simplifie le quotidien des équipes en concession : clients, opportunités, stock, communications réunis dans un outil simple, adaptable et accompagné.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={comfortaa.className}>
      <head>
        <link rel="icon" href="/favicon-oropra.png" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
