"use client";

import React from "react";
import { Building2, Shield, Fuel, Pick, Users, CheckCircle2, ArrowRight } from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";

const CorporateSolutions = () => {
  const { t } = useLanguageCurrency();

  const partners = [
    { name: "Pétrole & Offshore (Port-Gentil)", desc: "Navettes dédiées pour équipes de forage et bases de Gamba & Rabi" },
    { name: "Mines & Métallurgie (Moanda)", desc: "Liaisons directes pour cadres, ingénieurs et techniciens Comilog/Eramet" },
    { name: "Missions Institutionnelles", desc: "Vols protocolaires pour délégations ministérielles et diplomatiques" },
    { name: "Éco-Tourisme & Réserves", desc: "Accès privilégié aux lodges exclusifs des parcs nationaux de Loango et d'Ivindo" }
  ];

  return (
    <section id="charter" className="relative w-full py-20 px-4 sm:px-8 lg:px-16 z-30">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="bg-gradient-to-br from-[#0c1520] via-[#091018] to-[#060b10] border border-white/15 rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white/85 text-[11px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full">
                <Building2 size={13} className="text-[#D4AF37]" />
                <span>{t("services.corporateBadge")}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white leading-tight drop-shadow-md">
                {t("services.corporateTitle")}
              </h2>

              <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
                {t("services.corporateDesc")}
              </p>

              {/* Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {partners.map((p) => (
                  <div
                    key={p.name}
                    className="bg-[#121c27] border border-white/10 rounded-xl p-4 space-y-1.5"
                  >
                    <div className="flex items-center gap-2 text-xs font-bold text-white">
                      <CheckCircle2 size={14} className="text-[#D4AF37] shrink-0" />
                      <span>{p.name}</span>
                    </div>
                    <p className="text-[11px] text-white/60 leading-normal pl-5">
                      {p.desc}
                    </p>
                  </div>
                ))}
              </div>

              {/* Call to action */}
              <div className="pt-3 flex flex-wrap items-center gap-4">
                <a
                  href="#booking"
                  className="bg-white text-black hover:bg-white/90 px-6 py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer inline-flex items-center gap-2 hover:scale-105 active:scale-95"
                >
                  <span>Demander un contrat d&apos;entreprise</span>
                  <ArrowRight size={14} />
                </a>
                <span className="text-xs text-white/50">
                  Devis personnalisé sous 2 heures
                </span>
              </div>
            </div>

            {/* Right Stat Box */}
            <div className="lg:col-span-5 bg-[#121d2a] border border-white/10 rounded-2xl p-6 sm:p-8 space-y-6">
              <h3 className="text-lg font-bold text-white border-b border-white/10 pb-4">
                Garanties Opérationnelles NRT
              </h3>

              <div className="space-y-4 text-xs text-white/80">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Shield size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Sécurité OACI & ANAC</h4>
                    <p className="text-white/60 text-[11px] mt-0.5">
                      Audits réguliers conformes aux exigences strictes des majors pétrolières.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Fuel size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Disponibilité Carburant Garanti</h4>
                    <p className="text-white/60 text-[11px] mt-0.5">
                      Accords exclusifs d&apos;avitaillement Jet A-1 à Libreville et Port-Gentil.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/10 border border-white/15 text-[#D4AF37] flex items-center justify-center shrink-0">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="font-bold text-white">Équipages Expérimentés Gabon</h4>
                    <p className="text-white/60 text-[11px] mt-0.5">
                      Commandants de bord cumulant plus de 10 000 heures de vol sur les pistes équatoriales.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CorporateSolutions;
