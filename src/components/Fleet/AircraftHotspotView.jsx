"use client";
/* eslint-disable @next/next/no-img-element */

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Compass, Sparkles, Eye, Info, ShieldCheck, Zap } from "lucide-react";

const AircraftHotspotView = ({ aircraft, lang }) => {
  const [viewType, setViewType] = useState("exterior"); // "exterior" | "interior"
  const [selectedHotspot, setSelectedHotspot] = useState(
    aircraft.hotspots && aircraft.hotspots.length > 0 ? aircraft.hotspots[0] : null
  );

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0a0f16] border border-white/10 select-none">
      {/* Top Bar: View Mode Switcher (Exterior vs Real Cabin Photo) & Aircraft Registration */}
      <div className="flex items-center justify-between p-4 z-20 bg-gradient-to-b from-black/80 via-black/40 to-transparent">
        <div className="flex items-center gap-2">
          <div className="flex items-center bg-black/60 backdrop-blur-md p-1 rounded-xl border border-white/10">
            <button
              onClick={() => setViewType("exterior")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewType === "exterior"
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Eye size={13} />
              <span>{lang === "en" ? "Exterior" : "Extérieur"}</span>
            </button>
            <button
              onClick={() => setViewType("interior")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                viewType === "interior"
                  ? "bg-white text-black shadow-md"
                  : "text-white/60 hover:text-white"
              }`}
            >
              <Sparkles size={13} />
              <span>{lang === "en" ? "Cabin Interior" : "Intérieur Cabine"}</span>
            </button>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-2">
          <span className="font-mono text-[11px] text-white/50 tracking-wider">
            ICAO: <strong className="text-white">{aircraft.icaoCode}</strong>
          </span>
          <span className="text-white/20">•</span>
          <span className="font-mono text-[11px] px-2 py-0.5 rounded bg-white/10 text-[#D4AF37] border border-[#D4AF37]/30">
            {aircraft.registrationSample}
          </span>
        </div>
      </div>

      {/* Main Visual Stage */}
      <div className="relative flex-1 min-h-[320px] sm:min-h-[380px] flex items-center justify-center overflow-hidden">
        <AnimatePresence mode="wait">
          {viewType === "exterior" ? (
            <motion.div
              key={`ext-${aircraft.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center p-2"
            >
              {/* Background Aeronautical Grid & Glow */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
                  backgroundSize: "24px 24px",
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-transparent opacity-90 pointer-events-none" />

              {/* Aircraft Hero Image */}
              <img
                src={aircraft.exteriorImage}
                alt={aircraft.model}
                className="w-full h-full object-cover object-center rounded-xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
              />

              {/* Subtle Dark Vignette & Atmospheric Tarmac Shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-black/20 to-transparent pointer-events-none" />

              {/* Pulsing Interactive Hotspots */}
              {aircraft.hotspots?.map((hotspot) => {
                const isSelected = selectedHotspot?.id === hotspot.id;
                return (
                  <div
                    key={hotspot.id}
                    style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30"
                  >
                    <button
                      onClick={() => setSelectedHotspot(hotspot)}
                      onMouseEnter={() => setSelectedHotspot(hotspot)}
                      className="group relative flex items-center justify-center cursor-pointer p-2"
                      aria-label={lang === "en" ? hotspot.labelEn : hotspot.label}
                    >
                      {/* Outer Ripple Pulse */}
                      <span
                        className={`absolute w-7 h-7 rounded-full animate-ping opacity-60 transition-colors ${
                          isSelected ? "bg-[#D4AF37]" : "bg-white/40 group-hover:bg-[#D4AF37]"
                        }`}
                      />
                      {/* Secondary Ring */}
                      <span
                        className={`relative w-5 h-5 rounded-full flex items-center justify-center border transition-all duration-300 ${
                          isSelected
                            ? "bg-[#D4AF37] border-white scale-125 shadow-[0_0_15px_#D4AF37]"
                            : "bg-black/70 border-white/80 group-hover:scale-110 group-hover:border-[#D4AF37]"
                        }`}
                      >
                        <span
                          className={`w-2 h-2 rounded-full ${
                            isSelected ? "bg-black" : "bg-white group-hover:bg-[#D4AF37]"
                          }`}
                        />
                      </span>

                      {/* Hotspot Floating Label Pill */}
                      <span
                        className={`absolute left-7 top-1/2 -translate-y-1/2 whitespace-nowrap text-[10px] font-mono font-bold tracking-wider px-2 py-0.5 rounded-full border backdrop-blur-md transition-all duration-200 pointer-events-none ${
                          isSelected
                            ? "opacity-100 bg-black/90 text-[#D4AF37] border-[#D4AF37]/50 shadow-lg scale-100"
                            : "opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 bg-black/80 text-white/90 border-white/20"
                        }`}
                      >
                        {lang === "en" ? hotspot.labelEn : hotspot.label}
                      </span>
                    </button>
                  </div>
                );
              })}
            </motion.div>
          ) : (
            <motion.div
              key={`int-${aircraft.id}`}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative w-full h-full flex items-center justify-center p-2"
            >
              <img
                src={aircraft.interiorImage}
                alt={`${aircraft.model} cabin interior`}
                className="w-full h-full object-cover object-center rounded-xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f16] via-transparent to-black/30 pointer-events-none" />

              {/* Interior Overlay Highlights */}
              <div className="absolute top-4 left-4 z-20">
                <span className="inline-flex items-center gap-1.5 bg-black/70 backdrop-blur-md border border-white/20 text-white text-[11px] font-medium px-3 py-1 rounded-full">
                  <Sparkles size={12} className="text-[#D4AF37]" />
                  {aircraft.seatMapConfig.layoutType} • {aircraft.seatMapConfig.totalSeats}{" "}
                  {lang === "en" ? "Passengers" : "Passagers"}
                </span>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Bottom Telemetry HUD Card (shows selected hotspot or cabin specs) */}
      <div className="p-4 sm:p-5 z-20 bg-[#0d141e]/95 backdrop-blur-md border-t border-white/10 transition-all">
        {viewType === "exterior" && selectedHotspot ? (
          <div className="space-y-1.5">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] flex items-center gap-1">
                <Zap size={11} />
                {lang === "en" ? selectedHotspot.labelEn : selectedHotspot.label}
              </span>
              <span className="text-[10px] text-white/40 font-mono">
                {lang === "en" ? "Telemetry Active" : "Télémétrie Active"}
              </span>
            </div>
            <h5 className="text-sm font-bold text-white leading-tight">
              {lang === "en" ? selectedHotspot.titleEn : selectedHotspot.title}
            </h5>
            <p className="text-xs text-white/70 leading-relaxed">
              {lang === "en" ? selectedHotspot.detailEn : selectedHotspot.detail}
            </p>
          </div>
        ) : (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] flex items-center gap-1">
                <ShieldCheck size={11} />
                {lang === "en" ? "Cabin Specifications" : "Spécifications Cabine"}
              </span>
              <span className="text-[10px] text-white/40 font-mono">
                {aircraft.seatMapConfig.pitch}
              </span>
            </div>
            <div className="flex flex-wrap gap-1.5 pt-1">
              {(lang === "en"
                ? aircraft.seatMapConfig.amenitiesEn
                : aircraft.seatMapConfig.amenities
              ).map((amenity, idx) => (
                <span
                  key={idx}
                  className="text-[11px] bg-white/5 border border-white/10 text-white/80 px-2.5 py-1 rounded-lg"
                >
                  ✓ {amenity}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AircraftHotspotView;
