import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import FloatingButton from "@/components/FloatingButton";
import LenisProvider from "./providers/LenisProvider";
import { LanguageCurrencyProvider } from "./providers/LanguageCurrencyContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NRT Gabon | Nationale Régionale de Transport - Vols Domestiques & Affrètement",
  description: "Compagnie aérienne régionale du Gabon. Vols réguliers reliant Libreville, Port-Gentil, Franceville, Moanda, Oyem, Makokou et affrètements corporate pétrole & mines.",
  keywords: ["NRT Gabon", "Vols Gabon", "Libreville", "Port-Gentil", "Franceville", "Affrètement Gabon", "Avion Gabon", "Vol intérieur Gabon"],
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased text-white selection:bg-white/30`}
      >
        <LanguageCurrencyProvider>
          <LenisProvider>
            <Navbar />
            <main>{children}</main>
            <FloatingButton />
          </LenisProvider>
        </LanguageCurrencyProvider>
      </body>
    </html>
  );
}
