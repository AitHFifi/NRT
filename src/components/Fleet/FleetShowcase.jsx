"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fleet } from "@/data/fleet";
import {
  Plane,
  Users,
  Gauge,
  Compass,
  ShieldCheck,
  CheckCircle2,
  Eye,
  Armchair,
  Radio,
  Fuel,
  Mountain,
  ChevronRight,
  Send,
  MessageCircle,
} from "lucide-react";
import { useLanguageCurrency } from "@/app/providers/LanguageCurrencyContext";
import AircraftHotspotView from "./AircraftHotspotView";
import AircraftSeatMap from "./AircraftSeatMap";
import AircraftRadarRange from "./AircraftRadarRange";
import CharterRequestModal from "@/components/Booking/CharterRequestModal";

const FleetShowcase = () => {
  const { t, lang } = useLanguageCurrency();
  const [selectedAircraft, setSelectedAircraft] = useState(fleet[0]);
  const [activeViewMode, setActiveViewMode] = useState("hotspots"); // "hotspots" | "seatmap" | "radar"
  const [isCharterModalOpen, setIsCharterModalOpen] = useState(false);

  // Maximum benchmark values for comparative gauge telemetry
  const MAX_SPEED = 850; // km/h
  const MAX_RANGE = 3500; // km

  const handleOpenCharter = () => {
    setIsCharterModalOpen(true);
  };

  return (
    <section id="fleet" className="relative w-full py-24 px-4 sm:px-8 lg:px-16 z-30">
      <div className="max-w-7xl mx-auto space-y-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/15 text-white/85 text-[11px] font-mono uppercase tracking-widest px-4 py-1.5 rounded-full">
            <Plane size={13} className="text-[#D4AF37]" />
            <span>{t("fleet.badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-md">
            {t("fleet.title")}
          </h2>
          <p className="text-xs sm:text-sm text-white/60 leading-relaxed">
            {t("fleet.subtitle")}
          </p>
        </div>

        {/* Aircraft Selector Tabs */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4">
          {fleet.map((aircraft) => {
            const isSelected = selectedAircraft.id === aircraft.id;
            return (
              <button
                key={aircraft.id}
                onClick={() => {
                  setSelectedAircraft(aircraft);
                }}
                className={`relative px-5 py-3.5 rounded-2xl text-xs font-bold transition-all cursor-pointer border ${
                  isSelected
                    ? "bg-white text-black border-white shadow-xl scale-[1.02]"
                    : "bg-[#0b1118]/80 border-white/10 text-white/70 hover:text-white hover:bg-white/10"
                }`}
              >
                <div className="flex items-center gap-2">
                  <Plane
                    size={14}
                    className={isSelected ? "text-black" : "text-[#D4AF37]"}
                  />
                  <span>{aircraft.model}</span>
                </div>
                <span className="block text-[10px] font-normal opacity-80 mt-1">
                  {lang === "en" ? aircraft.categoryEn : aircraft.category} •{" "}
                  <strong>
                    {aircraft.seats} {lang === "en" ? "Pax" : "Sièges"}
                  </strong>
                </span>

                {/* Animated active underline indicator */}
                {isSelected && (
                  <motion.div
                    layoutId="activeFleetTab"
                    className="absolute -bottom-1 left-4 right-4 h-0.5 bg-[#D4AF37] rounded-full"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Aircraft Multi-View Container */}
        <div className="bg-[#0b1118]/90 border border-white/15 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
            {/* Left Specs & Highlights (5 cols) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-6">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="inline-block bg-white/10 border border-white/15 text-[#D4AF37] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    {lang === "en" ? selectedAircraft.badgeEn : selectedAircraft.badge}
                  </span>
                  <span className="text-[10px] font-mono text-white/40 border border-white/10 px-2 py-0.5 rounded-full">
                    {selectedAircraft.registrationSample}
                  </span>
                </div>
                <h3 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  {selectedAircraft.model}
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-medium leading-relaxed">
                  {lang === "en" ? selectedAircraft.taglineEn : selectedAircraft.tagline}
                </p>
              </div>

              {/* Dynamic Telemetry Comparative Gauges */}
              <div className="space-y-3.5 py-4 border-y border-white/10">
                {/* Speed Gauge */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60 flex items-center gap-1.5">
                      <Gauge size={13} className="text-[#D4AF37]" />
                      <span>{t("fleet.speed")}</span>
                    </span>
                    <span className="font-mono font-bold text-white">
                      {selectedAircraft.cruiseSpeed}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(selectedAircraft.cruiseSpeedNum / MAX_SPEED) * 100}%`,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      className="h-full bg-gradient-to-r from-[#D4AF37]/60 to-[#D4AF37] rounded-full"
                    />
                  </div>
                </div>

                {/* Range Gauge */}
                <div className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-white/60 flex items-center gap-1.5">
                      <Compass size={13} className="text-[#D4AF37]" />
                      <span>{t("fleet.range")}</span>
                    </span>
                    <span className="font-mono font-bold text-white">
                      {selectedAircraft.maxRange}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{
                        width: `${(selectedAircraft.maxRangeNum / MAX_RANGE) * 100}%`,
                      }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
                      className="h-full bg-gradient-to-r from-emerald-500/60 to-emerald-400 rounded-full"
                    />
                  </div>
                </div>

                {/* Capacity & Ceiling Indicator */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                    <span className="text-[10px] text-white/40 uppercase block font-mono">
                      {t("fleet.seats")}
                    </span>
                    <div className="flex items-center gap-1.5 text-base font-bold font-mono text-white mt-0.5">
                      <Users size={14} className="text-[#D4AF37]" />
                      <span>{selectedAircraft.seats}</span>
                    </div>
                  </div>
                  <div className="bg-white/5 border border-white/10 rounded-xl p-2.5">
                    <span className="text-[10px] text-white/40 uppercase block font-mono">
                      {t("fleet.ceiling")}
                    </span>
                    <div className="text-xs font-bold font-mono text-[#D4AF37] mt-1">
                      {selectedAircraft.ceiling}
                    </div>
                  </div>
                </div>

                {/* Operational Terrain Capability */}
                <div className="flex items-center gap-2 text-xs bg-white/5 border border-white/10 rounded-xl p-2.5 text-white/80">
                  <Mountain size={14} className="text-[#D4AF37] shrink-0" />
                  <div>
                    <span className="text-[10px] text-white/40 uppercase block font-mono">
                      {lang === "en" ? "Runway Capability" : "Aptitude Piste & Terrain"}
                    </span>
                    <span className="text-xs font-semibold">
                      {lang === "en"
                        ? selectedAircraft.runwayCapabilityEn
                        : selectedAircraft.runwayCapability}
                    </span>
                  </div>
                </div>
              </div>

              {/* Cabin Amenities List */}
              <div className="space-y-2">
                <span className="text-xs font-semibold text-white/70 uppercase">
                  {lang === "en"
                    ? "Key Features & Comfort :"
                    : "Caractéristiques & Aménagements :"}
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-xs text-white/80">
                  {(lang === "en"
                    ? selectedAircraft.cabinFeaturesEn
                    : selectedAircraft.cabinFeatures
                  ).map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-1.5">
                      <CheckCircle2 size={13} className="text-[#D4AF37] shrink-0" />
                      <span className="truncate">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Typical Routes & Action Buttons */}
              <div className="pt-3 space-y-3">
                <div className="text-xs text-white/60">
                  <span className="font-semibold text-white/90">Missions types :</span>{" "}
                  {selectedAircraft.typicalRoutes}
                </div>
                <div className="flex flex-col sm:flex-row items-center gap-3">
                  <button
                    onClick={handleOpenCharter}
                    className="w-full sm:w-auto flex-1 flex items-center justify-center gap-2 bg-white text-black hover:bg-white/90 px-6 py-3 rounded-xl text-xs font-bold transition-all cursor-pointer shadow-lg hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <Send size={13} />
                    <span>Affréter cet appareil</span>
                  </button>
                  <a
                    href="https://wa.me/241011700000"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#25D366]/20 hover:bg-[#25D366]/30 border border-[#25D366]/40 text-[#25D366] px-4 py-3 rounded-xl text-xs font-semibold transition-colors"
                  >
                    <MessageCircle size={14} />
                    <span>WhatsApp VIP</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Visual Canvas: Multi-View Interactive Explorer (7 cols) */}
            <div className="lg:col-span-7 flex flex-col space-y-3">
              {/* View Switcher Pills */}
              <div className="flex items-center justify-between bg-black/40 border border-white/10 p-1.5 rounded-2xl">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => setActiveViewMode("hotspots")}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeViewMode === "hotspots"
                        ? "bg-white text-black shadow-md"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Eye size={13} />
                    <span>{lang === "en" ? "Exterior & Hotspots" : "Extérieur & Hotspots"}</span>
                  </button>
                  <button
                    onClick={() => setActiveViewMode("seatmap")}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeViewMode === "seatmap"
                        ? "bg-white text-black shadow-md"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Armchair size={13} />
                    <span>{lang === "en" ? "Cabin Plan" : "Plan de Cabine"}</span>
                  </button>
                  <button
                    onClick={() => setActiveViewMode("radar")}
                    className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                      activeViewMode === "radar"
                        ? "bg-white text-black shadow-md"
                        : "text-white/70 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <Radio size={13} />
                    <span>{lang === "en" ? "Radar Range" : "Rayon d'action"}</span>
                  </button>
                </div>

                <span className="hidden sm:inline-block text-[10px] font-mono text-white/40 pr-2">
                  NRT AVIONICS 3.0
                </span>
              </div>

              {/* Active View Container with AnimatePresence */}
              <div className="flex-1 min-h-[440px] sm:min-h-[480px]">
                <AnimatePresence mode="wait">
                  {activeViewMode === "hotspots" && (
                    <motion.div
                      key={`view-hotspots-${selectedAircraft.id}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="h-full"
                    >
                      <AircraftHotspotView aircraft={selectedAircraft} lang={lang} />
                    </motion.div>
                  )}

                  {activeViewMode === "seatmap" && (
                    <motion.div
                      key={`view-seatmap-${selectedAircraft.id}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="h-full"
                    >
                      <AircraftSeatMap aircraft={selectedAircraft} lang={lang} />
                    </motion.div>
                  )}

                  {activeViewMode === "radar" && (
                    <motion.div
                      key={`view-radar-${selectedAircraft.id}`}
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.25 }}
                      className="h-full"
                    >
                      <AircraftRadarRange aircraft={selectedAircraft} lang={lang} />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Bottom Trust & Aeronautical Certification Strip */}
          <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-[11px] text-white/50 font-mono">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="flex items-center gap-1.5 text-white/80">
                <ShieldCheck size={14} className="text-[#D4AF37]" />
                <span>ANAC Gabon Certifié CTA</span>
              </span>
              <span className="flex items-center gap-1.5 text-white/80">
                <ShieldCheck size={14} className="text-[#D4AF37]" />
                <span>Normes OACI Annexe 6</span>
              </span>
              <span className="flex items-center gap-1.5 text-white/80">
                <Fuel size={14} className="text-[#D4AF37]" />
                <span>{selectedAircraft.fuelEfficiency}</span>
              </span>
            </div>
            <div className="text-white/40">
              Maintenance Part-145 • Suivi technique navigabilité continue (CAMO)
            </div>
          </div>
        </div>
      </div>

      {/* Interactive Charter Request Modal */}
      <CharterRequestModal
        isOpen={isCharterModalOpen}
        onClose={() => setIsCharterModalOpen(false)}
        initialData={{
          aircraftType: selectedAircraft.charterTypeKey || "turboprop",
          origin: "Libreville (LBV)",
          destination:
            selectedAircraft.id === "atr-72"
              ? "Port-Gentil (POG)"
              : selectedAircraft.id === "erj-145"
              ? "Port-Gentil (POG)"
              : "Rabi Kounga",
          passengers: selectedAircraft.seats.toString(),
        }}
      />
    </section>
  );
};

export default FleetShowcase;

