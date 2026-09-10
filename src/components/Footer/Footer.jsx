"use client";

import React from "react";
import Image from "next/image";
import nrtLogo from "@/assets/images/logo.svg";
import { Phone, Mail, MapPin, ShieldCheck, Heart } from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";

const Footer = () => {
  const { t } = useLanguageCurrency();

  return (
    <footer className="relative w-full bg-[#05080c] border-t border-white/10 text-white pt-16 pb-12 px-6 sm:px-12 lg:px-20 z-30">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12">
          {/* Col 1: Brand & Mission */}
          <div className="md:col-span-4 space-y-4">
            <div className="w-[180px]">
              <Image
                src={nrtLogo}
                alt="NRT Gabon"
                width={180}
                height={50}
                className="brightness-0 invert object-contain"
              />
            </div>
            <p className="text-xs text-white/70 leading-relaxed max-w-sm">
              {t("footer.aboutText")}
            </p>
            <div className="flex items-center gap-2 text-xs text-[#D4AF37] font-medium">
              <ShieldCheck size={16} />
              <span>Compagnie Agréée ANAC Gabon</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
              {t("footer.quickLinks")}
            </h4>
            <ul className="space-y-2 text-xs text-white/70">
              <li>
                <a href="#booking" className="hover:text-white transition-colors">
                  {t("nav.scheduledFlights")}
                </a>
              </li>
              <li>
                <a href="#network" className="hover:text-white transition-colors">
                  {t("nav.routeMap")}
                </a>
              </li>
              <li>
                <a href="#fleet" className="hover:text-white transition-colors">
                  {t("nav.fleet")}
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Gabon Agency Locations */}
          <div className="md:col-span-5 space-y-3">
            <h4 className="text-xs uppercase font-bold tracking-wider text-[#D4AF37]">
              {t("footer.agencies")}
            </h4>
            <div className="space-y-3 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">
                    Libreville (Siège & Escale) :
                  </span>
                  <p>Aéroport Léon Mba &amp; Boulevard Triomphal</p>
                  <p className="font-mono text-white/80">+241 011 70 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">
                    Port-Gentil (Délégation Régionale) :
                  </span>
                  <p>Aéroport de Port-Gentil &amp; Quartier Carrefour Léon Mba</p>
                  <p className="font-mono text-white/80">+241 011 55 00 00</p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Mail size={15} className="text-[#D4AF37] shrink-0 mt-0.5" />
                <div>
                  <span className="font-semibold text-white">Email Opérations :</span>
                  <p className="font-mono">contact@nrt-gabon.ga</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright & certification bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/50">
          <div>
            © {new Date().getFullYear()} NRT (Nationale Régionale de Transport). {t("footer.rights")}
          </div>
          <div className="flex items-center gap-1">
            <span>Fièrement au service des 9 provinces du Gabon</span>
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#009b4d] ml-1" />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#fcd116]" />
            <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#3a75c4]" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
