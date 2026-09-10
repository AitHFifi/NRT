"use client";

import React from "react";
import { HeartPulse, PhoneCall, Plane, Package, Clock, ShieldCheck, Ambulance } from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";

const MedevacCargo = () => {
  const { t } = useLanguageCurrency();

  return (
    <section className="relative w-full py-16 px-4 sm:px-8 lg:px-16 z-30">
      <div className="max-w-6xl mx-auto">
        <div className="bg-gradient-to-r from-[#180a0a] via-[#10151c] to-[#0a1219] border border-red-900/30 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Medevac Content */}
            <div className="lg:col-span-8 space-y-6">
              <div className="inline-flex items-center gap-2 bg-red-500/15 border border-red-500/30 text-red-400 text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full">
                <HeartPulse size={13} className="animate-pulse text-red-400" />
                <span>{t("services.medevacBadge")}</span>
              </div>

              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white leading-tight">
                {t("services.medevacTitle")}
              </h2>

              <p className="text-xs sm:text-sm text-white/70 leading-relaxed max-w-2xl">
                {t("services.medevacDesc")}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-[#141b24] border border-white/10 rounded-xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Clock size={14} className="text-[#D4AF37]" />
                    <span>Décollage en &lt; 90 min</span>
                  </div>
                  <p className="text-[11px] text-white/60">
                    Aéronef d&apos;astreinte 24h/24 basé à Libreville Léon Mba.
                  </p>
                </div>

                <div className="bg-[#141b24] border border-white/10 rounded-xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Ambulance size={14} className="text-red-400" />
                    <span>Équipe Médicale Spécialisée</span>
                  </div>
                  <p className="text-[11px] text-white/60">
                    Médecins réanimateurs et infirmiers anesthésistes formés au vol.
                  </p>
                </div>

                <div className="bg-[#141b24] border border-white/10 rounded-xl p-4 space-y-1">
                  <div className="flex items-center gap-2 text-xs font-bold text-white">
                    <Package size={14} className="text-[#D4AF37]" />
                    <span>Fret Urgent &amp; Pièces AOG</span>
                  </div>
                  <p className="text-[11px] text-white/60">
                    Livraison d&apos;équipements industriels critiques et médicaments.
                  </p>
                </div>
              </div>
            </div>

            {/* Right Hotline Card */}
            <div className="lg:col-span-4 bg-red-950/20 border border-red-500/30 rounded-2xl p-6 sm:p-7 text-center space-y-4">
              <div className="w-14 h-14 rounded-full bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto">
                <PhoneCall size={26} className="animate-bounce" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-wider text-red-300">
                {t("services.callEmergency")}
              </h3>
              <div className="text-2xl font-bold font-mono text-white tracking-wide">
                +241 011 70 00 00
              </div>
              <p className="text-[11px] text-white/60">
                Liaison directe avec l&apos;officier des opérations aériennes NRT.
              </p>
              <a
                href="tel:+241011700000"
                className="w-full inline-flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-colors shadow-lg shadow-red-950/50"
              >
                <span>Appel d&apos;Urgence Immédiat</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedevacCargo;
