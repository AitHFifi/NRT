"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Compass, Radio, MapPin, Clock, ArrowUpRight, Plane } from "lucide-react";

const AircraftRadarRange = ({ aircraft, lang }) => {
  const [selectedDest, setSelectedDest] = useState(
    aircraft.rangeRadar?.destinations?.[0] || null
  );

  const radiusPct = aircraft.rangeRadar?.reachRadiusPercent || 50;

  return (
    <div className="relative w-full h-full flex flex-col justify-between overflow-hidden rounded-2xl bg-[#0a0f16] border border-white/10 select-none p-4 sm:p-6">
      {/* Radar Header */}
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-white/10 pb-4 z-10">
        <div>
          <div className="flex items-center gap-2">
            <Radio size={16} className="text-[#D4AF37] animate-pulse" />
            <h4 className="text-sm font-bold text-white uppercase tracking-wider">
              {lang === "en" ? "Flight Range & Tactical Radar" : "Rayon d'Action & Radar Tactique"}
            </h4>
          </div>
          <p className="text-xs text-white/60 mt-0.5">
            {lang === "en"
              ? `Direct autonomy from Libreville (LBV): ${aircraft.maxRange}`
              : `Autonomie sans escale au départ de Libreville (LBV) : ${aircraft.maxRange}`}
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-[10px] font-mono uppercase tracking-widest text-[#D4AF37] bg-[#D4AF37]/10 px-3 py-1 rounded-full border border-[#D4AF37]/30">
            Hub LBV (0.4586° N, 9.4123° E)
          </span>
        </div>
      </div>

      {/* Radar Display Canvas */}
      <div className="relative flex-1 min-h-[280px] sm:min-h-[330px] my-3 flex items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-[#060a10] to-[#0b121c] border border-white/5">
        {/* Background Grid Lines & Crosshairs */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-full h-[1px] bg-white/10" />
          <div className="h-full w-[1px] bg-white/10 absolute" />
        </div>

        {/* Concentric Range Rings */}
        <div className="absolute w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-white/10 flex items-center justify-center pointer-events-none">
          <span className="text-[8px] font-mono text-white/30 -translate-y-12">500 km</span>
        </div>
        <div className="absolute w-44 h-44 sm:w-52 sm:h-52 rounded-full border border-white/10 flex items-center justify-center pointer-events-none">
          <span className="text-[8px] font-mono text-white/30 -translate-y-22 sm:-translate-y-26">1,000 km</span>
        </div>
        <div className="absolute w-64 h-64 sm:w-76 sm:h-76 rounded-full border border-white/10 flex items-center justify-center pointer-events-none">
          <span className="text-[8px] font-mono text-white/30 -translate-y-32 sm:-translate-y-38">2,000 km</span>
        </div>
        <div className="absolute w-84 h-84 sm:w-96 sm:h-96 rounded-full border border-white/5 flex items-center justify-center pointer-events-none">
          <span className="text-[8px] font-mono text-white/20 -translate-y-42 sm:-translate-y-48">3,500 km</span>
        </div>

        {/* Dynamic Aircraft Range Radius Overlay */}
        <motion.div
          key={`range-${aircraft.id}`}
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          style={{ width: `${radiusPct * 3.5}px`, height: `${radiusPct * 3.5}px` }}
          className="absolute rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.25)] flex items-center justify-center pointer-events-none"
        >
          <div className="absolute inset-0 rounded-full animate-ping opacity-20 bg-[#D4AF37]" />
        </motion.div>

        {/* Radar Rotating Sweep Line */}
        <div className="absolute w-full h-full flex items-center justify-center pointer-events-none overflow-hidden rounded-full">
          <div
            className="w-full h-full rounded-full animate-spin"
            style={{
              animationDuration: "8s",
              background:
                "conic-gradient(from 0deg, transparent 0deg, transparent 315deg, rgba(212,175,55,0.25) 360deg)",
            }}
          />
        </div>

        {/* Center Point: Libreville Léon Mba Airport (LBV) */}
        <div className="relative z-20 flex flex-col items-center">
          <div className="w-6 h-6 rounded-full bg-[#D4AF37] text-black flex items-center justify-center font-mono font-bold text-[10px] shadow-[0_0_15px_#D4AF37]">
            LBV
          </div>
          <span className="text-[9px] font-mono text-[#D4AF37] font-bold mt-1 bg-black/80 px-1.5 py-0.5 rounded border border-[#D4AF37]/40">
            Libreville (Hub)
          </span>
        </div>

        {/* Floating Destination Nodes */}
        {aircraft.rangeRadar?.destinations?.slice(0, 5).map((dest, i) => {
          // Pre-computed visual angles for radar positioning
          const angles = [45, 135, 220, 310, 80];
          const angle = angles[i % angles.length];
          const distOffset = 40 + i * 22;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * distOffset;
          const y = Math.sin(rad) * distOffset;

          const isSelected = selectedDest?.name === dest.name;

          return (
            <button
              key={dest.name}
              onClick={() => setSelectedDest(dest)}
              style={{ transform: `translate(${x}px, ${y}px)` }}
              className={`absolute z-30 flex items-center gap-1.5 p-1 rounded-full cursor-pointer transition-transform hover:scale-110 ${
                isSelected
                  ? "bg-[#D4AF37] text-black ring-2 ring-white shadow-lg"
                  : "bg-black/80 text-white/80 border border-white/20 hover:border-[#D4AF37]"
              }`}
            >
              <MapPin size={11} className={isSelected ? "text-black" : "text-[#D4AF37]"} />
              <span className="text-[10px] font-mono font-semibold pr-1.5 whitespace-nowrap">
                {dest.name.split(" ")[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Destination Cards Carousel / Details */}
      <div className="space-y-2 z-10">
        <div className="flex items-center justify-between text-[11px] font-mono text-white/50">
          <span>{lang === "en" ? "Destinations within direct reach:" : "Destinations directes accessibles :"}</span>
          <span className="text-[#D4AF37] font-bold">
            {aircraft.rangeRadar?.destinations?.length || 0} {lang === "en" ? "Routes" : "Liaisons"}
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {aircraft.rangeRadar?.destinations?.slice(0, 3).map((dest) => (
            <div
              key={dest.name}
              onClick={() => setSelectedDest(dest)}
              className={`p-2.5 rounded-xl border transition-all cursor-pointer ${
                selectedDest?.name === dest.name
                  ? "bg-white/10 border-[#D4AF37] text-white"
                  : "bg-white/5 border-white/10 text-white/70 hover:bg-white/10"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold truncate">{dest.name}</span>
                <span className="text-[9px] font-mono text-[#D4AF37] uppercase">{dest.type}</span>
              </div>
              <div className="flex items-center gap-2 mt-1 text-[11px] text-white/60 font-mono">
                <span className="flex items-center gap-1">
                  <Clock size={11} className="text-[#D4AF37]" /> {dest.time}
                </span>
                <span>•</span>
                <span>{dest.distance}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AircraftRadarRange;
